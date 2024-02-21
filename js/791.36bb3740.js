"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[791],{5791:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var l=function(){var e=this,t=e._self._c;return t("div",[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),t("el-breadcrumb-item",[e._v("患者管理")])],1),t("div",{staticStyle:{"margin-bottom":"20px","margin-top":"20px"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入姓名"},model:{value:e.params.name,callback:function(t){e.$set(e.params,"name",t)},expression:"params.name"}}),t("el-input",{staticStyle:{width:"200px","margin-left":"5px"},attrs:{placeholder:"请输入电话"},model:{value:e.params.tel,callback:function(t){e.$set(e.params,"tel",t)},expression:"params.tel"}}),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:function(t){return e.findBr()}}},[e._v("查询")]),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger"},on:{click:function(t){return e.clearSearch()}}},[e._v("清空")]),t("el-button",{staticStyle:{"margin-left":"380px"},attrs:{type:"primary"},on:{click:function(t){return e.addBr()}}},[e._v("添加")])],1),t("div",[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"70%"},attrs:{data:e.tableData,stripe:"",border:"",size:"mini"}},[t("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left"}},[t("el-form-item",{attrs:{label:"姓名"}},[t("span",[e._v(e._s(a.row.name))])]),t("el-form-item",{attrs:{label:"性别"}},[t("span",[e._v(e._s(a.row.sex))])]),t("el-form-item",{attrs:{label:"年龄"}},[t("span",[e._v(e._s(a.row.age))])]),t("el-form-item",{attrs:{label:"电话"}},[t("span",[e._v(e._s(a.row.tel))])]),t("el-form-item",{attrs:{label:"来源"}},[t("span",[e._v(e._s(a.row.bfrom))])]),t("el-form-item",{attrs:{label:"地址"}},[t("span",[e._v(e._s(a.row.address))])])],1)]}}])}),t("el-table-column",{attrs:{align:"center","label-align":"center","show-overflow-tooltip":!0,prop:"name",width:"100",label:"姓名"}}),t("el-table-column",{attrs:{align:"center","label-align":"center","show-overflow-tooltip":!0,prop:"sex",width:"100",label:"性别"}}),t("el-table-column",{attrs:{align:"center","label-align":"center","show-overflow-tooltip":!0,prop:"age",width:"100",label:"年龄"}}),t("el-table-column",{attrs:{align:"center","label-align":"center","show-overflow-tooltip":!0,prop:"tel",width:"120",label:"电话"}}),t("el-table-column",{attrs:{align:"center","label-align":"center","show-overflow-tooltip":!0,prop:"bfrom",width:"100",label:"来源"}}),t("el-table-column",{attrs:{align:"center","label-align":"center","show-overflow-tooltip":!0,prop:"address",label:"地址"}}),t("el-table-column",{attrs:{align:"center","label-align":"center",fixed:"right",width:"260",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.editBr(a.row)}}},[e._v("编辑")]),t("RouterLink",{staticStyle:{"margin-left":"10px"},attrs:{to:{name:"bl",params:{bid:a.row.id}}}},[t("el-button",{attrs:{type:"success"}},[e._v("病历")])],1),t("el-popconfirm",{attrs:{title:"确定删除吗？"},on:{confirm:function(t){return e.delBr(a.row.id)}}},[t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{slot:"reference",type:"danger"},slot:"reference"},[e._v("删除")])],1)]}}])})],1)],1),t("div",[t("el-pagination",{staticStyle:{"margin-top":"20px"},attrs:{"current-page":e.params.pageNum,"page-sizes":[5,10,50,100],"page-size":e.params.pageSize,layout:"total, sizes, prev, pager, next",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),t("div",[t("el-dialog",{attrs:{title:"请填写信息",visible:e.dialogFormVisible,width:"30%","before-close":e.CancelDialog},on:{"update:visible":function(t){e.dialogFormVisible=t},open:function(t){e.more++}}},[t("el-form",{key:e.more,ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"姓名","label-width":"15%",prop:"name"}},[t("el-input",{staticStyle:{width:"70%"},attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"性别","label-width":"15%",prop:"sex"}},[t("el-radio-group",{model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[t("el-radio",{attrs:{label:"男"}},[e._v("男")]),t("el-radio",{attrs:{label:"女"}},[e._v("女")])],1)],1),t("el-form-item",{attrs:{label:"年龄","label-width":"15%",prop:"age"}},[t("el-input",{staticStyle:{width:"70%"},attrs:{autocomplete:"off",type:"number"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),t("el-form-item",{attrs:{label:"电话","label-width":"15%",prop:"tel"}},[t("el-input",{staticStyle:{width:"70%"},attrs:{autocomplete:"off",type:"tel"},model:{value:e.form.tel,callback:function(t){e.$set(e.form,"tel",t)},expression:"form.tel"}})],1),t("el-form-item",{attrs:{label:"来源","label-width":"15%",prop:"bfrom"}},[t("el-select",{attrs:{placeholder:"请选择病人来源"},model:{value:e.form.bfrom,callback:function(t){e.$set(e.form,"bfrom",t)},expression:"form.bfrom"}},[t("el-option",{attrs:{label:"自行就诊",value:"自行就诊"}}),t("el-option",{attrs:{label:"他人介绍",value:"他人介绍"}})],1)],1),t("el-form-item",{attrs:{label:"地址","label-width":"15%",prop:"address"}},[t("el-input",{staticStyle:{width:"70%"},attrs:{autocomplete:"off"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.CancelDialog}},[e._v("取 消")]),t("el-button",{attrs:{type:"success"},on:{click:e.resetRef}},[e._v("重置")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitBr()}}},[e._v("确 定")])],1)],1)],1)],1)},r=[],s=(a(560),a(4471)),o={name:"BrView",data(){return{params:{name:"",tel:"",pageNum:1,pageSize:5},total:0,tableData:[],dialogFormVisible:!1,form:{},rules:{name:[{required:!0,message:"请输入姓名",trigger:blur}],sex:[{required:!0,message:"请选择性别",trigger:blur}],age:[{required:!0,message:"请输入年龄",trigger:blur}],tel:[{required:!0,message:"请输入电话",trigger:blur}],address:[],bfrom:[]},more:0,loading:!0}},created(){this.findBr()},methods:{load(){s.Z.get("/findAllBr").then((e=>{0===e.state&&(this.tableData=e.data)}))},findBr(){s.Z.get("/findBr",{params:this.params}).then((e=>{0===e.state?(this.tableData=e.data.list,this.total=e.data.total,this.loading=!1,this.$message({message:"查询成功",type:"success"})):(this.$message.error(e.message),this.$router.push("/login"))}))},clearSearch(){this.params={pageNum:1,pageSize:5,name:"",phone:""},this.findBr()},handleSizeChange(e){this.params.pageSize=e,this.findBr()},handleCurrentChange(e){this.params.pageNum=e,this.findBr()},addBr(){this.form={},this.dialogFormVisible=!0},editBr(e){this.form=e,this.dialogFormVisible=!0},submitBr(){this.$refs.form.validate((e=>{e&&s.Z.post("/saveBr",this.form).then((e=>{0===e.state?(this.$message({message:"操作成功",type:"success"}),this.dialogFormVisible=!1,this.findBr()):this.$message.error(e.message)}))}))},delBr(e){s.Z.delete("/delBr/"+e).then((e=>{0===e.state?(this.$message({message:"删除成功",type:"success"}),this.findBr()):this.$message.error(e.message)}))},resetRef(){this.$refs.form.resetFields()},CancelDialog(){this.dialogFormVisible=!1,this.resetRef()}}},i=o,n=a(1001),m=(0,n.Z)(i,l,r,!1,null,"0ef98384",null),p=m.exports}}]);
//# sourceMappingURL=791.36bb3740.js.map