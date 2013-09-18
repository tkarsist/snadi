/**
 * Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */
// Tool scripts for the sample pages.
// This file can be ignored and is not required to make use of CKEditor.
(function(){CKEDITOR.on("instanceReady",function(e){var t=e.editor,n=CKEDITOR.document.$.getElementsByName("ckeditor-sample-required-plugins"),r=n.length?CKEDITOR.dom.element.get(n[0]).getAttribute("content").split(","):[],i=[];if(r.length){for(var s=0;s<r.length;s++)t.plugins[r[s]]||i.push("<code>"+r[s]+"</code>");if(i.length){var o=CKEDITOR.dom.element.createFromHtml('<div class="warning"><span>To fully experience this demo, the '+i.join(", ")+" plugin"+(i.length>1?"s are":" is")+" required.</span>"+"</div>");o.insertBefore(t.container)}}})})();