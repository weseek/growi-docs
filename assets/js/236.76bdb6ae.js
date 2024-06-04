(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{600:function(t,v,e){"use strict";e.r(v);var _=e(48),r=Object(_.a)({},function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"lsx-機能を使ってページリストを表示する"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lsx-機能を使ってページリストを表示する","aria-hidden":"true"}},[t._v("#")]),t._v(" lsx 機能を使ってページリストを表示する")]),t._v(" "),e("p",[t._v("lsx 機能を使うと、特定のページの配下に存在するページを一覧表示できます。")]),t._v(" "),e("p",[t._v("たとえばあるページに "),e("code",[t._v("$lsx()")]),t._v(" と記述すると、画像のようにそのページの配下に存在するページ一覧を出力できます。")]),t._v(" "),e("p",[t._v("複数のページへのショートカットを記載したいときなどに便利です。")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/assets/images/ja/lsx.png"),alt:"lsx"}}),t._v(" "),e("h2",{attrs:{id:"指定したページの配下ページ一覧を出力する"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#指定したページの配下ページ一覧を出力する","aria-hidden":"true"}},[t._v("#")]),t._v(" 指定したページの配下ページ一覧を出力する")]),t._v(" "),e("p",[t._v("ページの指定方法は、ルートページからの絶対パスと、編集中のページからの相対パスの 2 種類です。")]),t._v(" "),e("p",[t._v("存在しないページを指定した場合、"),e("code",[t._v("$lsx(/サンプル) has no contents")]),t._v(" のようなエラーメッセージが表示されます。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("$lsx(/user)")]),t._v(" と記述すると、トップページ直下の user ページ配下のページ一覧が出力されます。")]),t._v(" "),e("li",[e("code",[t._v("$lsx(./サンプル)")]),t._v(" と記述すると、編集中のページの配下の "),e("code",[t._v("サンプル")]),t._v(" というページ配下のページ一覧が出力されます。")])]),t._v(" "),e("h2",{attrs:{id:"オプションを設定する"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#オプションを設定する","aria-hidden":"true"}},[t._v("#")]),t._v(" オプションを設定する")]),t._v(" "),e("p",[t._v("lsx 機能には、複数のオプション設定があります。同時に複数のオプションを設定する場合は、カンマ区切りで "),e("code",[t._v("$lsx(/ページ, depth=1, sort=createdAt, reverse=true)")]),t._v(" のように記述します。")]),t._v(" "),e("h3",{attrs:{id:"オプション一覧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#オプション一覧","aria-hidden":"true"}},[t._v("#")]),t._v(" オプション一覧")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("パラメータ")]),t._v(" "),e("th",[t._v("デフォルト値")]),t._v(" "),e("th",[t._v("説明")]),t._v(" "),e("th",[t._v("詳細")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("num")]),t._v(" "),e("td",[t._v("50")]),t._v(" "),e("td",[t._v("ページ数を指定する")]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/ja/guide/features/lsx.html#num-オプション"}},[t._v("numオプション詳細")])],1)]),t._v(" "),e("tr",[e("td",[t._v("depth")]),t._v(" "),e("td",[t._v("未設定")]),t._v(" "),e("td",[t._v("ページの階層を指定する")]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/ja/guide/features/lsx.html#depth-オプション"}},[t._v("depthオプション詳細")])],1)]),t._v(" "),e("tr",[e("td",[t._v("sort")]),t._v(" "),e("td",[t._v("path")]),t._v(" "),e("td",[t._v("ページの並び順を指定する")]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/ja/guide/features/lsx.html#sort-オプション"}},[t._v("sortオプション詳細")])],1)]),t._v(" "),e("tr",[e("td",[t._v("reverse")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("ページの並び順を逆にする")]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/ja/guide/features/lsx.html#reverse-オプション"}},[t._v("reverseオプション詳細")])],1)]),t._v(" "),e("tr",[e("td",[t._v("filter")]),t._v(" "),e("td",[t._v("未設定")]),t._v(" "),e("td",[t._v("ページをフィルタする")]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/ja/guide/features/lsx.html#filter-オプション"}},[t._v("filterオプション詳細")])],1)])])]),t._v(" "),e("h3",{attrs:{id:"num-オプション"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#num-オプション","aria-hidden":"true"}},[t._v("#")]),t._v(" num オプション")]),t._v(" "),e("p",[t._v("出力するページの数を指定できます。デフォルトの値は 50 です。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("$lsx(num=N)")]),t._v(" : N 件のページを出力します。N には自然数を入力してください。")]),t._v(" "),e("li",[e("code",[t._v(":")]),t._v(" や "),e("code",[t._v("+")]),t._v(" を使って、出力するページを制御できます。\n"),e("ul",[e("li",[e("code",[t._v("$lsx(num=1:10)")]),t._v(" : 1件目から10件目までのページを出力します。")]),t._v(" "),e("li",[e("code",[t._v("$lsx(num=2:)")]),t._v(" : 2件目から最後までのページを出力します。")]),t._v(" "),e("li",[e("code",[t._v("$lsx(num=5+2)")]),t._v(" : 5件目から2件先まで (5,6,7番目)のページを出力します。")])])])]),t._v(" "),e("h3",{attrs:{id:"depth-オプション"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#depth-オプション","aria-hidden":"true"}},[t._v("#")]),t._v(" depth オプション")]),t._v(" "),e("p",[t._v("出力するページの階層を指定できます。デフォルトでは、存在する全ての階層のページを出力します。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("$lsx(depth=N)")]),t._v(" : 編集中のページ、もしくは指定したページを起点にして、N 階層下のページまで出力します。N には自然数を入力してください。")]),t._v(" "),e("li",[e("code",[t._v(":")]),t._v(" や "),e("code",[t._v("+")]),t._v(" を使って、出力するページを制御できます。\n"),e("ul",[e("li",[e("code",[t._v("$lsx(depth=2:3)")]),t._v(" : 2階層下から3階層下までのページを出力します。")]),t._v(" "),e("li",[e("code",[t._v("$lsx(depth=2:)")]),t._v(" : 2階層下から最下層までのページを出力します。")]),t._v(" "),e("li",[e("code",[t._v("$lsx(depth=1+2)")]),t._v(" : 1階層下から2階層先まで (1,2,3階層下)のページを出力します。")])])])]),t._v(" "),e("h3",{attrs:{id:"sort-オプション"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sort-オプション","aria-hidden":"true"}},[t._v("#")]),t._v(" sort オプション")]),t._v(" "),e("p",[t._v("ページ一覧の並び順を、以下のいずれかで指定できます。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("$lsx(sort=path)")]),t._v(" (デフォルト) : ページ名順に出力する（ページ名の文字コードの昇順）")]),t._v(" "),e("li",[e("code",[t._v("$lsx(sort=createdAt)")]),t._v(" : 作成日の昇順で出力する (作成日が古い順)")]),t._v(" "),e("li",[e("code",[t._v("$lsx(sort=updatedAt)")]),t._v(" : 最終更新日の昇順で出力する (更新日が古い順)")])]),t._v(" "),e("h3",{attrs:{id:"reverse-オプション"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reverse-オプション","aria-hidden":"true"}},[t._v("#")]),t._v(" reverse オプション")]),t._v(" "),e("p",[t._v("出力順を逆にします。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("$lsx(sort=updatedAt, reverse=true)")]),t._v(" : 最終更新日の降順で出力する (更新日が新しい順)")])]),t._v(" "),e("h3",{attrs:{id:"filter-オプション"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filter-オプション","aria-hidden":"true"}},[t._v("#")]),t._v(" filter オプション")]),t._v(" "),e("p",[t._v("出力するページを、ページ名に含まれる文字列でフィルタできます。filter のマッチタイプは部分一致です。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("$lsx(filter=2023)")]),t._v(" : ページ名に "),e("code",[t._v("2023")]),t._v(" が含まれるページのみが出力されます。")])])])},[],!1,null,null,null);v.default=r.exports}}]);