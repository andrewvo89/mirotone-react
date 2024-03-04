import{r as o}from"./index-CBqU2yxZ.js";var U={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q=o,X=Symbol.for("react.element"),Z=Symbol.for("react.fragment"),ee=Object.prototype.hasOwnProperty,ae=Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,le={key:!0,ref:!0,__self:!0,__source:!0};function J(e,l,u){var a,r={},v=null,n=null;u!==void 0&&(v=""+u),l.key!==void 0&&(v=""+l.key),l.ref!==void 0&&(n=l.ref);for(a in l)ee.call(l,a)&&!le.hasOwnProperty(a)&&(r[a]=l[a]);if(e&&e.defaultProps)for(a in l=e.defaultProps,l)r[a]===void 0&&(r[a]=l[a]);return{$$typeof:X,type:e,key:v,ref:n,props:r,_owner:ae.current}}m.Fragment=Z;m.jsx=J;m.jsxs=J;U.exports=m;var t=U.exports;function s(e){return typeof e=="string"&&e.length>0}const h=o.forwardRef((e,l)=>{const{className:u,children:a,...r}=e,v=["app-card--title",u].filter(s);return t.jsx("h1",{...r,ref:l,className:v.join(" "),children:a})});h.displayName="AppCardTitle";try{h.displayName="AppCardTitle",h.__docgenInfo={description:"",displayName:"AppCardTitle",props:{}}}catch{}const ue="_tags_1jn3i_1",re={tags:ue},y=o.forwardRef((e,l)=>{const{className:u,children:a,...r}=e,v=["app-card--tags",re.tags,u].filter(s);return t.jsx("div",{...r,ref:l,className:v.join(" "),children:a})});y.displayName="AppCardTags";try{y.displayName="AppCardTags",y.__docgenInfo={description:"",displayName:"AppCardTags",props:{}}}catch{}const b=o.forwardRef((e,l)=>{const{className:u,children:a,...r}=e,v=["app-card--description","p-medium",u].filter(s);return t.jsx("h1",{...r,ref:l,className:v.join(" "),children:a})});b.displayName="AppCardDescription";try{b.displayName="AppCardDescription",b.__docgenInfo={description:"",displayName:"AppCardDescription",props:{}}}catch{}const f=o.forwardRef((e,l)=>{const{className:u,children:a,...r}=e,v=["app-card--body",u].filter(s);return t.jsx("div",{...r,ref:l,className:v.join(" "),children:a})});f.displayName="AppCardBody";try{f.displayName="AppCardBody",f.__docgenInfo={description:"",displayName:"AppCardBody",props:{}}}catch{}const _=o.forwardRef((e,l)=>{const{accentColor:u="var(--blue700)",className:a,children:r,...v}=e,n=["app-card",a].filter(s);return t.jsx("div",{...v,ref:l,className:n.join(" "),style:{"--accent-color":u},children:r})});_.displayName="AppCard";try{_.displayName="AppCard",_.__docgenInfo={description:"",displayName:"AppCard",props:{accentColor:{defaultValue:null,description:"",name:"accentColor",required:!1,type:{name:"enum",value:[{value:'"var(--blue100)"'},{value:'"var(--blue200)"'},{value:'"var(--blue300)"'},{value:'"var(--blue400)"'},{value:'"var(--blue500)"'},{value:'"var(--blue600)"'},{value:'"var(--blue700)"'},{value:'"var(--blue800)"'},{value:'"var(--blue900)"'},{value:'"var(--indigo50)"'},{value:'"var(--indigo100)"'},{value:'"var(--indigo200)"'},{value:'"var(--indigo300)"'},{value:'"var(--indigo400)"'},{value:'"var(--indigo500)"'},{value:'"var(--indigo600)"'},{value:'"var(--indigo700)"'},{value:'"var(--indigoAlpha4)"'},{value:'"var(--indigoAlpha6)"'},{value:'"var(--indigoAlpha8)"'},{value:'"var(--indigoAlpha12)"'},{value:'"var(--indigoAlpha20)"'},{value:'"var(--indigoAlpha40)"'},{value:'"var(--indigoAlpha80)"'},{value:'"var(--green100)"'},{value:'"var(--green400)"'},{value:'"var(--green700)"'},{value:'"var(--green800)"'},{value:'"var(--black)"'},{value:'"var(--blackAlpha20)"'},{value:'"var(--blackAlpha40)"'},{value:'"var(--blackAlpha60)"'},{value:'"var(--blackAlpha80)"'},{value:'"var(--red50)"'},{value:'"var(--red100)"'},{value:'"var(--red400)"'},{value:'"var(--red600)"'},{value:'"var(--red700)"'},{value:'"var(--red800)"'},{value:'"var(--red900)"'},{value:'"var(--yellow100)"'},{value:'"var(--yellow400)"'},{value:'"var(--yellow700)"'},{value:'"var(--white)"'},{value:'"var(--whiteAlpha20)"'},{value:'"var(--whiteAlpha40)"'},{value:'"var(--whiteAlpha80)"'}]}}}}}catch{}function ve(e){switch(e){case"small":return"button-small";case"medium":return"button-medium";case"large":return""}}function te(e){switch(e){case"primary":return"button-primary";case"secondary":return"button-secondary";case"tertiary":return"button-tertiary";case"danger":return"button-danger"}}function oe(e){return e?"button-loading":""}const N=o.forwardRef((e,l)=>{const{size:u="medium",variant:a="primary",isDisabled:r=!1,isLoading:v=!1,children:n,className:i,...d}=e,c=["button",ve(u),te(a),oe(v),i].filter(s).filter(Boolean);return t.jsx("button",{...d,ref:l,className:c.join(" "),disabled:r,children:n})});N.displayName="Button";try{N.displayName="Button",N.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"danger"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}const ne={"empty-label":"_empty-label_15opv_1"},w=o.forwardRef((e,l)=>{const{label:u,value:a,onChange:r,className:v,...n}=e,i=d=>r==null?void 0:r(d.target.checked);return t.jsxs("label",{className:"checkbox",children:[t.jsx("input",{...n,ref:l,className:v,type:"checkbox",checked:a,onChange:i}),u?t.jsx("span",{children:u}):t.jsx("span",{className:ne["empty-label"]})]})});w.displayName="Checkbox";try{w.displayName="Checkbox",w.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: boolean) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}}}}}catch{}const x=o.forwardRef((e,l)=>{const{className:u,...a}=e;return t.jsx("hr",{...a,ref:l,className:u})});x.displayName="Divider";try{x.displayName="Divider",x.__docgenInfo={description:"",displayName:"Divider",props:{}}}catch{}function se(e){switch(e){case"small":return"form-group-small";case"medium":return"form-group"}}function ie(e){return e?"form-group__disabled":""}const k=o.forwardRef((e,l)=>{const{size:u="medium",status:a,isDisabled:r,className:v,children:n,...i}=e,d=[se(u),ie(r),a,v].filter(s);return t.jsx("div",{...i,ref:l,className:d.join(" "),children:n})});k.displayName="FormGroup";try{k.displayName="FormGroup",k.__docgenInfo={description:"",displayName:"FormGroup",props:{status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}}}}}catch{}function de(e){switch(e){case"small":return"input-small";case"medium":return""}}function ce(e){return e?"border-left":""}function pe(e){return e?"border-right":""}function W(e){switch(e){case"1/4":return"one-fourth";case"2/4":return"two-fourth";case"3/4":return"three-fourth";case"4/4":return""}}const A=o.forwardRef((e,l)=>{const{value:u,onChange:a,size:r="medium",isDisabled:v=!1,isReadOnly:n=!1,flexModifier:i="4/4",className:d,...c}=e,g=["input",d,de(r),W(i)].filter(s),Y=K=>a==null?void 0:a(K.target.value);return t.jsx("input",{ref:l,...c,className:g.join(" "),value:u,onChange:Y,disabled:v,readOnly:n})});A.displayName="Input";try{A.displayName="Input",A.__docgenInfo={description:"",displayName:"Input",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}},flexModifier:{defaultValue:null,description:"",name:"flexModifier",required:!1,type:{name:"enum",value:[{value:'"1/4"'},{value:'"2/4"'},{value:'"3/4"'},{value:'"4/4"'}]}}}}}catch{}const C=o.forwardRef((e,l)=>{const{className:u,children:a,borderLeft:r=!1,borderRight:v=!1,flexModifier:n="4/4",...i}=e,d=["input-decoration",ce(r),pe(v),W(n),u].filter(s);return t.jsx("span",{ref:l,...i,className:d.join(" "),children:a})});C.displayName="InputDecoration";try{C.displayName="InputDecoration",C.__docgenInfo={description:"",displayName:"InputDecoration",props:{flexModifier:{defaultValue:null,description:"",name:"flexModifier",required:!1,type:{name:"enum",value:[{value:'"1/4"'},{value:'"2/4"'},{value:'"3/4"'},{value:'"4/4"'}]}},borderLeft:{defaultValue:null,description:"",name:"borderLeft",required:!1,type:{name:"boolean"}},borderRight:{defaultValue:null,description:"",name:"borderRight",required:!1,type:{name:"boolean"}}}}}catch{}const I=o.forwardRef((e,l)=>{const{className:u,children:a,...r}=e,v=["input-group",u].filter(s);return t.jsx("div",{ref:l,...r,className:v.join(" "),children:a})});I.displayName="InputGroup";try{I.displayName="InputGroup",I.__docgenInfo={description:"",displayName:"InputGroup",props:{}}}catch{}const j=o.forwardRef((e,l)=>{const{className:u,children:a,...r}=e;return t.jsx("label",{...r,ref:l,className:u,children:a})});j.displayName="InputLabel";try{j.displayName="InputLabel",j.__docgenInfo={description:"",displayName:"InputLabel",props:{}}}catch{}const R=o.forwardRef((e,l)=>{const{className:u,children:a,...r}=e,v=["status-text",u].filter(s);return t.jsx("div",{ref:l,...r,className:v.join(" "),children:a})});R.displayName="InputStatusText";try{R.displayName="InputStatusText",R.__docgenInfo={description:"",displayName:"InputStatusText",props:{}}}catch{}const me="_xxsmall_1dwg7_1",ge="_xsmall_1dwg7_7",he="_small_1dwg7_13",ye="_medium_1dwg7_19",be="_large_1dwg7_25",fe="_xlarge_1dwg7_31",_e="_xxlarge_1dwg7_37",Ne={xxsmall:me,xsmall:ge,small:he,medium:ye,large:be,xlarge:fe,xxlarge:_e},T=o.forwardRef((e,l)=>{const{size:u="medium",name:a,className:r,...v}=e,n=["icon",`icon-${a}`,Ne[u],r].filter(s);return t.jsx("span",{...v,ref:l,className:n.join(" ")})});T.displayName="Icon";try{T.displayName="Icon",T.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"embed"'},{value:'"link"'},{value:'"map"'},{value:'"search"'},{value:'"video"'},{value:'"image"'},{value:'"line"'},{value:'"stop"'},{value:'"text"'},{value:'"key"'},{value:'"security"'},{value:'"checkbox"'},{value:'"document"'},{value:'"grid"'},{value:'"group"'},{value:'"list"'},{value:'"presentation"'},{value:'"timer"'},{value:'"billing"'},{value:'"home"'},{value:'"user"'},{value:'"info"'},{value:'"warning"'},{value:'"eye-closed"'},{value:'"shared-with"'},{value:'"team"'},{value:'"author-cursor-view"'},{value:'"user-load"'},{value:'"eye"'},{value:'"comment-feedback"'},{value:'"photo"'},{value:'"folder"'},{value:'"upload"'},{value:'"help"'},{value:'"unlink"'},{value:'"settings"'},{value:'"pin"'},{value:'"analytics"'},{value:'"deactivated"'},{value:'"doc-note"'},{value:'"filters"'},{value:'"invitation"'},{value:'"trash"'},{value:'"help-question"'},{value:'"magnet"'},{value:'"bell"'},{value:'"public"'},{value:'"sound-on"'},{value:'"envelope"'},{value:'"play"'},{value:'"lock"'},{value:'"unlock"'},{value:'"plug"'},{value:'"mic-on"'},{value:'"mic-off"'},{value:'"activity"'},{value:'"sound-off"'},{value:'"calendar"'},{value:'"learn"'},{value:'"thumbs-up"'},{value:'"thumbs-down"'},{value:'"backup"'},{value:'"pdf"'},{value:'"sticky-recognition"'},{value:'"boards"'},{value:'"app-boilerplate"'},{value:'"google"'},{value:'"tag"'},{value:'"parameters-vertical"'},{value:'"text-heading-one"'},{value:'"text-heading-two"'},{value:'"text-italic-bui"'},{value:'"text-underline-bui"'},{value:'"text-strikethrough-bui"'},{value:'"bold-bui"'},{value:'"bui"'},{value:'"numbered-list"'},{value:'"align-left"'},{value:'"spreadsheets"'},{value:'"tile"'},{value:'"bullet-list"'},{value:'"card-list"'},{value:'"layers"'},{value:'"parameters"'},{value:'"drag"'},{value:'"unmerge"'},{value:'"ungroup"'},{value:'"merge"'},{value:'"duplicate"'},{value:'"screen-sharing"'},{value:'"more"'},{value:'"comment-add"'},{value:'"comments"'},{value:'"comment-close"'},{value:'"comment-eye"'},{value:'"download"'},{value:'"export"'},{value:'"close"'},{value:'"collapse"'},{value:'"expand"'},{value:'"redo"'},{value:'"undo"'},{value:'"back-1"'},{value:'"back"'},{value:'"arrows-down"'},{value:'"arrows-up"'},{value:'"arrows-left"'},{value:'"arrows-right"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"minus"'},{value:'"plus"'},{value:'"add-column-right"'},{value:'"add-row-bottom"'},{value:'"cursor"'},{value:'"cursor-user"'},{value:'"hand"'},{value:'"logout"'},{value:'"fit"'},{value:'"refresh"'},{value:'"arrow-line-shape"'},{value:'"arrow-line"'},{value:'"arrow-shape"'},{value:'"frames"'},{value:'"frame"'},{value:'"comment"'},{value:'"parallelogram"'},{value:'"eraser"'},{value:'"rounded"'},{value:'"star"'},{value:'"text-plus"'},{value:'"sticky"'},{value:'"sticky-two"'},{value:'"sticky-bulk"'},{value:'"triangle"'},{value:'"rhombus"'},{value:'"edit"'},{value:'"babble"'},{value:'"chat"'},{value:'"rectangle"'},{value:'"oval"'},{value:'"mockup"'},{value:'"templates"'},{value:'"card"'},{value:'"shapes"'},{value:'"4x3"'},{value:'"16x9"'},{value:'"custom"'},{value:'"ipad"'},{value:'"iphone"'},{value:'"phone"'},{value:'"sq"'},{value:'"tablet"'},{value:'"web"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xxsmall"'},{value:'"xsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}}}}}catch{}const q=o.forwardRef((e,l)=>{const{className:u,children:a,variant:r="info",...v}=e,n=["label",`label-${r}`,u].filter(s);return t.jsx("span",{...v,ref:l,className:n.join(" "),children:a})});q.displayName="Label";try{q.displayName="Label",q.__docgenInfo={description:"",displayName:"Label",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'}]}}}}}catch{}const V=o.forwardRef((e,l)=>{const{className:u,children:a,variant:r="info",...v}=e,n=["link",`link-${r}`,u].filter(s);return t.jsx("span",{...v,ref:l,className:n.join(" "),children:a})});V.displayName="Link";try{V.displayName="Link",V.__docgenInfo={description:"",displayName:"Link",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"danger"'}]}}}}}catch{}const we={"empty-label":"_empty-label_1lhql_1"},L=o.forwardRef((e,l)=>{const{label:u,value:a,onChange:r,className:v,...n}=e,i=d=>r==null?void 0:r(d.target.checked);return t.jsxs("label",{className:"radiobutton",children:[t.jsx("input",{...n,ref:l,className:v,type:"radio",checked:a,onChange:i}),u?t.jsx("span",{children:u}):t.jsx("span",{className:we["empty-label"]})]})});L.displayName="RadioButton";try{L.displayName="RadioButton",L.__docgenInfo={description:"",displayName:"RadioButton",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: boolean) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}}}}}catch{}function xe(e){switch(e){case"small":return"select-small";case"medium":return""}}const S=o.forwardRef((e,l)=>{const{value:u,onChange:a,size:r="medium",isDisabled:v,className:n,...i}=e,d=["select",xe(r),n].filter(s),c=g=>a==null?void 0:a(g.target.value);return t.jsx("select",{...i,ref:l,className:d.join(" "),value:u,onChange:c,disabled:v,children:e.children})});S.displayName="Select";try{S.displayName="Select",S.__docgenInfo={description:"",displayName:"Select",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}}}}}catch{}const D=o.forwardRef((e,l)=>{const{className:u,...a}=e;return t.jsx("option",{...a,ref:l,className:u,children:e.children})});D.displayName="SelectOption";try{D.displayName="SelectOption",D.__docgenInfo={description:"",displayName:"SelectOption",props:{}}}catch{}const B=o.forwardRef((e,l)=>{const{className:u,children:a,...r}=e;return t.jsx("label",{...r,ref:l,className:u,children:a})});B.displayName="SelectLabel";try{B.displayName="SelectLabel",B.__docgenInfo={description:"",displayName:"SelectLabel",props:{}}}catch{}function ke(e){return e?"":"table__no-sticky-headers"}const z=o.forwardRef((e,l)=>{const{className:u,children:a,headIsSticky:r=!0,...v}=e,n=["table",ke(r),u];return t.jsx("table",{...v,ref:l,className:n.join(" "),children:a})});z.displayName="Table";try{z.displayName="Table",z.__docgenInfo={description:"",displayName:"Table",props:{headIsSticky:{defaultValue:null,description:"",name:"headIsSticky",required:!1,type:{name:"boolean"}}}}}catch{}const O=o.forwardRef((e,l)=>{const{className:u,children:a,...r}=e;return t.jsx("thead",{...r,ref:l,className:u,children:a})});O.displayName="TableHead";try{O.displayName="TableHead",O.__docgenInfo={description:"",displayName:"TableHead",props:{}}}catch{}const H=o.forwardRef((e,l)=>{const{className:u,children:a,...r}=e;return t.jsx("th",{...r,ref:l,className:u,children:a})});H.displayName="TableHeadCell";try{H.displayName="TableHeadCell",H.__docgenInfo={description:"",displayName:"TableHeadCell",props:{}}}catch{}const $=o.forwardRef((e,l)=>{const{className:u,children:a,...r}=e;return t.jsx("tbody",{...r,ref:l,className:u,children:a})});$.displayName="TableBody";try{$.displayName="TableBody",$.__docgenInfo={description:"",displayName:"TableBody",props:{}}}catch{}const E=o.forwardRef((e,l)=>{const{className:u,children:a,...r}=e;return t.jsx("td",{...r,ref:l,className:u,children:a})});E.displayName="TableCell";try{E.displayName="TableCell",E.__docgenInfo={description:"",displayName:"TableCell",props:{}}}catch{}const F=o.forwardRef((e,l)=>{const{className:u,children:a,...r}=e;return t.jsx("tr",{...r,ref:l,className:u,children:a})});F.displayName="TableRow";try{F.displayName="TableRow",F.__docgenInfo={description:"",displayName:"TableRow",props:{}}}catch{}function p(e){return e?`icon icon-${e}`:""}try{p.displayName="getIconClassName",p.__docgenInfo={description:"",displayName:"getIconClassName",props:{}}}catch{}const G=o.forwardRef((e,l)=>{const{icon:u,textColor:a="var(--black)",backgroundColor:r="var(--indigo50)",className:v,children:n,...i}=e,d=["tag",p(u),v].filter(s);return t.jsx("span",{...i,ref:l,className:d.join(" "),style:{"--color":a,"--background":r},children:n})});G.displayName="Tag";try{G.displayName="Tag",G.__docgenInfo={description:"",displayName:"Tag",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"embed"'},{value:'"link"'},{value:'"map"'},{value:'"search"'},{value:'"video"'},{value:'"image"'},{value:'"line"'},{value:'"stop"'},{value:'"text"'},{value:'"key"'},{value:'"security"'},{value:'"checkbox"'},{value:'"document"'},{value:'"grid"'},{value:'"group"'},{value:'"list"'},{value:'"presentation"'},{value:'"timer"'},{value:'"billing"'},{value:'"home"'},{value:'"user"'},{value:'"info"'},{value:'"warning"'},{value:'"eye-closed"'},{value:'"shared-with"'},{value:'"team"'},{value:'"author-cursor-view"'},{value:'"user-load"'},{value:'"eye"'},{value:'"comment-feedback"'},{value:'"photo"'},{value:'"folder"'},{value:'"upload"'},{value:'"help"'},{value:'"unlink"'},{value:'"settings"'},{value:'"pin"'},{value:'"analytics"'},{value:'"deactivated"'},{value:'"doc-note"'},{value:'"filters"'},{value:'"invitation"'},{value:'"trash"'},{value:'"help-question"'},{value:'"magnet"'},{value:'"bell"'},{value:'"public"'},{value:'"sound-on"'},{value:'"envelope"'},{value:'"play"'},{value:'"lock"'},{value:'"unlock"'},{value:'"plug"'},{value:'"mic-on"'},{value:'"mic-off"'},{value:'"activity"'},{value:'"sound-off"'},{value:'"calendar"'},{value:'"learn"'},{value:'"thumbs-up"'},{value:'"thumbs-down"'},{value:'"backup"'},{value:'"pdf"'},{value:'"sticky-recognition"'},{value:'"boards"'},{value:'"app-boilerplate"'},{value:'"google"'},{value:'"tag"'},{value:'"parameters-vertical"'},{value:'"text-heading-one"'},{value:'"text-heading-two"'},{value:'"text-italic-bui"'},{value:'"text-underline-bui"'},{value:'"text-strikethrough-bui"'},{value:'"bold-bui"'},{value:'"bui"'},{value:'"numbered-list"'},{value:'"align-left"'},{value:'"spreadsheets"'},{value:'"tile"'},{value:'"bullet-list"'},{value:'"card-list"'},{value:'"layers"'},{value:'"parameters"'},{value:'"drag"'},{value:'"unmerge"'},{value:'"ungroup"'},{value:'"merge"'},{value:'"duplicate"'},{value:'"screen-sharing"'},{value:'"more"'},{value:'"comment-add"'},{value:'"comments"'},{value:'"comment-close"'},{value:'"comment-eye"'},{value:'"download"'},{value:'"export"'},{value:'"close"'},{value:'"collapse"'},{value:'"expand"'},{value:'"redo"'},{value:'"undo"'},{value:'"back-1"'},{value:'"back"'},{value:'"arrows-down"'},{value:'"arrows-up"'},{value:'"arrows-left"'},{value:'"arrows-right"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"minus"'},{value:'"plus"'},{value:'"add-column-right"'},{value:'"add-row-bottom"'},{value:'"cursor"'},{value:'"cursor-user"'},{value:'"hand"'},{value:'"logout"'},{value:'"fit"'},{value:'"refresh"'},{value:'"arrow-line-shape"'},{value:'"arrow-line"'},{value:'"arrow-shape"'},{value:'"frames"'},{value:'"frame"'},{value:'"comment"'},{value:'"parallelogram"'},{value:'"eraser"'},{value:'"rounded"'},{value:'"star"'},{value:'"text-plus"'},{value:'"sticky"'},{value:'"sticky-two"'},{value:'"sticky-bulk"'},{value:'"triangle"'},{value:'"rhombus"'},{value:'"edit"'},{value:'"babble"'},{value:'"chat"'},{value:'"rectangle"'},{value:'"oval"'},{value:'"mockup"'},{value:'"templates"'},{value:'"card"'},{value:'"shapes"'},{value:'"4x3"'},{value:'"16x9"'},{value:'"custom"'},{value:'"ipad"'},{value:'"iphone"'},{value:'"phone"'},{value:'"sq"'},{value:'"tablet"'},{value:'"web"'}]}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"var(--blue100)"'},{value:'"var(--blue200)"'},{value:'"var(--blue300)"'},{value:'"var(--blue400)"'},{value:'"var(--blue500)"'},{value:'"var(--blue600)"'},{value:'"var(--blue700)"'},{value:'"var(--blue800)"'},{value:'"var(--blue900)"'},{value:'"var(--indigo50)"'},{value:'"var(--indigo100)"'},{value:'"var(--indigo200)"'},{value:'"var(--indigo300)"'},{value:'"var(--indigo400)"'},{value:'"var(--indigo500)"'},{value:'"var(--indigo600)"'},{value:'"var(--indigo700)"'},{value:'"var(--indigoAlpha4)"'},{value:'"var(--indigoAlpha6)"'},{value:'"var(--indigoAlpha8)"'},{value:'"var(--indigoAlpha12)"'},{value:'"var(--indigoAlpha20)"'},{value:'"var(--indigoAlpha40)"'},{value:'"var(--indigoAlpha80)"'},{value:'"var(--green100)"'},{value:'"var(--green400)"'},{value:'"var(--green700)"'},{value:'"var(--green800)"'},{value:'"var(--black)"'},{value:'"var(--blackAlpha20)"'},{value:'"var(--blackAlpha40)"'},{value:'"var(--blackAlpha60)"'},{value:'"var(--blackAlpha80)"'},{value:'"var(--red50)"'},{value:'"var(--red100)"'},{value:'"var(--red400)"'},{value:'"var(--red600)"'},{value:'"var(--red700)"'},{value:'"var(--red800)"'},{value:'"var(--red900)"'},{value:'"var(--yellow100)"'},{value:'"var(--yellow400)"'},{value:'"var(--yellow700)"'},{value:'"var(--white)"'},{value:'"var(--whiteAlpha20)"'},{value:'"var(--whiteAlpha40)"'},{value:'"var(--whiteAlpha80)"'}]}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"var(--blue100)"'},{value:'"var(--blue200)"'},{value:'"var(--blue300)"'},{value:'"var(--blue400)"'},{value:'"var(--blue500)"'},{value:'"var(--blue600)"'},{value:'"var(--blue700)"'},{value:'"var(--blue800)"'},{value:'"var(--blue900)"'},{value:'"var(--indigo50)"'},{value:'"var(--indigo100)"'},{value:'"var(--indigo200)"'},{value:'"var(--indigo300)"'},{value:'"var(--indigo400)"'},{value:'"var(--indigo500)"'},{value:'"var(--indigo600)"'},{value:'"var(--indigo700)"'},{value:'"var(--indigoAlpha4)"'},{value:'"var(--indigoAlpha6)"'},{value:'"var(--indigoAlpha8)"'},{value:'"var(--indigoAlpha12)"'},{value:'"var(--indigoAlpha20)"'},{value:'"var(--indigoAlpha40)"'},{value:'"var(--indigoAlpha80)"'},{value:'"var(--green100)"'},{value:'"var(--green400)"'},{value:'"var(--green700)"'},{value:'"var(--green800)"'},{value:'"var(--black)"'},{value:'"var(--blackAlpha20)"'},{value:'"var(--blackAlpha40)"'},{value:'"var(--blackAlpha60)"'},{value:'"var(--blackAlpha80)"'},{value:'"var(--red50)"'},{value:'"var(--red100)"'},{value:'"var(--red400)"'},{value:'"var(--red600)"'},{value:'"var(--red700)"'},{value:'"var(--red800)"'},{value:'"var(--red900)"'},{value:'"var(--yellow100)"'},{value:'"var(--yellow400)"'},{value:'"var(--yellow700)"'},{value:'"var(--white)"'},{value:'"var(--whiteAlpha20)"'},{value:'"var(--whiteAlpha40)"'},{value:'"var(--whiteAlpha80)"'}]}}}}}catch{}const M=o.forwardRef((e,l)=>{const{icon:u,textColor:a="var(--black)",backgroundColor:r="var(--indigo50)",className:v,children:n,...i}=e,d=["tag",p(u),v].filter(s);return t.jsx("a",{...i,ref:l,className:d.join(" "),style:{"--color":a,"--background":r},children:n})});M.displayName="LinkTag";try{M.displayName="LinkTag",M.__docgenInfo={description:"",displayName:"LinkTag",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"embed"'},{value:'"link"'},{value:'"map"'},{value:'"search"'},{value:'"video"'},{value:'"image"'},{value:'"line"'},{value:'"stop"'},{value:'"text"'},{value:'"key"'},{value:'"security"'},{value:'"checkbox"'},{value:'"document"'},{value:'"grid"'},{value:'"group"'},{value:'"list"'},{value:'"presentation"'},{value:'"timer"'},{value:'"billing"'},{value:'"home"'},{value:'"user"'},{value:'"info"'},{value:'"warning"'},{value:'"eye-closed"'},{value:'"shared-with"'},{value:'"team"'},{value:'"author-cursor-view"'},{value:'"user-load"'},{value:'"eye"'},{value:'"comment-feedback"'},{value:'"photo"'},{value:'"folder"'},{value:'"upload"'},{value:'"help"'},{value:'"unlink"'},{value:'"settings"'},{value:'"pin"'},{value:'"analytics"'},{value:'"deactivated"'},{value:'"doc-note"'},{value:'"filters"'},{value:'"invitation"'},{value:'"trash"'},{value:'"help-question"'},{value:'"magnet"'},{value:'"bell"'},{value:'"public"'},{value:'"sound-on"'},{value:'"envelope"'},{value:'"play"'},{value:'"lock"'},{value:'"unlock"'},{value:'"plug"'},{value:'"mic-on"'},{value:'"mic-off"'},{value:'"activity"'},{value:'"sound-off"'},{value:'"calendar"'},{value:'"learn"'},{value:'"thumbs-up"'},{value:'"thumbs-down"'},{value:'"backup"'},{value:'"pdf"'},{value:'"sticky-recognition"'},{value:'"boards"'},{value:'"app-boilerplate"'},{value:'"google"'},{value:'"tag"'},{value:'"parameters-vertical"'},{value:'"text-heading-one"'},{value:'"text-heading-two"'},{value:'"text-italic-bui"'},{value:'"text-underline-bui"'},{value:'"text-strikethrough-bui"'},{value:'"bold-bui"'},{value:'"bui"'},{value:'"numbered-list"'},{value:'"align-left"'},{value:'"spreadsheets"'},{value:'"tile"'},{value:'"bullet-list"'},{value:'"card-list"'},{value:'"layers"'},{value:'"parameters"'},{value:'"drag"'},{value:'"unmerge"'},{value:'"ungroup"'},{value:'"merge"'},{value:'"duplicate"'},{value:'"screen-sharing"'},{value:'"more"'},{value:'"comment-add"'},{value:'"comments"'},{value:'"comment-close"'},{value:'"comment-eye"'},{value:'"download"'},{value:'"export"'},{value:'"close"'},{value:'"collapse"'},{value:'"expand"'},{value:'"redo"'},{value:'"undo"'},{value:'"back-1"'},{value:'"back"'},{value:'"arrows-down"'},{value:'"arrows-up"'},{value:'"arrows-left"'},{value:'"arrows-right"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"minus"'},{value:'"plus"'},{value:'"add-column-right"'},{value:'"add-row-bottom"'},{value:'"cursor"'},{value:'"cursor-user"'},{value:'"hand"'},{value:'"logout"'},{value:'"fit"'},{value:'"refresh"'},{value:'"arrow-line-shape"'},{value:'"arrow-line"'},{value:'"arrow-shape"'},{value:'"frames"'},{value:'"frame"'},{value:'"comment"'},{value:'"parallelogram"'},{value:'"eraser"'},{value:'"rounded"'},{value:'"star"'},{value:'"text-plus"'},{value:'"sticky"'},{value:'"sticky-two"'},{value:'"sticky-bulk"'},{value:'"triangle"'},{value:'"rhombus"'},{value:'"edit"'},{value:'"babble"'},{value:'"chat"'},{value:'"rectangle"'},{value:'"oval"'},{value:'"mockup"'},{value:'"templates"'},{value:'"card"'},{value:'"shapes"'},{value:'"4x3"'},{value:'"16x9"'},{value:'"custom"'},{value:'"ipad"'},{value:'"iphone"'},{value:'"phone"'},{value:'"sq"'},{value:'"tablet"'},{value:'"web"'}]}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"var(--blue100)"'},{value:'"var(--blue200)"'},{value:'"var(--blue300)"'},{value:'"var(--blue400)"'},{value:'"var(--blue500)"'},{value:'"var(--blue600)"'},{value:'"var(--blue700)"'},{value:'"var(--blue800)"'},{value:'"var(--blue900)"'},{value:'"var(--indigo50)"'},{value:'"var(--indigo100)"'},{value:'"var(--indigo200)"'},{value:'"var(--indigo300)"'},{value:'"var(--indigo400)"'},{value:'"var(--indigo500)"'},{value:'"var(--indigo600)"'},{value:'"var(--indigo700)"'},{value:'"var(--indigoAlpha4)"'},{value:'"var(--indigoAlpha6)"'},{value:'"var(--indigoAlpha8)"'},{value:'"var(--indigoAlpha12)"'},{value:'"var(--indigoAlpha20)"'},{value:'"var(--indigoAlpha40)"'},{value:'"var(--indigoAlpha80)"'},{value:'"var(--green100)"'},{value:'"var(--green400)"'},{value:'"var(--green700)"'},{value:'"var(--green800)"'},{value:'"var(--black)"'},{value:'"var(--blackAlpha20)"'},{value:'"var(--blackAlpha40)"'},{value:'"var(--blackAlpha60)"'},{value:'"var(--blackAlpha80)"'},{value:'"var(--red50)"'},{value:'"var(--red100)"'},{value:'"var(--red400)"'},{value:'"var(--red600)"'},{value:'"var(--red700)"'},{value:'"var(--red800)"'},{value:'"var(--red900)"'},{value:'"var(--yellow100)"'},{value:'"var(--yellow400)"'},{value:'"var(--yellow700)"'},{value:'"var(--white)"'},{value:'"var(--whiteAlpha20)"'},{value:'"var(--whiteAlpha40)"'},{value:'"var(--whiteAlpha80)"'}]}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"var(--blue100)"'},{value:'"var(--blue200)"'},{value:'"var(--blue300)"'},{value:'"var(--blue400)"'},{value:'"var(--blue500)"'},{value:'"var(--blue600)"'},{value:'"var(--blue700)"'},{value:'"var(--blue800)"'},{value:'"var(--blue900)"'},{value:'"var(--indigo50)"'},{value:'"var(--indigo100)"'},{value:'"var(--indigo200)"'},{value:'"var(--indigo300)"'},{value:'"var(--indigo400)"'},{value:'"var(--indigo500)"'},{value:'"var(--indigo600)"'},{value:'"var(--indigo700)"'},{value:'"var(--indigoAlpha4)"'},{value:'"var(--indigoAlpha6)"'},{value:'"var(--indigoAlpha8)"'},{value:'"var(--indigoAlpha12)"'},{value:'"var(--indigoAlpha20)"'},{value:'"var(--indigoAlpha40)"'},{value:'"var(--indigoAlpha80)"'},{value:'"var(--green100)"'},{value:'"var(--green400)"'},{value:'"var(--green700)"'},{value:'"var(--green800)"'},{value:'"var(--black)"'},{value:'"var(--blackAlpha20)"'},{value:'"var(--blackAlpha40)"'},{value:'"var(--blackAlpha60)"'},{value:'"var(--blackAlpha80)"'},{value:'"var(--red50)"'},{value:'"var(--red100)"'},{value:'"var(--red400)"'},{value:'"var(--red600)"'},{value:'"var(--red700)"'},{value:'"var(--red800)"'},{value:'"var(--red900)"'},{value:'"var(--yellow100)"'},{value:'"var(--yellow400)"'},{value:'"var(--yellow700)"'},{value:'"var(--white)"'},{value:'"var(--whiteAlpha20)"'},{value:'"var(--whiteAlpha40)"'},{value:'"var(--whiteAlpha80)"'}]}}}}}catch{}const P=o.forwardRef((e,l)=>{const{icon:u,className:a,...r}=e,v=["icon",`icon-${u}`,a].filter(s);return t.jsx("button",{...r,type:"button",ref:l,className:v.join(" ")})});P.displayName="TagButton";try{P.displayName="TagButton",P.__docgenInfo={description:"",displayName:"TagButton",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"embed"'},{value:'"link"'},{value:'"map"'},{value:'"search"'},{value:'"video"'},{value:'"image"'},{value:'"line"'},{value:'"stop"'},{value:'"text"'},{value:'"key"'},{value:'"security"'},{value:'"checkbox"'},{value:'"document"'},{value:'"grid"'},{value:'"group"'},{value:'"list"'},{value:'"presentation"'},{value:'"timer"'},{value:'"billing"'},{value:'"home"'},{value:'"user"'},{value:'"info"'},{value:'"warning"'},{value:'"eye-closed"'},{value:'"shared-with"'},{value:'"team"'},{value:'"author-cursor-view"'},{value:'"user-load"'},{value:'"eye"'},{value:'"comment-feedback"'},{value:'"photo"'},{value:'"folder"'},{value:'"upload"'},{value:'"help"'},{value:'"unlink"'},{value:'"settings"'},{value:'"pin"'},{value:'"analytics"'},{value:'"deactivated"'},{value:'"doc-note"'},{value:'"filters"'},{value:'"invitation"'},{value:'"trash"'},{value:'"help-question"'},{value:'"magnet"'},{value:'"bell"'},{value:'"public"'},{value:'"sound-on"'},{value:'"envelope"'},{value:'"play"'},{value:'"lock"'},{value:'"unlock"'},{value:'"plug"'},{value:'"mic-on"'},{value:'"mic-off"'},{value:'"activity"'},{value:'"sound-off"'},{value:'"calendar"'},{value:'"learn"'},{value:'"thumbs-up"'},{value:'"thumbs-down"'},{value:'"backup"'},{value:'"pdf"'},{value:'"sticky-recognition"'},{value:'"boards"'},{value:'"app-boilerplate"'},{value:'"google"'},{value:'"tag"'},{value:'"parameters-vertical"'},{value:'"text-heading-one"'},{value:'"text-heading-two"'},{value:'"text-italic-bui"'},{value:'"text-underline-bui"'},{value:'"text-strikethrough-bui"'},{value:'"bold-bui"'},{value:'"bui"'},{value:'"numbered-list"'},{value:'"align-left"'},{value:'"spreadsheets"'},{value:'"tile"'},{value:'"bullet-list"'},{value:'"card-list"'},{value:'"layers"'},{value:'"parameters"'},{value:'"drag"'},{value:'"unmerge"'},{value:'"ungroup"'},{value:'"merge"'},{value:'"duplicate"'},{value:'"screen-sharing"'},{value:'"more"'},{value:'"comment-add"'},{value:'"comments"'},{value:'"comment-close"'},{value:'"comment-eye"'},{value:'"download"'},{value:'"export"'},{value:'"close"'},{value:'"collapse"'},{value:'"expand"'},{value:'"redo"'},{value:'"undo"'},{value:'"back-1"'},{value:'"back"'},{value:'"arrows-down"'},{value:'"arrows-up"'},{value:'"arrows-left"'},{value:'"arrows-right"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"minus"'},{value:'"plus"'},{value:'"add-column-right"'},{value:'"add-row-bottom"'},{value:'"cursor"'},{value:'"cursor-user"'},{value:'"hand"'},{value:'"logout"'},{value:'"fit"'},{value:'"refresh"'},{value:'"arrow-line-shape"'},{value:'"arrow-line"'},{value:'"arrow-shape"'},{value:'"frames"'},{value:'"frame"'},{value:'"comment"'},{value:'"parallelogram"'},{value:'"eraser"'},{value:'"rounded"'},{value:'"star"'},{value:'"text-plus"'},{value:'"sticky"'},{value:'"sticky-two"'},{value:'"sticky-bulk"'},{value:'"triangle"'},{value:'"rhombus"'},{value:'"edit"'},{value:'"babble"'},{value:'"chat"'},{value:'"rectangle"'},{value:'"oval"'},{value:'"mockup"'},{value:'"templates"'},{value:'"card"'},{value:'"shapes"'},{value:'"4x3"'},{value:'"16x9"'},{value:'"custom"'},{value:'"ipad"'},{value:'"iphone"'},{value:'"phone"'},{value:'"sq"'},{value:'"tablet"'},{value:'"web"'}]}}}}}catch{}export{_ as A,N as B,w as C,x as D,k as F,T as I,q as L,L as R,S,G as T,h as a,b,f as c,y as d,A as e,j as f,R as g,I as h,C as i,t as j,V as k,B as l,D as m,z as n,O as o,F as p,H as q,$ as r,E as s,M as t,P as u};