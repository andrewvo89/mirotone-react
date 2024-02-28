import{r as t}from"./index-CBqU2yxZ.js";var I={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q=t,R=Symbol.for("react.element"),V=Symbol.for("react.fragment"),B=Object.prototype.hasOwnProperty,L=q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z={key:!0,ref:!0,__self:!0,__source:!0};function j(e,a,r){var l,u={},v=null,o=null;r!==void 0&&(v=""+r),a.key!==void 0&&(v=""+a.key),a.ref!==void 0&&(o=a.ref);for(l in a)B.call(a,l)&&!z.hasOwnProperty(l)&&(u[l]=a[l]);if(e&&e.defaultProps)for(l in a=e.defaultProps,a)u[l]===void 0&&(u[l]=a[l]);return{$$typeof:R,type:e,key:v,ref:o,props:u,_owner:L.current}}p.Fragment=V;p.jsx=j;p.jsxs=j;I.exports=p;var i=I.exports;function n(e){return typeof e=="string"}const m=t.forwardRef((e,a)=>{const{className:r,children:l,...u}=e,v=["app-card--title",r].filter(n);return i.jsx("h1",{...u,ref:a,className:v.join(" "),children:l})});m.displayName="AppCardTitle";try{m.displayName="AppCardTitle",m.__docgenInfo={description:"",displayName:"AppCardTitle",props:{}}}catch{}const D="_tags_1jn3i_1",S={tags:D},g=t.forwardRef((e,a)=>{const{className:r,children:l,...u}=e,v=["app-card--tags",S.tags,r].filter(n);return i.jsx("div",{...u,ref:a,className:v.join(" "),children:l})});g.displayName="AppCardTags";try{g.displayName="AppCardTags",g.__docgenInfo={description:"",displayName:"AppCardTags",props:{}}}catch{}const h=t.forwardRef((e,a)=>{const{className:r,children:l,...u}=e,v=["app-card--description","p-medium",r].filter(n);return i.jsx("h1",{...u,ref:a,className:v.join(" "),children:l})});h.displayName="AppCardDescription";try{h.displayName="AppCardDescription",h.__docgenInfo={description:"",displayName:"AppCardDescription",props:{}}}catch{}const b=t.forwardRef((e,a)=>{const{className:r,children:l,...u}=e,v=["app-card--body",r].filter(n);return i.jsx("div",{...u,ref:a,className:v.join(" "),children:l})});b.displayName="AppCardBody";try{b.displayName="AppCardBody",b.__docgenInfo={description:"",displayName:"AppCardBody",props:{}}}catch{}const y=t.forwardRef((e,a)=>{const{accentColor:r="var(--blue700)",className:l,children:u,...v}=e,o=["app-card",l].filter(n);return i.jsx("div",{...v,ref:a,className:o.join(" "),style:{"--accent-color":r},children:u})});y.displayName="AppCard";try{y.displayName="AppCard",y.__docgenInfo={description:"",displayName:"AppCard",props:{accentColor:{defaultValue:null,description:"",name:"accentColor",required:!1,type:{name:"enum",value:[{value:'"var(--blue100)"'},{value:'"var(--blue200)"'},{value:'"var(--blue300)"'},{value:'"var(--blue400)"'},{value:'"var(--blue500)"'},{value:'"var(--blue600)"'},{value:'"var(--blue700)"'},{value:'"var(--blue800)"'},{value:'"var(--blue900)"'},{value:'"var(--indigo50)"'},{value:'"var(--indigo100)"'},{value:'"var(--indigo200)"'},{value:'"var(--indigo300)"'},{value:'"var(--indigo400)"'},{value:'"var(--indigo500)"'},{value:'"var(--indigo600)"'},{value:'"var(--indigo700)"'},{value:'"var(--indigoAlpha4)"'},{value:'"var(--indigoAlpha6)"'},{value:'"var(--indigoAlpha8)"'},{value:'"var(--indigoAlpha12)"'},{value:'"var(--indigoAlpha20)"'},{value:'"var(--indigoAlpha40)"'},{value:'"var(--indigoAlpha80)"'},{value:'"var(--green100)"'},{value:'"var(--green400)"'},{value:'"var(--green700)"'},{value:'"var(--green800)"'},{value:'"var(--black)"'},{value:'"var(--blackAlpha20)"'},{value:'"var(--blackAlpha40)"'},{value:'"var(--blackAlpha60)"'},{value:'"var(--blackAlpha80)"'},{value:'"var(--red50)"'},{value:'"var(--red100)"'},{value:'"var(--red400)"'},{value:'"var(--red600)"'},{value:'"var(--red700)"'},{value:'"var(--red800)"'},{value:'"var(--red900)"'},{value:'"var(--yellow100)"'},{value:'"var(--yellow400)"'},{value:'"var(--yellow700)"'},{value:'"var(--white)"'},{value:'"var(--whiteAlpha20)"'},{value:'"var(--whiteAlpha40)"'},{value:'"var(--whiteAlpha80)"'}]}}}}}catch{}function f(e){switch(e){case"small":return"button-small";case"medium":return"button-medium";case"large":return""}}function _(e){switch(e){case"primary":return"button-primary";case"secondary":return"button-secondary";case"tertiary":return"button-tertiary";case"danger":return"button-danger"}}function w(e){return e?"button-loading":""}try{f.displayName="getSizeClassName",f.__docgenInfo={description:"",displayName:"getSizeClassName",props:{}}}catch{}try{_.displayName="getVariantClassName",_.__docgenInfo={description:"",displayName:"getVariantClassName",props:{}}}catch{}try{w.displayName="getIsLoadingClassName",w.__docgenInfo={description:"",displayName:"getIsLoadingClassName",props:{}}}catch{}const k=t.forwardRef((e,a)=>{const{size:r="medium",variant:l="primary",isDisabled:u=!1,isLoading:v=!1,children:o,className:s,...d}=e,T=["button",f(r),_(l),w(v),s].filter(n);return i.jsx("button",{...d,ref:a,className:T.join(" "),disabled:u,children:o})});k.displayName="Button";try{k.displayName="Button",k.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"danger"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}const E="_xxsmall_1dwg7_1",O="_xsmall_1dwg7_7",$="_small_1dwg7_13",P="_medium_1dwg7_19",F="_large_1dwg7_25",U="_xlarge_1dwg7_31",J="_xxlarge_1dwg7_37",W={xxsmall:E,xsmall:O,small:$,medium:P,large:F,xlarge:U,xxlarge:J},x=t.forwardRef((e,a)=>{const{size:r="medium",name:l,className:u,...v}=e,o=["icon",`icon-${l}`,W[r],u].filter(n);return i.jsx("span",{...v,ref:a,className:o.join(" ")})});x.displayName="Icon";try{x.displayName="Icon",x.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"embed"'},{value:'"link"'},{value:'"map"'},{value:'"search"'},{value:'"video"'},{value:'"image"'},{value:'"line"'},{value:'"stop"'},{value:'"text"'},{value:'"key"'},{value:'"security"'},{value:'"checkbox"'},{value:'"document"'},{value:'"grid"'},{value:'"group"'},{value:'"list"'},{value:'"presentation"'},{value:'"timer"'},{value:'"eye-closed"'},{value:'"shared-with"'},{value:'"team"'},{value:'"user"'},{value:'"author-cursor-view"'},{value:'"user-load"'},{value:'"eye"'},{value:'"comment-feedback"'},{value:'"photo"'},{value:'"folder"'},{value:'"upload"'},{value:'"help"'},{value:'"unlink"'},{value:'"settings"'},{value:'"pin"'},{value:'"analytics"'},{value:'"deactivated"'},{value:'"doc-note"'},{value:'"billing"'},{value:'"filters"'},{value:'"invitation"'},{value:'"trash"'},{value:'"help-question"'},{value:'"magnet"'},{value:'"bell"'},{value:'"public"'},{value:'"sound-on"'},{value:'"envelope"'},{value:'"play"'},{value:'"lock"'},{value:'"unlock"'},{value:'"plug"'},{value:'"mic-on"'},{value:'"mic-off"'},{value:'"activity"'},{value:'"sound-off"'},{value:'"calendar"'},{value:'"home"'},{value:'"learn"'},{value:'"thumbs-up"'},{value:'"thumbs-down"'},{value:'"backup"'},{value:'"pdf"'},{value:'"sticky-recognition"'},{value:'"boards"'},{value:'"app-boilerplate"'},{value:'"google"'},{value:'"tag"'},{value:'"parameters-vertical"'},{value:'"text-heading-one"'},{value:'"text-heading-two"'},{value:'"text-italic-bui"'},{value:'"text-underline-bui"'},{value:'"text-strikethrough-bui"'},{value:'"bold-bui"'},{value:'"bui"'},{value:'"numbered-list"'},{value:'"align-left"'},{value:'"info"'},{value:'"warning"'},{value:'"spreadsheets"'},{value:'"tile"'},{value:'"bullet-list"'},{value:'"card-list"'},{value:'"layers"'},{value:'"parameters"'},{value:'"drag"'},{value:'"unmerge"'},{value:'"ungroup"'},{value:'"merge"'},{value:'"duplicate"'},{value:'"screen-sharing"'},{value:'"more"'},{value:'"comment-add"'},{value:'"comments"'},{value:'"comment-close"'},{value:'"comment-eye"'},{value:'"download"'},{value:'"export"'},{value:'"close"'},{value:'"collapse"'},{value:'"expand"'},{value:'"redo"'},{value:'"undo"'},{value:'"back-1"'},{value:'"back"'},{value:'"arrows-down"'},{value:'"arrows-up"'},{value:'"arrows-left"'},{value:'"arrows-right"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"minus"'},{value:'"plus"'},{value:'"add-column-right"'},{value:'"add-row-bottom"'},{value:'"cursor"'},{value:'"cursor-user"'},{value:'"hand"'},{value:'"logout"'},{value:'"fit"'},{value:'"refresh"'},{value:'"arrow-line-shape"'},{value:'"arrow-line"'},{value:'"arrow-shape"'},{value:'"frames"'},{value:'"frame"'},{value:'"comment"'},{value:'"parallelogram"'},{value:'"eraser"'},{value:'"rounded"'},{value:'"star"'},{value:'"text-plus"'},{value:'"sticky"'},{value:'"sticky-two"'},{value:'"sticky-bulk"'},{value:'"triangle"'},{value:'"rhombus"'},{value:'"edit"'},{value:'"babble"'},{value:'"chat"'},{value:'"rectangle"'},{value:'"oval"'},{value:'"mockup"'},{value:'"templates"'},{value:'"card"'},{value:'"shapes"'},{value:'"4x3"'},{value:'"16x9"'},{value:'"custom"'},{value:'"ipad"'},{value:'"iphone"'},{value:'"phone"'},{value:'"sq"'},{value:'"tablet"'},{value:'"web"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xxsmall"'},{value:'"xsmall"'},{value:'"xlarge"'},{value:'"xxlarge"'}]}}}}}catch{}function c(e){return e?`icon icon-${e}`:""}try{c.displayName="getIconClassName",c.__docgenInfo={description:"",displayName:"getIconClassName",props:{}}}catch{}const A=t.forwardRef((e,a)=>{const{icon:r,textColor:l="var(--black)",backgroundColor:u="var(--indigo50)",className:v,children:o,...s}=e,d=["tag",c(r),v].filter(n);return i.jsx("span",{...s,ref:a,className:d.join(" "),style:{"--color":l,"--background":u},children:o})});A.displayName="Tag";try{A.displayName="Tag",A.__docgenInfo={description:"",displayName:"Tag",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"embed"'},{value:'"link"'},{value:'"map"'},{value:'"search"'},{value:'"video"'},{value:'"image"'},{value:'"line"'},{value:'"stop"'},{value:'"text"'},{value:'"key"'},{value:'"security"'},{value:'"checkbox"'},{value:'"document"'},{value:'"grid"'},{value:'"group"'},{value:'"list"'},{value:'"presentation"'},{value:'"timer"'},{value:'"eye-closed"'},{value:'"shared-with"'},{value:'"team"'},{value:'"user"'},{value:'"author-cursor-view"'},{value:'"user-load"'},{value:'"eye"'},{value:'"comment-feedback"'},{value:'"photo"'},{value:'"folder"'},{value:'"upload"'},{value:'"help"'},{value:'"unlink"'},{value:'"settings"'},{value:'"pin"'},{value:'"analytics"'},{value:'"deactivated"'},{value:'"doc-note"'},{value:'"billing"'},{value:'"filters"'},{value:'"invitation"'},{value:'"trash"'},{value:'"help-question"'},{value:'"magnet"'},{value:'"bell"'},{value:'"public"'},{value:'"sound-on"'},{value:'"envelope"'},{value:'"play"'},{value:'"lock"'},{value:'"unlock"'},{value:'"plug"'},{value:'"mic-on"'},{value:'"mic-off"'},{value:'"activity"'},{value:'"sound-off"'},{value:'"calendar"'},{value:'"home"'},{value:'"learn"'},{value:'"thumbs-up"'},{value:'"thumbs-down"'},{value:'"backup"'},{value:'"pdf"'},{value:'"sticky-recognition"'},{value:'"boards"'},{value:'"app-boilerplate"'},{value:'"google"'},{value:'"tag"'},{value:'"parameters-vertical"'},{value:'"text-heading-one"'},{value:'"text-heading-two"'},{value:'"text-italic-bui"'},{value:'"text-underline-bui"'},{value:'"text-strikethrough-bui"'},{value:'"bold-bui"'},{value:'"bui"'},{value:'"numbered-list"'},{value:'"align-left"'},{value:'"info"'},{value:'"warning"'},{value:'"spreadsheets"'},{value:'"tile"'},{value:'"bullet-list"'},{value:'"card-list"'},{value:'"layers"'},{value:'"parameters"'},{value:'"drag"'},{value:'"unmerge"'},{value:'"ungroup"'},{value:'"merge"'},{value:'"duplicate"'},{value:'"screen-sharing"'},{value:'"more"'},{value:'"comment-add"'},{value:'"comments"'},{value:'"comment-close"'},{value:'"comment-eye"'},{value:'"download"'},{value:'"export"'},{value:'"close"'},{value:'"collapse"'},{value:'"expand"'},{value:'"redo"'},{value:'"undo"'},{value:'"back-1"'},{value:'"back"'},{value:'"arrows-down"'},{value:'"arrows-up"'},{value:'"arrows-left"'},{value:'"arrows-right"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"minus"'},{value:'"plus"'},{value:'"add-column-right"'},{value:'"add-row-bottom"'},{value:'"cursor"'},{value:'"cursor-user"'},{value:'"hand"'},{value:'"logout"'},{value:'"fit"'},{value:'"refresh"'},{value:'"arrow-line-shape"'},{value:'"arrow-line"'},{value:'"arrow-shape"'},{value:'"frames"'},{value:'"frame"'},{value:'"comment"'},{value:'"parallelogram"'},{value:'"eraser"'},{value:'"rounded"'},{value:'"star"'},{value:'"text-plus"'},{value:'"sticky"'},{value:'"sticky-two"'},{value:'"sticky-bulk"'},{value:'"triangle"'},{value:'"rhombus"'},{value:'"edit"'},{value:'"babble"'},{value:'"chat"'},{value:'"rectangle"'},{value:'"oval"'},{value:'"mockup"'},{value:'"templates"'},{value:'"card"'},{value:'"shapes"'},{value:'"4x3"'},{value:'"16x9"'},{value:'"custom"'},{value:'"ipad"'},{value:'"iphone"'},{value:'"phone"'},{value:'"sq"'},{value:'"tablet"'},{value:'"web"'}]}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"var(--blue100)"'},{value:'"var(--blue200)"'},{value:'"var(--blue300)"'},{value:'"var(--blue400)"'},{value:'"var(--blue500)"'},{value:'"var(--blue600)"'},{value:'"var(--blue700)"'},{value:'"var(--blue800)"'},{value:'"var(--blue900)"'},{value:'"var(--indigo50)"'},{value:'"var(--indigo100)"'},{value:'"var(--indigo200)"'},{value:'"var(--indigo300)"'},{value:'"var(--indigo400)"'},{value:'"var(--indigo500)"'},{value:'"var(--indigo600)"'},{value:'"var(--indigo700)"'},{value:'"var(--indigoAlpha4)"'},{value:'"var(--indigoAlpha6)"'},{value:'"var(--indigoAlpha8)"'},{value:'"var(--indigoAlpha12)"'},{value:'"var(--indigoAlpha20)"'},{value:'"var(--indigoAlpha40)"'},{value:'"var(--indigoAlpha80)"'},{value:'"var(--green100)"'},{value:'"var(--green400)"'},{value:'"var(--green700)"'},{value:'"var(--green800)"'},{value:'"var(--black)"'},{value:'"var(--blackAlpha20)"'},{value:'"var(--blackAlpha40)"'},{value:'"var(--blackAlpha60)"'},{value:'"var(--blackAlpha80)"'},{value:'"var(--red50)"'},{value:'"var(--red100)"'},{value:'"var(--red400)"'},{value:'"var(--red600)"'},{value:'"var(--red700)"'},{value:'"var(--red800)"'},{value:'"var(--red900)"'},{value:'"var(--yellow100)"'},{value:'"var(--yellow400)"'},{value:'"var(--yellow700)"'},{value:'"var(--white)"'},{value:'"var(--whiteAlpha20)"'},{value:'"var(--whiteAlpha40)"'},{value:'"var(--whiteAlpha80)"'}]}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"var(--blue100)"'},{value:'"var(--blue200)"'},{value:'"var(--blue300)"'},{value:'"var(--blue400)"'},{value:'"var(--blue500)"'},{value:'"var(--blue600)"'},{value:'"var(--blue700)"'},{value:'"var(--blue800)"'},{value:'"var(--blue900)"'},{value:'"var(--indigo50)"'},{value:'"var(--indigo100)"'},{value:'"var(--indigo200)"'},{value:'"var(--indigo300)"'},{value:'"var(--indigo400)"'},{value:'"var(--indigo500)"'},{value:'"var(--indigo600)"'},{value:'"var(--indigo700)"'},{value:'"var(--indigoAlpha4)"'},{value:'"var(--indigoAlpha6)"'},{value:'"var(--indigoAlpha8)"'},{value:'"var(--indigoAlpha12)"'},{value:'"var(--indigoAlpha20)"'},{value:'"var(--indigoAlpha40)"'},{value:'"var(--indigoAlpha80)"'},{value:'"var(--green100)"'},{value:'"var(--green400)"'},{value:'"var(--green700)"'},{value:'"var(--green800)"'},{value:'"var(--black)"'},{value:'"var(--blackAlpha20)"'},{value:'"var(--blackAlpha40)"'},{value:'"var(--blackAlpha60)"'},{value:'"var(--blackAlpha80)"'},{value:'"var(--red50)"'},{value:'"var(--red100)"'},{value:'"var(--red400)"'},{value:'"var(--red600)"'},{value:'"var(--red700)"'},{value:'"var(--red800)"'},{value:'"var(--red900)"'},{value:'"var(--yellow100)"'},{value:'"var(--yellow400)"'},{value:'"var(--yellow700)"'},{value:'"var(--white)"'},{value:'"var(--whiteAlpha20)"'},{value:'"var(--whiteAlpha40)"'},{value:'"var(--whiteAlpha80)"'}]}}}}}catch{}const N=t.forwardRef((e,a)=>{const{icon:r,textColor:l="var(--black)",backgroundColor:u="var(--indigo50)",className:v,children:o,...s}=e,d=["tag",c(r),v].filter(n);return i.jsx("a",{...s,ref:a,className:d.join(" "),style:{"--color":l,"--background":u},children:o})});N.displayName="LinkTag";try{N.displayName="LinkTag",N.__docgenInfo={description:"",displayName:"LinkTag",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"embed"'},{value:'"link"'},{value:'"map"'},{value:'"search"'},{value:'"video"'},{value:'"image"'},{value:'"line"'},{value:'"stop"'},{value:'"text"'},{value:'"key"'},{value:'"security"'},{value:'"checkbox"'},{value:'"document"'},{value:'"grid"'},{value:'"group"'},{value:'"list"'},{value:'"presentation"'},{value:'"timer"'},{value:'"eye-closed"'},{value:'"shared-with"'},{value:'"team"'},{value:'"user"'},{value:'"author-cursor-view"'},{value:'"user-load"'},{value:'"eye"'},{value:'"comment-feedback"'},{value:'"photo"'},{value:'"folder"'},{value:'"upload"'},{value:'"help"'},{value:'"unlink"'},{value:'"settings"'},{value:'"pin"'},{value:'"analytics"'},{value:'"deactivated"'},{value:'"doc-note"'},{value:'"billing"'},{value:'"filters"'},{value:'"invitation"'},{value:'"trash"'},{value:'"help-question"'},{value:'"magnet"'},{value:'"bell"'},{value:'"public"'},{value:'"sound-on"'},{value:'"envelope"'},{value:'"play"'},{value:'"lock"'},{value:'"unlock"'},{value:'"plug"'},{value:'"mic-on"'},{value:'"mic-off"'},{value:'"activity"'},{value:'"sound-off"'},{value:'"calendar"'},{value:'"home"'},{value:'"learn"'},{value:'"thumbs-up"'},{value:'"thumbs-down"'},{value:'"backup"'},{value:'"pdf"'},{value:'"sticky-recognition"'},{value:'"boards"'},{value:'"app-boilerplate"'},{value:'"google"'},{value:'"tag"'},{value:'"parameters-vertical"'},{value:'"text-heading-one"'},{value:'"text-heading-two"'},{value:'"text-italic-bui"'},{value:'"text-underline-bui"'},{value:'"text-strikethrough-bui"'},{value:'"bold-bui"'},{value:'"bui"'},{value:'"numbered-list"'},{value:'"align-left"'},{value:'"info"'},{value:'"warning"'},{value:'"spreadsheets"'},{value:'"tile"'},{value:'"bullet-list"'},{value:'"card-list"'},{value:'"layers"'},{value:'"parameters"'},{value:'"drag"'},{value:'"unmerge"'},{value:'"ungroup"'},{value:'"merge"'},{value:'"duplicate"'},{value:'"screen-sharing"'},{value:'"more"'},{value:'"comment-add"'},{value:'"comments"'},{value:'"comment-close"'},{value:'"comment-eye"'},{value:'"download"'},{value:'"export"'},{value:'"close"'},{value:'"collapse"'},{value:'"expand"'},{value:'"redo"'},{value:'"undo"'},{value:'"back-1"'},{value:'"back"'},{value:'"arrows-down"'},{value:'"arrows-up"'},{value:'"arrows-left"'},{value:'"arrows-right"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"minus"'},{value:'"plus"'},{value:'"add-column-right"'},{value:'"add-row-bottom"'},{value:'"cursor"'},{value:'"cursor-user"'},{value:'"hand"'},{value:'"logout"'},{value:'"fit"'},{value:'"refresh"'},{value:'"arrow-line-shape"'},{value:'"arrow-line"'},{value:'"arrow-shape"'},{value:'"frames"'},{value:'"frame"'},{value:'"comment"'},{value:'"parallelogram"'},{value:'"eraser"'},{value:'"rounded"'},{value:'"star"'},{value:'"text-plus"'},{value:'"sticky"'},{value:'"sticky-two"'},{value:'"sticky-bulk"'},{value:'"triangle"'},{value:'"rhombus"'},{value:'"edit"'},{value:'"babble"'},{value:'"chat"'},{value:'"rectangle"'},{value:'"oval"'},{value:'"mockup"'},{value:'"templates"'},{value:'"card"'},{value:'"shapes"'},{value:'"4x3"'},{value:'"16x9"'},{value:'"custom"'},{value:'"ipad"'},{value:'"iphone"'},{value:'"phone"'},{value:'"sq"'},{value:'"tablet"'},{value:'"web"'}]}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"var(--blue100)"'},{value:'"var(--blue200)"'},{value:'"var(--blue300)"'},{value:'"var(--blue400)"'},{value:'"var(--blue500)"'},{value:'"var(--blue600)"'},{value:'"var(--blue700)"'},{value:'"var(--blue800)"'},{value:'"var(--blue900)"'},{value:'"var(--indigo50)"'},{value:'"var(--indigo100)"'},{value:'"var(--indigo200)"'},{value:'"var(--indigo300)"'},{value:'"var(--indigo400)"'},{value:'"var(--indigo500)"'},{value:'"var(--indigo600)"'},{value:'"var(--indigo700)"'},{value:'"var(--indigoAlpha4)"'},{value:'"var(--indigoAlpha6)"'},{value:'"var(--indigoAlpha8)"'},{value:'"var(--indigoAlpha12)"'},{value:'"var(--indigoAlpha20)"'},{value:'"var(--indigoAlpha40)"'},{value:'"var(--indigoAlpha80)"'},{value:'"var(--green100)"'},{value:'"var(--green400)"'},{value:'"var(--green700)"'},{value:'"var(--green800)"'},{value:'"var(--black)"'},{value:'"var(--blackAlpha20)"'},{value:'"var(--blackAlpha40)"'},{value:'"var(--blackAlpha60)"'},{value:'"var(--blackAlpha80)"'},{value:'"var(--red50)"'},{value:'"var(--red100)"'},{value:'"var(--red400)"'},{value:'"var(--red600)"'},{value:'"var(--red700)"'},{value:'"var(--red800)"'},{value:'"var(--red900)"'},{value:'"var(--yellow100)"'},{value:'"var(--yellow400)"'},{value:'"var(--yellow700)"'},{value:'"var(--white)"'},{value:'"var(--whiteAlpha20)"'},{value:'"var(--whiteAlpha40)"'},{value:'"var(--whiteAlpha80)"'}]}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"var(--blue100)"'},{value:'"var(--blue200)"'},{value:'"var(--blue300)"'},{value:'"var(--blue400)"'},{value:'"var(--blue500)"'},{value:'"var(--blue600)"'},{value:'"var(--blue700)"'},{value:'"var(--blue800)"'},{value:'"var(--blue900)"'},{value:'"var(--indigo50)"'},{value:'"var(--indigo100)"'},{value:'"var(--indigo200)"'},{value:'"var(--indigo300)"'},{value:'"var(--indigo400)"'},{value:'"var(--indigo500)"'},{value:'"var(--indigo600)"'},{value:'"var(--indigo700)"'},{value:'"var(--indigoAlpha4)"'},{value:'"var(--indigoAlpha6)"'},{value:'"var(--indigoAlpha8)"'},{value:'"var(--indigoAlpha12)"'},{value:'"var(--indigoAlpha20)"'},{value:'"var(--indigoAlpha40)"'},{value:'"var(--indigoAlpha80)"'},{value:'"var(--green100)"'},{value:'"var(--green400)"'},{value:'"var(--green700)"'},{value:'"var(--green800)"'},{value:'"var(--black)"'},{value:'"var(--blackAlpha20)"'},{value:'"var(--blackAlpha40)"'},{value:'"var(--blackAlpha60)"'},{value:'"var(--blackAlpha80)"'},{value:'"var(--red50)"'},{value:'"var(--red100)"'},{value:'"var(--red400)"'},{value:'"var(--red600)"'},{value:'"var(--red700)"'},{value:'"var(--red800)"'},{value:'"var(--red900)"'},{value:'"var(--yellow100)"'},{value:'"var(--yellow400)"'},{value:'"var(--yellow700)"'},{value:'"var(--white)"'},{value:'"var(--whiteAlpha20)"'},{value:'"var(--whiteAlpha40)"'},{value:'"var(--whiteAlpha80)"'}]}}}}}catch{}const C=t.forwardRef((e,a)=>{const{icon:r,className:l,...u}=e,v=["icon",`icon-${r}`,l].filter(n);return i.jsx("button",{...u,type:"button",ref:a,className:v.join(" ")})});C.displayName="TagButton";try{C.displayName="TagButton",C.__docgenInfo={description:"",displayName:"TagButton",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"embed"'},{value:'"link"'},{value:'"map"'},{value:'"search"'},{value:'"video"'},{value:'"image"'},{value:'"line"'},{value:'"stop"'},{value:'"text"'},{value:'"key"'},{value:'"security"'},{value:'"checkbox"'},{value:'"document"'},{value:'"grid"'},{value:'"group"'},{value:'"list"'},{value:'"presentation"'},{value:'"timer"'},{value:'"eye-closed"'},{value:'"shared-with"'},{value:'"team"'},{value:'"user"'},{value:'"author-cursor-view"'},{value:'"user-load"'},{value:'"eye"'},{value:'"comment-feedback"'},{value:'"photo"'},{value:'"folder"'},{value:'"upload"'},{value:'"help"'},{value:'"unlink"'},{value:'"settings"'},{value:'"pin"'},{value:'"analytics"'},{value:'"deactivated"'},{value:'"doc-note"'},{value:'"billing"'},{value:'"filters"'},{value:'"invitation"'},{value:'"trash"'},{value:'"help-question"'},{value:'"magnet"'},{value:'"bell"'},{value:'"public"'},{value:'"sound-on"'},{value:'"envelope"'},{value:'"play"'},{value:'"lock"'},{value:'"unlock"'},{value:'"plug"'},{value:'"mic-on"'},{value:'"mic-off"'},{value:'"activity"'},{value:'"sound-off"'},{value:'"calendar"'},{value:'"home"'},{value:'"learn"'},{value:'"thumbs-up"'},{value:'"thumbs-down"'},{value:'"backup"'},{value:'"pdf"'},{value:'"sticky-recognition"'},{value:'"boards"'},{value:'"app-boilerplate"'},{value:'"google"'},{value:'"tag"'},{value:'"parameters-vertical"'},{value:'"text-heading-one"'},{value:'"text-heading-two"'},{value:'"text-italic-bui"'},{value:'"text-underline-bui"'},{value:'"text-strikethrough-bui"'},{value:'"bold-bui"'},{value:'"bui"'},{value:'"numbered-list"'},{value:'"align-left"'},{value:'"info"'},{value:'"warning"'},{value:'"spreadsheets"'},{value:'"tile"'},{value:'"bullet-list"'},{value:'"card-list"'},{value:'"layers"'},{value:'"parameters"'},{value:'"drag"'},{value:'"unmerge"'},{value:'"ungroup"'},{value:'"merge"'},{value:'"duplicate"'},{value:'"screen-sharing"'},{value:'"more"'},{value:'"comment-add"'},{value:'"comments"'},{value:'"comment-close"'},{value:'"comment-eye"'},{value:'"download"'},{value:'"export"'},{value:'"close"'},{value:'"collapse"'},{value:'"expand"'},{value:'"redo"'},{value:'"undo"'},{value:'"back-1"'},{value:'"back"'},{value:'"arrows-down"'},{value:'"arrows-up"'},{value:'"arrows-left"'},{value:'"arrows-right"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"minus"'},{value:'"plus"'},{value:'"add-column-right"'},{value:'"add-row-bottom"'},{value:'"cursor"'},{value:'"cursor-user"'},{value:'"hand"'},{value:'"logout"'},{value:'"fit"'},{value:'"refresh"'},{value:'"arrow-line-shape"'},{value:'"arrow-line"'},{value:'"arrow-shape"'},{value:'"frames"'},{value:'"frame"'},{value:'"comment"'},{value:'"parallelogram"'},{value:'"eraser"'},{value:'"rounded"'},{value:'"star"'},{value:'"text-plus"'},{value:'"sticky"'},{value:'"sticky-two"'},{value:'"sticky-bulk"'},{value:'"triangle"'},{value:'"rhombus"'},{value:'"edit"'},{value:'"babble"'},{value:'"chat"'},{value:'"rectangle"'},{value:'"oval"'},{value:'"mockup"'},{value:'"templates"'},{value:'"card"'},{value:'"shapes"'},{value:'"4x3"'},{value:'"16x9"'},{value:'"custom"'},{value:'"ipad"'},{value:'"iphone"'},{value:'"phone"'},{value:'"sq"'},{value:'"tablet"'},{value:'"web"'}]}}}}}catch{}export{y as A,k as B,x as I,N as L,A as T,C as a,m as b,h as c,b as d,g as e,i as j};