(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{392:function(e,a,t){"use strict";t.r(a);var r=t(48),o=Object(r.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose","aria-hidden":"true"}},[e._v("#")]),e._v(" docker-compose")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),t("li",[t("a",{attrs:{href:"#download-growi-docker-compose"}},[e._v("Download growi-docker-compose")])]),t("li",[t("a",{attrs:{href:"#build-growi"}},[e._v("Build GROWI")])]),t("li",[t("a",{attrs:{href:"#allow-to-access-growi-from-other-hosts"}},[e._v("Allow to Access GROWI From Other Hosts")])]),t("li",[t("a",{attrs:{href:"#change-heap-size-of-elasticsearch"}},[e._v("Change Heap Size of Elasticsearch")])]),t("li",[t("a",{attrs:{href:"#upgrade-growi"}},[e._v("Upgrade GROWI")])]),t("li",[t("a",{attrs:{href:"#related-pages"}},[e._v("Related Pages")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("This chapter introduces the installation process for GROWI with docker-compose.")]),e._v(" "),t("p",[e._v("Software needed for setup are listed below.")]),e._v(" "),t("ul",[t("li",[e._v("Docker")]),e._v(" "),t("li",[e._v("docker-compose")])]),e._v(" "),t("h2",{attrs:{id:"download-growi-docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-growi-docker-compose","aria-hidden":"true"}},[e._v("#")]),e._v(" Download growi-docker-compose")]),e._v(" "),t("p",[e._v("Download or clone source code files from "),t("a",{attrs:{href:"https://github.com/weseek/growi-docker-compose",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/weseek/growi-docker-compose"),t("OutboundLink")],1),e._v(" .")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git clone https://github.com/weseek/growi-docker-compose.git growi\n")])])]),t("h2",{attrs:{id:"build-growi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-growi","aria-hidden":"true"}},[e._v("#")]),e._v(" Build GROWI")]),e._v(" "),t("p",[e._v("Execute these commands in the directory where "),t("code",[e._v("growi-docker-compose")]),e._v(" exists.")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd growi\ndocker-compose up\n")])])]),t("p",[e._v("Access to "),t("code",[e._v("http://localhost:3000/")]),e._v(" , and if the request is redirected to "),t("code",[e._v("/installer")]),e._v(", GROWI is properly launched.")]),e._v(" "),t("h2",{attrs:{id:"allow-to-access-growi-from-other-hosts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#allow-to-access-growi-from-other-hosts","aria-hidden":"true"}},[e._v("#")]),e._v(" Allow to Access GROWI From Other Hosts")]),e._v(" "),t("p",[e._v("GROWI can be accessed from other hosts by changing "),t("code",[e._v("ports")]),e._v(" in "),t("code",[e._v("docker-compose.yml")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Before")])]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("services:\n  app:\n    ports:\n      - 127.0.0.1:3000:3000\n")])])]),t("p",[t("strong",[e._v("After")])]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("services:\n  app:\n    ports:\n      - 3000:3000\n")])])]),t("h2",{attrs:{id:"change-heap-size-of-elasticsearch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-heap-size-of-elasticsearch","aria-hidden":"true"}},[e._v("#")]),e._v(" Change Heap Size of Elasticsearch")]),e._v(" "),t("p",[e._v("If there is enough memory capacity, the heap size of Elasticsearch may be increased by changing "),t("code",[e._v("ES_JAVA_OPTS")]),e._v(" in "),t("code",[e._v("docker-compose.yml")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('environment:\n  - "ES_JAVA_OPTS=-Xms2g -Xmx2g"\n')])])]),t("h2",{attrs:{id:"upgrade-growi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-growi","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrade GROWI")]),e._v(" "),t("h3",{attrs:{id:"refer-to-upgrading-guides"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#refer-to-upgrading-guides","aria-hidden":"true"}},[e._v("#")]),e._v(" Refer to upgrading guides")]),e._v(" "),t("p",[e._v("The following page introduces the processes to upgrade GROWI to v3.4.x from v3.3.x or below.")]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/en/admin-guide/upgrading/34x.html"}},[e._v("Upgrading GROWI to v3.4.x")]),e._v(".")],1),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("In upgrading any other version, please check the upgrade guide for the appropriate version first.")])]),e._v(" "),t("h3",{attrs:{id:"upgrading-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-container","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrading Container")]),e._v(" "),t("p",[e._v("Stop containers in the directory where "),t("code",[e._v("growi-docker-compose")]),e._v(" exists.")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd growi\ndocker-compose stop\n")])])]),t("p",[e._v("Remove Docker containers and Docker images.")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker-compose rm app mongo elasticseach\ndocker rmi weseek/growi:5\n")])])]),t("p",[e._v("Pull latest GROWI, and create a fresh Docker image and build up containers.")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git pull\ndocker-compose build\ndocker-compose up\n")])])]),t("p",[e._v("After containers are built, access to the admin page and build ES index again on full text search management ( "),t("code",[e._v("/admin/search")]),e._v(" ).")]),e._v(" "),t("h2",{attrs:{id:"related-pages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#related-pages","aria-hidden":"true"}},[e._v("#")]),e._v(" Related Pages")]),e._v(" "),t("ul",[t("li",[e._v("Launch Multiple GROWIs")])]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/en/admin-guide/admin-cookbook/multi-app.html"}},[e._v("Multiple Sites")])],1),e._v(" "),t("ul",[t("li",[e._v("HTTPS proxy")])]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/en/admin-guide/admin-cookbook/lets-encrypt.html"}},[e._v("HTTPS with Let's Encript")])],1),e._v(" "),t("ul",[t("li",[e._v("Backup data about page and user in MongoDB")])]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/en/admin-guide/admin-cookbook/mongodb-backup-regular.html#manage-with-docker-compose"}},[e._v("MongoDB Auto Backup")])],1),e._v(" "),t("ul",[t("li",[e._v("Use HackMD(CodiMD) to simultaneous editing")])]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/en/admin-guide/admin-cookbook/integrate-with-hackmd.html"}},[e._v("HackMD(CodiMD) Integration")])],1)])},[],!1,null,null,null);a.default=o.exports}}]);