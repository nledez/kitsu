(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32916196"],{"0024":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"data-list"},[s("div",{staticStyle:{overflow:"hidden"}},[s("table",{ref:"headerWrapper",staticClass:"datatable"},[s("thead",{staticClass:"datatable-head"},[s("tr",{staticClass:"datatable-row-header"},[s("th",{staticClass:"type"},[t._v(" "+t._s(t.$t("tasks.fields.task_type"))+" ")]),s("th",{staticClass:"status"},[t._v(" "+t._s(t.$t("tasks.fields.task_status"))+" ")]),s("th",{staticClass:"assignees"},[t._v(" "+t._s(t.$t("tasks.fields.assignees"))+" ")]),s("th",{staticClass:"end-cell"})])])])]),s("table-info",{attrs:{"is-loading":t.isLoading,"is-error":t.isError}}),t.entries.length>0?s("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onBodyScroll,expression:"onBodyScroll"}]},[s("table",{staticClass:"datatable"},[s("tbody",{staticClass:"datatable-body"},t._l(t.entries,(function(e){return s("tr",{key:e,class:{selected:t.currentTask&&t.currentTask.id===e,"datatable-row":!0,"datatable-row--selectable":!0},on:{click:function(s){t.selectTask(t.getTask(e))}}},[t.getTaskType(e)?s("task-type-cell",{staticClass:"type",attrs:{"task-type":t.getTaskType(e),"production-id":t.currentProduction.id}}):t._e(),s("td",{staticClass:"status"},[t.getTask(e)?s("validation-tag",{attrs:{task:t.getTask(e),"is-static":!0}}):t._e()],1),s("td",{staticClass:"assignees"},[s("div",{staticClass:"flexrow"},t._l(t.getAssignees(e),(function(a){return s("div",{key:a,staticClass:"avatar-wrapper"},[s("people-avatar",{key:e+"-"+a,staticClass:"person-avatar flexrow-item",attrs:{person:t.personMap[a],size:30,"font-size":15}})],1)})),0)]),s("td",{staticClass:"end-cell"})],1)})),0)])]):t._e()],1)},r=[],i=(s("a4d3"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("ade3")),n=s("2f62"),o=s("58f5"),c=s("e60b"),l=s("fe13"),d=s("eb8c");function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function h(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var f={name:"entity-task-list",components:{TableInfo:c["a"],TaskTypeCell:o["a"],PeopleAvatar:d["a"],ValidationTag:l["a"]},props:{entries:{type:Array,default:function(){return[]}},isLoading:{type:Boolean,default:!1},isError:{type:Boolean,default:!1}},data:function(){return{currentTask:null}},computed:h({},Object(n["c"])(["currentProduction","personMap","taskMap","taskTypeMap"])),methods:h({},Object(n["b"])([]),{onBodyScroll:function(t,e){this.$refs.headerWrapper.style.left="-".concat(e.scrollLeft,"px")},getTask:function(t){return"string"===typeof t?this.taskMap[t]:t},getTaskType:function(t){var e=this.getTask(t);return e?this.taskTypeMap[e.task_type_id]:null},getAssignees:function(t){var e=this.getTask(t);return e?e.assignees:[]},selectTask:function(t){this.currentTask=t,this.$emit("task-selected",t)}})},p=f,b=(s("33d8"),s("2877")),g=Object(b["a"])(p,a,r,!1,null,"432680ca",null);e["a"]=g.exports},"30e3":function(t,e,s){},"33d8":function(t,e,s){"use strict";var a=s("a160"),r=s.n(a);r.a},"5ae3":function(t,e,s){"use strict";var a=s("30e3"),r=s.n(a);r.a},a160:function(t,e,s){},de06:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns fixed-page shot"},[s("div",{staticClass:"column main-column"},[s("div",{staticClass:"page-header flexrow"},[s("router-link",{staticClass:"flexrow-item has-text-centered back-link",attrs:{to:t.shotsPath}},[s("chevron-left-icon")],1),t.currentShot?s("entity-thumbnail",{staticClass:"shot-thumbnail flexrow-item",attrs:{entity:t.currentShot,"with-link":!1}}):t._e(),s("div",{staticClass:"flexrow-item"},[s("page-title",{staticClass:"entity-title",attrs:{text:t.title}})],1),s("div",{staticClass:"flexrow-item"},[t.isCurrentUserManager?s("button-simple",{attrs:{icon:"edit"},on:{click:function(e){t.modals.edit=!0}}}):t._e()],1)],1),s("div",{staticClass:"flexrow infos"},[s("div",{staticClass:"flexrow-item"},[s("page-subtitle",{attrs:{text:t.$t("shots.tasks")}}),s("entity-task-list",{staticClass:"task-list",attrs:{entries:t.currentTasks,"is-loading":!t.currentShot,"is-error":!1},on:{"task-selected":t.onTaskSelected}})],1),s("div",{staticClass:"flexrow-item"},[s("page-subtitle",{attrs:{text:t.$t("main.info")}}),s("div",{staticClass:"table-body"},[t.currentShot?s("table",{staticClass:"datatable"},[s("tbody",{staticClass:"datatable-body"},[t.currentShot.data&&t.currentShot.data.fps?s("tr",{staticClass:"datatable-row"},[s("td",{staticClass:"field-label"},[t._v(t._s(t.$t("shots.fields.fps")))]),s("td",[t._v(" "+t._s(t.currentShot?t.currentShot.data.fps:"")+" ")])]):t._e(),t.currentShot.data&&t.currentShot.data.frame_in?s("tr",{staticClass:"datatable-row"},[s("td",{staticClass:"field-label"},[t._v(t._s(t.$t("shots.fields.frame_in")))]),s("td",[t._v(" "+t._s(t.currentShot?t.currentShot.data.frame_in:"")+" ")])]):t._e(),t.currentShot.data&&t.currentShot.data.frame_out?s("tr",{staticClass:"datatable-row"},[s("td",{staticClass:"field-label"},[t._v(t._s(t.$t("shots.fields.frame_out")))]),s("td",[t._v(" "+t._s(t.currentShot?t.currentShot.data.frame_out:"")+" ")])]):t._e(),s("tr",{staticClass:"datatable-row"},[s("td",{staticClass:"field-label"},[t._v(t._s(t.$t("shots.fields.description")))]),s("description-cell",{attrs:{entry:t.currentShot,full:!0}})],1),s("tr",{staticClass:"datatable-row"},[s("td",{staticClass:"field-label"},[t._v(t._s(t.$t("shots.fields.nb_frames")))]),s("td",[t._v(" "+t._s(t.currentShot?t.currentShot.nb_frames:"")+" ")])]),t._l(t.shotMetadataDescriptors,(function(e){return s("tr",{key:e.id,staticClass:"datatable-row"},[s("td",{staticClass:"field-label"},[t._v(t._s(e.name))]),s("td",[t._v(" "+t._s(t.currentShot.data?t.currentShot.data[e.field_name]:"")+" ")])])}))],2)]):t._e()])],1)]),s("div",{staticClass:"shot-casting"},[s("page-subtitle",{attrs:{text:t.$t("shots.casting")}}),t.currentShot?s("div",[t.currentShot.castingAssetsByType&&t.currentShot.castingAssetsByType[0].length>0?s("div",t._l(t.currentShot.castingAssetsByType,(function(e){return s("div",{key:e.length>0?e[0].asset_type_name:"",staticClass:"type-assets"},[s("div",{staticClass:"asset-type"},[t._v(" "+t._s(e.length>0?e[0].asset_type_name:"")+" ("+t._s(e.length)+") ")]),s("div",{staticClass:"asset-list"},t._l(e,(function(e){return s("router-link",{key:e.id,staticClass:"asset-link",attrs:{to:{name:"asset",params:{production_id:t.currentProduction.id,asset_id:e.asset_id}}}},[s("entity-thumbnail",{attrs:{entity:e,square:!0,"empty-width":103,"empty-height":103,"with-link":!1}}),s("div",[s("span",[t._v(t._s(e.asset_name))]),e.nb_occurences>1?s("span",[t._v(" ("+t._s(e.nb_occurences)+") ")]):t._e()])],1)})),1)])})),0):s("div",[t._v(" "+t._s(t.$t("shots.no_casting"))+" ")])]):s("table-info",{attrs:{"is-loading":t.casting.isLoadin,"is-error":t.casting.isError}})],1)]),t.currentTask?s("div",{staticClass:"column side-column"},[s("task-info",{attrs:{task:t.currentTask}})],1):t._e(),s("edit-shot-modal",{ref:"edit-shot-modal",attrs:{active:t.modals.edit,"is-loading":t.loading.edit,"is-error":t.errors.edit,"shot-to-edit":t.currentShot},on:{cancel:function(e){t.modals.edit=!1},confirm:t.confirmEditShot}})],1)},r=[],i=(s("a4d3"),s("4de4"),s("4160"),s("b0c0"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("ade3")),n=s("2f62"),o=s("0a35"),c=s("de40"),l=s("0fcb"),d=s("162b"),u=s("bb21"),h=s("0024"),f=s("8d07"),p=s("8751"),b=s("e60b"),g=s("9d94");function _(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function v(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?_(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):_(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var m={name:"shot",components:{ButtonSimple:c["a"],ChevronLeftIcon:o["g"],DescriptionCell:l["a"],EditShotModal:d["a"],EntityThumbnail:u["a"],EntityTaskList:h["a"],PageSubtitle:p["a"],PageTitle:f["a"],TableInfo:b["a"],TaskInfo:g["a"]},data:function(){return{currentShot:null,currentTask:null,casting:{isLoading:!1,isError:!1},errors:{edit:!1},loading:{edit:!1},modals:{edit:!1}}},mounted:function(){var t=this;this.clearSelectedTasks(),this.currentShot=this.getCurrentShot(),this.casting.isLoading=!0,this.casting.isError=!1,this.currentShot?this.loadShotCasting(this.currentShot).then((function(){t.casting.isLoading=!1})).catch((function(e){t.casting.isError=!0,console.error(e)})):this.resetData()},computed:v({},Object(n["c"])(["currentEpisode","currentProduction","isCurrentUserManager","isTVShow","route","taskMap","shotMap","shotMetadataDescriptors","shotsPath"]),{currentTasks:function(){return this.currentShot?this.currentShot.tasks:[]},title:function(){return this.currentShot?this.currentShot.episode_name?"".concat(this.currentShot.episode_name," / ")+"".concat(this.currentShot.sequence_name," / ")+"".concat(this.currentShot.name):"".concat(this.currentShot.sequence_name," / ")+"".concat(this.currentShot.name):"Loading..."},shotThumbnailPath:function(){var t=this.currentShot.preview_file_id;return"/api/pictures/originals/preview-files/".concat(t,".png")},isPreview:function(){return this.currentShot&&this.currentShot.preview_file_id&&this.currentShot.preview_file_id.length>0}}),methods:v({},Object(n["b"])(["clearSelectedTasks","editShot","loadAssets","loadShots","loadShotCasting"]),{changeTab:function(t){this.selectedTab=t},getCurrentShot:function(){return this.shotMap[this.route.params.shot_id]||null},onEditClicked:function(){this.modals.edit=!0},confirmEditShot:function(t){var e=this;t.id=this.currentShot.id,this.loading.edit=!0,this.errors.edit=!1,this.editShot({data:t,callback:function(t){t?(e.loading.edit=!1,e.errors.edit=!0):(e.loading.edit=!1,e.modals.edit=!1)}})},onTaskSelected:function(t){this.currentTask=t},resetData:function(){var t=this;this.loadShots((function(){t.loadAssets().then((function(){return t.currentShot=t.getCurrentShot(),t.loadShotCasting(t.currentShot).then((function(){t.casting.isLoading=!1})).catch((function(e){console.error(e),t.casting.isError=!0}))}))}))}}),watch:{currentProduction:function(){this.isTVShow||this.resetData()},currentEpisode:function(){this.isTVShow&&this.resetData()}},metaInfo:function(){return{title:"".concat(this.title," - Kitsu")}}},y=m,S=(s("5ae3"),s("2877")),k=Object(S["a"])(y,a,r,!1,null,"687f9099",null);e["default"]=k.exports}}]);
//# sourceMappingURL=chunk-32916196.945fd5e6.js.map