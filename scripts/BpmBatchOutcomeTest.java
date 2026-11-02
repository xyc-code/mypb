import avicit.pb.bpmbatchcomplete.service.BpmBatchCompleteService;
import java.lang.reflect.Method;
import java.nio.charset.StandardCharsets;

/** Regression for choosing the direct end transition from task4. */
public class BpmBatchOutcomeTest {
    public static void main(String[] args) throws Exception {
        Method parse = BpmBatchCompleteService.class.getDeclaredMethod("parseTask4Outcome", byte[].class);
        parse.setAccessible(true);
        BpmBatchCompleteService service = new BpmBatchCompleteService();
        verify(parse, service, "<transition name='notify' to='task5'/><transition name='finish' to='done'/>", "finish");
        verify(parse, service, "<transition name='to end1' to='task5'/><transition name='approved' to='done'/>", "approved");
        verify(parse, service, "<transition name='notify' to='task5'/>", "notify");
        verify(parse, service, "<transition name='a' to='done'/><transition name='b' to='done'/>", "");
        verify(parse, service, "<transition name='a' to='task5'/><transition name='b' to='task6'/>", "");
        verify(parse, service, "", "");
    }

    private static void verify(Method parse, Object service, String transitions, String expected) throws Exception {
        String xml = "<process><task name='task4'>" + transitions
                + "</task><task name='task5'/><task name='task6'/><end name='done'/></process>";
        String actual = (String) parse.invoke(service, (Object) xml.getBytes(StandardCharsets.UTF_8));
        if (!expected.equals(actual)) {
            throw new AssertionError("Expected '" + expected + "', got '" + actual + "': " + transitions);
        }
        System.out.println("PASS direct-end outcome: " + transitions);
    }
}
