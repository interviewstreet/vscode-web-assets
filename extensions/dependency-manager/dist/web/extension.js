(()=>{"use strict";var e={549:e=>{e.exports=require("vscode")}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,i),a.exports}var n={};(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.deactivate=e.activate=void 0;const t=i(549);e.activate=function(e){const i=new s(e.extensionUri),n=t.window.registerWebviewViewProvider("hackerrank.dependency-manager",i,{webviewOptions:{retainContextWhenHidden:!0}});e.subscriptions.push(n)},e.deactivate=function(){};class s{constructor(e){this._extensionUri=e,this.watchFileName="challenge/package.json"}resolveWebviewView(e,t,i){this._view=e,e.webview.options={enableScripts:!0,localResourceRoots:[this._extensionUri]},e.webview.html=this._getHtmlForWebview(e.webview),e.webview.onDidReceiveMessage((e=>{switch(e.type){case"onMount":this.init();break;case"updateDependencies":this.writeToPackageJsonFile(e.payload)}}))}_getHtmlForWebview(e){const i=e.asWebviewUri(t.Uri.joinPath(this._extensionUri,"media","main.js")),n=e.asWebviewUri(t.Uri.joinPath(this._extensionUri,"media","main.css")),s=function(){let e="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let i=0;i<32;i++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}();return`\n\t\t<!DOCTYPE html>\n\t\t<html lang='en'>\n\t\t\t<head>\n\t\t\t\t<meta charset='UTF-8'>\n\n        \x3c!--\n\t\t\t\t\tUse a content security policy to only allow loading images from https or from our extension directory,\n\t\t\t\t\tand only allow scripts that have a specific nonce.\n\t\t\t\t--\x3e\n\t\t\t\t<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${e.cspSource}; script-src 'nonce-${s}'; connect-src https: wss:">\n\n\t\t\t\t<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n\n\t\t\t\t<link href='${n}' rel='stylesheet'>\n\n\t\t\t\t<title>Dependency Manager</title>\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t<div id='root'></div>\n\n\t\t\t\t<script nonce='${s}' src='${i}'><\/script>\n\n\t\t\t</body>\n\t\t</html>\n\t`}init(){const e=t.workspace.workspaceFolders;if(e&&1===e.length){const i=e[0],n=t.Uri.joinPath(i.uri,this.watchFileName);this.watchFileURI=n,this.readPackageJsonFile(),t.workspace.onDidChangeTextDocument((e=>{this.watchFileURI&&e.document.fileName===this.watchFileURI.path&&this.readPackageJsonFile()}))}}readPackageJsonFile(){this.watchFileURI&&t.workspace.fs.readFile(this.watchFileURI).then(a).then(JSON.parse).then((({dependencies:e})=>{this._view&&this._view.webview.postMessage({type:"updateDependencies",payload:e||{}})}))}writeToPackageJsonFile(e){if(this.watchFileURI)try{t.workspace.fs.readFile(this.watchFileURI).then(a).then(JSON.parse).then((i=>{i.dependencies=e,this.watchFileURI&&t.workspace.fs.writeFile(this.watchFileURI,function(e){const t=new ArrayBuffer(e.length),i=new Uint8Array(t);for(let t=0,n=e.length;t<n;t++)i[t]=e.charCodeAt(t);return i}(JSON.stringify(i,null,2)+"\n"))}))}catch(e){t.window.showErrorMessage("Failed to update project's dependencies"),this.readPackageJsonFile()}}}function a(e){return new TextDecoder("utf-8").decode(e)}})();var s=exports;for(var a in n)s[a]=n[a];n.__esModule&&Object.defineProperty(s,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/7c21116b336b5bf16ba1a290a355f7085e4fbdd7/extensions/dependency-manager/dist/web/extension.js.map