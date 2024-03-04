import{r as n}from"./index-CBqU2yxZ.js";var W={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X=n,Z=Symbol.for("react.element"),ee=Symbol.for("react.fragment"),ae=Object.prototype.hasOwnProperty,le=X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,re={key:!0,ref:!0,__self:!0,__source:!0};function Y(e,l,r){var a,u={},t=null,s=null;r!==void 0&&(t=""+r),l.key!==void 0&&(t=""+l.key),l.ref!==void 0&&(s=l.ref);for(a in l)ae.call(l,a)&&!re.hasOwnProperty(a)&&(u[a]=l[a]);if(e&&e.defaultProps)for(a in l=e.defaultProps,l)u[a]===void 0&&(u[a]=l[a]);return{$$typeof:Z,type:e,key:t,ref:s,props:u,_owner:le.current}}f.Fragment=ee;f.jsx=Y;f.jsxs=Y;W.exports=f;var v=W.exports;function d(e){return typeof e=="string"&&e.length>0}const b=n.forwardRef((e,l)=>{const{className:r,children:a,...u}=e,t=["app-card--title",r].filter(d);return v.jsx("h1",{...u,ref:l,className:t.join(" "),children:a})});b.displayName="AppCardTitle";try{b.displayName="AppCardTitle",b.__docgenInfo={description:"",displayName:"AppCardTitle",props:{}}}catch{}const ue="_tags_1jn3i_1",te={tags:ue},y=n.forwardRef((e,l)=>{const{className:r,children:a,...u}=e,t=["app-card--tags",te.tags,r].filter(d);return v.jsx("div",{...u,ref:l,className:t.join(" "),children:a})});y.displayName="AppCardTags";try{y.displayName="AppCardTags",y.__docgenInfo={description:"",displayName:"AppCardTags",props:{}}}catch{}const h=n.forwardRef((e,l)=>{const{className:r,children:a,...u}=e,t=["app-card--description","p-medium",r].filter(d);return v.jsx("h1",{...u,ref:l,className:t.join(" "),children:a})});h.displayName="AppCardDescription";try{h.displayName="AppCardDescription",h.__docgenInfo={description:"",displayName:"AppCardDescription",props:{}}}catch{}const _=n.forwardRef((e,l)=>{const{className:r,children:a,...u}=e,t=["app-card--body",r].filter(d);return v.jsx("div",{...u,ref:l,className:t.join(" "),children:a})});_.displayName="AppCardBody";try{_.displayName="AppCardBody",_.__docgenInfo={description:"",displayName:"AppCardBody",props:{}}}catch{}const N=n.forwardRef((e,l)=>{const{accentColor:r="var(--blue700)",className:a,children:u,...t}=e,s=["app-card",a].filter(d);return v.jsx("div",{...t,ref:l,className:s.join(" "),style:{"--accent-color":r},children:u})});N.displayName="AppCard";try{N.displayName="AppCard",N.__docgenInfo={description:"",displayName:"AppCard",props:{accentColor:{defaultValue:null,description:"",name:"accentColor",required:!1,type:{name:"enum",value:[{value:'"var(--blue100)"'},{value:'"var(--blue200)"'},{value:'"var(--blue300)"'},{value:'"var(--blue400)"'},{value:'"var(--blue500)"'},{value:'"var(--blue600)"'},{value:'"var(--blue700)"'},{value:'"var(--blue800)"'},{value:'"var(--blue900)"'},{value:'"var(--indigo50)"'},{value:'"var(--indigo100)"'},{value:'"var(--indigo200)"'},{value:'"var(--indigo300)"'},{value:'"var(--indigo400)"'},{value:'"var(--indigo500)"'},{value:'"var(--indigo600)"'},{value:'"var(--indigo700)"'},{value:'"var(--indigoAlpha4)"'},{value:'"var(--indigoAlpha6)"'},{value:'"var(--indigoAlpha8)"'},{value:'"var(--indigoAlpha12)"'},{value:'"var(--indigoAlpha20)"'},{value:'"var(--indigoAlpha40)"'},{value:'"var(--indigoAlpha80)"'},{value:'"var(--green100)"'},{value:'"var(--green400)"'},{value:'"var(--green700)"'},{value:'"var(--green800)"'},{value:'"var(--black)"'},{value:'"var(--blackAlpha20)"'},{value:'"var(--blackAlpha40)"'},{value:'"var(--blackAlpha60)"'},{value:'"var(--blackAlpha80)"'},{value:'"var(--red50)"'},{value:'"var(--red100)"'},{value:'"var(--red400)"'},{value:'"var(--red600)"'},{value:'"var(--red700)"'},{value:'"var(--red800)"'},{value:'"var(--red900)"'},{value:'"var(--yellow100)"'},{value:'"var(--yellow400)"'},{value:'"var(--yellow700)"'},{value:'"var(--white)"'},{value:'"var(--whiteAlpha20)"'},{value:'"var(--whiteAlpha40)"'},{value:'"var(--whiteAlpha80)"'}]}}}}}catch{}function ve(e){switch(e){case"small":return"button-small";case"medium":return"button-medium";case"large":return""}}function se(e){switch(e){case"primary":return"button-primary";case"secondary":return"button-secondary";case"tertiary":return"button-tertiary";case"danger":return"button-danger"}}function ne(e){return e?"button-loading":""}const w=n.forwardRef((e,l)=>{const{size:r="medium",variant:a="primary",isDisabled:u=!1,isLoading:t=!1,children:s,className:i,...o}=e,c=["button",ve(r),se(a),ne(t),i].filter(d).filter(Boolean);return v.jsx("button",{...o,ref:l,className:c.join(" "),disabled:u,children:s})});w.displayName="Button";try{w.displayName="Button",w.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"danger"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}const oe={"empty-label":"_empty-label_15opv_1"},x=n.forwardRef((e,l)=>{const{label:r,value:a,onChange:u,className:t,...s}=e,i=o=>u==null?void 0:u(o.target.checked);return v.jsxs("label",{className:"checkbox",children:[v.jsx("input",{...s,ref:l,className:t,type:"checkbox",checked:a,onChange:i}),r?v.jsx("span",{children:r}):v.jsx("span",{className:oe["empty-label"]})]})});x.displayName="Checkbox";try{x.displayName="Checkbox",x.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: boolean) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}}}}}catch{}const k=n.forwardRef((e,l)=>{const{className:r,...a}=e;return v.jsx("hr",{...a,ref:l,className:r})});k.displayName="Divider";try{k.displayName="Divider",k.__docgenInfo={description:"",displayName:"Divider",props:{}}}catch{}function ie(e){switch(e){case"small":return"form-group-small";case"medium":return"form-group"}}function de(e){return e?"form-group__disabled":""}const A=n.forwardRef((e,l)=>{const{size:r="medium",status:a,isDisabled:u,className:t,children:s,...i}=e,o=[ie(r),de(u),a,t].filter(d);return v.jsx("div",{...i,ref:l,className:o.join(" "),children:s})});A.displayName="FormGroup";try{A.displayName="FormGroup",A.__docgenInfo={description:"",displayName:"FormGroup",props:{status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}}}}}catch{}function ce(e){switch(e){case"small":return"input-small";case"medium":return""}}function pe(e){return e?"border-left":""}function me(e){return e?"border-right":""}function K(e){switch(e){case"1/4":return"one-fourth";case"2/4":return"two-fourth";case"3/4":return"three-fourth";case"4/4":return""}}const C=n.forwardRef((e,l)=>{const{value:r,onChange:a,size:u="medium",isDisabled:t=!1,isReadOnly:s=!1,flexModifier:i="4/4",className:o,...c}=e,p=["input",o,ce(u),K(i)].filter(d),m=Q=>a==null?void 0:a(Q.target.value);return v.jsx("input",{ref:l,...c,className:p.join(" "),value:r,onChange:m,disabled:t,readOnly:s})});C.displayName="Input";try{C.displayName="Input",C.__docgenInfo={description:"",displayName:"Input",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}},flexModifier:{defaultValue:null,description:"",name:"flexModifier",required:!1,type:{name:"enum",value:[{value:'"1/4"'},{value:'"2/4"'},{value:'"3/4"'},{value:'"4/4"'}]}}}}}catch{}const I=n.forwardRef((e,l)=>{const{className:r,children:a,borderLeft:u=!1,borderRight:t=!1,flexModifier:s="4/4",...i}=e,o=["input-decoration",pe(u),me(t),K(s),r].filter(d);return v.jsx("span",{ref:l,...i,className:o.join(" "),children:a})});I.displayName="InputDecoration";try{I.displayName="InputDecoration",I.__docgenInfo={description:"",displayName:"InputDecoration",props:{flexModifier:{defaultValue:null,description:"",name:"flexModifier",required:!1,type:{name:"enum",value:[{value:'"1/4"'},{value:'"2/4"'},{value:'"3/4"'},{value:'"4/4"'}]}},borderLeft:{defaultValue:null,description:"",name:"borderLeft",required:!1,type:{name:"boolean"}},borderRight:{defaultValue:null,description:"",name:"borderRight",required:!1,type:{name:"boolean"}}}}}catch{}const j=n.forwardRef((e,l)=>{const{className:r,children:a,...u}=e,t=["input-group",r].filter(d);return v.jsx("div",{ref:l,...u,className:t.join(" "),children:a})});j.displayName="InputGroup";try{j.displayName="InputGroup",j.__docgenInfo={description:"",displayName:"InputGroup",props:{}}}catch{}const T=n.forwardRef((e,l)=>{const{className:r,children:a,...u}=e;return v.jsx("label",{...u,ref:l,className:r,children:a})});T.displayName="InputLabel";try{T.displayName="InputLabel",T.__docgenInfo={description:"",displayName:"InputLabel",props:{}}}catch{}const q=n.forwardRef((e,l)=>{const{className:r,children:a,...u}=e,t=["status-text",r].filter(d);return v.jsx("div",{ref:l,...u,className:t.join(" "),children:a})});q.displayName="InputStatusText";try{q.displayName="InputStatusText",q.__docgenInfo={description:"",displayName:"InputStatusText",props:{}}}catch{}const ge="_xxsmall_1dwg7_1",fe="_xsmall_1dwg7_7",be="_small_1dwg7_13",ye="_medium_1dwg7_19",he="_large_1dwg7_25",_e="_xlarge_1dwg7_31",Ne="_xxlarge_1dwg7_37",we={xxsmall:ge,xsmall:fe,small:be,medium:ye,large:he,xlarge:_e,xxlarge:Ne},R=n.forwardRef((e,l)=>{const{size:r="medium",name:a,className:u,...t}=e,s=["icon",`icon-${a}`,we[r],u].filter(d);return v.jsx("span",{...t,ref:l,className:s.join(" ")})});R.displayName="Icon";try{R.displayName="Icon",R.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"embed"'},{value:'"link"'},{value:'"map"'},{value:'"search"'},{value:'"video"'},{value:'"image"'},{value:'"line"'},{value:'"stop"'},{value:'"text"'},{value:'"key"'},{value:'"security"'},{value:'"checkbox"'},{value:'"document"'},{value:'"grid"'},{value:'"group"'},{value:'"list"'},{value:'"presentation"'},{value:'"timer"'},{value:'"billing"'},{value:'"home"'},{value:'"user"'},{value:'"eye-closed"'},{value:'"shared-with"'},{value:'"team"'},{value:'"author-cursor-view"'},{value:'"user-load"'},{value:'"eye"'},{value:'"comment-feedback"'},{value:'"photo"'},{value:'"folder"'},{value:'"upload"'},{value:'"help"'},{value:'"unlink"'},{value:'"settings"'},{value:'"pin"'},{value:'"analytics"'},{value:'"deactivated"'},{value:'"doc-note"'},{value:'"filters"'},{value:'"invitation"'},{value:'"trash"'},{value:'"help-question"'},{value:'"magnet"'},{value:'"bell"'},{value:'"public"'},{value:'"sound-on"'},{value:'"envelope"'},{value:'"play"'},{value:'"lock"'},{value:'"unlock"'},{value:'"plug"'},{value:'"mic-on"'},{value:'"mic-off"'},{value:'"activity"'},{value:'"sound-off"'},{value:'"calendar"'},{value:'"learn"'},{value:'"thumbs-up"'},{value:'"thumbs-down"'},{value:'"backup"'},{value:'"pdf"'},{value:'"sticky-recognition"'},{value:'"boards"'},{value:'"app-boilerplate"'},{value:'"google"'},{value:'"tag"'},{value:'"parameters-vertical"'},{value:'"text-heading-one"'},{value:'"text-heading-two"'},{value:'"text-italic-bui"'},{value:'"text-underline-bui"'},{value:'"text-strikethrough-bui"'},{value:'"bold-bui"'},{value:'"bui"'},{value:'"numbered-list"'},{value:'"align-left"'},{value:'"info"'},{value:'"warning"'},{value:'"spreadsheets"'},{value:'"tile"'},{value:'"bullet-list"'},{value:'"card-list"'},{value:'"layers"'},{value:'"parameters"'},{value:'"drag"'},{value:'"unmerge"'},{value:'"ungroup"'},{value:'"merge"'},{value:'"duplicate"'},{value:'"screen-sharing"'},{value:'"more"'},{value:'"comment-add"'},{value:'"comments"'},{value:'"comment-close"'},{value:'"comment-eye"'},{value:'"download"'},{value:'"export"'},{value:'"close"'},{value:'"collapse"'},{value:'"expand"'},{value:'"redo"'},{value:'"undo"'},{value:'"back-1"'},{value:'"back"'},{value:'"arrows-down"'},{value:'"arrows-up"'},{value:'"arrows-left"'},{value:'"arrows-right"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"minus"'},{value:'"plus"'},{value:'"add-column-right"'},{value:'"add-row-bottom"'},{value:'"cursor"'},{value:'"cursor-user"'},{value:'"hand"'},{value:'"logout"'},{value:'"fit"'},{value:'"refresh"'},{value:'"arrow-line-shape"'},{value:'"arrow-line"'},{value:'"arrow-shape"'},{value:'"frames"'},{value:'"frame"'},{value:'"comment"'},{value:'"parallelogram"'},{value:'"eraser"'},{value:'"rounded"'},{value:'"star"'},{value:'"text-plus"'},{value:'"sticky"'},{value:'"sticky-two"'},{value:'"sticky-bulk"'},{value:'"triangle"'},{value:'"rhombus"'},{value:'"edit"'},{value:'"babble"'},{value:'"chat"'},{value:'"rectangle"'},{value:'"oval"'},{value:'"mockup"'},{value:'"templates"'},{value:'"card"'},{value:'"shapes"'},{value:'"4x3"'},{value:'"16x9"'},{value:'"custom"'},{value:'"ipad"'},{value:'"iphone"'},{value:'"phone"'},{value:'"sq"'},{value:'"tablet"'},{value:'"web"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xxsmall"'},{value:'"xsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}}}}}catch{}const V=n.forwardRef((e,l)=>{const{className:r,children:a,variant:u="info",...t}=e,s=["label",`label-${u}`,r].filter(d);return v.jsx("span",{...t,ref:l,className:s.join(" "),children:a})});V.displayName="Label";try{V.displayName="Label",V.__docgenInfo={description:"",displayName:"Label",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'}]}}}}}catch{}const D=n.forwardRef((e,l)=>{const{className:r,children:a,variant:u="info",...t}=e,s=["link",`link-${u}`,r].filter(d);return v.jsx("span",{...t,ref:l,className:s.join(" "),children:a})});D.displayName="Link";try{D.displayName="Link",D.__docgenInfo={description:"",displayName:"Link",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"danger"'}]}}}}}catch{}const xe={"empty-label":"_empty-label_1lhql_1"},L=n.forwardRef((e,l)=>{const{label:r,value:a,onChange:u,className:t,...s}=e,i=o=>u==null?void 0:u(o.target.checked);return v.jsxs("label",{className:"radiobutton",children:[v.jsx("input",{...s,ref:l,className:t,type:"radio",checked:a,onChange:i}),r?v.jsx("span",{children:r}):v.jsx("span",{className:xe["empty-label"]})]})});L.displayName="RadioButton";try{L.displayName="RadioButton",L.__docgenInfo={description:"",displayName:"RadioButton",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: boolean) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}}}}}catch{}function ke(e){switch(e){case"small":return"select-small";case"medium":return""}}const S=n.forwardRef((e,l)=>{const{value:r,onChange:a,size:u="medium",isDisabled:t,className:s,...i}=e,o=["select",ke(u),s].filter(d),c=p=>a==null?void 0:a(p.target.value);return v.jsx("select",{...i,ref:l,className:o.join(" "),value:r,onChange:c,disabled:t,children:e.children})});S.displayName="Select";try{S.displayName="Select",S.__docgenInfo={description:"",displayName:"Select",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}}}}}catch{}const B=n.forwardRef((e,l)=>{const{className:r,...a}=e;return v.jsx("option",{...a,ref:l,className:r,children:e.children})});B.displayName="SelectOption";try{B.displayName="SelectOption",B.__docgenInfo={description:"",displayName:"SelectOption",props:{}}}catch{}function Ae(e){return e?"":"table__no-sticky-headers"}const z=n.forwardRef((e,l)=>{const{className:r,children:a,headIsSticky:u=!0,...t}=e,s=["table",Ae(u),r];return v.jsx("table",{...t,ref:l,className:s.join(" "),children:a})});z.displayName="Table";try{z.displayName="Table",z.__docgenInfo={description:"",displayName:"Table",props:{headIsSticky:{defaultValue:null,description:"",name:"headIsSticky",required:!1,type:{name:"boolean"}}}}}catch{}const O=n.forwardRef((e,l)=>{const{className:r,children:a,...u}=e;return v.jsx("thead",{...u,ref:l,className:r,children:a})});O.displayName="TableHead";try{O.displayName="TableHead",O.__docgenInfo={description:"",displayName:"TableHead",props:{}}}catch{}const H=n.forwardRef((e,l)=>{const{className:r,children:a,...u}=e;return v.jsx("th",{...u,ref:l,className:r,children:a})});H.displayName="TableHeadCell";try{H.displayName="TableHeadCell",H.__docgenInfo={description:"",displayName:"TableHeadCell",props:{}}}catch{}const $=n.forwardRef((e,l)=>{const{className:r,children:a,...u}=e;return v.jsx("tbody",{...u,ref:l,className:r,children:a})});$.displayName="TableBody";try{$.displayName="TableBody",$.__docgenInfo={description:"",displayName:"TableBody",props:{}}}catch{}const E=n.forwardRef((e,l)=>{const{className:r,children:a,...u}=e;return v.jsx("td",{...u,ref:l,className:r,children:a})});E.displayName="TableCell";try{E.displayName="TableCell",E.__docgenInfo={description:"",displayName:"TableCell",props:{}}}catch{}const F=n.forwardRef((e,l)=>{const{className:r,children:a,...u}=e;return v.jsx("tr",{...u,ref:l,className:r,children:a})});F.displayName="TableRow";try{F.displayName="TableRow",F.__docgenInfo={description:"",displayName:"TableRow",props:{}}}catch{}function Ce(e){return e?"tab-active":""}const G=n.forwardRef((e,l)=>{const{className:r,tabs:a,activeIndex:u,setActiveIndex:t,...s}=e,i=["tabs",r].filter(d);return v.jsx("div",{...s,ref:l,className:i.join(" "),children:v.jsx("div",{className:"tabs-header-list",children:a.map((o,c)=>{const m=["tab",Ce(u===c),r].filter(d);return v.jsx("div",{className:m.join(" "),tabIndex:0,onClick:()=>t==null?void 0:t(c),children:v.jsx("div",{className:"tab-text tab-badge","data-badge":o.badge,children:o.children})})})})})});G.displayName="Tabs";try{G.displayName="Tabs",G.__docgenInfo={description:"",displayName:"Tabs",props:{activeIndex:{defaultValue:null,description:"",name:"activeIndex",required:!1,type:{name:"number"}},setActiveIndex:{defaultValue:null,description:"",name:"setActiveIndex",required:!1,type:{name:"((index: number) => void)"}},tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"TabProps[]"}}}}}catch{}function g(e){return e?`icon icon-${e}`:""}try{g.displayName="getIconClassName",g.__docgenInfo={description:"",displayName:"getIconClassName",props:{}}}catch{}const M=n.forwardRef((e,l)=>{const{icon:r,textColor:a="var(--black)",backgroundColor:u="var(--indigo50)",className:t,children:s,...i}=e,o=["tag",g(r),t].filter(d);return v.jsx("span",{...i,ref:l,className:o.join(" "),style:{"--color":a,"--background":u},children:s})});M.displayName="Tag";try{M.displayName="Tag",M.__docgenInfo={description:"",displayName:"Tag",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"embed"'},{value:'"link"'},{value:'"map"'},{value:'"search"'},{value:'"video"'},{value:'"image"'},{value:'"line"'},{value:'"stop"'},{value:'"text"'},{value:'"key"'},{value:'"security"'},{value:'"checkbox"'},{value:'"document"'},{value:'"grid"'},{value:'"group"'},{value:'"list"'},{value:'"presentation"'},{value:'"timer"'},{value:'"billing"'},{value:'"home"'},{value:'"user"'},{value:'"eye-closed"'},{value:'"shared-with"'},{value:'"team"'},{value:'"author-cursor-view"'},{value:'"user-load"'},{value:'"eye"'},{value:'"comment-feedback"'},{value:'"photo"'},{value:'"folder"'},{value:'"upload"'},{value:'"help"'},{value:'"unlink"'},{value:'"settings"'},{value:'"pin"'},{value:'"analytics"'},{value:'"deactivated"'},{value:'"doc-note"'},{value:'"filters"'},{value:'"invitation"'},{value:'"trash"'},{value:'"help-question"'},{value:'"magnet"'},{value:'"bell"'},{value:'"public"'},{value:'"sound-on"'},{value:'"envelope"'},{value:'"play"'},{value:'"lock"'},{value:'"unlock"'},{value:'"plug"'},{value:'"mic-on"'},{value:'"mic-off"'},{value:'"activity"'},{value:'"sound-off"'},{value:'"calendar"'},{value:'"learn"'},{value:'"thumbs-up"'},{value:'"thumbs-down"'},{value:'"backup"'},{value:'"pdf"'},{value:'"sticky-recognition"'},{value:'"boards"'},{value:'"app-boilerplate"'},{value:'"google"'},{value:'"tag"'},{value:'"parameters-vertical"'},{value:'"text-heading-one"'},{value:'"text-heading-two"'},{value:'"text-italic-bui"'},{value:'"text-underline-bui"'},{value:'"text-strikethrough-bui"'},{value:'"bold-bui"'},{value:'"bui"'},{value:'"numbered-list"'},{value:'"align-left"'},{value:'"info"'},{value:'"warning"'},{value:'"spreadsheets"'},{value:'"tile"'},{value:'"bullet-list"'},{value:'"card-list"'},{value:'"layers"'},{value:'"parameters"'},{value:'"drag"'},{value:'"unmerge"'},{value:'"ungroup"'},{value:'"merge"'},{value:'"duplicate"'},{value:'"screen-sharing"'},{value:'"more"'},{value:'"comment-add"'},{value:'"comments"'},{value:'"comment-close"'},{value:'"comment-eye"'},{value:'"download"'},{value:'"export"'},{value:'"close"'},{value:'"collapse"'},{value:'"expand"'},{value:'"redo"'},{value:'"undo"'},{value:'"back-1"'},{value:'"back"'},{value:'"arrows-down"'},{value:'"arrows-up"'},{value:'"arrows-left"'},{value:'"arrows-right"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"minus"'},{value:'"plus"'},{value:'"add-column-right"'},{value:'"add-row-bottom"'},{value:'"cursor"'},{value:'"cursor-user"'},{value:'"hand"'},{value:'"logout"'},{value:'"fit"'},{value:'"refresh"'},{value:'"arrow-line-shape"'},{value:'"arrow-line"'},{value:'"arrow-shape"'},{value:'"frames"'},{value:'"frame"'},{value:'"comment"'},{value:'"parallelogram"'},{value:'"eraser"'},{value:'"rounded"'},{value:'"star"'},{value:'"text-plus"'},{value:'"sticky"'},{value:'"sticky-two"'},{value:'"sticky-bulk"'},{value:'"triangle"'},{value:'"rhombus"'},{value:'"edit"'},{value:'"babble"'},{value:'"chat"'},{value:'"rectangle"'},{value:'"oval"'},{value:'"mockup"'},{value:'"templates"'},{value:'"card"'},{value:'"shapes"'},{value:'"4x3"'},{value:'"16x9"'},{value:'"custom"'},{value:'"ipad"'},{value:'"iphone"'},{value:'"phone"'},{value:'"sq"'},{value:'"tablet"'},{value:'"web"'}]}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"var(--blue100)"'},{value:'"var(--blue200)"'},{value:'"var(--blue300)"'},{value:'"var(--blue400)"'},{value:'"var(--blue500)"'},{value:'"var(--blue600)"'},{value:'"var(--blue700)"'},{value:'"var(--blue800)"'},{value:'"var(--blue900)"'},{value:'"var(--indigo50)"'},{value:'"var(--indigo100)"'},{value:'"var(--indigo200)"'},{value:'"var(--indigo300)"'},{value:'"var(--indigo400)"'},{value:'"var(--indigo500)"'},{value:'"var(--indigo600)"'},{value:'"var(--indigo700)"'},{value:'"var(--indigoAlpha4)"'},{value:'"var(--indigoAlpha6)"'},{value:'"var(--indigoAlpha8)"'},{value:'"var(--indigoAlpha12)"'},{value:'"var(--indigoAlpha20)"'},{value:'"var(--indigoAlpha40)"'},{value:'"var(--indigoAlpha80)"'},{value:'"var(--green100)"'},{value:'"var(--green400)"'},{value:'"var(--green700)"'},{value:'"var(--green800)"'},{value:'"var(--black)"'},{value:'"var(--blackAlpha20)"'},{value:'"var(--blackAlpha40)"'},{value:'"var(--blackAlpha60)"'},{value:'"var(--blackAlpha80)"'},{value:'"var(--red50)"'},{value:'"var(--red100)"'},{value:'"var(--red400)"'},{value:'"var(--red600)"'},{value:'"var(--red700)"'},{value:'"var(--red800)"'},{value:'"var(--red900)"'},{value:'"var(--yellow100)"'},{value:'"var(--yellow400)"'},{value:'"var(--yellow700)"'},{value:'"var(--white)"'},{value:'"var(--whiteAlpha20)"'},{value:'"var(--whiteAlpha40)"'},{value:'"var(--whiteAlpha80)"'}]}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"var(--blue100)"'},{value:'"var(--blue200)"'},{value:'"var(--blue300)"'},{value:'"var(--blue400)"'},{value:'"var(--blue500)"'},{value:'"var(--blue600)"'},{value:'"var(--blue700)"'},{value:'"var(--blue800)"'},{value:'"var(--blue900)"'},{value:'"var(--indigo50)"'},{value:'"var(--indigo100)"'},{value:'"var(--indigo200)"'},{value:'"var(--indigo300)"'},{value:'"var(--indigo400)"'},{value:'"var(--indigo500)"'},{value:'"var(--indigo600)"'},{value:'"var(--indigo700)"'},{value:'"var(--indigoAlpha4)"'},{value:'"var(--indigoAlpha6)"'},{value:'"var(--indigoAlpha8)"'},{value:'"var(--indigoAlpha12)"'},{value:'"var(--indigoAlpha20)"'},{value:'"var(--indigoAlpha40)"'},{value:'"var(--indigoAlpha80)"'},{value:'"var(--green100)"'},{value:'"var(--green400)"'},{value:'"var(--green700)"'},{value:'"var(--green800)"'},{value:'"var(--black)"'},{value:'"var(--blackAlpha20)"'},{value:'"var(--blackAlpha40)"'},{value:'"var(--blackAlpha60)"'},{value:'"var(--blackAlpha80)"'},{value:'"var(--red50)"'},{value:'"var(--red100)"'},{value:'"var(--red400)"'},{value:'"var(--red600)"'},{value:'"var(--red700)"'},{value:'"var(--red800)"'},{value:'"var(--red900)"'},{value:'"var(--yellow100)"'},{value:'"var(--yellow400)"'},{value:'"var(--yellow700)"'},{value:'"var(--white)"'},{value:'"var(--whiteAlpha20)"'},{value:'"var(--whiteAlpha40)"'},{value:'"var(--whiteAlpha80)"'}]}}}}}catch{}const P=n.forwardRef((e,l)=>{const{icon:r,textColor:a="var(--black)",backgroundColor:u="var(--indigo50)",className:t,children:s,...i}=e,o=["tag",g(r),t].filter(d);return v.jsx("a",{...i,ref:l,className:o.join(" "),style:{"--color":a,"--background":u},children:s})});P.displayName="LinkTag";try{P.displayName="LinkTag",P.__docgenInfo={description:"",displayName:"LinkTag",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"embed"'},{value:'"link"'},{value:'"map"'},{value:'"search"'},{value:'"video"'},{value:'"image"'},{value:'"line"'},{value:'"stop"'},{value:'"text"'},{value:'"key"'},{value:'"security"'},{value:'"checkbox"'},{value:'"document"'},{value:'"grid"'},{value:'"group"'},{value:'"list"'},{value:'"presentation"'},{value:'"timer"'},{value:'"billing"'},{value:'"home"'},{value:'"user"'},{value:'"eye-closed"'},{value:'"shared-with"'},{value:'"team"'},{value:'"author-cursor-view"'},{value:'"user-load"'},{value:'"eye"'},{value:'"comment-feedback"'},{value:'"photo"'},{value:'"folder"'},{value:'"upload"'},{value:'"help"'},{value:'"unlink"'},{value:'"settings"'},{value:'"pin"'},{value:'"analytics"'},{value:'"deactivated"'},{value:'"doc-note"'},{value:'"filters"'},{value:'"invitation"'},{value:'"trash"'},{value:'"help-question"'},{value:'"magnet"'},{value:'"bell"'},{value:'"public"'},{value:'"sound-on"'},{value:'"envelope"'},{value:'"play"'},{value:'"lock"'},{value:'"unlock"'},{value:'"plug"'},{value:'"mic-on"'},{value:'"mic-off"'},{value:'"activity"'},{value:'"sound-off"'},{value:'"calendar"'},{value:'"learn"'},{value:'"thumbs-up"'},{value:'"thumbs-down"'},{value:'"backup"'},{value:'"pdf"'},{value:'"sticky-recognition"'},{value:'"boards"'},{value:'"app-boilerplate"'},{value:'"google"'},{value:'"tag"'},{value:'"parameters-vertical"'},{value:'"text-heading-one"'},{value:'"text-heading-two"'},{value:'"text-italic-bui"'},{value:'"text-underline-bui"'},{value:'"text-strikethrough-bui"'},{value:'"bold-bui"'},{value:'"bui"'},{value:'"numbered-list"'},{value:'"align-left"'},{value:'"info"'},{value:'"warning"'},{value:'"spreadsheets"'},{value:'"tile"'},{value:'"bullet-list"'},{value:'"card-list"'},{value:'"layers"'},{value:'"parameters"'},{value:'"drag"'},{value:'"unmerge"'},{value:'"ungroup"'},{value:'"merge"'},{value:'"duplicate"'},{value:'"screen-sharing"'},{value:'"more"'},{value:'"comment-add"'},{value:'"comments"'},{value:'"comment-close"'},{value:'"comment-eye"'},{value:'"download"'},{value:'"export"'},{value:'"close"'},{value:'"collapse"'},{value:'"expand"'},{value:'"redo"'},{value:'"undo"'},{value:'"back-1"'},{value:'"back"'},{value:'"arrows-down"'},{value:'"arrows-up"'},{value:'"arrows-left"'},{value:'"arrows-right"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"minus"'},{value:'"plus"'},{value:'"add-column-right"'},{value:'"add-row-bottom"'},{value:'"cursor"'},{value:'"cursor-user"'},{value:'"hand"'},{value:'"logout"'},{value:'"fit"'},{value:'"refresh"'},{value:'"arrow-line-shape"'},{value:'"arrow-line"'},{value:'"arrow-shape"'},{value:'"frames"'},{value:'"frame"'},{value:'"comment"'},{value:'"parallelogram"'},{value:'"eraser"'},{value:'"rounded"'},{value:'"star"'},{value:'"text-plus"'},{value:'"sticky"'},{value:'"sticky-two"'},{value:'"sticky-bulk"'},{value:'"triangle"'},{value:'"rhombus"'},{value:'"edit"'},{value:'"babble"'},{value:'"chat"'},{value:'"rectangle"'},{value:'"oval"'},{value:'"mockup"'},{value:'"templates"'},{value:'"card"'},{value:'"shapes"'},{value:'"4x3"'},{value:'"16x9"'},{value:'"custom"'},{value:'"ipad"'},{value:'"iphone"'},{value:'"phone"'},{value:'"sq"'},{value:'"tablet"'},{value:'"web"'}]}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"var(--blue100)"'},{value:'"var(--blue200)"'},{value:'"var(--blue300)"'},{value:'"var(--blue400)"'},{value:'"var(--blue500)"'},{value:'"var(--blue600)"'},{value:'"var(--blue700)"'},{value:'"var(--blue800)"'},{value:'"var(--blue900)"'},{value:'"var(--indigo50)"'},{value:'"var(--indigo100)"'},{value:'"var(--indigo200)"'},{value:'"var(--indigo300)"'},{value:'"var(--indigo400)"'},{value:'"var(--indigo500)"'},{value:'"var(--indigo600)"'},{value:'"var(--indigo700)"'},{value:'"var(--indigoAlpha4)"'},{value:'"var(--indigoAlpha6)"'},{value:'"var(--indigoAlpha8)"'},{value:'"var(--indigoAlpha12)"'},{value:'"var(--indigoAlpha20)"'},{value:'"var(--indigoAlpha40)"'},{value:'"var(--indigoAlpha80)"'},{value:'"var(--green100)"'},{value:'"var(--green400)"'},{value:'"var(--green700)"'},{value:'"var(--green800)"'},{value:'"var(--black)"'},{value:'"var(--blackAlpha20)"'},{value:'"var(--blackAlpha40)"'},{value:'"var(--blackAlpha60)"'},{value:'"var(--blackAlpha80)"'},{value:'"var(--red50)"'},{value:'"var(--red100)"'},{value:'"var(--red400)"'},{value:'"var(--red600)"'},{value:'"var(--red700)"'},{value:'"var(--red800)"'},{value:'"var(--red900)"'},{value:'"var(--yellow100)"'},{value:'"var(--yellow400)"'},{value:'"var(--yellow700)"'},{value:'"var(--white)"'},{value:'"var(--whiteAlpha20)"'},{value:'"var(--whiteAlpha40)"'},{value:'"var(--whiteAlpha80)"'}]}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"var(--blue100)"'},{value:'"var(--blue200)"'},{value:'"var(--blue300)"'},{value:'"var(--blue400)"'},{value:'"var(--blue500)"'},{value:'"var(--blue600)"'},{value:'"var(--blue700)"'},{value:'"var(--blue800)"'},{value:'"var(--blue900)"'},{value:'"var(--indigo50)"'},{value:'"var(--indigo100)"'},{value:'"var(--indigo200)"'},{value:'"var(--indigo300)"'},{value:'"var(--indigo400)"'},{value:'"var(--indigo500)"'},{value:'"var(--indigo600)"'},{value:'"var(--indigo700)"'},{value:'"var(--indigoAlpha4)"'},{value:'"var(--indigoAlpha6)"'},{value:'"var(--indigoAlpha8)"'},{value:'"var(--indigoAlpha12)"'},{value:'"var(--indigoAlpha20)"'},{value:'"var(--indigoAlpha40)"'},{value:'"var(--indigoAlpha80)"'},{value:'"var(--green100)"'},{value:'"var(--green400)"'},{value:'"var(--green700)"'},{value:'"var(--green800)"'},{value:'"var(--black)"'},{value:'"var(--blackAlpha20)"'},{value:'"var(--blackAlpha40)"'},{value:'"var(--blackAlpha60)"'},{value:'"var(--blackAlpha80)"'},{value:'"var(--red50)"'},{value:'"var(--red100)"'},{value:'"var(--red400)"'},{value:'"var(--red600)"'},{value:'"var(--red700)"'},{value:'"var(--red800)"'},{value:'"var(--red900)"'},{value:'"var(--yellow100)"'},{value:'"var(--yellow400)"'},{value:'"var(--yellow700)"'},{value:'"var(--white)"'},{value:'"var(--whiteAlpha20)"'},{value:'"var(--whiteAlpha40)"'},{value:'"var(--whiteAlpha80)"'}]}}}}}catch{}const U=n.forwardRef((e,l)=>{const{icon:r,className:a,...u}=e,t=["icon",`icon-${r}`,a].filter(d);return v.jsx("button",{...u,type:"button",ref:l,className:t.join(" ")})});U.displayName="TagButton";try{U.displayName="TagButton",U.__docgenInfo={description:"",displayName:"TagButton",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"embed"'},{value:'"link"'},{value:'"map"'},{value:'"search"'},{value:'"video"'},{value:'"image"'},{value:'"line"'},{value:'"stop"'},{value:'"text"'},{value:'"key"'},{value:'"security"'},{value:'"checkbox"'},{value:'"document"'},{value:'"grid"'},{value:'"group"'},{value:'"list"'},{value:'"presentation"'},{value:'"timer"'},{value:'"billing"'},{value:'"home"'},{value:'"user"'},{value:'"eye-closed"'},{value:'"shared-with"'},{value:'"team"'},{value:'"author-cursor-view"'},{value:'"user-load"'},{value:'"eye"'},{value:'"comment-feedback"'},{value:'"photo"'},{value:'"folder"'},{value:'"upload"'},{value:'"help"'},{value:'"unlink"'},{value:'"settings"'},{value:'"pin"'},{value:'"analytics"'},{value:'"deactivated"'},{value:'"doc-note"'},{value:'"filters"'},{value:'"invitation"'},{value:'"trash"'},{value:'"help-question"'},{value:'"magnet"'},{value:'"bell"'},{value:'"public"'},{value:'"sound-on"'},{value:'"envelope"'},{value:'"play"'},{value:'"lock"'},{value:'"unlock"'},{value:'"plug"'},{value:'"mic-on"'},{value:'"mic-off"'},{value:'"activity"'},{value:'"sound-off"'},{value:'"calendar"'},{value:'"learn"'},{value:'"thumbs-up"'},{value:'"thumbs-down"'},{value:'"backup"'},{value:'"pdf"'},{value:'"sticky-recognition"'},{value:'"boards"'},{value:'"app-boilerplate"'},{value:'"google"'},{value:'"tag"'},{value:'"parameters-vertical"'},{value:'"text-heading-one"'},{value:'"text-heading-two"'},{value:'"text-italic-bui"'},{value:'"text-underline-bui"'},{value:'"text-strikethrough-bui"'},{value:'"bold-bui"'},{value:'"bui"'},{value:'"numbered-list"'},{value:'"align-left"'},{value:'"info"'},{value:'"warning"'},{value:'"spreadsheets"'},{value:'"tile"'},{value:'"bullet-list"'},{value:'"card-list"'},{value:'"layers"'},{value:'"parameters"'},{value:'"drag"'},{value:'"unmerge"'},{value:'"ungroup"'},{value:'"merge"'},{value:'"duplicate"'},{value:'"screen-sharing"'},{value:'"more"'},{value:'"comment-add"'},{value:'"comments"'},{value:'"comment-close"'},{value:'"comment-eye"'},{value:'"download"'},{value:'"export"'},{value:'"close"'},{value:'"collapse"'},{value:'"expand"'},{value:'"redo"'},{value:'"undo"'},{value:'"back-1"'},{value:'"back"'},{value:'"arrows-down"'},{value:'"arrows-up"'},{value:'"arrows-left"'},{value:'"arrows-right"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"minus"'},{value:'"plus"'},{value:'"add-column-right"'},{value:'"add-row-bottom"'},{value:'"cursor"'},{value:'"cursor-user"'},{value:'"hand"'},{value:'"logout"'},{value:'"fit"'},{value:'"refresh"'},{value:'"arrow-line-shape"'},{value:'"arrow-line"'},{value:'"arrow-shape"'},{value:'"frames"'},{value:'"frame"'},{value:'"comment"'},{value:'"parallelogram"'},{value:'"eraser"'},{value:'"rounded"'},{value:'"star"'},{value:'"text-plus"'},{value:'"sticky"'},{value:'"sticky-two"'},{value:'"sticky-bulk"'},{value:'"triangle"'},{value:'"rhombus"'},{value:'"edit"'},{value:'"babble"'},{value:'"chat"'},{value:'"rectangle"'},{value:'"oval"'},{value:'"mockup"'},{value:'"templates"'},{value:'"card"'},{value:'"shapes"'},{value:'"4x3"'},{value:'"16x9"'},{value:'"custom"'},{value:'"ipad"'},{value:'"iphone"'},{value:'"phone"'},{value:'"sq"'},{value:'"tablet"'},{value:'"web"'}]}}}}}catch{}function Ie(e){switch(e){case"small":return"textarea-small";case"medium":return""}}const J=n.forwardRef((e,l)=>{const{value:r,onChange:a,size:u="medium",isDisabled:t=!1,isReadOnly:s=!1,className:i,...o}=e,c=["textarea",i,Ie(u)].filter(d),p=m=>a==null?void 0:a(m.target.value);return v.jsx("textarea",{ref:l,...o,className:c.join(" "),onChange:p,disabled:t,readOnly:s})});J.displayName="TextArea";try{J.displayName="TextArea",J.__docgenInfo={description:"",displayName:"TextArea",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}}}}}catch{}export{N as A,w as B,x as C,k as D,A as F,R as I,V as L,L as R,S,M as T,b as a,h as b,_ as c,y as d,C as e,T as f,q as g,j as h,I as i,v as j,D as k,B as l,z as m,O as n,F as o,H as p,$ as q,E as r,G as s,P as t,U as u,J as v};
