(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{338:function(s,t,a){"use strict";a.r(t);var n=a(8),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"一、增删改查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、增删改查"}},[s._v("#")]),s._v(" 一、增删改查")]),s._v(" "),t("h3",{attrs:{id:"_1、数据库的四种操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、数据库的四种操作"}},[s._v("#")]),s._v(" 1、数据库的四种操作")]),s._v(" "),t("ol",[t("li",[s._v("insert 增")]),s._v(" "),t("li",[s._v("delete 删")]),s._v(" "),t("li",[s._v("update 改")]),s._v(" "),t("li",[s._v("select 查 不改变数据库")])]),s._v(" "),t("h3",{attrs:{id:"_2、查询sql的结构是"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、查询sql的结构是"}},[s._v("#")]),s._v(" 2、查询SQL的结构是")]),s._v(" "),t("p",[s._v("​\t\t"),t("strong",[s._v("SELECT... FROM... WHERE... GROUP BY... HAVING.... ORDER BY... LIMIT...")])]),s._v(" "),t("h3",{attrs:{id:"_3、写sql的顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、写sql的顺序"}},[s._v("#")]),s._v(" 3、写SQL的顺序")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("**FROM--\x3eWHERE--\x3eGROUP BY--\x3eSELECT--\x3eHAVIGN--\x3eORDER BY--\x3eLIMIT**\n")])])]),t("h3",{attrs:{id:"_4、from的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、from的作用"}},[s._v("#")]),s._v(" 4、FROM的作用")]),s._v(" "),t("p",[s._v("​\t\tFROM stu  将stu表的所有数据都获取过来")]),s._v(" "),t("p",[s._v("​\t\tJOIN 以后说")]),s._v(" "),t("h3",{attrs:{id:"_5、where的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、where的作用"}},[s._v("#")]),s._v(" 5、WHERE的作用")]),s._v(" "),t("p",[s._v("​\t\t对FROM 中获取的所有数据进行过滤 "),t("strong",[s._v("AND、OR、!=")]),s._v(" 符合的留下不符合的丢弃")]),s._v(" "),t("h3",{attrs:{id:"_6、group-by的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、group-by的作用"}},[s._v("#")]),s._v(" 6、GROUP BY的作用")]),s._v(" "),t("p",[s._v("​\t\tGROUP BY classId 按照classId进行分组")]),s._v(" "),t("p",[s._v("​\t\t分组后如果遇到SELECT那么输出的则是分组后每组的第一行数据")]),s._v(" "),t("p",[s._v("​\t\tGROUP BY还可以和聚集函数在一起")]),s._v(" "),t("p",[s._v("​\t"),t("strong",[s._v("聚集函数：")])]),s._v(" "),t("p",[s._v("​\t\tCOUNT(),SUM(),MAX(),MIN(),AVG(),GROUP_CONCAT()")]),s._v(" "),t("p",[s._v("​\t\tdistinct代表不重复可以放在聚集函数里去重，否则函数不会去重")]),s._v(" "),t("h3",{attrs:{id:"_7、创建数据库-schema"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、创建数据库-schema"}},[s._v("#")]),s._v(" 7、创建数据库(schema)")]),s._v(" "),t("p",[s._v("​")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" Student"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"_8、创建表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8、创建表"}},[s._v("#")]),s._v(" 8、创建表")]),s._v(" "),t("p",[s._v("​")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" stu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("class_id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("charset")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4\n")])])]),t("h3",{attrs:{id:"_9、插入数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9、插入数据"}},[s._v("#")]),s._v(" 9、插入数据")]),s._v(" "),t("p",[s._v("​")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" stu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("class_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'李四'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'王五'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'小明'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'小红'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'小华'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'千钧'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'一发'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'淡季'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'小明'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" stu "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" class_id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" stu "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" class_id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTINCT")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("class_id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" stu "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" class_id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("class_id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" stu "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" class_id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v("\n")])])]),t("h2",{attrs:{id:"二、join"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、join"}},[s._v("#")]),s._v(" 二、JOIN")]),s._v(" "),t("h3",{attrs:{id:"_1、join-表-on-过滤条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、join-表-on-过滤条件"}},[s._v("#")]),s._v(" 1、JOIN 表 ON 过滤条件")]),s._v(" "),t("p",[s._v("左表的每行数据都与右表每行数据按过滤条件匹配生成新表")]),s._v(" "),t("h3",{attrs:{id:"_2、left-join-表-on-过滤条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、left-join-表-on-过滤条件"}},[s._v("#")]),s._v(" 2、LEFT JOIN 表 ON 过滤条件")]),s._v(" "),t("p",[t("strong",[s._v("区别: ①LEFT JOIN 必须有ON")])]),s._v(" "),t("p",[s._v("​\t\t  "),t("strong",[s._v("②会检查左边表的数据是否都包含在新生成的表中如果包含那么与JOIN没区别")])]),s._v(" "),t("p",[s._v("​\t\t\t"),t("strong",[s._v("如果不包含那么会与NUL组成新的一行加入到新表中")])]),s._v(" "),t("p",[s._v("​")]),s._v(" "),t("h2",{attrs:{id:"三、子查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、子查询"}},[s._v("#")]),s._v(" 三、子查询")]),s._v(" "),t("h3",{attrs:{id:"_1、where里面的子查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、where里面的子查询"}},[s._v("#")]),s._v(" 1、WHERE里面的子查询")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" stu "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" classId "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" class "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" teacher "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'小红'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"_2、select里面的子查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、select里面的子查询"}},[s._v("#")]),s._v(" 2、SELECT里面的子查询")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" class "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" teacher "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'小红'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" stu \n")])])]),t("h3",{attrs:{id:"_3、from里面的子查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、from里面的子查询"}},[s._v("#")]),s._v(" 3、FROM里面的子查询")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" stu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" stu "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" class "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" teacher"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'小红'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" c \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" stu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("classId "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id\n")])])]),t("p",[t("strong",[s._v("注：FROM里面的子查询必须起别名")])]),s._v(" "),t("h2",{attrs:{id:"四、半连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、半连接"}},[s._v("#")]),s._v(" 四、半连接")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" stu s1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("MAX")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" stu s2 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("classId "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("classId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[t("strong",[s._v("注：子查询用到了父查询里面的字段")])]),s._v(" "),t("h2",{attrs:{id:"五、索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、索引"}},[s._v("#")]),s._v(" 五、索引")]),s._v(" "),t("p",[s._v("能被用到的才能作为索引")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- EXPLAIN 可以查看是否使用索引")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPLAIN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" stu\\G\n")])])]),t("p",[s._v("MYSQL中主键是聚簇索引，其他的是非聚簇索引。聚簇索引下存的是数据，非聚簇下存的是主键。")]),s._v(" "),t("p",[s._v("每用一次非聚簇索引就会走一次聚簇索引。（如果没有主键则会默认创建一个看不见的主键）")]),s._v(" "),t("p",[s._v("全覆盖索引：SQL语句中用到的列全部包含于索引中，那么该索引就是这个SQL语句的全覆盖索引")]),s._v(" "),t("p",[s._v("这种情况下不会在走一遍聚簇索引")]),s._v(" "),t("p",[s._v("例：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" classId "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" stu "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" classId "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"六、数据库三范式和反模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、数据库三范式和反模式"}},[s._v("#")]),s._v(" 六、数据库三范式和反模式")]),s._v(" "),t("p",[s._v("第一范式：强调属性的"),t("strong",[s._v("原子性")]),s._v("约束，要求属性具有原子性不可再分解")]),s._v(" "),t("p",[s._v("第二范式：强调记录的"),t("strong",[s._v("唯一性")]),s._v("约束，要求必须有一个主键，并且没有包含在主键中的列必须完全依赖于主键，而不\t\t\t\t\t能只依赖主键的一部分")]),s._v(" "),t("p",[s._v("第三范式：强调属性的"),t("strong",[s._v("冗余性")]),s._v("约束，非主键列必须直接依赖于主键。")]),s._v(" "),t("p",[s._v("范式可以避免数据冗余，监视我数据库的空间，减轻维护数据库完整性的麻烦，然而通过数据库范式化的设计会导致数据库业务涉及的表变多，并可能需要进行连表查询，这样会导致数据库性能下降，且不利于分库分表。")]),s._v(" "),t("p",[s._v("反模式：即空间换取时间，采用冗余数据避免表的关联查询")]),s._v(" "),t("h2",{attrs:{id:"七、事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七、事务"}},[s._v("#")]),s._v(" 七、事务")]),s._v(" "),t("p",[s._v("设置事务级别")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("SET SESSION TRANSACTION ISOLATION LEVEL READ UMCOMMITTED;\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);