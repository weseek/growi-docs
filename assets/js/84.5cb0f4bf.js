(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{447:function(e,t,a){"use strict";a.r(t);var s=a(48),o=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"launch-devcontainer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launch-devcontainer","aria-hidden":"true"}},[e._v("#")]),e._v(" Launch devcontainer")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("The below documentation details our development environment at WESEEK Inc. It may include some tools that are not necessary for your use case.")])]),e._v(" "),a("h2",{attrs:{id:"launch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launch","aria-hidden":"true"}},[e._v("#")]),e._v(" Launch")]),e._v(" "),a("ol",[a("li",[e._v("Open Visual Studio Code")]),e._v(" "),a("li",[e._v("From the Remote Connection indicator, open the devcontainer repository\n"),a("ul",[a("li",[a("img",{attrs:{src:e.$withBase("/assets/images/vscode-remote-button.png"),alt:"indicator"}})]),e._v(" "),a("li",[e._v("Remote-Containers: Open folder in Container...")]),e._v(" "),a("li",[e._v("Select the weseek/growi repository\n"),a("ul",[a("li",[e._v("WSL path for Windows: "),a("code",[e._v("\\\\wsl$\\Ubuntu\\home\\{your account}\\Projects\\GROWI\\growi")]),e._v(" "),a("ul",[a("li",[e._v("Replace "),a("code",[e._v("{your account}")]),e._v(" with your own account name")])])])])])])]),e._v(" "),a("li",[e._v("For first time users wait 5-10 minutes for the download and building of various docker container images.")]),e._v(" "),a("li",[e._v("If there was no error, you should see docker containers in Remote Explorer in the sidebar\n"),a("ul",[a("li",[a("img",{attrs:{src:e.$withBase("/assets/images/growi-dev-ready.png"),alt:"ready"}})])])])]),e._v(" "),a("h2",{attrs:{id:"confirmation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#confirmation","aria-hidden":"true"}},[e._v("#")]),e._v(" Confirmation")]),e._v(" "),a("p",[e._v("To ensure there were no errors in setup, confirm the following information in the GROWI-Dev devcontainer window.")]),e._v(" "),a("h3",{attrs:{id:"git-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" Git Settings")]),e._v(" "),a("ul",[a("li",[e._v("In terminal, display your Git settings.  They should look similar to the following.\n"),a("ul",[a("li",[a("p",[e._v("In Windows, check the WSL global settings")])]),e._v(" "),a("li",[a("p",[e._v("In Mac, check the local PC global settings")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("node ➜ /workspace/growi-docs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" $ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" config -l --show-origin\nfile:/home/node/.gitconfig      user.name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Your Name\nfile:/home/node/.gitconfig      user.email"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("yourname@example.com\nfile:/home/node/.gitconfig      core.autocrlf"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("false\nfile:/home/node/.gitconfig      credential.helper"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" /home/node/.vscode-server/bin/a5d1cc28bb5da32ec67e86cc50f84c67cc690321/node /tmp/vscode-remote-containers-c717012556037588bd78c4b869724bf548d49841.js "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" f\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])])]),e._v(" "),a("li",[a("p",[e._v("It is normal for the "),a("code",[e._v("credential.helper")]),e._v(" setting to look like a script as shown above")])])])])]),e._v(" "),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting","aria-hidden":"true"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),a("h3",{attrs:{id:"remote-wsl-connestion-failure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remote-wsl-connestion-failure","aria-hidden":"true"}},[e._v("#")]),e._v(" Remote WSL connestion failure")]),e._v(" "),a("h4",{attrs:{id:"symptom-of-the-problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symptom-of-the-problem","aria-hidden":"true"}},[e._v("#")]),e._v(" Symptom of the problem")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sh: 1: /scripts/wslServer.sh: not found\n")])])]),a("h4",{attrs:{id:"resolution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolution","aria-hidden":"true"}},[e._v("#")]),e._v(" Resolution")]),e._v(" "),a("ol",[a("li",[e._v("Uninstall VSCode")]),e._v(" "),a("li",[e._v("Delete "),a("code",[e._v("C:\\Users\\${YourAccount}\\.vscode")])]),e._v(" "),a("li",[e._v("Reinstall VSCode")])])])},[],!1,null,null,null);t.default=o.exports}}]);