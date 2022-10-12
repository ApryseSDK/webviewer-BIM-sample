/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[14],{467:function(Ba,va,r){function oa(){return!1}function na(z,w,ea){if(!(w in n))return!0;w=n[w];for(var ka=0;ka<w.length;ka++){var ca=z;var ba=w[ka];var ia=ea;if(ba.name in ca){var ha="",la=!1;ca=ca[ba.name];switch(ba.type){case "s":ha="String";la=Object(fa.isString)(ca);break;case "a":ha="Array";la=Object(fa.isArray)(ca);break;case "n":ha="Number";la=Object(fa.isNumber)(ca)&&Object(fa.isFinite)(ca);break;case "o":ha="Object",
la=Object(fa.isObject)(ca)&&!Object(fa.isArray)(ca)}la||ia.reject('Expected response field "'+ba.name+'" to have type '+ha);ba=la}else ia.reject('Response missing field "'+ba.name+'"'),ba=!1;if(!ba)return!1}return!0}r.r(va);var ma=r(0),fa=r(1);r.n(fa);var da=r(2);Ba=r(48);var aa=r(22),y=r(484),x=r(99),h=r(393),b=r(43),e=r(177),a=function(){function z(){this.request=this.result=null;this.state=0;var w=this;w.promise=new Promise(function(ea,ka){w.resolve=function(){if(0===w.state||4===w.state)w.state=
1,w.result=arguments[0],ea.apply(null,arguments)};w.reject=function(){if(0===w.state||4===w.state)w.state=2,ka.apply(null,arguments)}})}z.prototype.Pt=function(){return 1===(this.state&1)};z.prototype.nha=function(){return 2===(this.state&2)};z.prototype.bj=function(){return!this.nha()&&!this.Pt()};z.prototype.Oga=function(){return 4===(this.state&4)};z.prototype.BN=function(){this.state|=4};return z}(),f=function(){function z(){this.yt={};this.Lb=[]}z.prototype.pop=function(){var w=this.Lb.pop();
this.yt[w.key]=void 0;return w};z.prototype.push=function(w,ea){ea={key:w,data:ea};this.Lb.push(ea);this.yt[w]=ea.data};z.prototype.contains=function(w){return!!this.yt[w]};z.prototype.get=function(w){return this.yt[w]};z.prototype.set=function(w,ea){var ka=this;this.yt[w]=ea;this.Lb.forEach(function(ca,ba){ca.key===w&&(ka.Lb[ba]=ca)})};z.prototype.remove=function(w){var ea=this;this.yt[w]=void 0;this.Lb.forEach(function(ka,ca){ka.key===w&&ea.Lb.splice(ca,1)})};z.prototype.length=function(){return this.Lb.length};
return z}(),n={pages:[{name:"pages",type:"a"}],pdf:[{name:"url",type:"s"}],docmod:[{name:"url",type:"s"},{name:"rID",type:"s"}],health:[],tiles:[{name:"z",type:"n"},{name:"rID",type:"n"},{name:"tiles",type:"a"},{name:"size",type:"n"}],cAnnots:[{name:"annots",type:"a"}],annots:[{name:"url",type:"s"},{name:"name",type:"s"}],image:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],text:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],ApString2Xod:[{name:"url",type:"s"},
{name:"rID",type:"s"}]};r=function(){function z(w,ea,ka){var ca=this;this.iO=this.ZT=!1;this.vh=this.kG=this.Zu=this.aM=this.AI=this.$m=null;this.Fm=new a;this.Rp=new a;this.eC=!1;this.Hf=this.He=this.Ie=this.yf=null;this.eg=[];this.QC=[];this.cache={};this.timeStamp=0;this.qh=[];this.lj=[];this.GJ=null;this.KT=!1;this.C_=this.id=null;this.ML=this.tW=oa;this.li=0;this.NK=!1;this.bY=1;this.hj={};this.qs=0;this.pu=new f;ea.endsWith("/")||(ea+="/");ka=ka||{};this.ZT=ka.disableWebsockets||!1;this.iO=
ka.singleServerMode||!1;null!=ka.customQueryParameters&&Object(b.b)("wvsQueryParameters",ka.customQueryParameters);ea.endsWith("blackbox/")||(ea+="blackbox/");this.$m=ka.uploadData||null;this.Zu=ka.uriData||null;this.AI=ka.cacheKey||null;this.aM=ka.officeOptions||null;this.$e=ea;this.iJ=w;this.Po(!0);this.Hs=(new y.a(ea,null,this.Yh())).Qca(!this.ZT,function(ba){ca.Gia(ba)},function(){return null},function(){ca.eC=!1},function(){ca.Mla()})}z.prototype.t$=function(){var w=this;return new Promise(function(ea,
ka){var ca=new XMLHttpRequest;ca.open("GET",w.$e+"ck");ca.withCredentials=w.Yh();ca.onreadystatechange=function(){ca.readyState===XMLHttpRequest.DONE&&(200===ca.status?ea():ka())};ca.send()})};z.prototype.Cna=function(w){this.tW=w||oa;this.ML=oa};z.prototype.b9=function(){this.d_();return this.Hs.fq(!0)};z.prototype.d_=function(){Object(ma.b)(this,void 0,void 0,function(){return Object(ma.d)(this,function(w){switch(w.label){case 0:return this.Rp=new a,this.Fm=new a,this.eC=!1,this.id=null,this.KT=
!1,[4,this.t$()];case 1:return w.ca(),[2]}})})};z.prototype.Mla=function(){this.tW();this.d_();this.yf&&(this.yf.bj()?this.Bh(this.yf.request):this.yf.Pt()&&this.ML(this.yf.result.url,"pdf")&&(this.yf=null,this.c_()));this.Hf&&this.Hf.bj()&&this.Bh(this.Hf.request);this.Ie&&this.Ie.bj()?this.Bh(this.Ie.request):this.He&&this.He.bj()&&this.gW();var w;for(w=0;w<this.qh.length;w++)this.qh[w]&&(this.qh[w].bj()?this.Bh(this.qh[w].request):this.qh[w].Pt()&&this.ML(this.qh[w].result.url,"image")&&(this.qh[w]=
null,this.iF(Object(fa.uniqueId)(),w)));for(w=0;w<this.lj.length;w++)this.lj[w]&&this.lj[w].bj()&&!this.lj[w].Oga()&&this.Bh(this.lj[w].request);for(w=0;w<this.eg.length;w++)this.eg[w]&&this.eg[w].bj()&&this.Bh(this.eg[w].request)};z.prototype.vga=function(){return this.eC?Promise.resolve():(this.eC=!0,this.timeStamp=Date.now(),this.Hs.OD())};z.prototype.dqa=function(){var w=this,ea,ka,ca,ba,ia;return new Promise(function(ha,la){if(w.$m)ea=new FormData,ea.append("file",w.$m.fileHandle,w.$m.fileHandle.name),
ka=w.$m.loadCallback,ba="upload",ca=w.$m.extension;else if(w.Zu)ea={uri:w.Zu.uri,Vta:w.Zu.shareId},ea=Object.keys(ea).map(function(pa){return pa+"="+(ea[pa]?encodeURIComponent(ea[pa]):"")}).join("&"),ia="application/x-www-form-urlencoded; charset=UTF-8",ka=w.Zu.loadCallback,ba="url",ca=w.Zu.extension;else{ha();return}var ja=new XMLHttpRequest,ra=Object(aa.k)(w.$e,"AuxUpload");ra=Object(e.a)(ra,{type:ba,ext:ca});ja.open("POST",ra);ja.withCredentials=w.Yh();ia&&ja.setRequestHeader("Content-Type",ia);
ja.addEventListener("load",function(){if(ja.readyState===ja.DONE&&200===ja.status){var pa=JSON.parse(ja.response);w.iJ=pa.uri;ka(pa);ha(pa)}});ja.addEventListener("error",function(){la(ja.statusText+" "+JSON.stringify(ja))});w.$m&&null!=w.$m.onProgress&&(ja.upload.onprogress=function(pa){w.$m.onProgress(pa)});ja.send(ea)})};z.prototype.Dla=function(w){this.password=w||null;this.Fm.Pt()||(this.Fm=new a,this.Bh({t:"pages"}));return this.Fm.promise};z.prototype.Ry=function(w){this.GJ=w||null;this.Fm.Pt()||
this.Bh({t:"pages"});return this.Fm.promise};z.prototype.tw=function(w){w=Object.assign(w,{uri:encodeURIComponent(this.iJ)});this.GJ&&(w.ext=this.GJ);this.vh&&(w.c=this.vh);this.password&&(w.pswd=this.password);this.AI&&(w.cacheKey=this.AI);this.aM&&(w.officeOptions=this.aM);return w};z.prototype.lma=function(){0<this.pu.length()&&10>=this.qs&&this.mma(this.pu.pop().data)};z.prototype.y8=function(w){0<this.pu.length()&&this.pu.contains(w)&&this.pu.remove(w)};z.prototype.Bh=function(w){w=this.tw(w);
this.Hs.send(w)};z.prototype.x_=function(w,ea){10<this.qs?this.pu.push(w,ea):(this.qs++,w=this.tw(ea),this.Hs.send(w))};z.prototype.mma=function(w){this.qs++;w=this.tw(w);this.Hs.send(w)};z.prototype.Jl=function(w){return w};z.prototype.sW=function(w){this.iO&&w?Object(da.j)("Server failed health check. Single server mode ignoring check."):!this.usa&&w&&3>=this.li?(this.NK=!0,this.Hs.fq()):3<this.li&&(this.iO=!0)};z.prototype.Gia=function(w){var ea=this,ka=w.data,ca=w.err,ba=w.t;switch(ba){case "upload":ca?
this.eqa.reject(ca):this.eqa.resolve("Success");break;case "pages":ca?this.Fm.reject(ca):na(ka,ba,this.Fm)&&this.Fm.resolve(ka);break;case "config":if(ca)this.Rp.reject(ca);else if(na(ka,ba,this.Rp)){this.sW(ka.unhealthy);ka.id&&(this.id=ka.id);if(ka.auth){var ia=Object(b.a)("wvsQueryParameters");ia.auth=ka.auth;Object(b.b)("wvsQueryParameters",ia)}ka.serverVersion&&(this.kG=ka.serverVersion,Object(da.h)("[WebViewer Server] server version: "+this.kG));ka.serverID?(this.li=ka.serverID===this.C_&&this.NK?
this.li+1:0,this.C_=ka.serverID):this.li=0;this.NK=!1;this.Rp.resolve(ka)}break;case "health":ca?this.Rp.reject(ca):na(ka,ba,this.Rp)&&this.sW(ka.unhealthy);break;case "pdf":ka.url=Object(e.a)(this.$e+"../"+encodeURI(ka.url));ca?this.yf.reject(ca):na(ka,ba,this.yf)&&this.yf.resolve(ka);break;case "ApString2Xod":ka.url=Object(e.a)(this.$e+"../data/"+encodeURI(ka.url));ca?this.hj[ka.rID].reject(ca):na(ka,ba,this.hj[ka.rID])&&this.hj[ka.rID].resolve(ka);break;case "docmod":ka.url=Object(e.a)(this.$e+
"../"+encodeURI(ka.url));ca?this.hj[ka.rID].reject(ca):na(ka,ba,this.yf)&&this.hj[ka.rID].resolve(ka);break;case "xod":if(ca)this.Ie&&this.Ie.bj()&&this.Ie.reject(ca),this.He&&this.He.bj()&&this.He.reject(ca);else if(ka.notFound)ka.noCreate||this.Ie&&this.Ie.bj()&&this.Ie.resolve(ka),this.He&&this.He.bj()&&this.He.resolve(ka);else{ka.url&&(ka.url=Object(e.a)(this.$e+"../"+encodeURI(ka.url)));if(!this.He||this.He.Pt())this.He=new a,this.He.request={t:"xod",noCreate:!0};this.Ie||(this.Ie=new a,this.Ie.request=
{t:"xod"});this.He.resolve(ka);this.Ie.resolve(ka)}break;case "cAnnots":ia=this.Hf;if(ca)ia.reject(ca);else if(na(ka,ba,ia)){ia.BN();var ha=[],la=ka.annots;ka=function(qa){var wa=la[qa].s,za=la[qa].e,Ha=ja.$e+"../"+encodeURI(la[qa].xfdf),Ia="true"===la[qa].hasAppearance?Object(e.a)(Ha+".xodapp"):null,Aa=Object(fa.range)(wa,za+1);ha[qa]={range:Aa,promise:new Promise(function(Ja,Pa){var Ma=new XMLHttpRequest;Ma.open("GET",Object(e.a)(Ha));Ma.responseType="text";Ma.withCredentials=ea.Yh();Ma.addEventListener("load",
function(){Ma.readyState===Ma.DONE&&200===Ma.status&&Ja({Ar:Ma.response,xl:Ia,range:Aa})});Ma.addEventListener("error",function(){Pa(Ma.statusText+" "+JSON.stringify(Ma))});Ma.send()})}};var ja=this;for(ca=0;ca<la.length;ca++)ka(ca);ia.resolve(ha)}break;case "annots":if(ca)this.Hf.reject(ca);else if(na(ka,ba,this.Hf)){this.Hf.BN();var ra=new XMLHttpRequest;ia=this.$e+"../"+encodeURI(ka.url);var pa=ka.hasAppearance?Object(e.a)(ia+".xodapp"):null;ra.open("GET",Object(e.a)(ia));ra.responseType="text";
ra.withCredentials=this.Yh();ra.addEventListener("load",function(){ra.readyState===ra.DONE&&200===ra.status&&ea.Hf.resolve({Ar:ra.response,xl:pa})});ra.addEventListener("error",function(){ea.Hf.reject(ra.statusText+" "+JSON.stringify(ra))});ra.send()}break;case "image":this.qs--;var sa=this.qh[ka.p];ca?sa.promise.reject(ca):na(ka,ba,sa)&&(sa.result=ka,sa.result.url=Object(e.a)(this.$e+"../"+encodeURI(sa.result.url)),sa.resolve(sa.result));break;case "tiles":this.qs--;sa=ka.rID;ia=this.eg[sa];this.eg[sa]=
null;this.QC.push(sa);if(ca)ia.reject(ca);else if(na(ka,ba,ia)){for(ca=0;ca<ka.tiles.length;ca++)ka.tiles[ca]=Object(e.a)(this.$e+"../"+encodeURI(ka.tiles[ca]));ia.resolve(ka)}break;case "text":sa=this.lj[ka.p];if(ca)sa.reject(ca);else if(na(ka,ba,sa)){sa.BN();var ua=new XMLHttpRequest;ka=Object(e.a)(this.$e+"../"+encodeURI(ka.url));ua.open("GET",ka);ua.withCredentials=this.Yh();ua.addEventListener("load",function(){ua.readyState===ua.DONE&&200===ua.status&&(sa.result=JSON.parse(ua.response),sa.resolve(sa.result))});
ua.addEventListener("error",function(qa){sa.reject(ua.statusText+" "+JSON.stringify(qa))});ua.send()}break;case "progress":"loading"===ka.t&&this.trigger(x.a.Events.DOCUMENT_LOADING_PROGRESS,[ka.bytes,ka.total])}this.lma();!ba&&w.echo&&w&&"apstring2xod"===w.echo.t&&(w=w.echo.reqID)&&(2<=parseInt(this.kG,10)?this.hj[w].reject("Message unhandled by server"):this.hj[w].reject())};z.prototype.xda=function(){return Object(ma.b)(this,void 0,void 0,function(){return Object(ma.d)(this,function(w){switch(w.label){case 0:return[4,
this.vga()];case 1:return w.ca(),[2,this.Rp.promise]}})})};z.prototype.dda=function(w){for(var ea=this,ka=new XMLHttpRequest,ca=Object(e.a)(this.$e+"aul",{id:this.id}),ba=new FormData,ia={},ha=0;ha<w.body.length;ha++){var la=w.body[ha];ia[la.id]=la.nI.w+";"+la.nI.h;ba.append(la.id,la.nI.dataString)}w={t:"apstring2xod",reqID:this.bY++,parts:ia};var ja=this.tw(w);ba.append("msg",JSON.stringify(ja));this.hj[ja.reqID]=new a;ka.open("POST",ca);ka.withCredentials=this.Yh;ca=new Promise(function(ra,pa){ka.onreadystatechange=
function(){4===ka.readyState&&(200===ka.status?ra():pa("An error occurred while sending down appearance strings to the server"))}});ka.send(ba);return ca.then(function(){return ea.hj[ja.reqID].promise})};z.prototype.d9=function(){var w=this.kG.split("-")[0].split("."),ea=["1","5","9"];if(3!==w.length)throw Error("Invalid WVS version length.");if(3!==ea.length)throw Error("Invalid version length.");for(var ka=0;ka<w.length;++ka){if(ea.length===ka||w[ka]>ea[ka])return-1;if(w[ka]!==ea[ka])return 1}return 0};
z.prototype.Np=function(){return 0>=this.d9()};z.prototype.PJ=function(){this.Hf||(this.Hf=new a,this.Np()?this.Hf.request={t:"cAnnots"}:this.Hf.request={t:"annots"},this.Bh(this.Hf.request));return this.Hf.promise};z.prototype.iF=function(w,ea){this.qh[ea]||(this.qh[ea]=new a,this.qh[ea].request={t:"image",p:ea},this.x_(w,this.qh[ea].request));return this.qh[ea].promise};z.prototype.Ela=function(w){this.lj[w]||(this.lj[w]=new a,this.lj[w].request={t:"text",p:w},this.Bh(this.lj[w].request));return this.lj[w].promise};
z.prototype.Fla=function(w,ea,ka,ca,ba){var ia=this.eg.length;this.QC.length&&(ia=this.QC.pop());this.eg[ia]=new a;this.eg[ia].request={t:"tiles",p:ea,z:ka,r:ca,size:ba,rID:ia};this.x_(w,this.eg[ia].request);return this.eg[ia].promise};z.prototype.c_=function(){this.yf||(this.yf=new a,this.yf.request={t:"pdf"},this.KT?this.yf.resolve({url:this.iJ}):this.Bh(this.yf.request));return this.yf.promise};z.prototype.AV=function(w){var ea=this,ka=new XMLHttpRequest,ca=Object(e.a)(this.$e+"aul",{id:this.id}),
ba=new FormData,ia={};w.annots&&(ia.annots="xfdf");w.watermark&&(ia.watermark="png");w.redactions&&(ia.redactions="redact");ia={t:"docmod",reqID:this.bY++,parts:ia};w.print&&(ia.print=!0);var ha=this.tw(ia);ba.append("msg",JSON.stringify(ha));return Promise.all([w.annots,w.watermark,w.redactions].map(function(la){return Promise.resolve(la)})).then(function(la){var ja=la[0],ra=la[1];la=la[2];ja&&ba.append("annots",ja);ra&&ba.append("watermark",ra);la&&ba.append("redactions",la);ea.hj[ha.reqID]=new a;
ka.open("POST",ca);ka.withCredentials=ea.Yh;ja=new Promise(function(pa,sa){ka.onreadystatechange=function(){4===ka.readyState&&(200===ka.status?pa():sa("An error occurred while sending down annotation data to the server"))}});ka.send(ba);return ja.then(function(){return ea.hj[ha.reqID].promise})})};z.prototype.gW=function(){this.He||(this.He=new a,this.He.request={t:"xod",noCreate:!0},this.Bh(this.He.request));return this.He.promise};z.prototype.Gla=function(){this.Ie||(this.Ie=new a,this.Ie.request=
{t:"xod"},this.Bh(this.Ie.request));return this.Ie.promise};z.prototype.Ko=function(){return!0};z.prototype.request=function(){};z.prototype.wZ=function(){};z.prototype.abort=function(){for(var w=0;w<this.eg.length;w++)this.eg[w]&&(this.eg[w].resolve(null),this.eg[w]=null,this.QC.push(w));this.close()};z.prototype.wF=function(w){this.vh=this.vh||{};this.vh.headers=w};z.prototype.Po=function(w){this.vh=this.vh||{};this.vh.internal=this.vh.internal||{};this.vh.internal.withCredentials=w};z.prototype.Yh=
function(){return this.vh&&this.vh.internal?this.vh.internal.withCredentials:null};z.prototype.getFileData=function(){return Promise.reject()};return z}();Object(Ba.a)(r);Object(h.a)(r);Object(h.b)(r);va["default"]=r},484:function(Ba,va,r){var oa=r(0),na=r(2),ma=r(22),fa=r(43),da=r(177),aa=r(77),y=function(){function h(b,e,a,f,n,z){void 0===a&&(a=null);void 0===f&&(f=null);void 0===n&&(n=null);void 0===z&&(z=null);this.JX=!1;this.li=0;this.GS=this.Aqa(b);this.url=e?this.GS+"/"+e:this.GS+"/ws";this.$I=
a;this.qy=f;this.rw=n;this.gN=z}h.prototype.Aqa=function(b){var e=b.indexOf("://"),a="ws://";0>e?e=0:(5===e&&(a="wss://"),e+=3);var f=b.lastIndexOf("/");0>f&&(f=b.length);return a+b.slice(e,f)};h.prototype.send=function(b){this.bp.readyState===WebSocket.CLOSED||this.JX||this.bp.send(JSON.stringify(b))};h.prototype.OD=function(){return Object(oa.b)(this,void 0,void 0,function(){var b,e=this;return Object(oa.d)(this,function(){b=Object(fa.a)("wvsQueryParameters");b.bcid=Object(ma.l)(8);Object(fa.b)("wvsQueryParameters",
b);return[2,new Promise(function(a,f){var n=Object(da.a)(e.url);e.bp=new WebSocket(n);e.bp.onopen=function(){e.qy&&e.qy();a()};e.bp.onerror=function(z){e.JX=!0;f(z)};e.bp.onclose=function(z){var w=z.code;return Object(oa.b)(e,void 0,void 0,function(){var ea=this;return Object(oa.d)(this,function(ka){switch(ka.label){case 0:return this.rw&&this.rw(),3E3===w?[3,3]:8>this.li++?[4,new Promise(function(ca){return setTimeout(function(){return Object(oa.b)(ea,void 0,void 0,function(){return Object(oa.d)(this,
function(ba){switch(ba.label){case 0:return this.gN(),[4,this.OD()];case 1:return ba.ca(),ca(),[2]}})})},3E3)})]:[3,2];case 1:return ka.ca(),[3,3];case 2:f(aa.a),ka.label=3;case 3:return[2]}})})};e.bp.onmessage=function(z){z&&z.data&&(z=JSON.parse(z.data),z.hb?e.send({hb:!0}):z.end?close():e.$I(z))}})]})})};h.prototype.fq=function(b){void 0===b&&(b=!1);this.li=0;b?this.bp.close(3E3):this.bp.close();return Promise.resolve()};return h}(),x=function(){function h(b,e,a,f,n,z,w){void 0===f&&(f=null);void 0===
n&&(n=null);void 0===z&&(z=null);void 0===w&&(w=null);this.li=this.hF=this.id=0;this.Ex=!1;this.request=null;b=this.cka(b);this.url=e?b+"/"+e+"pf":b+"/pf";this.dG=a;this.$I=f;this.qy=n;this.rw=z;this.gN=w}h.prototype.cka=function(b){var e=b.lastIndexOf("/");0>e&&(e=b.length);return b.slice(0,e)};h.prototype.c$=function(b){b=b.split("\n");for(b[b.length-1]&&b.pop();0<b.length&&3>b[b.length-1].length;)"]"===b.pop()&&(this.id=0);0<b.length&&3>b[0].length&&b.shift();for(var e=0;e<b.length;++e)b[e].endsWith(",")&&
(b[e]=b[e].substr(0,b[e].length-1));return b};h.prototype.m_=function(){return Object(oa.b)(this,void 0,void 0,function(){var b=this;return Object(oa.d)(this,function(e){switch(e.label){case 0:return 8>this.li++?[4,new Promise(function(a){return setTimeout(function(){b.gN();b.OD();a()},3E3)})]:[3,2];case 1:e.ca(),e.label=2;case 2:return[2]}})})};h.prototype.eka=function(b){Object(oa.b)(this,void 0,void 0,function(){var e,a;return Object(oa.d)(this,function(f){switch(f.label){case 0:e=null,a=0,f.label=
1;case 1:if(!(a<b.length))return[3,6];e=JSON.parse(b[a]);if(!e)return[3,5];if(!e.end)return[3,2];close();return[3,5];case 2:if(!e.id||Number(e.id)===this.id)return[3,4];Object(na.j)("Reconnecting, new server detected");this.fq();return[4,this.m_()];case 3:return f.ca(),[3,5];case 4:e.hb&&Number(e.id)===this.id?this.send({hb:!0}):this.Ex||this.$I(e),f.label=5;case 5:return++a,[3,1];case 6:return[2]}})})};h.prototype.Dia=function(b){Object(oa.b)(this,void 0,void 0,function(){var e,a,f;return Object(oa.d)(this,
function(n){switch(n.label){case 0:if(!(3<=b.readyState))return[3,2];try{e=b.responseText.length}catch(z){return Object(na.h)("caught exception"),[2]}if(0<e)try{a=this.c$(b.responseText),0===this.id&&0<a.length&&(f=JSON.parse(a.shift()),this.id=f.id,this.li=0),this.eka(a)}catch(z){}return this.Ex?[3,2]:[4,this.CU()];case 1:n.ca(),n.label=2;case 2:return[2]}})})};h.prototype.CU=function(){return Object(oa.b)(this,void 0,void 0,function(){var b=this;return Object(oa.d)(this,function(){return[2,new Promise(function(e,
a){function f(){return Object(oa.b)(b,void 0,void 0,function(){return Object(oa.d)(this,function(z){switch(z.label){case 0:a(),this.fq(),z.label=1;case 1:return this.Ex&&8>this.li?[4,this.m_()]:[3,3];case 2:return z.ca(),[3,1];case 3:return[2]}})})}b.request=new XMLHttpRequest;b.request.withCredentials=b.dG;var n=Object(da.a)(b.url,0!==b.id?{id:String(b.id),uc:String(b.hF)}:{uc:String(b.hF)});b.hF++;b.request.open("GET",n,!0);b.request.setRequestHeader("Cache-Control","no-cache");b.request.setRequestHeader("X-Requested-With",
"XMLHttpRequest");b.request.onreadystatechange=function(){b.Dia(b.request)};b.request.addEventListener("error",f);b.request.addEventListener("timeout",f);b.request.addEventListener("load",function(){b.qy&&b.qy();e()});b.request.send()})]})})};h.prototype.OD=function(){var b=Object(fa.a)("wvsQueryParameters");b.bcid=Object(ma.l)(8);Object(fa.b)("wvsQueryParameters",b);this.hF=this.id=0;this.Ex=!1;return this.CU()};h.prototype.send=function(b){var e=this,a=new XMLHttpRequest;a.withCredentials=this.dG;
var f=Object(da.a)(this.url,{id:String(this.id)}),n=new FormData;n.append("data",JSON.stringify(b));a.addEventListener("error",function(){e.fq()});a.open("POST",f);a.setRequestHeader("X-Requested-With","XMLHttpRequest");a.send(n)};h.prototype.fq=function(){this.id=0;this.Ex=!0;this.rw&&this.rw();this.request.abort();return Promise.resolve()};return h}();Ba=function(){function h(b,e,a){this.iT=b;this.target=e;this.dG=a}h.prototype.Qca=function(b,e,a,f,n){void 0===b&&(b=!0);void 0===e&&(e=null);void 0===
a&&(a=null);void 0===f&&(f=null);void 0===n&&(n=null);return b?new y(this.iT,this.target,e,a,f,n):new x(this.iT,this.target,this.dG,e,a,f,n)};return h}();va.a=Ba}}]);}).call(this || window)