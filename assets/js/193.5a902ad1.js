(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{556:function(t,e,a){"use strict";a.r(e);var s=a(48),i=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"growi-v6-1-x-へのアップグレード"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#growi-v6-1-x-へのアップグレード","aria-hidden":"true"}},[t._v("#")]),t._v(" GROWI v6.1.x へのアップグレード")]),t._v(" "),a("p",[t._v("GROWI v6.1 では、新機能として "),a("a",{attrs:{href:"https://mermaid.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mermaid"),a("OutboundLink")],1),t._v(" による図表描画、閲覧のみ可能とする権限の着脱、ブックマークサイドバーなどの機能が追加されました。その他に v6.0 系の抜本的な変更に対してそれぞれの機能を安定動作させるための修正や改善が多く加えられました。")]),t._v(" "),a("ContextualBlock",{attrs:{context:"docs-growi-org"}},[a("p",[t._v("また、サポート対象のミドルウェアのバージョンが変更されました。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("GROWI")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("<= v6.0.x")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("v6.1.x")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Node.js")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("14, 16")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("16, 18")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("MongoDB")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3.6, 4.0, 4.2, 4.4, 5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3.6, 4.0, 4.2, 4.4, 5, 6")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Elasticsearch")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("6, 7")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("7, 8")])])])]),t._v(" "),a("p",[t._v("実行環境とサポートするミドルウェアに変更がありますので、管理者の方は現在の環境で利用しているバージョンを確認してからアップグレードしてください。")])]),t._v(" "),a("h2",{attrs:{id:"目次"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目次","aria-hidden":"true"}},[t._v("#")]),t._v(" 目次")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#目次"}},[t._v("目次")])]),a("li",[a("a",{attrs:{href:"#管理者向け"}},[t._v("管理者向け")])]),a("li",[a("a",{attrs:{href:"#利用者向け"}},[t._v("利用者向け")])]),a("li",[a("a",{attrs:{href:"#アップグレード前にチェックすべきこと"}},[t._v("アップグレード前にチェックすべきこと")])])])]),a("p"),t._v(" "),a("ContextualBlock",{attrs:{context:"docs-growi-org"}},[a("h2",{attrs:{id:"管理者向け"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管理者向け","aria-hidden":"true"}},[t._v("#")]),t._v(" 管理者向け")]),t._v(" "),a("h3",{attrs:{id:"node-js-v14-のサポートを終了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-v14-のサポートを終了","aria-hidden":"true"}},[t._v("#")]),t._v(" Node.js v14 のサポートを終了")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://hub.docker.com/r/weseek/growi/",target:"_blank",rel:"noopener noreferrer"}},[t._v("公式の Docker イメージ"),a("OutboundLink")],1),t._v("を利用しているシステムには影響はありません")])])]),t._v(" "),a("ul",[a("li",[t._v("v16 または v18 にアップグレードしてください")])]),t._v(" "),a("h3",{attrs:{id:"elasticsearch-v6-のサポートを終了、デフォルト利用バージョンを-v8-に変更"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-v6-のサポートを終了、デフォルト利用バージョンを-v8-に変更","aria-hidden":"true"}},[t._v("#")]),t._v(" Elasticsearch v6 のサポートを終了、デフォルト利用バージョンを v8 に変更")]),t._v(" "),a("p",[t._v("GROWI v6.1.0 では Elasticsearch v6 向けのコードを削除し、新たに v8 をサポートするようになりました。また、デフォルトの利用バージョンが v8 になりました。")]),t._v(" "),a("ul",[a("li",[t._v("Elasticsearch v6 を利用しているシステムでは、v7 または v8 にアップグレードしてください")]),t._v(" "),a("li",[t._v("Elasticsearch v7 を利用する場合は "),a("RouterLink",{attrs:{to:"/ja/admin-guide/admin-cookbook/env-vars.html"}},[t._v("環境変数")]),t._v(" の "),a("code",[t._v("ELASTICSEARCH_VERSION")]),t._v(" に "),a("code",[t._v("7")]),t._v(" を設定してください")],1)]),t._v(" "),a("h3",{attrs:{id:"ビルド手順の変更"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ビルド手順の変更","aria-hidden":"true"}},[t._v("#")]),t._v(" ビルド手順の変更")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("この項目の内容は、利用者が GitHub で公開されているソースコードから自身でビルドを行っている場合に必要です。"),a("br"),t._v("\n公式 docker イメージを利用している方は必要ありません。")])]),t._v(" "),a("p",[t._v("ビルドツールとしてこれまで利用してた Lerna に代わって "),a("a",{attrs:{href:"https://turbo.build/repo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Turborepo"),a("OutboundLink")],1),t._v(" が必要になりました。\nまた package.json には含まれていないため、グローバルインストールが必要です。\nビルドする前に以下のコマンドでインストールしてください。")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("yarn global add turbo")])])]),t._v(" "),a("p",[t._v("詳しくは "),a("a",{attrs:{href:"https://github.com/weseek/growi/blob/master/README_JP.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("README.md"),a("OutboundLink")],1),t._v(" および "),a("RouterLink",{attrs:{to:"/ja/dev/startup-v5/start-development.html"}},[t._v("開発スタートアップ")]),t._v(" をご覧ください。")],1),t._v(" "),a("h3",{attrs:{id:"仕様変更-file-upload-local-設定下でのファイル保存場所の変更"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仕様変更-file-upload-local-設定下でのファイル保存場所の変更","aria-hidden":"true"}},[t._v("#")]),t._v(" [仕様変更] "),a("code",[t._v("FILE_UPLOAD=local")]),t._v(" 設定下でのファイル保存場所の変更")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("この項目の内容は、添付ファイルをローカルファイルシステムに保存する設定のシステムでのみ必要です。"),a("br"),t._v("\nAWS S3 や GCP GCS、MongoDB GridFS に保存しているシステムでは必要有りません。")])]),t._v(" "),a("p",[a("code",[t._v("app")]),t._v(" パッケージの場所が変わったことにより、ファイルの保存場所が変更されました。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Before")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("After")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("/opt/growi/packages/app/public")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("->")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("/opt/growi/apps/app/public")])])])])]),t._v(" "),a("p",[t._v("アップグレード後に既存のファイルを移動させてください。")]),t._v(" "),a("p",[t._v("また以下のディスカッションも参照してください。"),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/weseek/growi/discussions/6086",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/weseek/growi/discussions/6086"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"利用者向け"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用者向け","aria-hidden":"true"}},[t._v("#")]),t._v(" 利用者向け")]),t._v(" "),a("h3",{attrs:{id:"仕様変更-アンカーリンクに自動付与される-mdcont-プレフィクスの廃止"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仕様変更-アンカーリンクに自動付与される-mdcont-プレフィクスの廃止","aria-hidden":"true"}},[t._v("#")]),t._v(" [仕様変更] アンカーリンクに自動付与される "),a("code",[t._v("mdcont-")]),t._v(" プレフィクスの廃止")]),t._v(" "),a("p",[t._v("v6.0.0 から、ページ内のあらゆるアンカーリンク(自動生成される目次のリンクも含む)には "),a("code",[t._v("mdcont-")]),t._v(" というプレフィクスが自動付与されていました。")]),t._v(" "),a("p",[t._v("例:"),a("br"),t._v(" "),a("code",[t._v("/Sandbox")]),t._v(" 内の "),a("code",[t._v("Headers")]),t._v(" セクションの "),a("code",[t._v("id")]),t._v(" は "),a("code",[t._v("#mdcont-headers")]),t._v(" になる。")]),t._v(" "),a("p",[t._v("v6.1.0 以降はこの仕様を廃止し、"),a("code",[t._v("mdcont-")]),t._v(" プレフィクスが付かないようになりました。")]),t._v(" "),a("p",[t._v("目次等の GROWI が生成するリンクに関してはこれまで同様の利用で特に問題は起こりませんが、\n"),a("code",[t._v("mdcont-")]),t._v(" プレフィクスを含むリンクをドキュメント内に記述していたり、\nGROWI 外の文書やシステムから参照している場合はアクセス時にアンカーまでジャンプしない症状が発生します。")]),t._v(" "),a("ContextualBlock",{attrs:{context:"docs-growi-org"}},[a("p",[t._v("該当するリンクは適宜書き換えてください。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("以前の記法を使って保存されたページの内容は、GROWI 本体をアップグレードしても自動では変更されません。"),a("br"),t._v("\nマークダウン文書を一括で新しい記法に書き換えるスクリプトを提供していますので、以下のディスカッションを確認してください。"),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/weseek/growi/discussions/7180",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/weseek/growi/discussions/7180"),a("OutboundLink")],1)])])]),t._v(" "),a("ContextualBlock",{attrs:{context:"help-growi-cloud"}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("以前の記法を使って保存されたページの内容は、GROWI をアップグレードしても自動では変更されません。"),a("br"),t._v("\nご利用中の GROWI 内に存在する見出しリンクが付与された 「mdcont-」の一括削除を GROWI.cloud サポートにて対応いたします。\nご希望の方はサポートへお問い合わせください。"),a("a",{attrs:{href:"https://growi.cloud/contact",target:"_blank",rel:"noopener noreferrer"}},[t._v("お問い合わせフォーム"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("※ 以下の作業はサポート対応では承っておりません。")]),t._v(" "),a("ul",[a("li",[t._v("「mdcont-」の付与")]),t._v(" "),a("li",[t._v("GROWI 以外の外部ツールに存在する GROWI の見出しリンクに含まれる「mdcont-」の削除対応")])])])]),t._v(" "),a("h2",{attrs:{id:"アップグレード前にチェックすべきこと"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#アップグレード前にチェックすべきこと","aria-hidden":"true"}},[t._v("#")]),t._v(" アップグレード前にチェックすべきこと")]),t._v(" "),a("ContextualBlock",{attrs:{context:"docs-growi-org"}},[a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" Node.js v16 以上を利用しているか")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" Elasticsearch v7 または v8 を利用しているか")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" ソースコードから自身でビルドを行っている場合、新たなビルド手順を確認したか")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" "),a("code",[t._v("FILE_UPLOAD=local")]),t._v(" 設定のシステムで、アップグレード後のファイル移動の手順を確認したか")])])]),t._v(" "),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" アンカーリンクの仕様変更について\n"),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" ユーザーに周知をしたか")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 既存のページ内容について、今後の書き換えの戦略は決定したか")])])])])],1)},[],!1,null,null,null);e.default=i.exports}}]);