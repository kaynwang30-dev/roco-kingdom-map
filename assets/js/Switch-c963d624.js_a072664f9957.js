/**
 * name: @taptap-cupid-spa/game-map
 * version: v1.0.0
 * description: game map
 * author: jon@ucbay.com
 */
import{_ as d}from"./map-fdcf1ab2.js";import{y as n,z as _,A as o,G as h,H as l}from"./@ant-design/icons-vue-c07ec96a.js";const p={props:{checked:Boolean,Number,disabled:{type:Boolean,default:!1}},emits:["update:checked","change"],methods:{change(e){const t=typeof this.$props.checked=="boolean",{checked:c}=e.target,s=t?c:c?1:0;this.$emit("update:checked",s),this.$emit("change",s)}}};const i=e=>(h("data-v-0a0835db"),e=e(),l(),e),r={class:"switch"},u=["onchange","checked","disabled"],b=i(()=>o("span",{class:"slider"},null,-1));function m(e,t,c,s,k,a){return n(),_("label",r,[o("input",{type:"checkbox",onchange:a.change,checked:c.checked,disabled:c.disabled},null,8,u),b])}const y=d(p,[["render",m],["__scopeId","data-v-0a0835db"]]);export{y as _};
