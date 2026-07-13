-- 党组织关系转移：子表增加党内职务字段，对应 PARTY_POST 字典。
-- 如果目标库已经通过低代码平台添加过该字段，则不要重复执行。
alter table DYN_POT_MEMBER add USER_POST VARCHAR2(255);

