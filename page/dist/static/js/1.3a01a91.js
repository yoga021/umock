webpackJsonp([1],{162:function(t,e,o){function r(t){i||o(175)}var i=!1,s=o(18)(o(170),o(183),r,null,null);s.options.__file="/Users/alicia/Documents/develop/github/umock/page/src/components/project/project-list.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)}),s.options.functional,t.exports=s.exports},163:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=new t({id:24,name:"Inmind",beginPath:"inmind",isPublic:0,description:"",private:0,swagger:"",proxy:"",modifyTime:{type:t.DATE},rewrite:""})}).call(e,o(24))},170:function(t,e,o){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0});var i=o(163),s=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={data:function(){return{list:[],opened:!1,project:s.default.parse({}),menu:this.$route.query.menu||"public",rule:{required:["name","beginPath","isPublic","proxy","private"]}}},mounted:function(){this.getList()},watch:{"$route.query.menu":function(){this.menu=this.$route.query.menu||"public"}},methods:{change:function(t){this.$router.push({name:"index",query:{menu:t.key}})},getTarget:function(){return document.querySelector(".app-body")},getBg:function(t){return{"background-color":["rgb(223, 247, 233)","rgb(251, 237, 238)","rgb(230, 245, 255)","rgb(255, 239, 213)","rgb(250, 230, 253)","rgb(232, 234, 255)"][Math.round(5*Math.random())]}},getList:function(){var e=this;t.Project.list().then(function(t){e.list=s.default.parse(t.content)})},editProject:function(t){this.project=t?r.copy(t):s.default.parse({}),this.opened=!0},close:function(){this.opened=!1,this.project=s.default.parse({})},deleteProject:function(){var e=this;this.$Confirm("确定删除？").then(function(){t.Project.delete(e.project.id).then(function(t){"ok"==t.result&&(e.$Message.success("删除成功"),e.getList(),e.close())})})},doCreate:function(){var e=this;if(this.$refs.createForm.valid().result){var o=s.default.dispose(this.project);t.Project.editProject(o).then(function(t){"ok"==t.result&&(e.$Message.success("保存成功"),e.getList(),e.close())})}},analysis:function(){var e=this;t.Project.getLocation().then(function(t){var o="";if(e.project.proxy){var r=e.project.proxy.match(/\:(\d+)/);r.index&&(o=":"+r[1])}e.project.proxy="http://"+t.ip+o})}},computed:{projectList:function(){var t="public"==this.menu?2:1;return this.list.filter(function(e){return e.private==t})}}}}).call(e,o(25),o(12))},175:function(t,e){},183:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project-list"},[o("div",{staticClass:"content-body"},[o("div",{staticClass:"content-body-title"},[o("span",{directives:[{name:"font",rawName:"v-font",value:30,expression:"30"}]},[t._v("Projects")]),t._v(" "),o("Tabs",{staticClass:"content-body-tabs",attrs:{datas:{public:"公共",private:"私有"}},on:{change:t.change},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}}),t._v(" "),o("div",{directives:[{name:"font",rawName:"v-font",value:20,expression:"20"}],staticClass:"middle-right",on:{click:function(e){t.editProject()}}},[o("span",{staticClass:"link"},[t._v("创建")])])],1),t._v(" "),o("ul",{staticClass:"project-list"},t._l(t.projectList,function(e){return o("li",{key:e},[o("p",[o("span",{staticClass:"project-title"},[o("span",{staticClass:"project-author",style:t.getBg(e)},[t._v(t._s(e.name.substr(0,1)))]),t._v(" "),o("router-link",{attrs:{to:{name:"detail",params:{id:e.id}}}},[t._v(t._s(e.name)+"  /  "+t._s(e.beginPath))])],1),o("i",{staticClass:"h-split"}),t._v(" "),o("span",{staticClass:"gray-color"},[t._v(t._s(e.description)+"- "),o("span",{directives:[{name:"font",rawName:"v-font",value:13,expression:"13"}]},[t._v(t._s(e.isPublic?"URL前缀":"HEAD参数"))])]),t._v(" "),o("span",{staticClass:"project-edit middle",on:{click:function(o){t.editProject(e)}}},[o("i",{staticClass:"h-icon-setting text-hover"})])])])}))]),t._v(" "),o("Modal",{model:{value:t.opened,callback:function(e){t.opened=e},expression:"opened"}},[o("div",{attrs:{slot:"header"},slot:"header"},[t._v("Project")]),t._v(" "),o("div",{directives:[{name:"width",rawName:"v-width",value:500,expression:"500"}]},[o("Form",{ref:"createForm",attrs:{rules:t.rule,model:t.project,"label-width":120}},[o("FormItem",{attrs:{label:"项目名",prop:"name"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.project.name,expression:"project.name"}],attrs:{type:"text"},domProps:{value:t.project.name},on:{input:function(e){e.target.composing||t.$set(t.project,"name",e.target.value)}}})]),t._v(" "),o("FormItem",{attrs:{label:"类型",prop:"isPublic"}},[o("Radio",{attrs:{datas:[{key:1,title:"URL前缀"},{key:0,title:"HEAD参数"}]},model:{value:t.project.isPublic,callback:function(e){t.$set(t.project,"isPublic",e)},expression:"project.isPublic"}})],1),t._v(" "),o("FormItem",{attrs:{label:"识别参数",prop:"beginPath"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.project.beginPath,expression:"project.beginPath"}],attrs:{type:"text"},domProps:{value:t.project.beginPath},on:{input:function(e){e.target.composing||t.$set(t.project,"beginPath",e.target.value)}}})]),t._v(" "),o("FormItem",{attrs:{label:"去除url前缀"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.project.rewrite,expression:"project.rewrite"}],attrs:{type:"text"},domProps:{value:t.project.rewrite},on:{input:function(e){e.target.composing||t.$set(t.project,"rewrite",e.target.value)}}})]),t._v(" "),o("FormItem",{attrs:{label:"反向代理",prop:"proxy"}},[o("div",{staticClass:"h-input-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.project.proxy,expression:"project.proxy"}],attrs:{type:"text"},domProps:{value:t.project.proxy},on:{input:function(e){e.target.composing||t.$set(t.project,"proxy",e.target.value)}}}),o("span",{staticClass:"h-input-addon",on:{click:function(e){t.analysis()}}},[o("span",{staticClass:"link"},[t._v("自动解析")])])])]),t._v(" "),o("FormItem",{attrs:{label:"private"}},[o("Radio",{attrs:{dict:"Private"},model:{value:t.project.private,callback:function(e){t.$set(t.project,"private",e)},expression:"project.private"}})],1),t._v(" "),o("FormItem",{attrs:{label:"swagger"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.project.swagger,expression:"project.swagger"}],attrs:{type:"text"},domProps:{value:t.project.swagger},on:{input:function(e){e.target.composing||t.$set(t.project,"swagger",e.target.value)}}})]),t._v(" "),o("FormItem",{attrs:{label:"描述"}},[o("textarea",{directives:[{name:"autosize",rawName:"v-autosize"},{name:"model",rawName:"v-model",value:t.project.description,expression:"project.description"}],domProps:{value:t.project.description},on:{input:function(e){e.target.composing||t.$set(t.project,"description",e.target.value)}}})])],1)],1),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[t.project.id?o("button",{staticClass:"h-btn h-btn-red",staticStyle:{float:"left"},on:{click:function(e){t.deleteProject()}}},[t._v("删除")]):t._e(),o("button",{staticClass:"h-btn",on:{click:t.close}},[t._v("取消")]),o("button",{staticClass:"h-btn h-btn-primary",on:{click:t.doCreate}},[t._v("确定")])])]),t._v(" "),o("BackTop",{attrs:{target:t.getTarget,bottom:40,right:40}})],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});