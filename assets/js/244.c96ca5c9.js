(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{609:function(v,t,_){"use strict";_.r(t);var a=_(48),e=Object(a.a)({},function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"ページを検索する"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ページを検索する","aria-hidden":"true"}},[v._v("#")]),v._v(" ページを検索する")]),v._v(" "),_("ContextualBlock",{attrs:{context:"docs-growi-org"}},[_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[v._v("WARNING")]),v._v(" "),_("p",[v._v("この機能を利用するには、検索用DBとして Elasticsearch をセッティングする必要があります。設定方法は "),_("RouterLink",{attrs:{to:"/ja/admin-guide/management-cookbook/setup-search-system.html"}},[v._v("こちら")])],1)])]),v._v(" "),_("p",[v._v("ナビゲーションバーの虫眼鏡アイコンをクリックすることで検索モーダルを開くことができます。")]),v._v(" "),_("img",{attrs:{src:v.$withBase("/assets/images/ja/search1.png"),alt:"search1"}}),v._v(" "),_("p",[v._v("モーダル内の検索バーにキーワードを入力することで、ページパス、本文、タグによりページを検索できます。")]),v._v(" "),_("img",{attrs:{src:v.$withBase("/assets/images/ja/search2.png"),alt:"search2"}}),v._v(" "),_("p",[v._v("検索対象には、「全てのページ」「この階層下の子ページのみ」「キーワードに完全一致した文字を含むページのみ」を選択できます。\nなお、キーワードを入力した時点で、該当のページの候補が表示されるため、ページの候補から直接ページにアクセスできます。")]),v._v(" "),_("img",{attrs:{src:v.$withBase("/assets/images/ja/search3.png"),alt:"search3"}}),v._v(" "),_("h2",{attrs:{id:"検索結果ページ"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#検索結果ページ","aria-hidden":"true"}},[v._v("#")]),v._v(" 検索結果ページ")]),v._v(" "),_("p",[v._v("検索モーダルでキーワードを入力し、Enter(return) キーを押すと、以下のような検索結果一覧画面に遷移します。")]),v._v(" "),_("img",{attrs:{src:v.$withBase("/assets/images/ja/search4.png"),alt:"search4"}}),v._v(" "),_("ul",[_("li",[_("p",[v._v("ページ名のリスト")]),v._v(" "),_("ul",[_("li",[v._v("画面左側に、検索にヒットしたページ名のリストが表示されます。")]),v._v(" "),_("li",[v._v("ページ名の左側にはそのページの最終更新者のプロフィール画像が表示されます。")]),v._v(" "),_("li",[v._v("ページ名をクリックすると画面右部にそのページのプレビューが表示されます。")]),v._v(" "),_("li",[v._v("ページ名の右側にはそのページのいいね数、コメント数、公開範囲の有無などのメタ情報がアイコンで表示されます。\n"),_("ul",[_("li",[v._v("公開範囲が制限されているページの表示に関しては管理画面のセキュリティ設定から設定できます。")])])]),v._v(" "),_("li",[v._v("リスト上部にある「位かっつ削除」を押すと、チェックマークを付けたページを一括削除できます。")])])]),v._v(" "),_("li",[_("p",[v._v("ページのプレビュー")]),v._v(" "),_("ul",[_("li",[v._v("画面右側には検索にヒットしたページパスのプレビューが表示されます。")]),v._v(" "),_("li",[v._v("ページ名をクリックするとそのページに遷移できます。")]),v._v(" "),_("li",[v._v("ページが持っているタグも表示されます。")]),v._v(" "),_("li",[v._v("そのページへの閲覧権限がない場合、プレビューは表示されません。")])])])]),v._v(" "),_("h3",{attrs:{id:"検索オプション"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#検索オプション","aria-hidden":"true"}},[v._v("#")]),v._v(" 検索オプション")]),v._v(" "),_("p",[v._v("検索時は以下のような表記でオプションを指定できます。オプションは併用可能です。")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("オプション")]),v._v(" "),_("th",[v._v("概要")])])]),v._v(" "),_("tbody",[_("tr",[_("td"),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("複数のキーワードによる検索")]),v._v(" "),_("td",[v._v("スペースを挟んで複数単語を指定するとページ名か本文にそれら全てを含むページを検索します。"),_("br"),v._v("例えば "),_("code",[v._v("word1 word2")]),v._v(" とすると、ページ名か本文に "),_("code",[v._v("word1")]),v._v(" , "),_("code",[v._v("word2")]),v._v(" の両方を含むページを検索します。")])]),v._v(" "),_("tr",[_("td",[v._v("指定の文章を本文に含むページを検索")]),v._v(" "),_("td",[v._v("ダブルクウォートで文章を挟むと、その文章を本文に含むページを検索します。"),_("br"),v._v("例えば、 "),_("code",[v._v('"This is GROWI"')]),v._v(" とすると、 "),_("code",[v._v("This is GROWI")]),v._v(" を本文に含むページを検索します。")])]),v._v(" "),_("tr",[_("td",[v._v("キーワードによる除外")]),v._v(" "),_("td",[v._v("半角のハイフン "),_("code",[v._v("-")]),v._v(" の後にキーワードを指定すると、ページ名か本文にそのキーワードを含むページを除外します。"),_("br"),v._v("例えば、 "),_("code",[v._v("-keyword")]),v._v(" とすると、ページ名か本文に "),_("code",[v._v("keyword")]),v._v(" を含むページを除外します。")])]),v._v(" "),_("tr",[_("td",[v._v("ページ名の先頭一致による検索")]),v._v(" "),_("td",[_("code",[v._v("prefix:")]),v._v(" の後にページ名を指定すると、そのページ名から始まるページを検索します。"),_("br"),v._v("例えば、 "),_("code",[v._v("prefix:/user/")]),v._v(" とすると、ページ名が "),_("code",[v._v("/user/")]),v._v(" から始まるページを検索します。")])]),v._v(" "),_("tr",[_("td",[v._v("ページ名の先頭一致による除外")]),v._v(" "),_("td",[_("code",[v._v("-prefix:")]),v._v(" の後にページ名を指定すると、そのページ名から始まるページを除外します。"),_("br"),v._v(" 例えば "),_("code",[v._v("-prefix:/user/")]),v._v(" とすると、ページ名が "),_("code",[v._v("/user/")]),v._v(" から始まるページを除外します。")])]),v._v(" "),_("tr",[_("td",[v._v("タグによる検索")]),v._v(" "),_("td",[_("code",[v._v("tag:")]),v._v(" の後にタグを指定すると、そのタグを含むページを検索します。 "),_("br"),v._v("例えば "),_("code",[v._v("tag:wiki")]),v._v(" とすると、 "),_("code",[v._v("wiki")]),v._v(" というタグを含むページを検索します。")])]),v._v(" "),_("tr",[_("td",[v._v("タグによる除外")]),v._v(" "),_("td",[_("code",[v._v("-tag:")]),v._v(" の後にタグを指定すると、そのタグを含むページを除外します。 "),_("br"),v._v("例えば "),_("code",[v._v("-tag:wiki")]),v._v(" とすると、 "),_("code",[v._v("wiki")]),v._v(" というタグを含むページを除外します。")])])])]),v._v(" "),_("h3",{attrs:{id:"growi-v6-系以前のバージョンでのページ検索方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#growi-v6-系以前のバージョンでのページ検索方法","aria-hidden":"true"}},[v._v("#")]),v._v(" GROWI v6 系以前のバージョンでのページ検索方法")]),v._v(" "),_("p",[v._v("ナビゲーションバーの検索バーから、ページパス、本文、タグによりページを検索できます。(検索のための環境が未完了の場合は表示されません。)")]),v._v(" "),_("img",{attrs:{src:v.$withBase("/assets/images/ja/search5.png"),alt:"search5"}}),v._v(" "),_("p",[v._v("検索バーにキーワードを入力すると、以下のようにページパスがキーワードと部分的に一致するページの候補が表示されます。この候補からページにアクセスできます。")]),v._v(" "),_("p",[v._v("また、検索バー内の虫眼鏡アイコンもしくは Enter(return) キー押下により、ページパスまたは本文にキーワードを含むページが一覧表示されます。この時、検索バー左側のドロップダウンから「全てのページ」か「この階層下の子ページ」を選択することで、検索範囲を変更できます。")]),v._v(" "),_("img",{attrs:{src:v.$withBase("/assets/images/ja/search6.png"),alt:"search6"}})],1)},[],!1,null,null,null);t.default=e.exports}}]);