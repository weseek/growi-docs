(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{569:function(t,a,e){"use strict";e.r(a);var s=e(48),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"devcontainer-の起動"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#devcontainer-の起動","aria-hidden":"true"}},[t._v("#")]),t._v(" devcontainer の起動")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("以下は WESEEK, Inc. で統一している開発環境の紹介です。\nそのため、開発にあたって必須ではない設定やツールの指定が含まれています。")])]),t._v(" "),e("h2",{attrs:{id:"起動"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#起動","aria-hidden":"true"}},[t._v("#")]),t._v(" 起動")]),t._v(" "),e("ol",[e("li",[t._v("VSCode を起動")]),t._v(" "),e("li",[t._v("リモート接続用インジケーターから、devcontainer でリポジトリを開く\n"),e("ul",[e("li",[e("img",{attrs:{src:t.$withBase("/assets/images/vscode-remote-button.png"),alt:"indicator"}})]),t._v(" "),e("li",[t._v("Remote-Containers: Open folder in Container...")]),t._v(" "),e("li",[t._v("weseek/growi ローカルリポジトリを選択\n"),e("ul",[e("li",[t._v("Windows の場合は WSL のパス: "),e("code",[t._v("\\\\wsl$\\Ubuntu\\home\\{your account}\\Projects\\GROWI\\growi")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("{your account}")]),t._v(" は自身のアカウント名に置き換えてください")])])])])])])]),t._v(" "),e("li",[t._v("初回は各種コンテナイメージのダウンロードとビルドのため、5～10分待つ")]),t._v(" "),e("li",[t._v("エラーなく起動したら、サイドバーの Remote Explorer でコンテナの起動を確認する\n"),e("ul",[e("li",[e("img",{attrs:{src:t.$withBase("/assets/images/growi-dev-ready.png"),alt:"ready"}})])])])]),t._v(" "),e("h2",{attrs:{id:"確認"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#確認","aria-hidden":"true"}},[t._v("#")]),t._v(" 確認")]),t._v(" "),e("p",[t._v("エラーなく起動したら、以下を確認してください。"),e("br"),t._v("\nGROWI-Dev devcontainer ウィンドウ内で作業します。")]),t._v(" "),e("h3",{attrs:{id:"git-設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-設定","aria-hidden":"true"}},[t._v("#")]),t._v(" Git 設定")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("ターミナルで、Git の設定を出力し、Windows であれば WSL のグローバル設定、Mac であればホストPCのグローバル設定が反映されていることを確認する")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("node ➜ /workspace/growi-docs "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" $ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config -l --show-origin\nfile:/home/node/.gitconfig      user.name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Your Name\nfile:/home/node/.gitconfig      user.email"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yourname@example.com\nfile:/home/node/.gitconfig      core.autocrlf"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\nfile:/home/node/.gitconfig      credential.helper"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("f"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" /home/node/.vscode-server/bin/a5d1cc28bb5da32ec67e86cc50f84c67cc690321/node /tmp/vscode-remote-containers-c717012556037588bd78c4b869724bf548d49841.js "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" f\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),e("ul",[e("li",[e("code",[t._v("credential.helper")]),t._v(" に関しては、上記のようなスクリプトがセットされている状態が正常")])])])]),t._v(" "),e("h2",{attrs:{id:"トラブルシュート"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#トラブルシュート","aria-hidden":"true"}},[t._v("#")]),t._v(" トラブルシュート")]),t._v(" "),e("h3",{attrs:{id:"remote-wsl-の接続に失敗する場合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remote-wsl-の接続に失敗する場合","aria-hidden":"true"}},[t._v("#")]),t._v(" Remote WSL の接続に失敗する場合")]),t._v(" "),e("h4",{attrs:{id:"症状"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#症状","aria-hidden":"true"}},[t._v("#")]),t._v(" 症状")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sh: 1: /scripts/wslServer.sh: not found\n")])])]),e("h4",{attrs:{id:"対処"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#対処","aria-hidden":"true"}},[t._v("#")]),t._v(" 対処")]),t._v(" "),e("ol",[e("li",[t._v("VSCode のアンインストール")]),t._v(" "),e("li",[e("code",[t._v("C:\\Users\\${YourAccount}\\.vscode")]),t._v(" の削除")]),t._v(" "),e("li",[t._v("再度 VSCode のインストールから")])])])},[],!1,null,null,null);a.default=r.exports}}]);