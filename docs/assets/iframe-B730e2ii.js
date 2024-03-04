import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&m(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d="modulepreload",O=function(s,i){return new URL(s,i).href},p={},t=function(i,n,m){let e=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link");e=Promise.all(n.map(o=>{if(o=O(o,m),o in p)return;p[o]=!0;const c=o.endsWith(".css"),E=c?'[rel="stylesheet"]':"";if(!!m)for(let a=r.length-1;a>=0;a--){const u=r[a];if(u.href===o&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${E}`))return;const _=document.createElement("link");if(_.rel=c?"stylesheet":d,c||(_.as="script",_.crossOrigin=""),_.href=o,document.head.appendChild(_),c)return new Promise((a,u)=>{_.addEventListener("load",a),_.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})}))}return e.then(()=>i()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__,l=R({page:"preview"});T.setChannel(l);window.__STORYBOOK_ADDONS_CHANNEL__=l;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=l);const P={"./src/stories/components/AppCard.stories.tsx":async()=>t(()=>import("./AppCard.stories-BI_fexKJ.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),"./src/stories/components/Button.stories.tsx":async()=>t(()=>import("./Button.stories-C19fcYMx.js"),__vite__mapDeps([6,1,2,3,4]),import.meta.url),"./src/stories/components/Checkbox.stories.tsx":async()=>t(()=>import("./Checkbox.stories-Dgvs_R2F.js"),__vite__mapDeps([7,1,2,3,4]),import.meta.url),"./src/stories/components/Divider.stories.tsx":async()=>t(()=>import("./Divider.stories-BiW4-EnP.js"),__vite__mapDeps([8,1,2,3,4]),import.meta.url),"./src/stories/components/Icon.stories.tsx":async()=>t(()=>import("./Icon.stories-ivyiAAwS.js"),__vite__mapDeps([9,1,2,3,4]),import.meta.url),"./src/stories/components/Input.stories.tsx":async()=>t(()=>import("./Input.stories-DbDopW0b.js"),__vite__mapDeps([10,1,2,3,4,5]),import.meta.url),"./src/stories/components/Label.stories.tsx":async()=>t(()=>import("./Label.stories-DuddRZaP.js"),__vite__mapDeps([11,1,2,3,4]),import.meta.url),"./src/stories/components/Link.stories.tsx":async()=>t(()=>import("./Link.stories-DWeTd3-N.js"),__vite__mapDeps([12,1,2,3,4]),import.meta.url),"./src/stories/components/RadioButton.stories.tsx":async()=>t(()=>import("./RadioButton.stories-DvhvoeYx.js"),__vite__mapDeps([13,1,2,3,4]),import.meta.url),"./src/stories/components/Select.stories.tsx":async()=>t(()=>import("./Select.stories-CuutyWRu.js"),__vite__mapDeps([14,1,2,3,4]),import.meta.url),"./src/stories/components/Table.stories.tsx":async()=>t(()=>import("./Table.stories-CdVqGvH3.js"),__vite__mapDeps([15,1,2,3,4]),import.meta.url),"./src/stories/components/Tabs.stories.tsx":async()=>t(()=>import("./Tabs.stories-EOLIaS_y.js"),__vite__mapDeps([16,1,2,3,4]),import.meta.url),"./src/stories/components/Tag.stories.tsx":async()=>t(()=>import("./Tag.stories-Dt9ts5H2.js"),__vite__mapDeps([17,1,2,3,4]),import.meta.url),"./src/stories/icons/board-objects.mdx":async()=>t(()=>import("./board-objects-DdRZkzav.js"),__vite__mapDeps([18,1,2,3,4,19,20,21,22,23,24,25]),import.meta.url),"./src/stories/icons/devices.mdx":async()=>t(()=>import("./devices-Cj2OzVD4.js"),__vite__mapDeps([26,1,2,3,4,19,20,21,22,23,24,25]),import.meta.url),"./src/stories/icons/editor.mdx":async()=>t(()=>import("./editor-BjmsWZUO.js"),__vite__mapDeps([27,1,2,3,4,19,20,21,22,23,24,25]),import.meta.url),"./src/stories/icons/frames.mdx":async()=>t(()=>import("./frames-Jzm1qTpX.js"),__vite__mapDeps([28,1,2,3,4,19,20,21,22,23,24,25]),import.meta.url),"./src/stories/icons/objects.mdx":async()=>t(()=>import("./objects-DH8n5quE.js"),__vite__mapDeps([29,1,2,3,4,19,20,21,22,23,24,25]),import.meta.url),"./src/stories/icons/people.mdx":async()=>t(()=>import("./people-DQ7x2jOZ.js"),__vite__mapDeps([30,1,2,3,4,19,20,21,22,23,24,25]),import.meta.url),"./src/stories/icons/symbols.mdx":async()=>t(()=>import("./symbols-Df_b_kdx.js"),__vite__mapDeps([31,1,2,3,4,19,20,21,22,23,24,25]),import.meta.url)};async function L(s){return P[s]()}const{composeConfigs:I,PreviewWeb:f,ClientApi:v}=__STORYBOOK_MODULE_PREVIEW_API__,A=async()=>{const s=await Promise.all([t(()=>import("./entry-preview-fAjVL9W4.js"),__vite__mapDeps([32,2,3,33,20]),import.meta.url),t(()=>import("./entry-preview-docs-CfnZZqCs.js"),__vite__mapDeps([34,22,3,23,2]),import.meta.url),t(()=>import("./preview-B_0crF9I.js"),__vite__mapDeps([35,21]),import.meta.url),t(()=>import("./preview-BpolFviD.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-D8VCGkL0.js"),__vite__mapDeps([36,23]),import.meta.url),t(()=>import("./preview-BcxrGG1y.js"),__vite__mapDeps([37,23]),import.meta.url),t(()=>import("./preview-Db4Idchh.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([38,23]),import.meta.url),t(()=>import("./preview-Cv3rAi2i.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-CDTsxpVA.js"),__vite__mapDeps([39,3]),import.meta.url),t(()=>import("./preview-mP9jMqe9.js"),__vite__mapDeps([40,41]),import.meta.url)]);return I(s)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new f;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new v({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:L,getProjectAnnotations:A});export{t as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./AppCard.stories-BI_fexKJ.js","./TagButton-UUd4az2B.js","./index-CBqU2yxZ.js","./_commonjsHelpers-BosuxZz1.js","./TagButton-CbA_F2Ye.css","./index-BTVOhaqX.js","./Button.stories-C19fcYMx.js","./Checkbox.stories-Dgvs_R2F.js","./Divider.stories-BiW4-EnP.js","./Icon.stories-ivyiAAwS.js","./Input.stories-DbDopW0b.js","./Label.stories-DuddRZaP.js","./Link.stories-DWeTd3-N.js","./RadioButton.stories-DvhvoeYx.js","./Select.stories-CuutyWRu.js","./Table.stories-CdVqGvH3.js","./Tabs.stories-EOLIaS_y.js","./Tag.stories-Dt9ts5H2.js","./board-objects-DdRZkzav.js","./index-CjVyvA1W.js","./index-BtM5VmRH.js","./index-Bw8VTzHM.js","./index-Cmc67Rxs.js","./index-DrFu-skq.js","./types-DWPftK33.js","./index-DI5IigMn.js","./devices-Cj2OzVD4.js","./editor-BjmsWZUO.js","./frames-Jzm1qTpX.js","./objects-DH8n5quE.js","./people-DQ7x2jOZ.js","./symbols-Df_b_kdx.js","./entry-preview-fAjVL9W4.js","./react-18-D8cruF67.js","./entry-preview-docs-CfnZZqCs.js","./preview-B_0crF9I.js","./preview-D8VCGkL0.js","./preview-BcxrGG1y.js","./preview-BAz7FMXc.js","./preview-CDTsxpVA.js","./preview-mP9jMqe9.js","./preview-BALNKU2-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
