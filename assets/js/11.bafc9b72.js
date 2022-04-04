(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{412:function(n,t,a){"use strict";a.r(t);var e=a(56),i=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"書本的位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#書本的位置"}},[n._v("#")]),n._v(" 書本的位置")]),n._v(" "),a("ooxx"),n._v("\n## 書本的位置\n圖書館有 n 排書架，第 1 排有 a1 本書，編號依次為 1, 2,..., a1 ；\n第 2 排有 a2 本書，編號依次為 a1+1, a1+2,... ,a1+a2；\n依次類推，最後一本書的編號為 a1+a2+...+an。\n"),a("p",[n._v("現已知書本編號 b1,... , bm ，要找出這些書本所在的排數。")]),n._v(" "),a("h2",{attrs:{id:"解題思維"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解題思維"}},[n._v("#")]),n._v(" 解題思維")]),n._v(" "),a("p",[n._v("請參考老師的解說影片：i-learning/開始上課/2021-課程內容/N13-單元四作業講解")]),n._v(" "),a("p",[a("b",[n._v("解法1：暴力破解法")]),n._v("\n建表"),a("code",[n._v("table[]")]),n._v("紀錄每一本書在第幾排，取得書本編號b之後，直接查表"),a("code",[n._v("table[b]")]),n._v("就知道書在第幾排。")]),n._v(" "),a("p",[a("b",[n._v("解法2：線性解")]),n._v("\n記每一排最後一本書的編號，找第一個超過書本b的那一排。")]),n._v(" "),a("p",[a("b",[n._v("解法3：二分搜尋法")]),n._v("\n記每一排最後一本書的編號，找第一個超過書本b的那一排。\n使用二分搜尋法來找第幾排，可以加快運算速度。")]),n._v(" "),a("h2",{attrs:{id:"程式碼"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#程式碼"}},[n._v("#")]),n._v(" 程式碼")]),n._v(" "),a("pre",[n._v('#include <stdio.h>\n\n#define N 100000 //假設書本不超過100000萬本\n\nint main()\n{\n\tint table[N];//建表\n\tint n, a, m, b;\n\tint cnt = 0;//表示正在處理編號cnt的書。\n    \n    scanf("%d", &n);//讀取 n(圖書館有n排書架)\n\tfor (int i=1; i<=n; i++){//重複n次\n\t\tscanf("%d", &a);//讀取一個a\n\t\tfor (int j=0; j<a; j++){//連續a本書都設定成第i排\n\t\t\ttable[++cnt] = i;\n\t\t}\n\t}\n\t\n\tscanf("%d", &m);//讀取m\n\tfor (int i=0; i<m; i++){//重複處理m本書\n\t\tscanf("%d", &b);//讀取一個b\n\t\tprintf("%d\\n", table[b]);//輸出查表結果\n\t}\n\treturn 0;\n}\n')])],1)}),[],!1,null,null,null);t.default=i.exports}}]);