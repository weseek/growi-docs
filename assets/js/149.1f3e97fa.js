(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{513:function(s,t,a){"use strict";a.r(t);var e=a(48),n=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"v5-0-系から-v4-5-系以下へのダウングレード"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v5-0-系から-v4-5-系以下へのダウングレード","aria-hidden":"true"}},[s._v("#")]),s._v(" v5.0 系から v4.5 系以下へのダウングレード")]),s._v(" "),a("p",[s._v("v5.0 にアップグレードしたシステムを v4.5 系以下にダウングレードする場合は、v4.5 系に切り替えて起動する前に MongoDB スキーマの migrate down を行う必要があります。"),a("br"),s._v("\n以下の手順を実施してください。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("ダウングレードは、オンプレミス または "),a("a",{attrs:{href:"https://github.com/weseek/growi-docker-compose",target:"_blank",rel:"noopener noreferrer"}},[s._v("weseek/growi-docker-compose"),a("OutboundLink")],1),s._v(" で運用中のシステムで可能です。"),a("br"),s._v("\nそれ以外の形態で運用中のシステムに関してはダウングレードはサポートしておりません。ご了承ください。")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("ダウングレードでは、データ破損の可能性はありませんが、page collection のページパスのデータの不整合が発生するなどのリスクがゼロではありません。"),a("br"),s._v("\n管理者による自己責任で操作をお願いします。")])]),s._v(" "),a("h2",{attrs:{id:"手順"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手順","aria-hidden":"true"}},[s._v("#")]),s._v(" 手順")]),s._v(" "),a("h3",{attrs:{id:"本番用ローカルリポジトリを使って作業するパターン"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本番用ローカルリポジトリを使って作業するパターン","aria-hidden":"true"}},[s._v("#")]),s._v(" 本番用ローカルリポジトリを使って作業するパターン")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("本番のサーバーを停止する")]),s._v(" "),a("ul",[a("li",[s._v("MongoDB は起動したままにする")])])]),s._v(" "),a("li",[a("p",[s._v("v5.0.0 のシステムを利用可能な状態のまま以下の手順を実施する")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("growi-docker-compose を利用している場合は bash プロセスを起動")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker-compose run -it --rm app "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("packages/app")]),s._v(" ディレクトリ下で "),a("code",[s._v("migrate-mongo down")]),s._v(" コマンドを実行")]),s._v(" "),a("ul",[a("li",[s._v("ターミナルの出力に "),a("code",[s._v("MIGRATED DOWN: 20211227060705-revision-path-to-page-id-schema-migration.js")]),s._v(" が出現するまで複数回実行する")]),s._v(" "),a("li",[s._v("参考: v5.0.0 から v4.5.15 へのダウングレードでは 3 回の "),a("code",[s._v("migrate-mongo down")]),s._v(" 実行が必要です")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1回目 (20220311011114-convert-page-delete-config)")]),s._v("\nNODE_ENV"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("production node -r dotenv-flow/config node_modules/.bin/migrate-mongo down\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2回目 (20220131001218-convert-redirect-to-pages-to-page-redirect-documents)")]),s._v("\nNODE_ENV"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("production node -r dotenv-flow/config node_modules/.bin/migrate-mongo down\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3回目 (20211227060705-revision-path-to-page-id-schema-migration)")]),s._v("\nNODE_ENV"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("production node -r dotenv-flow/config node_modules/.bin/migrate-mongo down\n")])])])])])]),s._v(" "),a("li",[a("p",[s._v("v4.5 系のシステムを利用可能な状態に切り替えてクライアントビルド、サーバー起動")])])]),s._v(" "),a("h3",{attrs:{id:"作業用リポジトリを-clone-するパターン"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作業用リポジトリを-clone-するパターン","aria-hidden":"true"}},[s._v("#")]),s._v(" 作業用リポジトリを clone するパターン")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("本番のサーバーを停止する")]),s._v(" "),a("ul",[a("li",[s._v("MongoDB は起動したままにする")])])]),s._v(" "),a("li",[a("p",[s._v("運用中の MongoDB にアクセスできる環境でリポジトリを clone")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/weseek/growi -b v5.0.0 --depth 1\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 依存ライブラリの取得")]),s._v("\nyarn lerna bootstrap\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" packages/app\n")])])])]),s._v(" "),a("li",[a("p",[a("code",[s._v(".env.local")]),s._v(" の作成")]),s._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("MIGRATIONS_DIR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("src/migrations/")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 環境に合わせて変更してください")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("MONGO_URI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v('"mongodb://${mongodbhost}:27017/growi"')]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("migrate-mongo down")]),s._v(" コマンドを実行")]),s._v(" "),a("ul",[a("li",[s._v("ターミナルの出力に "),a("code",[s._v("MIGRATED DOWN: 20211227060705-revision-path-to-page-id-schema-migration.js")]),s._v(" が出現するまで複数回実行する")]),s._v(" "),a("li",[s._v("参考: v5.0.0 から v4.5.15 へのダウングレードでは 3 回の "),a("code",[s._v("migrate-mongo down")]),s._v(" 実行が必要です")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1回目 (20220311011114-convert-page-delete-config)")]),s._v("\nyarn ts-node node_modules/.bin/migrate-mongo down\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2回目 (20220131001218-convert-redirect-to-pages-to-page-redirect-documents)")]),s._v("\nyarn ts-node node_modules/.bin/migrate-mongo down\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3回目 (20211227060705-revision-path-to-page-id-schema-migration)")]),s._v("\nyarn ts-node node_modules/.bin/migrate-mongo down\n")])])])]),s._v(" "),a("li",[a("p",[s._v("作業用リポジトリの削除")])]),s._v(" "),a("li",[a("p",[s._v("本番環境で v4.5 系のタグをチェックアウト")])]),s._v(" "),a("li",[a("p",[s._v("クライアントビルド、サーバー起動")])])]),s._v(" "),a("h2",{attrs:{id:"出力例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#出力例","aria-hidden":"true"}},[s._v("#")]),s._v(" 出力例")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("node ➜ /workspace/growi/packages/app "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" $ yarn ts-node node_modules/.bin/migrate-mongo down\n\nyarn run v1.22.17\n$ ts-node -r tsconfig-paths/register -r dotenv-flow/config --transpile-only node_modules/.bin/migrate-mongo down\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"growi:migrate:convert-page-delete-config"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hostname"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxxxxxxxxxx"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pid"')]),s._v(":1111,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"level"')]),s._v(":30,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Migration down has successfully applied"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"time"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2022-03-31T05:54:22.448Z"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v"')]),s._v(":0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nMIGRATED DOWN: 20220311011114-convert-page-delete-config.js\nDone "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" 1.71s.\n\nnode ➜ /workspace/growi/packages/app "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" $ yarn ts-node node_modules/.bin/migrate-mongo down\n\nyarn run v1.22.17\n$ ts-node -r tsconfig-paths/register -r dotenv-flow/config --transpile-only node_modules/.bin/migrate-mongo down\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"growi:migrate:convert-redirect-to-pages-to-page-redirect-documents"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hostname"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxxxxxxxxxx"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pid"')]),s._v(":1111,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"level"')]),s._v(":30,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Migration down has successfully applied"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"time"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2022-03-31T05:54:27.944Z"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v"')]),s._v(":0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nMIGRATED DOWN: 20220131001218-convert-redirect-to-pages-to-page-redirect-documents.js\nDone "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" 1.42s.\n\nnode ➜ /workspace/growi/packages/app "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" $ yarn ts-node node_modules/.bin/migrate-mongo down\n\nyarn run v1.22.17\n$ ts-node -r tsconfig-paths/register -r dotenv-flow/config --transpile-only node_modules/.bin/migrate-mongo down\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"growi:migrate:revision-path-to-page-id-schema-migration"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hostname"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxxxxxxxxxx"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pid"')]),s._v(":1111,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"level"')]),s._v(":30,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Migration down has successfully applied"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"time"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2022-03-31T05:54:31.169Z"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v"')]),s._v(":0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nMIGRATED DOWN: 20211227060705-revision-path-to-page-id-schema-migration.js\nDone "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" 1.99s.\n")])])]),a("h2",{attrs:{id:"トラブルシュート"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#トラブルシュート","aria-hidden":"true"}},[s._v("#")]),s._v(" トラブルシュート")]),s._v(" "),a("h3",{attrs:{id:"error-an-env-var-migrations-dir-must-be-set-error-an-env-var-migrations-dir-must-be-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-an-env-var-migrations-dir-must-be-set-error-an-env-var-migrations-dir-must-be-set","aria-hidden":"true"}},[s._v("#")]),s._v(" "),a("code",[s._v("ERROR: An env var MIGRATIONS_DIR must be set. Error: An env var MIGRATIONS_DIR must be set.")])]),s._v(" "),a("p",[s._v("一時的に環境変数を設定する "),a("code",[s._v(".env.local")]),s._v(" を作成し、"),a("code",[s._v("MIGRATIONS_DIR")]),s._v(" を設定してください。")]),s._v(" "),a("p",[s._v("本番用ローカルリポジトリを使って作業するパターンでは Node.js プロセスで実行可能な "),a("code",[s._v("MIGRATIONS_DIR=dist/migrations/")]),s._v(" を指定します。")]),s._v(" "),a("p",[s._v("作業用リポジトリを clone するパターンでは ts-node プロセスで実行可能な "),a("code",[s._v("MIGRATIONS_DIR=src/migrations/")]),s._v(" を指定します。")])])},[],!1,null,null,null);t.default=n.exports}}]);