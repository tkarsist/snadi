// Copyright 2005-2007 Adobe Systems Incorporated.  All rights reserved.
function ControlVersion(){var e,t;try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),e=t.GetVariable("$version")}catch(n){}if(!e)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),e="WIN 6,0,21,0",t.AllowScriptAccess="always",e=t.GetVariable("$version")}catch(n){}if(!e)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"),e=t.GetVariable("$version")}catch(n){}if(!e)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"),e="WIN 3,0,18,0"}catch(n){}if(!e)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),e="WIN 2,0,0,11"}catch(n){e=-1}return e}function GetSwfVer(){var e=-1;if(null!=navigator.plugins&&navigator.plugins.length>0){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var t=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"",n=navigator.plugins["Shockwave Flash"+t].description,r=n.split(" "),i=r[2].split("."),o=i[0],a=i[1],s=r[3];""==s&&(s=r[4]),"d"==s[0]?s=s.substring(1):"r"==s[0]&&(s=s.substring(1),s.indexOf("d")>0&&(s=s.substring(0,s.indexOf("d"))));var e=o+"."+a+"."+s}}else-1!=navigator.userAgent.toLowerCase().indexOf("webtv/2.6")?e=4:-1!=navigator.userAgent.toLowerCase().indexOf("webtv/2.5")?e=3:-1!=navigator.userAgent.toLowerCase().indexOf("webtv")?e=2:isIE&&isWin&&!isOpera&&(e=ControlVersion());return e}function DetectFlashVer(e,t,n){if(versionStr=GetSwfVer(),-1==versionStr)return!1;if(0!=versionStr){isIE&&isWin&&!isOpera?(tempArray=versionStr.split(" "),tempString=tempArray[1],versionArray=tempString.split(",")):versionArray=versionStr.split(".");var r=versionArray[0],i=versionArray[1],o=versionArray[2];if(r>parseFloat(e))return!0;if(r==parseFloat(e)){if(i>parseFloat(t))return!0;if(i==parseFloat(t)&&o>=parseFloat(n))return!0}return!1}}function AC_AddExtension(e,t){return-1!=e.indexOf("?")?e.replace(/\?/,t+"?"):e+t}function AC_Generateobj(e,t,n){var r="";if(isIE&&isWin&&!isOpera){r+="<object ";for(var i in e)r+=i+'="'+e[i]+'" ';r+=">";for(var i in t)r+='<param name="'+i+'" value="'+t[i]+'" /> ';r+="</object>"}else{r+="<embed ";for(var i in n)r+=i+'="'+n[i]+'" ';r+="> </embed>"}document.write(r)}function AC_FL_RunContent(){var e=AC_GetArgs(arguments,".swf","movie","clsid:d27cdb6e-ae6d-11cf-96b8-444553540000","application/x-shockwave-flash");AC_Generateobj(e.objAttrs,e.params,e.embedAttrs)}function AC_SW_RunContent(){var e=AC_GetArgs(arguments,".dcr","src","clsid:166B1BCA-3F9C-11CF-8075-444553540000",null);AC_Generateobj(e.objAttrs,e.params,e.embedAttrs)}function AC_GetArgs(e,t,n,r,i){var o=new Object;o.embedAttrs=new Object,o.params=new Object,o.objAttrs=new Object;for(var a=0;a<e.length;a+=2){var s=e[a].toLowerCase();switch(s){case"classid":break;case"pluginspage":o.embedAttrs[e[a]]=e[a+1];break;case"src":case"movie":e[a+1]=AC_AddExtension(e[a+1],t),o.embedAttrs.src=e[a+1],o.params[n]=e[a+1];break;case"onafterupdate":case"onbeforeupdate":case"onblur":case"oncellchange":case"onclick":case"ondblClick":case"ondrag":case"ondragend":case"ondragenter":case"ondragleave":case"ondragover":case"ondrop":case"onfinish":case"onfocus":case"onhelp":case"onmousedown":case"onmouseup":case"onmouseover":case"onmousemove":case"onmouseout":case"onkeypress":case"onkeydown":case"onkeyup":case"onload":case"onlosecapture":case"onpropertychange":case"onreadystatechange":case"onrowsdelete":case"onrowenter":case"onrowexit":case"onrowsinserted":case"onstart":case"onscroll":case"onbeforeeditfocus":case"onactivate":case"onbeforedeactivate":case"ondeactivate":case"type":case"codebase":case"id":o.objAttrs[e[a]]=e[a+1];break;case"width":case"height":case"align":case"vspace":case"hspace":case"class":case"title":case"accesskey":case"name":case"tabindex":o.embedAttrs[e[a]]=o.objAttrs[e[a]]=e[a+1];break;default:o.embedAttrs[e[a]]=o.params[e[a]]=e[a+1]}}return o.objAttrs.classid=r,i&&(o.embedAttrs.type=i),o}var isIE=-1!=navigator.appVersion.indexOf("MSIE")?!0:!1,isWin=-1!=navigator.appVersion.toLowerCase().indexOf("win")?!0:!1,isOpera=-1!=navigator.userAgent.indexOf("Opera")?!0:!1;