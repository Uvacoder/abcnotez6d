(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{429:function(t,a,e){"use strict";e.r(a);var s=e(45),o=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mongodb-basics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-basics"}},[t._v("#")]),t._v(" MongoDB - Basics")]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[t._v("Install MongoDB Community Edition. It is the non-commercial edition, but has all the features we need.")]),t._v(" "),e("p",[t._v("Follow the installation instructions of your operating system:")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://docs.mongodb.com/manual/administration/install-community/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.mongodb.com/manual/administration/install-community/"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("brew tap mongodb/brew\nbrew install mongodb-community@4.2\n")])])]),e("p",[e("em",[t._v("Mac:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mongod --config /usr/local/etc/mongod.conf\n")])])]),e("h2",{attrs:{id:"mongod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongod"}},[t._v("#")]),t._v(" mongod")]),t._v(" "),e("p",[t._v("-> Software, Server. Running in background")]),t._v(" "),e("h4",{attrs:{id:"start-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-server"}},[t._v("#")]),t._v(" start server:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mongod\n")])])]),e("p",[e("a",{attrs:{href:"https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/"),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"stop-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stop-server"}},[t._v("#")]),t._v(" stop server")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./mongo\n\nuse admin\n\ndb.shutdownServer()\n")])])]),e("h2",{attrs:{id:"mongo-shell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongo-shell"}},[t._v("#")]),t._v(" mongo-shell")]),t._v(" "),e("h3",{attrs:{id:"start-the-mongo-command-line-tool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-the-mongo-command-line-tool"}},[t._v("#")]),t._v(" start the mongo command line tool:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mongo\n\n>_\n")])])]),e("h3",{attrs:{id:"show-the-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-the-database"}},[t._v("#")]),t._v(" Show the Database")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("db\n")])])]),e("h3",{attrs:{id:"show-the-databases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-the-databases"}},[t._v("#")]),t._v(" Show the Databases")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("show dbs\n")])])]),e("p",[e("em",[t._v("admin, config, local = default")])]),t._v(" "),e("h3",{attrs:{id:"switch-to-other-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#switch-to-other-database"}},[t._v("#")]),t._v(" Switch to Other Database")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("use databaseName\n")])])]),e("blockquote",[e("p",[t._v("****If the database does not exist, mongo will create it for you.")]),t._v(" "),e("p",[t._v("(to get listed with "),e("code",[t._v("show dbs")]),t._v(", it has to have some content)")])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"collections-and-documents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#collections-and-documents"}},[t._v("#")]),t._v(" Collections and Documents")]),t._v(" "),e("p",[t._v("In MongoDB, your data is organized in "),e("strong",[t._v("collections")]),t._v(". (equivalent to a table in relational databases)")]),t._v(" "),e("p",[t._v("A "),e("strong",[t._v("document")]),t._v(" is a data item stored in a collection. It is the equivalent of a row in a table in relational databases.")]),t._v(" "),e("p",[t._v("Data is stored in "),e("strong",[t._v("JSON")]),t._v(" (JavaScript Object Notation) format")]),t._v(" "),e("h3",{attrs:{id:"show-collections"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-collections"}},[t._v("#")]),t._v(" Show Collections")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("show collections\n")])])]),e("p",[t._v("collection =  table")]),t._v(" "),e("p",[t._v("document = datensatz")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"crud"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crud"}},[t._v("#")]),t._v(" CRUD")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://docs.mongodb.com/manual/crud/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.mongodb.com/manual/crud/"),e("OutboundLink")],1)]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"links"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[t._v("#")]),t._v(" Links")]),t._v(" "),e("ul",[e("li",[t._v("[Handout - Databases.pdf](files/Handout - Databases.pdf)")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.mongodb.com/manual/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDBDocumentation"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://university.mongodb.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDBCourses"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.guru99.com/what-is-mongodb.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB tutorial"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB Cheat Sheet"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=o.exports}}]);