(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{517:function(a,e,t){"use strict";t.r(e);var r=t(48),o=Object(r.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose","aria-hidden":"true"}},[a._v("#")]),a._v(" docker-compose")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#概要"}},[a._v("概要")])]),t("li",[t("a",{attrs:{href:"#growi-docker-compose-のダウンロード"}},[a._v("growi-docker-compose　のダウンロード")])]),t("li",[t("a",{attrs:{href:"#growi-の起動確認"}},[a._v("GROWI の起動確認")])]),t("li",[t("a",{attrs:{href:"#localhost-以外からのアクセス"}},[a._v("localhost 以外からのアクセス")])]),t("li",[t("a",{attrs:{href:"#elasticsearch-のメモリ容量を変更"}},[a._v("Elasticsearch のメモリ容量を変更")])]),t("li",[t("a",{attrs:{href:"#growi-のアップグレード"}},[a._v("GROWI のアップグレード")])]),t("li",[t("a",{attrs:{href:"#関連ページ"}},[a._v("関連ページ")])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"概要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概要","aria-hidden":"true"}},[a._v("#")]),a._v(" 概要")]),a._v(" "),t("p",[a._v("この章では docker-compose を用いて GROWI を立ち上げる方法を紹介します。")]),a._v(" "),t("p",[a._v("セットアップには以下のソフトウェアが必要となるため、事前にインストールしてください。")]),a._v(" "),t("ul",[t("li",[a._v("Docker")]),a._v(" "),t("li",[a._v("docker-compose")])]),a._v(" "),t("h2",{attrs:{id:"growi-docker-compose-のダウンロード"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#growi-docker-compose-のダウンロード","aria-hidden":"true"}},[a._v("#")]),a._v(" growi-docker-compose　のダウンロード")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/weseek/growi-docker-compose",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/weseek/growi-docker-compose"),t("OutboundLink")],1),a._v(" の「Clone or download」ボタンから、ソースコードをダウンロードもしくは git コマンドにより clone します。")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git clone https://github.com/weseek/growi-docker-compose.git growi\n")])])]),t("h2",{attrs:{id:"growi-の起動確認"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#growi-の起動確認","aria-hidden":"true"}},[a._v("#")]),a._v(" GROWI の起動確認")]),a._v(" "),t("p",[a._v("ダウンロードしたフォルダ内にて以下のコマンドを実行します。")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd growi\ndocker-compose up\n")])])]),t("p",[t("code",[a._v("http://localhost:3000/")]),a._v(" にアクセスし、初回セットアップ画面("),t("code",[a._v("/installer")]),a._v(")の表示が確認できれば GROWI 起動完了です。")]),a._v(" "),t("h2",{attrs:{id:"localhost-以外からのアクセス"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#localhost-以外からのアクセス","aria-hidden":"true"}},[a._v("#")]),a._v(" localhost 以外からのアクセス")]),a._v(" "),t("p",[t("code",[a._v("docker-compose.yml")]),a._v(" ファイル内の "),t("code",[a._v("ports")]),a._v(" を変更することで "),t("code",[a._v("localhost")]),a._v(" 以外からのアクセスを許可できます。")]),a._v(" "),t("ul",[t("li",[a._v("変更前")])]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("services:\n  app:\n    ports:\n      - 127.0.0.1:3000:3000\n")])])]),t("ul",[t("li",[a._v("変更後")])]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("services:\n  app:\n    ports:\n      - 3000:3000\n")])])]),t("h2",{attrs:{id:"elasticsearch-のメモリ容量を変更"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-のメモリ容量を変更","aria-hidden":"true"}},[a._v("#")]),a._v(" Elasticsearch のメモリ容量を変更")]),a._v(" "),t("p",[a._v("メモリに十分な空き容量がある場合、"),t("code",[a._v("docker-compose.yml")]),a._v(" ファイル内の "),t("code",[a._v("ES_JAVA_OPTS")]),a._v(" の値を変更することで、Elasticsearch のヒープ領域を増やすことができます。")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('environment:\n  - "ES_JAVA_OPTS=-Xms2g -Xmx2g"\n')])])]),t("h2",{attrs:{id:"growi-のアップグレード"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#growi-のアップグレード","aria-hidden":"true"}},[a._v("#")]),a._v(" GROWI のアップグレード")]),a._v(" "),t("h3",{attrs:{id:"アップグレードガイドの確認"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#アップグレードガイドの確認","aria-hidden":"true"}},[a._v("#")]),a._v(" アップグレードガイドの確認")]),a._v(" "),t("p",[a._v("以下のページで、v3.3.x 以下の GROWI を利用してる人向けに v3.4.x へのアップグレードの手順を説明しています。")]),a._v(" "),t("p",[t("RouterLink",{attrs:{to:"/ja/admin-guide/upgrading/34x.html"}},[a._v("GROWI v3.4.x へのアップグレード")])],1),a._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("p",[a._v("その他のバージョンのアップグレードに於いても、まずはアップグレードガイドを確認してください。")])]),a._v(" "),t("h3",{attrs:{id:"コンテナのアップグレード"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#コンテナのアップグレード","aria-hidden":"true"}},[a._v("#")]),a._v(" コンテナのアップグレード")]),a._v(" "),t("p",[t("code",[a._v("growi-docker-compose")]),a._v(" をダウンロードしたフォルダにて、コンテナを停止します。")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd growi\ndocker-compose stop\n")])])]),t("p",[a._v("既存の Docker コンテナと Docker イメージを削除します。")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker-compose rm app mongo elasticsearch\ndocker rmi weseek/growi:5\n")])])]),t("p",[a._v("最新版を pull し、Docker イメージを作成した後、コンテナを立ち上げます。")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git pull\ndocker-compose build\ndocker-compose up\n")])])]),t("p",[a._v("起動後、GROWI App の管理画面の全文検索管理ページ( "),t("code",[a._v("/admin/search")]),a._v(" )で、インデックスを再構築してください。")]),a._v(" "),t("h2",{attrs:{id:"関連ページ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#関連ページ","aria-hidden":"true"}},[a._v("#")]),a._v(" 関連ページ")]),a._v(" "),t("ul",[t("li",[a._v("複数の GROWI を立ち上げる")])]),a._v(" "),t("p",[t("RouterLink",{attrs:{to:"/ja/admin-guide/admin-cookbook/multi-app.html"}},[a._v("growi-docker-compose Multiple Sites Example を利用した複数 app の起動手順")])],1),a._v(" "),t("ul",[t("li",[a._v("HTTPS プロキシを利用する")])]),a._v(" "),t("p",[t("RouterLink",{attrs:{to:"/ja/admin-guide/admin-cookbook/lets-encrypt.html"}},[a._v("growi-docker-compose with HTTPS proxy Example を利用した HTTPS プロキシの利用手順")])],1),a._v(" "),t("ul",[t("li",[a._v("MongoDB にページデータとユーザーデータのバックアップをとる")])]),a._v(" "),t("p",[t("RouterLink",{attrs:{to:"/ja/admin-guide/admin-cookbook/mongodb-backup-regular.html#manage-with-docker-compose"}},[a._v("growi-docker-compose with backup MongoDB container example を利用した MongoDB へのバックアップ作成手順")])],1),a._v(" "),t("ul",[t("li",[a._v("HackMD による同時多人数編集を利用する")])]),a._v(" "),t("p",[t("RouterLink",{attrs:{to:"/ja/admin-guide/admin-cookbook/integrate-with-hackmd.html#既存の-hackmd-codimd-と連携する"}},[a._v("HackMD(CodiMD) Integration Example を利用した HackMD 統合")])],1)])},[],!1,null,null,null);e.default=o.exports}}]);