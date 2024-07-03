import{r as O}from"./jquery.dataTables-0ff18b04.js";import"./_commonjsHelpers-23102255.js";import"./jquery-1d19d72e.js";var D={exports:{}};/*!
 Buttons for DataTables 1.7.1
 ©2016-2021 SpryMedia Ltd - datatables.net/license
*/(function(L,j){(function(i){L.exports=function(A,v){return A||(A=window),(!v||!v.fn.dataTable)&&(v=O(A,v).$),i(v,A,A.document)}})(function(i,A,v,p){function C(t,n,e){i.fn.animate?t.stop().fadeIn(n,e):(t.css("display","block"),e&&e.call(t))}function w(t,n,e){i.fn.animate?t.stop().fadeOut(n,e):(t.css("display","none"),e&&e.call(t))}function B(t,n){var e=new h.Api(t),o=n||e.init().buttons||h.defaults.buttons;return new g(e,o).container()}var h=i.fn.dataTable,K=0,S=0,x=h.ext.buttons,g=function(t,n){if(!(this instanceof g))return function(e){return new g(e,t).container()};typeof n>"u"&&(n={}),n===!0&&(n={}),Array.isArray(n)&&(n={buttons:n}),this.c=i.extend(!0,{},g.defaults,n),n.buttons&&(this.c.buttons=n.buttons),this.s={dt:new h.Api(t),buttons:[],listenKeys:"",namespace:"dtb"+K++},this.dom={container:i("<"+this.c.dom.container.tag+"/>").addClass(this.c.dom.container.className)},this._constructor()};i.extend(g.prototype,{action:function(t,n){var e=this._nodeToButton(t);return n===p?e.conf.action:(e.conf.action=n,this)},active:function(t,n){var o=this._nodeToButton(t),e=this.c.dom.button.active,o=i(o.node);return n===p?o.hasClass(e):(o.toggleClass(e,n===p?!0:n),this)},add:function(t,n){var e=this.s.buttons;if(typeof n=="string"){for(var o=n.split("-"),r=this.s,e=0,c=o.length-1;e<c;e++)r=r.buttons[1*o[e]];e=r.buttons,n=1*o[o.length-1]}return this._expandButton(e,t,r!==p,n),this._draw(),this},container:function(){return this.dom.container},disable:function(t){return t=this._nodeToButton(t),i(t.node).addClass(this.c.dom.button.disabled).attr("disabled",!0),this},destroy:function(){i("body").off("keyup."+this.s.namespace);var t=this.s.buttons.slice(),n,e;for(n=0,e=t.length;n<e;n++)this.remove(t[n].node);for(this.dom.container.remove(),t=this.s.dt.settings()[0],n=0,e=t.length;n<e;n++)if(t.inst===this){t.splice(n,1);break}return this},enable:function(t,n){if(n===!1)return this.disable(t);var e=this._nodeToButton(t);return i(e.node).removeClass(this.c.dom.button.disabled).removeAttr("disabled"),this},name:function(){return this.c.name},node:function(t){return t?(t=this._nodeToButton(t),i(t.node)):this.dom.container},processing:function(t,n){var e=this.s.dt,o=this._nodeToButton(t);return n===p?i(o.node).hasClass("processing"):(i(o.node).toggleClass("processing",n),i(e.table().node()).triggerHandler("buttons-processing.dt",[n,e.button(t),e,i(t),o.conf]),this)},remove:function(t){var n=this._nodeToButton(t),e=this._nodeToHost(t),o=this.s.dt;if(n.buttons.length)for(var r=n.buttons.length-1;0<=r;r--)this.remove(n.buttons[r].node);return n.conf.destroy&&n.conf.destroy.call(o.button(t),o,i(t),n.conf),this._removeKey(n.conf),i(n.node).remove(),t=i.inArray(n,e),e.splice(t,1),this},text:function(t,n){var e=this._nodeToButton(t),o=this.c.dom.collection.buttonLiner,o=e.inCollection&&o&&o.tag?o.tag:this.c.dom.buttonLiner.tag,r=this.s.dt,c=i(e.node),a=function(u){return typeof u=="function"?u(r,c,e.conf):u};return n===p?a(e.conf.text):(e.conf.text=n,o?c.children(o).html(a(n)):c.html(a(n)),this)},_constructor:function(){var t=this,n=this.s.dt,e=n.settings()[0],o=this.c.buttons;e._buttons||(e._buttons=[]),e._buttons.push({inst:this,name:this.c.name});for(var r=0,c=o.length;r<c;r++)this.add(o[r]);n.on("destroy",function(a,u){u===e&&t.destroy()}),i("body").on("keyup."+this.s.namespace,function(a){if(!v.activeElement||v.activeElement===v.body){var u=String.fromCharCode(a.keyCode).toLowerCase();t.s.listenKeys.toLowerCase().indexOf(u)!==-1&&t._keypress(u,a)}})},_addKey:function(t){t.key&&(this.s.listenKeys+=i.isPlainObject(t.key)?t.key.key:t.key)},_draw:function(t,n){t||(t=this.dom.container,n=this.s.buttons),t.children().detach();for(var e=0,o=n.length;e<o;e++)t.append(n[e].inserter),t.append(" "),n[e].buttons&&n[e].buttons.length&&this._draw(n[e].collection,n[e].buttons)},_expandButton:function(t,n,e,o){for(var r=this.s.dt,c=0,n=Array.isArray(n)?n:[n],a=0,u=n.length;a<u;a++){var l=this._resolveExtends(n[a]);if(l)if(Array.isArray(l))this._expandButton(t,l,e,o);else{var s=this._buildButton(l,e);s&&(o!==p&&o!==null?(t.splice(o,0,s),o++):t.push(s),s.conf.buttons&&(s.collection=i("<"+this.c.dom.collection.tag+"/>"),s.conf._collection=s.collection,this._expandButton(s.buttons,s.conf.buttons,!0,o)),l.init&&l.init.call(r.button(s.node),r,i(s.node),l),c++)}}},_buildButton:function(t,n){var e=this.c.dom.button,o=this.c.dom.buttonLiner,u=this.c.dom.collection,r=this.s.dt,c=function(f){return typeof f=="function"?f(r,s,t):f};if(n&&u.button&&(e=u.button),n&&u.buttonLiner&&(o=u.buttonLiner),t.available&&!t.available(r,t))return!1;var a=function(f,d,m,b){b.action.call(d.button(m),f,d,m,b),i(d.table().node()).triggerHandler("buttons-action.dt",[d.button(m),d,m,b])},u=t.tag||e.tag,l=t.clickBlurs===p?!0:t.clickBlurs,s=i("<"+u+"/>").addClass(e.className).attr("tabindex",this.s.dt.settings()[0].iTabIndex).attr("aria-controls",this.s.dt.table().node().id).on("click.dtb",function(f){f.preventDefault(),!s.hasClass(e.disabled)&&t.action&&a(f,r,s,t),l&&s.trigger("blur")}).on("keyup.dtb",function(f){f.keyCode===13&&!s.hasClass(e.disabled)&&t.action&&a(f,r,s,t)});return u.toLowerCase()==="a"&&s.attr("href","#"),u.toLowerCase()==="button"&&s.attr("type","button"),o.tag?(u=i("<"+o.tag+"/>").html(c(t.text)).addClass(o.className),o.tag.toLowerCase()==="a"&&u.attr("href","#"),s.append(u)):s.html(c(t.text)),t.enabled===!1&&s.addClass(e.disabled),t.className&&s.addClass(t.className),t.titleAttr&&s.attr("title",c(t.titleAttr)),t.attr&&s.attr(t.attr),t.namespace||(t.namespace=".dt-button-"+S++),o=(o=this.c.dom.buttonContainer)&&o.tag?i("<"+o.tag+"/>").addClass(o.className).append(s):s,this._addKey(t),this.c.buttonCreated&&(o=this.c.buttonCreated(t,o)),{conf:t,node:s.get(0),inserter:o,buttons:[],inCollection:n,collection:null}},_nodeToButton:function(t,n){n||(n=this.s.buttons);for(var e=0,o=n.length;e<o;e++){if(n[e].node===t)return n[e];if(n[e].buttons.length){var r=this._nodeToButton(t,n[e].buttons);if(r)return r}}},_nodeToHost:function(t,n){n||(n=this.s.buttons);for(var e=0,o=n.length;e<o;e++){if(n[e].node===t)return n;if(n[e].buttons.length){var r=this._nodeToHost(t,n[e].buttons);if(r)return r}}},_keypress:function(t,n){if(!n._buttonsHandled){var e=function(o){for(var r=0,c=o.length;r<c;r++){var a=o[r].conf,u=o[r].node;a.key&&(a.key===t||i.isPlainObject(a.key)&&a.key.key===t&&(!a.key.shiftKey||n.shiftKey)&&(!a.key.altKey||n.altKey)&&(!a.key.ctrlKey||n.ctrlKey)&&(!a.key.metaKey||n.metaKey))&&(n._buttonsHandled=!0,i(u).click()),o[r].buttons.length&&e(o[r].buttons)}};e(this.s.buttons)}},_removeKey:function(t){if(t.key){var n=i.isPlainObject(t.key)?t.key.key:t.key,t=this.s.listenKeys.split(""),n=i.inArray(n,t);t.splice(n,1),this.s.listenKeys=t.join("")}},_resolveExtends:function(t){for(var n=this.s.dt,e,o,r=function(l){for(var s=0;!i.isPlainObject(l)&&!Array.isArray(l);){if(l===p)return;if(typeof l=="function"){if(l=l(n,t),!l)return!1}else if(typeof l=="string"){if(!x[l])throw"Unknown button type: "+l;l=x[l]}if(s++,30<s)throw"Buttons: Too many iterations"}return Array.isArray(l)?l:i.extend({},l)},t=r(t);t&&t.extend;){if(!x[t.extend])throw"Cannot extend unknown button type: "+t.extend;var c=r(x[t.extend]);if(Array.isArray(c))return c;if(!c)return!1;e=c.className,t=i.extend({},c,t),e&&t.className!==e&&(t.className=e+" "+t.className);var a=t.postfixButtons;if(a){for(t.buttons||(t.buttons=[]),e=0,o=a.length;e<o;e++)t.buttons.push(a[e]);t.postfixButtons=null}if(a=t.prefixButtons){for(t.buttons||(t.buttons=[]),e=0,o=a.length;e<o;e++)t.buttons.splice(e,0,a[e]);t.prefixButtons=null}t.extend=c.extend}return t},_popover:function(t,n,e){var a=this.c,o=i.extend({align:"button-left",autoClose:!1,background:!0,backgroundClassName:"dt-button-background",contentClassName:a.dom.collection.className,collectionLayout:"",collectionTitle:"",dropup:!1,fade:400,rightAlignClassName:"dt-button-right",tag:a.dom.collection.tag},e),r=n.node(),c=function(){w(i(".dt-button-collection"),o.fade,function(){i(this).detach()}),i(n.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes()).attr("aria-expanded","false"),i("div.dt-button-background").off("click.dtb-collection"),g.background(!1,o.backgroundClassName,o.fade,r),i("body").off(".dtb-collection"),n.off("buttons-action.b-internal")};t===!1&&c(),e=i(n.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes()),e.length&&(r=e.eq(0),c()),e=i("<div/>").addClass("dt-button-collection").addClass(o.collectionLayout).css("display","none"),t=i(t).addClass(o.contentClassName).attr("role","menu").appendTo(e),r.attr("aria-expanded","true"),r.parents("body")[0]!==v.body&&(r=v.body.lastChild),o.collectionTitle&&e.prepend('<div class="dt-button-collection-title">'+o.collectionTitle+"</div>"),C(e.insertAfter(r),o.fade);var a=i(n.table().container()),u=e.css("position");if(o.align==="dt-container"&&(r=r.parent(),e.css("width",a.width())),u==="absolute"){var l=r.position(),u=i(n.node()).position();e.css({top:u.top+r.outerHeight(),left:l.left});var l=e.outerHeight(),s=a.offset().top+a.height(),s=u.top+r.outerHeight()+l-s,f=u.top-l,d=a.offset().top,u=u.top-l-5;(s>d-f||o.dropup)&&-u<d&&e.css("top",u);var u=a.offset().left,a=a.width(),a=u+a,l=e.offset().left,s=e.width(),s=l+s,f=r.offset().left,d=r.outerWidth(),m=f+d;e.hasClass(o.rightAlignClassName)||e.hasClass(o.leftAlignClassName)||o.align==="dt-container"?(d=0,e.hasClass(o.rightAlignClassName)?(d=m-s,u>l+d&&(u-=l+d,a-=s+d,d=u>a?d+a:d+u)):(d=u-l,a<s+d&&(u-=l+d,a-=s+d,d=u>a?d+a:d+u))):(a=r.offset().top,d=0,d=o.align==="button-right"?m-s:f-l),e.css("left",e.position().left+d)}else a=e.height()/2,a>i(A).height()/2&&(a=i(A).height()/2),e.css("marginTop",-1*a);o.background&&g.background(!0,o.backgroundClassName,o.fade,r),i("div.dt-button-background").on("click.dtb-collection",function(){}),i("body").on("click.dtb-collection",function(b){var y=i.fn.addBack?"addBack":"andSelf",_=i(b.target).parent()[0];(!i(b.target).parents()[y]().filter(t).length&&!i(_).hasClass("dt-buttons")||i(b.target).hasClass("dt-button-background"))&&c()}).on("keyup.dtb-collection",function(b){b.keyCode===27&&c()}),o.autoClose&&setTimeout(function(){n.on("buttons-action.b-internal",function(b,y,_,P){P[0]!==r[0]&&c()})},0),i(e).trigger("buttons-popover.dt")}}),g.background=function(t,n,e,o){e===p&&(e=400),o||(o=v.body),t?C(i("<div/>").addClass(n).css("display","none").insertAfter(o),e):w(i("div."+n),e,function(){i(this).removeClass(n).remove()})},g.instanceSelector=function(t,n){if(t===p||t===null)return i.map(n,function(c){return c.inst});var e=[],o=i.map(n,function(c){return c.name}),r=function(c){if(Array.isArray(c))for(var a=0,u=c.length;a<u;a++)r(c[a]);else typeof c=="string"?c.indexOf(",")!==-1?r(c.split(",")):(c=i.inArray(c.trim(),o),c!==-1&&e.push(n[c].inst)):typeof c=="number"&&e.push(n[c].inst)};return r(t),e},g.buttonSelector=function(t,n){for(var e=[],o=function(u,l,s){for(var f,d,m=0,b=l.length;m<b;m++)(f=l[m])&&(d=s!==p?s+m:m+"",u.push({node:f.node,name:f.conf.name,idx:d}),f.buttons&&o(u,f.buttons,d+"-"))},r=function(u,l){var s,f,d=[];if(o(d,l.s.buttons),s=i.map(d,function(b){return b.node}),Array.isArray(u)||u instanceof i)for(s=0,f=u.length;s<f;s++)r(u[s],l);else if(u===null||u===p||u==="*")for(s=0,f=d.length;s<f;s++)e.push({inst:l,node:d[s].node});else if(typeof u=="number")e.push({inst:l,node:l.s.buttons[u].node});else if(typeof u=="string")if(u.indexOf(",")!==-1)for(d=u.split(","),s=0,f=d.length;s<f;s++)r(d[s].trim(),l);else if(u.match(/^\d+(\-\d+)*$/))s=i.map(d,function(b){return b.idx}),e.push({inst:l,node:d[i.inArray(u,s)].node});else if(u.indexOf(":name")!==-1){var m=u.replace(":name","");for(s=0,f=d.length;s<f;s++)d[s].name===m&&e.push({inst:l,node:d[s].node})}else i(s).filter(u).each(function(){e.push({inst:l,node:this})});else typeof u=="object"&&u.nodeName&&(d=i.inArray(u,s),d!==-1&&e.push({inst:l,node:s[d]}))},c=0,a=t.length;c<a;c++)r(n,t[c]);return e},g.stripData=function(t,n){return typeof t!="string"||(t=t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,""),t=t.replace(/<!\-\-.*?\-\->/g,""),(!n||n.stripHtml)&&(t=t.replace(/<[^>]*>/g,"")),(!n||n.trim)&&(t=t.replace(/^\s+|\s+$/g,"")),(!n||n.stripNewlines)&&(t=t.replace(/\n/g," ")),(!n||n.decodeEntities)&&(H.innerHTML=t,t=H.value)),t},g.defaults={buttons:["copy","excel","csv","pdf","print"],name:"main",tabIndex:0,dom:{container:{tag:"div",className:"dt-buttons"},collection:{tag:"div",className:""},button:{tag:"button",className:"dt-button",active:"active",disabled:"disabled"},buttonLiner:{tag:"span",className:""}}},g.version="1.7.1",i.extend(x,{collection:{text:function(t){return t.i18n("buttons.collection","Collection")},className:"buttons-collection",init:function(t,n){n.attr("aria-expanded",!1)},action:function(t,n,e,o){t.stopPropagation(),o._collection.parents("body").length?this.popover(!1,o):this.popover(o._collection,o)},attr:{"aria-haspopup":!0}},copy:function(){if(x.copyHtml5)return"copyHtml5"},csv:function(t,n){if(x.csvHtml5&&x.csvHtml5.available(t,n))return"csvHtml5"},excel:function(t,n){if(x.excelHtml5&&x.excelHtml5.available(t,n))return"excelHtml5"},pdf:function(t,n){if(x.pdfHtml5&&x.pdfHtml5.available(t,n))return"pdfHtml5"},pageLength:function(n){var n=n.settings()[0].aLengthMenu,e=[],o=[];if(Array.isArray(n[0]))e=n[0],o=n[1];else for(var r=0;r<n.length;r++){var c=n[r];i.isPlainObject(c)?(e.push(c.value),o.push(c.label)):(e.push(c),o.push(c))}return{extend:"collection",text:function(a){return a.i18n("buttons.pageLength",{"-1":"Show all rows",_:"Show %d rows"},a.page.len())},className:"buttons-page-length",autoClose:!0,buttons:i.map(e,function(a,u){return{text:o[u],className:"button-page-length",action:function(l,s){s.page.len(a).draw()},init:function(l,m,f){var d=this,m=function(){d.active(l.page.len()===a)};l.on("length.dt"+f.namespace,m),m()},destroy:function(l,s,f){l.off("length.dt"+f.namespace)}}}),init:function(a,u,l){var s=this;a.on("length.dt"+l.namespace,function(){s.text(l.text)})},destroy:function(a,u,l){a.off("length.dt"+l.namespace)}}}}),h.Api.register("buttons()",function(t,n){n===p&&(n=t,t=p),this.selector.buttonGroup=t;var e=this.iterator(!0,"table",function(o){if(o._buttons)return g.buttonSelector(g.instanceSelector(t,o._buttons),n)},!0);return e._groupSelector=t,e}),h.Api.register("button()",function(t,n){var e=this.buttons(t,n);return 1<e.length&&e.splice(1,e.length),e}),h.Api.registerPlural("buttons().active()","button().active()",function(t){return t===p?this.map(function(n){return n.inst.active(n.node)}):this.each(function(n){n.inst.active(n.node,t)})}),h.Api.registerPlural("buttons().action()","button().action()",function(t){return t===p?this.map(function(n){return n.inst.action(n.node)}):this.each(function(n){n.inst.action(n.node,t)})}),h.Api.register(["buttons().enable()","button().enable()"],function(t){return this.each(function(n){n.inst.enable(n.node,t)})}),h.Api.register(["buttons().disable()","button().disable()"],function(){return this.each(function(t){t.inst.disable(t.node)})}),h.Api.registerPlural("buttons().nodes()","button().node()",function(){var t=i();return i(this.each(function(n){t=t.add(n.inst.node(n.node))})),t}),h.Api.registerPlural("buttons().processing()","button().processing()",function(t){return t===p?this.map(function(n){return n.inst.processing(n.node)}):this.each(function(n){n.inst.processing(n.node,t)})}),h.Api.registerPlural("buttons().text()","button().text()",function(t){return t===p?this.map(function(n){return n.inst.text(n.node)}):this.each(function(n){n.inst.text(n.node,t)})}),h.Api.registerPlural("buttons().trigger()","button().trigger()",function(){return this.each(function(t){t.inst.node(t.node).trigger("click")})}),h.Api.register("button().popover()",function(t,n){return this.map(function(e){return e.inst._popover(t,this.button(this[0].node),n)})}),h.Api.register("buttons().containers()",function(){var t=i(),n=this._groupSelector;return this.iterator(!0,"table",function(e){if(e._buttons)for(var e=g.instanceSelector(n,e._buttons),o=0,r=e.length;o<r;o++)t=t.add(e[o].container())}),t}),h.Api.register("buttons().container()",function(){return this.containers().eq(0)}),h.Api.register("button().add()",function(t,n){var e=this.context;return e.length&&(e=g.instanceSelector(this._groupSelector,e[0]._buttons),e.length&&e[0].add(n,t)),this.button(this._groupSelector,t)}),h.Api.register("buttons().destroy()",function(){return this.pluck("inst").unique().each(function(t){t.destroy()}),this}),h.Api.registerPlural("buttons().remove()","buttons().remove()",function(){return this.each(function(t){t.inst.remove(t.node)}),this});var k;h.Api.register("buttons.info()",function(t,n,e){var o=this;return t===!1?(this.off("destroy.btn-info"),w(i("#datatables_buttons_info"),400,function(){i(this).remove()}),clearTimeout(k),k=null,this):(k&&clearTimeout(k),i("#datatables_buttons_info").length&&i("#datatables_buttons_info").remove(),C(i('<div id="datatables_buttons_info" class="dt-button-info"/>').html(t?"<h2>"+t+"</h2>":"").append(i("<div/>")[typeof n=="string"?"html":"append"](n)).css("display","none").appendTo("body")),e!==p&&e!==0&&(k=setTimeout(function(){o.buttons.info(!1)},e)),this.on("destroy.btn-info",function(){o.buttons.info(!1)}),this)}),h.Api.register("buttons.exportData()",function(t){if(this.context.length){var n=new h.Api(this.context[0]),e=i.extend(!0,{},{rows:null,columns:"",modifier:{search:"applied",order:"applied"},orthogonal:"display",stripHtml:!0,stripNewlines:!0,decodeEntities:!0,trim:!0,format:{header:function(y){return g.stripData(y,e)},footer:function(y){return g.stripData(y,e)},body:function(y){return g.stripData(y,e)}},customizeData:null},t),t=n.columns(e.columns).indexes().map(function(y){var _=n.column(y).header();return e.format.header(_.innerHTML,y,_)}).toArray(),o=n.table().footer()?n.columns(e.columns).indexes().map(function(y){var _=n.column(y).footer();return e.format.footer(_?_.innerHTML:"",y,_)}).toArray():null,r=i.extend({},e.modifier);n.select&&typeof n.select.info=="function"&&r.selected===p&&n.rows(e.rows,i.extend({selected:!0},r)).any()&&i.extend(r,{selected:!0});for(var r=n.rows(e.rows,r).indexes().toArray(),c=n.cells(r,e.columns),r=c.render(e.orthogonal).toArray(),c=c.nodes().toArray(),a=t.length,u=[],l=0,s=0,f=0<a?r.length/a:0;s<f;s++){for(var d=[a],m=0;m<a;m++)d[m]=e.format.body(r[l],s,m,c[l]),l++;u[s]=d}return t={header:t,footer:o,body:u},e.customizeData&&e.customizeData(t),t}}),h.Api.register("buttons.exportInfo()",function(t){t||(t={});var n,e=t;return n=e.filename==="*"&&e.title!=="*"&&e.title!==p&&e.title!==null&&e.title!==""?e.title:e.filename,typeof n=="function"&&(n=n()),n===p||n===null?n=null:(n.indexOf("*")!==-1&&(n=n.replace("*",i("head > title").text()).trim()),n=n.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,""),(e=T(e.extension))||(e=""),n+=e),e=T(t.title),e=e===null?null:e.indexOf("*")!==-1?e.replace("*",i("head > title").text()||"Exported data"):e,{filename:n,title:e,messageTop:N(this,t.message||t.messageTop,"top"),messageBottom:N(this,t.messageBottom,"bottom")}});var T=function(t){return t===null||t===p?null:typeof t=="function"?t():t},N=function(t,n,e){return n=T(n),n===null?null:(t=i("caption",t.table().container()).eq(0),n==="*"?t.css("caption-side")!==e?null:t.length?t.text():"":n)},H=i("<textarea/>")[0];return i.fn.dataTable.Buttons=g,i.fn.DataTable.Buttons=g,i(v).on("init.dt plugin-init.dt",function(t,n){if(t.namespace==="dt"){var e=n.oInit.buttons||h.defaults.buttons;e&&!n._buttons&&new g(n,e).container()}}),h.ext.feature.push({fnInit:B,cFeature:"B"}),h.ext.features&&h.ext.features.register("buttons",B),g})})(D);
