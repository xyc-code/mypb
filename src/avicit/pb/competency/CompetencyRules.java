package avicit.pb.competency;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.*;

/** Fixed v1 scoring shared by page APIs and all exports. */
public final class CompetencyRules {
    public static final String VERSION = "NINE_V1";
    public static final String[] FIELDS = {"THEORY_SCORE", "BUSINESS_SCORE", "INTERVIEW_SCORE", "SATISFACTION_SCORE", "ACTIVITY_SCORE"};
    public static final String[] LABELS = {"理论考试", "业务考核", "面试成绩", "满意度测评", "特色活动"};
    public static final String[] DIMENSIONS = {"懂政策", "懂党建", "懂理论", "会思想工作", "会解决实际问题", "会带队伍", "政治过硬", "本领过硬", "作风过硬"};
    public static final int[] SOURCES = {0,1,0,2,1,4,3,1,3};
    private static final String[][] ACTIONS = {
        {"梳理近期重点政策，将政策要求与支部具体工作对应。", "结合实际案例开展政策运用交流。", "对照后续测评检验学习成效。"},
        {"梳理组织生活、党员教育等常用党务流程。", "针对薄弱业务开展案例演练与经验交流。", "用实际工作记录检查改进效果。"},
        {"围绕重点理论内容开展系统学习。", "把理论学习与支部实际工作结合研讨。", "总结学习重点并持续检验运用效果。"},
        {"开展谈心谈话，了解党员思想动态，记录重点诉求。", "在改革、考核、评优等节点提前沟通疏导。", "参加思想工作方法交流，结合实际案例复盘成效。"},
        {"收集支部工作中的实际问题，分析问题表现与原因。", "开展案例复盘，形成可执行的解决办法。", "回访已处理问题，跟踪措施实际成效。"},
        {"围绕重点工作明确团队任务和分工。", "定期沟通进展，及时协调成员遇到的困难。", "结合特色活动复盘组织过程，积累带队经验。"},
        {"结合岗位职责学习政治要求。", "对照党员群众反馈梳理履职改进方向。", "在日常工作和后续测评中检验改进成效。"},
        {"对照业务考核补强薄弱知识和实务技能。", "结合重点任务开展实践锻炼。", "与业务骨干交流方法，检验学习成果。"},
        {"结合满意度反馈识别工作作风改进点。", "加强联系服务，及时回应党员群众诉求。", "回访改进效果，持续提升工作实效。"}
    };
    private CompetencyRules() { }
    public static String suggestion(int index) { return String.join(" ", ACTIONS[index]); }
    public static void require(boolean ok, String message) { if (!ok) throw new IllegalArgumentException(message); }
    public static String text(Object value) { return value == null ? "" : value.toString().trim(); }
    public static BigDecimal score(Object value) {
        if (text(value).isEmpty()) return null;
        try {
            BigDecimal n = new BigDecimal(text(value));
            require(n.compareTo(BigDecimal.ZERO) >= 0 && n.compareTo(new BigDecimal("100")) <= 0, "成绩须为0—100分");
            require(n.stripTrailingZeros().scale() <= 2, "成绩最多保留两位小数");
            return n.setScale(2, RoundingMode.HALF_UP);
        } catch (NumberFormatException ex) { throw new IllegalArgumentException("成绩须为数字"); }
    }
    public static BigDecimal mean(List<BigDecimal> values) {
        if (values.isEmpty()) return null;
        BigDecimal sum = BigDecimal.ZERO;
        for (BigDecimal n : values) sum = sum.add(n);
        return sum.divide(new BigDecimal(values.size()), 2, RoundingMode.HALF_UP);
    }
    public static String level(BigDecimal n) { return n.compareTo(new BigDecimal("95")) >= 0 ? "胜任" : n.compareTo(new BigDecimal("85")) >= 0 ? "基本胜任" : "不胜任"; }
    public static String format(Object n) { return n == null ? "—" : new BigDecimal(n.toString()).setScale(2, RoundingMode.HALF_UP).toPlainString(); }
    public static Map<String, Object> result(Map<String, Object> row) {
        BigDecimal[] s = new BigDecimal[5]; boolean complete = true;
        for (int i=0;i<5;i++) { s[i]=score(row.get(FIELDS[i])); complete &= s[i]!=null; }
        row.put("complete", complete);
        row.put("total", null); row.put("level", "待录齐"); row.put("dimensions", Collections.emptyList()); row.put("blocks", Collections.emptyList());
        row.put("weakIndex", null); row.put("advantages", Collections.emptyList()); row.put("suggestions", Collections.emptyList());
        if (!complete) return row;
        BigDecimal total=s[0].multiply(new BigDecimal("0.3")).add(s[1].multiply(new BigDecimal("0.4"))).add(s[2].multiply(new BigDecimal("0.3"))).setScale(2,RoundingMode.HALF_UP);
        List<BigDecimal> dims=new ArrayList<BigDecimal>();
        for (int source:SOURCES) dims.add(s[source]);
        List<BigDecimal> blocks=new ArrayList<BigDecimal>();
        for (int i=0;i<3;i++) blocks.add(mean(dims.subList(i*3,i*3+3)));
        List<Integer> order=new ArrayList<Integer>(); for(int i=0;i<9;i++) order.add(i);
        Collections.sort(order,(a,b)->dims.get(b).compareTo(dims.get(a)));
        int weak=0; for(int i=1;i<9;i++) if(dims.get(i).compareTo(dims.get(weak))<0) weak=i;
        row.put("total",total); row.put("level",level(total)); row.put("dimensions",dims); row.put("blocks",blocks);
        row.put("weakIndex",weak); row.put("advantages",new ArrayList<Integer>(order.subList(0,3))); row.put("suggestions",Arrays.asList(ACTIONS[weak]));
        return row;
    }
    @SuppressWarnings("unchecked")
    public static Map<String,Object> summary(List<Map<String,Object>> rows) {
        Map<String,Object> out=new LinkedHashMap<String,Object>(); Set<String> users=new HashSet<String>();
        List<Map<String,Object>> complete=new ArrayList<Map<String,Object>>(); List<BigDecimal> totals=new ArrayList<BigDecimal>();
        int[] counts=new int[3];
        for(Map<String,Object> row:rows) {
            users.add(text(row.get("USER_ID")));
            if(Boolean.TRUE.equals(row.get("complete"))) { complete.add(row); BigDecimal n=(BigDecimal)row.get("total"); totals.add(n); counts[n.compareTo(new BigDecimal("95"))>=0?0:n.compareTo(new BigDecimal("85"))>=0?1:2]++; }
        }
        out.put("people",users.size()); out.put("records",rows.size()); out.put("completed",complete.size()); out.put("counts",counts); out.put("mean",mean(totals));
        out.put("min",totals.isEmpty()?null:Collections.min(totals)); out.put("max",totals.isEmpty()?null:Collections.max(totals));
        List<BigDecimal> means=new ArrayList<BigDecimal>(),mins=new ArrayList<BigDecimal>(),maxs=new ArrayList<BigDecimal>();
        for(int i=0;i<9&&!complete.isEmpty();i++) { List<BigDecimal> values=new ArrayList<BigDecimal>(); for(Map<String,Object> row:complete) values.add(((List<BigDecimal>)row.get("dimensions")).get(i)); means.add(mean(values));mins.add(Collections.min(values));maxs.add(Collections.max(values)); }
        out.put("dimensions",means);out.put("minDimensions",mins);out.put("maxDimensions",maxs);
        List<BigDecimal> bs=new ArrayList<BigDecimal>();
        // Average raw dimensions across records, rounding once at the board level.
        for(int i=0;i<3&&!complete.isEmpty();i++){List<BigDecimal> values=new ArrayList<BigDecimal>();for(Map<String,Object> row:complete)values.addAll(((List<BigDecimal>)row.get("dimensions")).subList(i*3,i*3+3));bs.add(mean(values));}
        out.put("blocks",bs);
        List<Integer> weak=new ArrayList<Integer>();for(int i=0;i<means.size();i++)if(means.get(i).compareTo(new BigDecimal("90"))<0)weak.add(i);
        Collections.sort(weak,(a,b)->means.get(a).compareTo(means.get(b)));out.put("weakDimensions",new ArrayList<Integer>(weak.subList(0,Math.min(3,weak.size()))));
        return out;
    }
}
