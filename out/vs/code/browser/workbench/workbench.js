/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/(function(){var w=["vs/code/browser/workbench/workbench","require","exports","vs/base/browser/browser","vs/base/common/cancellation","vs/base/common/marshalling","vs/base/common/event","vs/base/common/lifecycle","vs/base/common/network","vs/base/common/resources","vs/base/common/uri","vs/base/parts/request/browser/request","vs/platform/product/common/product","vs/platform/window/common/window","vs/workbench/workbench.web.main","vs/base/common/path","vs/base/common/strings"],S=function(g){for(var p=[],l=0,b=g.length;l<b;l++)p[l]=w[g[l]];return p};define(w[0],S([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),function(g,p,l,b,U,A,v,d,R,i,k,y,n,C,h,E){"use strict";Object.defineProperty(p,"__esModule",{value:!0});class u{constructor(){let e;const t=document.getElementById("vscode-workbench-auth-session"),s=t?t.getAttribute("data-settings"):void 0;if(s)try{e=JSON.parse(s)}catch{}e&&(this.setPassword(`${y.default.urlProtocol}.login`,"account",JSON.stringify(e)),this.authService=`${y.default.urlProtocol}-${e.providerId}.login`,this.setPassword(this.authService,"account",JSON.stringify(e.scopes.map(o=>({id:e.id,scopes:o,accessToken:e.accessToken})))))}get credentials(){if(!this._credentials){try{const e=window.localStorage.getItem(u.CREDENTIALS_STORAGE_KEY);e&&(this._credentials=JSON.parse(e))}catch{}Array.isArray(this._credentials)||(this._credentials=[])}return this._credentials}save(){window.localStorage.setItem(u.CREDENTIALS_STORAGE_KEY,JSON.stringify(this.credentials))}async getPassword(e,t){return this.doGetPassword(e,t)}async doGetPassword(e,t){for(const s of this.credentials)if(s.service===e&&(typeof t!="string"||t===s.account))return s.password;return null}async setPassword(e,t,s){this.doDeletePassword(e,t),this.credentials.push({service:e,account:t,password:s}),this.save();try{if(s&&e===this.authService){const o=JSON.parse(s);Array.isArray(o)&&o.length===0&&await this.logout(e)}}catch(o){console.log(o)}}async deletePassword(e,t){const s=await this.doDeletePassword(e,t);if(s&&e===this.authService)try{await this.logout(e)}catch(o){console.log(o)}return s}async doDeletePassword(e,t){let s=!1;return this._credentials=this.credentials.filter(o=>o.service===e&&o.account===t?(s=!0,!1):!0),s&&this.save(),s}async findPassword(e){return this.doGetPassword(e)}async findCredentials(e){return this.credentials.filter(t=>t.service===e).map(({account:t,password:s})=>({account:t,password:s}))}async logout(e){const t=new Map;t.set("logout",String(!0)),t.set("service",e),await(0,k.request)({url:O("/auth/logout",t).toString(!0)},b.CancellationToken.None)}async clear(){window.localStorage.removeItem(u.CREDENTIALS_STORAGE_KEY)}}u.CREDENTIALS_STORAGE_KEY="credentials.provider";class m extends v.Disposable{constructor(){super(...arguments);this._onCallback=this._register(new A.Emitter),this.onCallback=this._onCallback.event,this.pendingCallbacks=new Set,this.lastTimeChecked=Date.now(),this.checkCallbacksTimeout=void 0}create(e={}){const t=++m.REQUEST_ID,s=[`vscode-reqid=${t}`];for(const o of m.QUERY_KEYS){const c=e[o];c&&s.push(`vscode-${o}=${encodeURIComponent(c)}`)}if(!(e.authority==="vscode.github-authentication"&&e.path==="/dummy")){const o=`vscode-web.url-callbacks[${t}]`;window.localStorage.removeItem(o),this.pendingCallbacks.add(t),this.startListening()}return i.URI.parse(window.location.href).with({path:"/callback",query:s.join("&")})}startListening(){if(this.onDidChangeLocalStorageDisposable)return;const e=()=>this.onDidChangeLocalStorage();window.addEventListener("storage",e),this.onDidChangeLocalStorageDisposable={dispose:()=>window.removeEventListener("storage",e)}}stopListening(){this.onDidChangeLocalStorageDisposable?.dispose(),this.onDidChangeLocalStorageDisposable=void 0}async onDidChangeLocalStorage(){const e=Date.now()-this.lastTimeChecked;e>1e3?this.checkCallbacks():this.checkCallbacksTimeout===void 0&&(this.checkCallbacksTimeout=setTimeout(()=>{this.checkCallbacksTimeout=void 0,this.checkCallbacks()},1e3-e))}checkCallbacks(){let e;for(const t of this.pendingCallbacks){const s=`vscode-web.url-callbacks[${t}]`,o=window.localStorage.getItem(s);if(o!==null){try{this._onCallback.fire(i.URI.revive(JSON.parse(o)))}catch(c){console.error(c)}e=e??new Set(this.pendingCallbacks),e.delete(t),window.localStorage.removeItem(s)}}e&&(this.pendingCallbacks=e,this.pendingCallbacks.size===0&&this.stopListening()),this.lastTimeChecked=Date.now()}}m.REQUEST_ID=0,m.QUERY_KEYS=["scheme","authority","path","query","fragment"];class r{constructor(e,t,s){this.workspace=e,this.payload=t,this.config=s,this.trusted=!0}static create(e){let t=!1,s,o=Object.create(null);return new URL(document.location.href).searchParams.forEach((a,T)=>{switch(T){case r.QUERY_PARAM_FOLDER:e.remoteAuthority&&a.startsWith(h.posix.sep)?s={folderUri:i.URI.from({scheme:d.Schemas.vscodeRemote,path:a,authority:e.remoteAuthority})}:s={folderUri:i.URI.parse(a)},t=!0;break;case r.QUERY_PARAM_WORKSPACE:e.remoteAuthority&&a.startsWith(h.posix.sep)?s={workspaceUri:i.URI.from({scheme:d.Schemas.vscodeRemote,path:a,authority:e.remoteAuthority})}:s={workspaceUri:i.URI.parse(a)},t=!0;break;case r.QUERY_PARAM_EMPTY_WINDOW:s=void 0,t=!0;break;case r.QUERY_PARAM_PAYLOAD:try{o=(0,U.parse)(a)}catch(I){console.error(I)}break}}),t||(e.folderUri?s={folderUri:i.URI.revive(e.folderUri)}:e.workspaceUri&&(s={workspaceUri:i.URI.revive(e.workspaceUri)})),new r(s,o,e)}async open(e,t){if(t?.reuse&&!t.payload&&this.isSame(this.workspace,e))return!0;const s=this.createTargetUrl(e,t);if(s){if(t?.reuse)return window.location.href=s,!0;{let o;return l.isStandalone?o=window.open(s,"_blank","toolbar=no"):o=window.open(s),!!o}}return!1}createTargetUrl(e,t){let s;if(!e)s=`${document.location.origin}${document.location.pathname}?${r.QUERY_PARAM_EMPTY_WINDOW}=true`;else if((0,n.isFolderToOpen)(e)){let o;this.config.remoteAuthority&&e.folderUri.scheme===d.Schemas.vscodeRemote?o=`${h.posix.sep}${(0,E.ltrim)(e.folderUri.path,h.posix.sep)}`:o=encodeURIComponent(e.folderUri.toString(!0)),s=`${document.location.origin}${document.location.pathname}?${r.QUERY_PARAM_FOLDER}=${o}`}else if((0,n.isWorkspaceToOpen)(e)){let o;this.config.remoteAuthority&&e.workspaceUri.scheme===d.Schemas.vscodeRemote?o=`${h.posix.sep}${(0,E.ltrim)(e.workspaceUri.path,h.posix.sep)}`:o=encodeURIComponent(e.workspaceUri.toString(!0)),s=`${document.location.origin}${document.location.pathname}?${r.QUERY_PARAM_WORKSPACE}=${o}`}return t?.payload&&(s+=`&${r.QUERY_PARAM_PAYLOAD}=${encodeURIComponent(JSON.stringify(t.payload))}`),s}isSame(e,t){return!e||!t?e===t:(0,n.isFolderToOpen)(e)&&(0,n.isFolderToOpen)(t)?(0,R.isEqual)(e.folderUri,t.folderUri):(0,n.isWorkspaceToOpen)(e)&&(0,n.isWorkspaceToOpen)(t)?(0,R.isEqual)(e.workspaceUri,t.workspaceUri):!1}hasRemote(){if(this.workspace){if((0,n.isFolderToOpen)(this.workspace))return this.workspace.folderUri.scheme===d.Schemas.vscodeRemote;if((0,n.isWorkspaceToOpen)(this.workspace))return this.workspace.workspaceUri.scheme===d.Schemas.vscodeRemote}return!0}}r.QUERY_PARAM_EMPTY_WINDOW="ew",r.QUERY_PARAM_FOLDER="folder",r.QUERY_PARAM_WORKSPACE="workspace",r.QUERY_PARAM_PAYLOAD="payload";function O(f,e){let t;if(e){let s=0;e.forEach((o,c)=>{t||(t=""),t+=`${s++==0?"":"&"}${c}=${encodeURIComponent(o)}`})}return i.URI.parse(window.location.href).with({path:f,query:t})}(function(){const f=document.getElementById("vscode-workbench-web-configuration"),e=f?f.getAttribute("data-settings"):void 0;if(!f||!e)throw new Error("Missing web configuration element");const t=JSON.parse(e),s={remoteAuthority:window.location.host,developmentOptions:t.developmentOptions},o=window.HR_FE?{...t}:{...s,developmentOptions:{...s.developmentOptions}};(0,C.create)(document.body,{...o,workspaceProvider:r.create(s),urlCallbackProvider:new m,credentialsProvider:s.remoteAuthority?void 0:new u})})()})}).call(this);

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/454f312b3b5fe5a98eff902ddbd43eda91a40934/core/vs/code/browser/workbench/workbench.js.map