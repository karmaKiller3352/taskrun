(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{104:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),l=a.n(c),o=a(17),s=a(14),u=(a(104),a(150)),i=a(89),E=a(13),p="PROJECT/SET_PROJECT",m="TASK/SET_TASK";function b(e){return function(t){t({type:"PROJECT/REMOVE_PROJECT_REQUEST",payload:e})}}function d(){return function(e){e({type:"PROJECT/REQUEST_PROJECTS"})}}function O(){return{type:"APP/HIDE_EDIT_FORM"}}function f(){return{type:"APP/HIDE_MODAL"}}var j=a(156),T=a(148),P=function(){return r.a.createElement(T.a,{animation:"grow",role:"status",variant:"info",size:"lg"},r.a.createElement("span",{className:"sr-only"},"Loading..."))},A={fetchProjects:d,removeProjectRequest:b};var S=Object(E.b)((function(e){return{loading:e.app.loading,projects:e.projects.projects.sort((function(e,t){return t.created-e.created}))}}),A)((function(e){var t=e.projects,a=e.loading,c=e.fetchProjects,l=e.removeProjectRequest;return Object(n.useEffect)((function(){c()}),[]),a?r.a.createElement(P,null):t.length>0?t.map((function(e){return r.a.createElement(j.a,{className:"border-info mb-1",key:e.objectId},r.a.createElement(j.a.Body,null,r.a.createElement(j.a.Title,null,r.a.createElement(o.b,{to:"/projects/".concat(e.objectId)},e.NAME),r.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:(t=e.objectId,function(e){l(t)})},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))));var t})):null})),h=a(33),v=a(5),R=a(35),g=a(153),y=a(88),I=a(149),D=a(38),k=a.n(D),x=a(39),N=a.n(x);var _={addProjectRequest:function(e){return function(t){t({type:"PROJECT/ADD_PROJECT_REQUEST",payload:e})}}},C=Object(E.b)((function(){return{}}),_)((function(e){var t=e.addProjectRequest,a=Object(n.useState)({}),c=Object(R.a)(a,2),l=c[0],o=c[1],s=Object(n.useRef)(),u=Object(n.useRef)(),i=function(e){var t=e.target,a=t.name,n=t.value;o((function(e){return Object(v.a)(Object(v.a)({},e),Object(h.a)({},a,n))}))};return r.a.createElement(g.a,{ref:s,className:"project-form border-info",onSubmit:function(e){e.preventDefault(),t(l),s.current.reset()}},r.a.createElement(g.a.Group,{controlId:"projectName"},r.a.createElement(g.a.Label,null,"Project name"),r.a.createElement(g.a.Control,{name:"NAME",required:!0,onChange:i,placeholder:"Enter project name"})),r.a.createElement(g.a.Group,{controlId:"projectUrl"},r.a.createElement(g.a.Label,null,"Project URL"),r.a.createElement(g.a.Control,{name:"URL",required:!0,type:"url",onChange:i,placeholder:"Enter project url"})),r.a.createElement(g.a.Group,{controlId:"projectAccess"},r.a.createElement(g.a.Label,null,"Project's access"),r.a.createElement(y.a,{onChange:i,as:"textarea",name:"FTP",placeholder:"Enter project`s access"})),r.a.createElement(g.a.Group,{controlId:"projectDesc"},r.a.createElement(g.a.Label,null,"Project description"),r.a.createElement(k.a,{ref:u,onChange:function(e,t){var a=t.getData();o((function(e){return Object(v.a)(Object(v.a)({},e),{DESCRIPTION:a})}))},editor:N.a})),r.a.createElement(I.a,{variant:"primary",className:"btn-lg",type:"submit"},"Add"))})),w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement(i.a,{md:6},r.a.createElement("h3",null,"Projects"),r.a.createElement("br",null),r.a.createElement(S,null)),r.a.createElement(i.a,{md:6},r.a.createElement("h3",null,"Add project"),r.a.createElement("br",null),r.a.createElement(C,null))))};function F(){return r.a.createElement("h2",null,"Home page")}function H(){return r.a.createElement("h2",null,"Page not found")}var L=a(155),U=a(151),J=a(154),K=function(){return r.a.createElement(L.a,{className:"navbar-dark bg-primary",expand:"lg"},r.a.createElement(U.a,null,r.a.createElement(o.c,{className:"navbar-brand",to:"/"},"Task-Run"),r.a.createElement(L.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(L.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(J.a,{className:"mr-auto"},r.a.createElement(o.c,{className:"nav-link",exact:!0,to:"/tasks/"},"Tasks"),r.a.createElement(o.c,{className:"nav-link",to:"/projects/"},"Projects"),r.a.createElement(o.c,{className:"nav-link",to:"/reports/"},"Reports")))))},M=a(62),W=a.n(M),Q=(a(128),function(e){return W.a.duration(e,"ms").format("HH:mm:ss").padStart(8,"00:00:0")});var q={fetchProject:function(e){return function(t){t({type:"PROJECT/REQUEST_PROJECT",payload:e})}},removeProjectRequest:b,showEditForm:function(){return{type:"APP/SHOW_EDIT_FORM"}}},G=Object(E.b)((function(e){return{project:e.projects.openProject,loading:e.app.loading}}),q)((function(e){var t,a=e.project,c=e.loading,l=e.fetchProject,o=e.removeProjectRequest,u=e.showEditForm,i=Object(s.f)(),E=Object(s.g)().id;return Object(n.useEffect)((function(){l(E)}),[l,E]),c?r.a.createElement(P,null):a.objectId?r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{className:"card border-info bg-primary mb-3 mt-4"},r.a.createElement(j.a.Header,{className:"text-white d-flex justify-content-between"},r.a.createElement("h1",null,a.NAME),r.a.createElement("div",{className:"right"},r.a.createElement("small",null,"In work from ",new Date(a.created).toLocaleDateString()),r.a.createElement("div",{className:"btn-group"},r.a.createElement(I.a,{type:"button",className:"btn btn-info btn-sm",onClick:function(e){u()}},"Edit"),r.a.createElement(I.a,{type:"button",className:"btn btn-danger btn-sm",onClick:function(e){return function(t){o(e),i.push("/projects/")}}(a.objectId)},"Delete")))),r.a.createElement(j.a.Body,null,a.DESCRIPTION&&r.a.createElement("div",{className:"description ",dangerouslySetInnerHTML:(t=a.DESCRIPTION,{__html:t})}),a.FTP&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a.Title,null,r.a.createElement("h4",null,"Project access:")),r.a.createElement("div",{className:"assecc"},a.FTP)),a.URL&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a.Title,null,r.a.createElement("h4",null,"Project link:")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:a.URL,className:"link"},a.URL)),r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a.Title,null,r.a.createElement("h4",null,"Spent time:")),r.a.createElement("div",null,Q(a.TIMESPENT)))))):r.a.createElement("h1",null,"Project not found")}));var B={changeProjectRequest:function(e){return function(t){t({type:"PROJECT/CHANGE_PROJECT_REQUEST",payload:e})}},hideEditForm:O},V=Object(E.b)((function(e){return{project:e.projects.openProject,edit:e.app.edit}}),B)((function(e){var t=e.changeProjectRequest,a=e.project,c=e.edit,l=e.hideEditForm,o=Object(n.useState)(),s=Object(R.a)(o,2),u=s[0],i=s[1];Object(n.useEffect)((function(){return function(){return l()}}),[]),Object(n.useEffect)((function(){i(a)}),[a]);var E=Object(n.useRef)(),p=function(e){var t=e.target,a=t.name,n=t.value;console.log(n),i((function(e){return Object(v.a)(Object(v.a)({},e),Object(h.a)({},a,n))}))};return c?r.a.createElement(g.a,{ref:E,className:"project-form border-info mt-4",onSubmit:function(e){e.preventDefault(),t(u)}},r.a.createElement("button",{type:"button",className:"close",onClick:function(){l()},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")),r.a.createElement(g.a.Group,{controlId:"projectName"},r.a.createElement(g.a.Label,null,"Project name"),r.a.createElement(g.a.Control,{name:"NAME",required:!0,value:u.NAME,onChange:p,placeholder:"Enter project name"})),r.a.createElement(g.a.Group,{controlId:"projectUrl"},r.a.createElement(g.a.Label,null,"Project URL"),r.a.createElement(g.a.Control,{name:"URL",required:!0,type:"url",value:u.URL,onChange:p,placeholder:"Enter project url"})),r.a.createElement(g.a.Group,{controlId:"projectAccess"},r.a.createElement(g.a.Label,null,"Project's access"),r.a.createElement(y.a,{onChange:p,as:"textarea",value:u.FTP?u.FTP:"",name:"FTP",placeholder:"Enter project`s access"})),r.a.createElement(g.a.Group,{controlId:"projectDesc"},r.a.createElement(g.a.Label,null,"Project description"),r.a.createElement(k.a,{data:u.DESCRIPTION?u.DESCRIPTION:"",onChange:function(e,t){var a=t.getData();i((function(e){return Object(v.a)(Object(v.a)({},e),{DESCRIPTION:a})}))},editor:N.a})),r.a.createElement(I.a,{variant:"primary",className:"btn-lg",type:"submit"},"Save changes")):null}));var z=function(){return r.a.createElement(u.a,null,r.a.createElement(i.a,{md:7},r.a.createElement(G,null)),r.a.createElement(i.a,{md:5},r.a.createElement(V,null)))},$=a(37);var X=function(e){var t=e.status,a=e.spentTime,r=e.start,c=e.getTime,l=a?Date.now()-r+a:a||r?Date.now()-r:0,o=Object(n.useState)(l),s=Object(R.a)(o,2),u=s[0],i=s[1],E=Object(n.useRef)(!1);return Object(n.useEffect)((function(){return"IN_WORK"===t?E.current=setTimeout((function(){i((function(e){return e+1e3}))}),1e3):clearTimeout(E.current),function(){clearTimeout(E.current)}}),[t,u]),c&&c(u),Q("PAUSED"===t||"FINISHED"===t?a:u)};var Y=Object(E.b)((function(e){return{loading:e.app.loading,tasks:e.tasks.tasks.sort((function(e,t){return t.created-e.created})),filter:e.tasks.currentFilter}}),{})((function(e){var t=e.loading,a=e.tasks,n=e.filter;if(t)return r.a.createElement(P,null);var c={ALL:{class:"",text:"All tasks",included:["OPEN","IN_WORK","PAUSED","FINISHED"]},OPEN:{class:"danger",text:"Open",included:["OPEN","IN_WORK","PAUSED"]},IN_WORK:{class:"info",text:"In work",included:["IN_WORK"]},PAUSED:{class:"warning",text:"Paused",included:["PAUSED"]},FINISHED:{class:"secondary",text:"Finished",included:["FINISHED"]}};return a.length>0?r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Title"),r.a.createElement("th",{scope:"col"},"Project"),r.a.createElement("th",{scope:"col"},"Spent time"),r.a.createElement("th",{scope:"col"},"Status"))),r.a.createElement("tbody",null,c[n].included.reduce((function(e,t){return[].concat(Object($.a)(e),Object($.a)(a.filter((function(e){return e.STATUS===t}))))}),[]).map((function(e){return r.a.createElement("tr",{key:e.objectId,className:"table-active ".concat("FINISHED"===e.STATUS?"finished":"")},r.a.createElement("th",{scope:"row"},r.a.createElement(o.b,{to:"/tasks/".concat(e.objectId)},e.TITLE)),r.a.createElement("td",null,e.PROJECT_ID?r.a.createElement(o.b,{to:"/projects/".concat(e.PROJECT_ID)},e.PROJECT_NAME):"--------------"),r.a.createElement("td",null,r.a.createElement(X,{status:e.STATUS,spentTime:e.SPENT_TIME,start:e.START_TIME,getTime:!1})),r.a.createElement("td",null,r.a.createElement("span",{className:"badge badge-".concat(c[e.STATUS].class)},c[e.STATUS].text)))})))):"No tasks "})),Z={changeTaskFilter:function(e){return{type:"TASK/CHANGE_TASK_FILTER",payload:e}}},ee=[{value:"ALL",text:"ALL TASKS",badgeClass:"success",status:["OPEN","IN_WORK","PAUSED","FINISHED"]},{value:"OPEN",text:"- OPEN",badgeClass:"danger",status:["OPEN","IN_WORK","PAUSED"]},{value:"IN_WORK",text:" ---- in work",badgeClass:"info",status:["IN_WORK"]},{value:"PAUSED",text:" ---- paused",badgeClass:"warning",status:["PAUSED"]},{value:"FINISHED",text:" - FINISHED",badgeClass:"secondary",status:["FINISHED"]}];var te=Object(E.b)((function(e){return{loading:e.app.loading,tasks:e.tasks.tasks.sort((function(e,t){return t.created-e.created})),filter:e.tasks.currentFilter}}),Z)((function(e){var t=e.loading,a=e.tasks,c=e.filter,l=e.changeTaskFilter;return Object(n.useEffect)((function(){localStorage.setItem("tasksFilter",c)}),[c]),t?r.a.createElement(P,null):r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center status"},"Status"),ee.map((function(e){var t=e.value,n=e.text,o=e.badgeClass,s=e.status.reduce((function(e,t){return e+a.filter((function(e){return e.STATUS===t})).length}),0);return r.a.createElement("li",{onClick:function(){l(t)},key:t,className:"list-group-item d-flex justify-content-between align-items-center ".concat(c===t?"active":"")},n,r.a.createElement("span",{className:"badge badge-".concat(o," badge-pill")},s))})))})),ae={fetchProjects:d,addTaskRequest:function(e){return function(t){t({type:"TASK/ADD_TASK_REQUEST",payload:e})}}};var ne=Object(E.b)((function(e){return{projects:e.projects.projects}}),ae)((function(e){var t=e.projects,a=e.fetchProjects,c=e.addTaskRequest,l=Object(n.useRef)();Object(n.useEffect)((function(){0===t.length&&a()}),[]);var o=Object(n.useState)({}),s=Object(R.a)(o,2),u=s[0],i=s[1],E=function(e){return function(t){t.target.name;i((function(t){return Object(v.a)(Object(v.a)({},t),{},{PROJECT:e})}))}};return r.a.createElement(g.a,{ref:l,className:"task-form border-info",onSubmit:function(e){e.preventDefault(),c(Object(v.a)(Object(v.a)({},u),{},{PROJECT_ID:u.PROJECT?u.PROJECT.objectId:null,PROJECT_NAME:u.PROJECT?u.PROJECT.NAME:null})),l.current.reset()}},r.a.createElement(g.a.Group,{controlId:"projectName"},r.a.createElement(g.a.Label,null,"Task name"),r.a.createElement(g.a.Control,{name:"TITLE",required:!0,onChange:function(e){var t=e.target,a=t.name,n=t.value;i((function(e){return Object(v.a)(Object(v.a)({},e),Object(h.a)({},a,n))}))},placeholder:"Enter task name"})),r.a.createElement(g.a.Group,{controlId:"projectUrl"},r.a.createElement(g.a.Label,null,"Project"),r.a.createElement(g.a.Control,{as:"select",custom:!0},r.a.createElement("option",null,"None project"),t.map((function(e){return r.a.createElement("option",{key:e.objectId,onClick:E(e),name:"PROJECT"},e.NAME)})))),r.a.createElement(g.a.Group,{controlId:"projectDesc"},r.a.createElement(g.a.Label,null,"Task description"),r.a.createElement(k.a,{onChange:function(e,t){var a=t.getData();i((function(e){return Object(v.a)(Object(v.a)({},e),{DESCRIPTION:a})}))},editor:N.a})),r.a.createElement(I.a,{variant:"primary",className:"btn-lg",type:"submit"},"Add"))})),re={fetchTasks:function(){return function(e){e({type:"TASK/REQUEST_TASKS"})}},showModal:function(e){return{type:"APP/SHOW_MODAL",payload:{title:e.title,component:e.component}}}};var ce=Object(E.b)(null,re)((function(e){var t=e.fetchTasks,a=e.showModal;return Object(n.useEffect)((function(){t()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement(i.a,{md:12},r.a.createElement("div",{className:"tasks-page"},r.a.createElement("header",null,r.a.createElement(u.a,null,r.a.createElement(i.a,{md:3},r.a.createElement("h1",null,"Tasks")),r.a.createElement(i.a,{md:7},r.a.createElement("h2",null,"All")),r.a.createElement(i.a,{md:2},r.a.createElement(I.a,{type:"button",className:"btn btn-success",onClick:function(){return a({title:"Add task",component:ne})}},"Add task")))),r.a.createElement(u.a,null,r.a.createElement(i.a,{md:3},r.a.createElement(te,null)),r.a.createElement(i.a,{md:9},r.a.createElement(Y,null)))))))})),le=a(152),oe={hideModal:f};var se=Object(E.b)((function(e){return{title:e.modal.title,InnerComponent:e.modal.component,show:e.modal.show}}),oe)((function(e){var t=e.title,a=e.InnerComponent,n=e.show,c=e.hideModal;return r.a.createElement(le.a,{show:n,onHide:c},r.a.createElement(le.a.Header,{closeButton:!0},r.a.createElement(le.a.Title,null,t)),r.a.createElement(le.a.Body,null,r.a.createElement(a,null)))})),ue={ALL:{class:"",text:"All tasks",included:["OPEN","IN_WORK","PAUSED","FINISHED"]},OPEN:{class:"danger",text:"Open",included:["OPEN","IN_WORK","PAUSED"]},IN_WORK:{class:"info",text:"In work",included:["IN_WORK"]},PAUSED:{class:"warning",text:"Paused",included:["PAUSED"]},FINISHED:{class:"secondary",text:"Finished",included:["FINISHED"]}},ie={fetchTask:function(e){return function(t){t({type:"TASK/REQUEST_TASK",payload:e})}},changeTaskRequest:function(e){return function(t){t({type:"TASK/CHANGE_TASK_REQUEST",payload:e})}}};var Ee=Object(E.b)((function(e){return{task:e.tasks.openTask,loading:e.app.loading}}),ie)((function(e){var t=e.task,a=e.loading,c=e.fetchTask,l=e.changeTaskRequest,E="",p=Object(s.g)().id;return Object(n.useEffect)((function(){c(p)}),[]),a?r.a.createElement(P,null):t.TITLE?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"task"},r.a.createElement(u.a,null,r.a.createElement(i.a,{md:4},r.a.createElement("h1",null,t.TITLE),t.PROJECT_ID?r.a.createElement(o.b,{className:"badge badge-pill badge-primary",to:"/projects/".concat(t.PROJECT_ID)},"Project: ",t.PROJECT_NAME):null),r.a.createElement(i.a,{md:12})),r.a.createElement("header",null,r.a.createElement(u.a,null,r.a.createElement(i.a,{md:2},r.a.createElement("div",{className:"text-group"},r.a.createElement("span",{className:"badge badge-".concat(ue[t.STATUS].class)},ue[t.STATUS].text))),r.a.createElement(i.a,{md:2},r.a.createElement("div",{className:"task-info"},r.a.createElement("span",null,"Created:"),r.a.createElement("span",null,new Date(t.created).toLocaleDateString()))),r.a.createElement(i.a,{md:3},r.a.createElement("div",{className:"task-time"},r.a.createElement(X,{status:t.STATUS,spentTime:t.SPENT_TIME,start:t.START_TIME,getTime:function(e){E=e}}))),r.a.createElement(i.a,{md:1}),r.a.createElement(i.a,{md:4},r.a.createElement("div",{className:"task-btn"},r.a.createElement(I.a,{className:"btn-info",disabled:"IN_WORK"===t.STATUS?"disabled":"",onClick:function(e){l(Object(v.a)(Object(v.a)({},t),{},{STATUS:"IN_WORK",START_TIME:Date.now()}))}},"Start"),r.a.createElement(I.a,{className:"btn-warning",disabled:"PAUSED"===t.STATUS||"FINISHED"===t.STATUS?"disabled":"",onClick:function(e){l(Object(v.a)(Object(v.a)({},t),{},{STATUS:"PAUSED",SPENT_TIME:E}))}},"Pause"),r.a.createElement(I.a,{disabled:"FINISHED"===t.STATUS?"disabled":"",className:"btn-secondary",onClick:function(e){l(Object(v.a)(Object(v.a)({},t),{},{STATUS:"FINISHED",SPENT_TIME:E}))}},"Finish"))))))):null}));var pe=function(){return r.a.createElement(u.a,null,r.a.createElement(i.a,{md:12},r.a.createElement(Ee,null)))};var me=function(){return r.a.createElement(o.a,{basename:"/taskrun"},r.a.createElement(K,null),r.a.createElement(U.a,{className:"pt-3"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:F}),r.a.createElement(s.a,{path:"/projects/:id",component:z}),r.a.createElement(s.a,{path:"/projects/",component:w}),r.a.createElement(s.a,{path:"/tasks/:id",component:pe}),r.a.createElement(s.a,{path:"/tasks/",component:ce}),r.a.createElement(s.a,{component:H}))),r.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var be=a(96),de=a(29),Oe=a(95),fe={projects:[],openProject:{}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(v.a)(Object(v.a)({},e),{},{openProject:Object(v.a)({},t.payload)});case"PROJECT/ADD_PROJECT":return Object(v.a)(Object(v.a)({},e),{},{projects:[t.payload].concat(Object($.a)(e.projects))});case"PROJECT/REMOVE_PROJECT":return console.log(t.payload),Object(v.a)(Object(v.a)({},e),{},{projects:e.projects.filter((function(e){return e.objectId!==t.payload}))});case"PROJECT/FETCH_PROJECTS":return Object(v.a)(Object(v.a)({},e),{},{projects:t.payload});default:return e}},Te={tasks:[],openTask:{},currentFilter:null===localStorage.getItem("tasksFilter")?"OPEN":localStorage.getItem("tasksFilter")},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TASK/CHANGE_TASK_FILTER":return Object(v.a)(Object(v.a)({},e),{},{currentFilter:t.payload});case m:return Object(v.a)(Object(v.a)({},e),{},{openTask:Object(v.a)({},t.payload)});case"TASK/ADD_TASK":return Object(v.a)(Object(v.a)({},e),{},{tasks:[t.payload].concat(Object($.a)(e.tasks))});case"TASK/REMOVE_TASK":return Object(v.a)(Object(v.a)({},e),{},{tasks:e.tasks.filter((function(e){return e.objectId!==t.payload}))});case"TASK/FETCH_TASKS":return Object(v.a)(Object(v.a)({},e),{},{tasks:t.payload});default:return e}},Ae={loading:!1,alert:null,edit:!1},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SHOW_EDIT_FORM":return Object(v.a)(Object(v.a)({},e),{},{edit:!0});case"APP/HIDE_EDIT_FORM":return Object(v.a)(Object(v.a)({},e),{},{edit:!1});case"APP/SHOW_LOADER":return Object(v.a)(Object(v.a)({},e),{},{loading:!0});case"APP/HIDE_LOADER":return Object(v.a)(Object(v.a)({},e),{},{loading:!1});case"APP/SHOW_ALERT":return Object(v.a)(Object(v.a)({},e),{},{alert:t.payload});case"APP/HIDE_ALERT":return Object(v.a)(Object(v.a)({},e),{},{alert:null});default:return e}},he={title:null,component:function(){return null},show:!1},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SHOW_MODAL":return{show:!0,component:t.payload.component,title:t.payload.title};case"APP/HIDE_MODAL":return{show:!1,component:function(){return null},title:null};default:return e}},Re=Object(de.c)({projects:je,app:Se,tasks:Pe,modal:ve}),ge=a(9),ye=a.n(ge),Ie=a(7),De=a(97),ke=a(25),xe=a(26),Ne=a.n(xe),_e="https://api.backendless.com/31AC8A7E-3AEA-1033-FF0E-4F94208FE800/66AAD1E3-F373-4750-96BA-D445FA4C046E/data/projects/",Ce="https://api.backendless.com/31AC8A7E-3AEA-1033-FF0E-4F94208FE800/66AAD1E3-F373-4750-96BA-D445FA4C046E/data/tasks/";function we(e){return Fe.apply(this,arguments)}function Fe(){return(Fe=Object(ke.a)(ye.a.mark((function e(t){var a,n;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne.a.put(_e.slice(0,-1),t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function He(e){return Le.apply(this,arguments)}function Le(){return(Le=Object(ke.a)(ye.a.mark((function e(t){var a,n;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne.a.get(_e+t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ue(e){return Je.apply(this,arguments)}function Je(){return(Je=Object(ke.a)(ye.a.mark((function e(t){var a,n;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne.a.delete(_e+t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ke(){return Me.apply(this,arguments)}function Me(){return(Me=Object(ke.a)(ye.a.mark((function e(){var t,a;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne.a.get(_e.slice(0,-1));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function We(e){return Qe.apply(this,arguments)}function Qe(){return(Qe=Object(ke.a)(ye.a.mark((function e(t){var a,n;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne.a.post(_e.slice(0,-1),t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function qe(e){return Ge.apply(this,arguments)}function Ge(){return(Ge=Object(ke.a)(ye.a.mark((function e(t){var a,n;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne.a.put(Ce.slice(0,-1),t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Be(e){return Ve.apply(this,arguments)}function Ve(){return(Ve=Object(ke.a)(ye.a.mark((function e(t){var a,n;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne.a.get(Ce+t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ze(){return $e.apply(this,arguments)}function $e(){return($e=Object(ke.a)(ye.a.mark((function e(){var t,a;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne.a.get(Ce.slice(0,-1)+"?pageSize=100");case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Xe(e){return Ye.apply(this,arguments)}function Ye(){return(Ye=Object(ke.a)(ye.a.mark((function e(t){var a,n,r;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.PROJECT,a=Object(De.a)(t,["PROJECT"]),e.next=3,Ne.a.post(Ce.slice(0,-1),a);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ze(e,t){return et.apply(this,arguments)}function et(){return(et=Object(ke.a)(ye.a.mark((function e(t,a){var n,r;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne.a.get(Ce.slice(0,-1)+"?where=".concat(t,"%3D%27").concat(a,"%27"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var tt=ye.a.mark(Et),at=ye.a.mark(pt),nt=ye.a.mark(mt),rt=ye.a.mark(bt),ct=ye.a.mark(dt),lt=ye.a.mark(Ot),ot=ye.a.mark(ft),st=ye.a.mark(jt),ut=ye.a.mark(Tt),it=ye.a.mark(Pt);function Et(){return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ie.c)("*",(function(e){}));case 2:return e.next=4,Object(Ie.c)("PROJECT/ADD_PROJECT_REQUEST",jt);case 4:return e.next=6,Object(Ie.c)("PROJECT/CHANGE_PROJECT_REQUEST",dt);case 6:return e.next=8,Object(Ie.c)("PROJECT/REMOVE_PROJECT_REQUEST",ft);case 8:return e.next=10,Object(Ie.c)("PROJECT/REQUEST_PROJECTS",Tt);case 10:return e.next=12,Object(Ie.c)("PROJECT/REQUEST_PROJECT",Ot);case 12:return e.next=14,Object(Ie.c)("TASK/REQUEST_TASKS",Pt);case 14:return e.next=16,Object(Ie.c)("TASK/REQUEST_TASK",mt);case 16:return e.next=18,Object(Ie.c)("TASK/ADD_TASK_REQUEST",bt);case 18:return e.next=20,Object(Ie.c)("TASK/CHANGE_TASK_REQUEST",pt);case 20:case"end":return e.stop()}}),tt)}function pt(e){var t;return ye.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(Ie.b)({type:"APP/SHOW_LOADER"});case 3:return a.next=5,Object(Ie.b)({type:"APP/HIDE_EDIT_FORM"});case 5:return a.next=7,Object(Ie.a)(qe,e.payload);case 7:return t=a.sent,a.next=10,Object(Ie.b)({type:m,payload:t});case 10:return a.next=12,Object(Ie.b)({type:"APP/HIDE_LOADER"});case 12:a.next=19;break;case 14:return a.prev=14,a.t0=a.catch(0),console.log(a.t0),a.next=19,Object(Ie.b)({type:"APP/HIDE_LOADER"});case 19:case"end":return a.stop()}}),at,null,[[0,14]])}function mt(e){var t;return ye.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(Ie.b)({type:"APP/SHOW_LOADER"});case 3:return a.next=5,Object(Ie.a)(Be,e.payload);case 5:return t=a.sent,a.next=8,Object(Ie.b)({type:m,payload:t});case 8:return a.next=10,Object(Ie.b)({type:"APP/HIDE_LOADER"});case 10:a.next=17;break;case 12:return a.prev=12,a.t0=a.catch(0),console.log(a.t0),a.next=17,Object(Ie.b)({type:"APP/HIDE_LOADER"});case 17:case"end":return a.stop()}}),nt,null,[[0,12]])}function bt(e){var t;return ye.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(Ie.a)(Xe,e.payload);case 3:return t=a.sent,a.next=6,Object(Ie.b)({type:"TASK/ADD_TASK",payload:t});case 6:return a.next=8,Object(Ie.b)({type:"APP/HIDE_MODAL"});case 8:a.next=15;break;case 10:return a.prev=10,a.t0=a.catch(0),console.log(a.t0),a.next=15,Object(Ie.b)({type:"APP/HIDE_MODAL"});case 15:case"end":return a.stop()}}),rt,null,[[0,10]])}function dt(e){var t;return ye.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(Ie.b)({type:"APP/SHOW_LOADER"});case 3:return a.next=5,Object(Ie.b)({type:"APP/HIDE_EDIT_FORM"});case 5:return a.next=7,Object(Ie.a)(we,e.payload);case 7:return t=a.sent,a.next=10,Object(Ie.b)({type:p,payload:t});case 10:return a.next=12,Object(Ie.b)({type:"APP/HIDE_LOADER"});case 12:a.next=19;break;case 14:return a.prev=14,a.t0=a.catch(0),console.log(a.t0),a.next=19,Object(Ie.b)({type:"APP/HIDE_LOADER"});case 19:case"end":return a.stop()}}),ct,null,[[0,14]])}function Ot(e){var t,a,n;return ye.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(Ie.b)({type:"APP/SHOW_LOADER"});case 3:return r.next=5,Object(Ie.a)(He,e.payload);case 5:if(!(t=r.sent).objectId){r.next=15;break}return r.next=9,Object(Ie.a)(Ze,"PROJECT_ID",t.objectId);case 9:return a=r.sent,n=a.reduce((function(e,t){return e+t.SPENT_TIME}),0),r.next=13,Object(Ie.b)({type:p,payload:Object(v.a)(Object(v.a)({},t),{},{TIMESPENT:n})});case 13:r.next=17;break;case 15:return r.next=17,Object(Ie.b)({type:p,payload:t});case 17:return r.next=19,Object(Ie.b)({type:"APP/HIDE_LOADER"});case 19:r.next=26;break;case 21:return r.prev=21,r.t0=r.catch(0),console.log(r.t0),r.next=26,Object(Ie.b)({type:"APP/HIDE_LOADER"});case 26:case"end":return r.stop()}}),lt,null,[[0,21]])}function ft(e){var t;return ye.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object(Ie.a)(Ue,t);case 4:return a.next=6,Object(Ie.b)({type:"PROJECT/REMOVE_PROJECT",payload:t});case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),console.log(a.t0);case 11:case"end":return a.stop()}}),ot,null,[[1,8]])}function jt(e){var t,a;return ye.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(Ie.a)(We,t);case 4:return a=n.sent,n.next=7,Object(Ie.b)({type:"PROJECT/ADD_PROJECT",payload:a});case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),st,null,[[1,9]])}function Tt(){var e;return ye.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Ie.b)({type:"APP/SHOW_LOADER"});case 3:return t.next=5,Object(Ie.a)(Ke);case 5:return e=t.sent,t.next=8,Object(Ie.b)({type:"PROJECT/FETCH_PROJECTS",payload:e});case 8:return t.next=10,Object(Ie.b)({type:"APP/HIDE_LOADER"});case 10:t.next=17;break;case 12:return t.prev=12,t.t0=t.catch(0),console.log(t.t0),t.next=17,Object(Ie.b)({type:"APP/HIDE_LOADER"});case 17:case"end":return t.stop()}}),ut,null,[[0,12]])}function Pt(){var e;return ye.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Ie.b)({type:"APP/SHOW_LOADER"});case 3:return t.next=5,Object(Ie.a)(ze);case 5:return e=t.sent,t.next=8,Object(Ie.b)({type:"TASK/FETCH_TASKS",payload:e});case 8:return t.next=10,Object(Ie.b)({type:"APP/HIDE_LOADER"});case 10:t.next=17;break;case 12:return t.prev=12,t.t0=t.catch(0),console.log(t.t0),t.next=17,Object(Ie.b)({type:"APP/HIDE_LOADER"});case 17:case"end":return t.stop()}}),it,null,[[0,12]])}var At=Object(be.a)(),St=Object(de.e)(Re,Object(de.d)(Object(de.a)(Oe.a,At)));At.run(Et);var ht=r.a.createElement(E.a,{store:St},r.a.createElement(me,null));l.a.render(ht,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,t,a){e.exports=a(146)}},[[99,1,2]]]);
//# sourceMappingURL=main.300c57b6.chunk.js.map