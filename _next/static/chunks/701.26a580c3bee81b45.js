(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[701],{3100:function(t){t.exports=function(t,e,i){var n=function(t){return t.add(4-t.isoWeekday(),"day")},r=e.prototype;r.isoWeekYear=function(){return n(this).year()},r.isoWeek=function(t){if(!this.$utils().u(t))return this.add(7*(t-this.isoWeek()),"day");var e,r,s,a=n(this),o=(e=this.isoWeekYear(),s=4-(r=(this.$u?i.utc:i)().year(e).startOf("year")).isoWeekday(),r.isoWeekday()>4&&(s+=7),r.add(s,"day"));return a.diff(o,"week")+1},r.isoWeekday=function(t){return this.$utils().u(t)?this.day()||7:this.day(this.day()%7?t:t-7)};var s=r.startOf;r.startOf=function(t,e){var i=this.$utils(),n=!!i.u(e)||e;return"isoweek"===i.p(t)?n?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):s.bind(this)(t,e)}}},68080:function(t){t.exports=function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,i=/\d/,n=/\d\d/,r=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,a={},o=function(t){return(t*=1)+(t>68?1900:2e3)},l=function(t){return function(e){this[t]=+e}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t||"Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),i=60*e[1]+(+e[2]||0);return 0===i?0:"+"===e[0]?-i:i}(t)}],u=function(t){var e=a[t];return e&&(e.indexOf?e:e.s.concat(e.f))},d=function(t,e){var i,n=a.meridiem;if(n){for(var r=1;r<=24;r+=1)if(t.indexOf(n(r,0,e))>-1){i=r>12;break}}else i=t===(e?"pm":"PM");return i},h={A:[s,function(t){this.afternoon=d(t,!1)}],a:[s,function(t){this.afternoon=d(t,!0)}],Q:[i,function(t){this.month=3*(t-1)+1}],S:[i,function(t){this.milliseconds=100*t}],SS:[n,function(t){this.milliseconds=10*t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[s,function(t){var e=a.ordinal,i=t.match(/\d+/);if(this.day=i[0],e)for(var n=1;n<=31;n+=1)e(n).replace(/\[|\]/g,"")===t&&(this.day=n)}],w:[r,l("week")],ww:[n,l("week")],M:[r,l("month")],MM:[n,l("month")],MMM:[s,function(t){var e=u("months"),i=(u("monthsShort")||e.map(function(t){return t.slice(0,3)})).indexOf(t)+1;if(i<1)throw Error();this.month=i%12||i}],MMMM:[s,function(t){var e=u("months").indexOf(t)+1;if(e<1)throw Error();this.month=e%12||e}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(t){this.year=o(t)}],YYYY:[/\d{4}/,l("year")],Z:c,ZZ:c};return function(i,n,r){r.p.customParseFormat=!0,i&&i.parseTwoDigitYear&&(o=i.parseTwoDigitYear);var s=n.prototype,l=s.parse;s.parse=function(i){var n=i.date,s=i.utc,o=i.args;this.$u=s;var c=o[1];if("string"==typeof c){var u=!0===o[2],d=!0===o[3],f=o[2];d&&(f=o[2]),a=this.$locale(),!u&&f&&(a=r.Ls[f]),this.$d=function(i,n,r,s){try{if(["x","X"].indexOf(n)>-1)return new Date(("X"===n?1e3:1)*i);var o=(function(i){var n,r;n=i,r=a&&a.formats;for(var s=(i=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(e,i,n){var s=n&&n.toUpperCase();return i||r[n]||t[n]||r[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(t,e,i){return e||i.slice(1)})})).match(e),o=s.length,l=0;l<o;l+=1){var c=s[l],u=h[c],d=u&&u[0],f=u&&u[1];s[l]=f?{regex:d,parser:f}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},i=0,n=0;i<o;i+=1){var r=s[i];if("string"==typeof r)n+=r.length;else{var a=r.regex,l=r.parser,c=t.slice(n),u=a.exec(c)[0];l.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var i=t.hours;e?i<12&&(t.hours+=12):12===i&&(t.hours=0),delete t.afternoon}}(e),e}})(n)(i),l=o.year,c=o.month,u=o.day,d=o.hours,f=o.minutes,m=o.seconds,y=o.milliseconds,k=o.zone,p=o.week,g=new Date,b=u||(l||c?1:g.getDate()),v=l||g.getFullYear(),x=0;l&&!c||(x=c>0?c-1:g.getMonth());var T,w=d||0,_=f||0,D=m||0,$=y||0;return k?new Date(Date.UTC(v,x,b,w,_,D,$+60*k.offset*1e3)):r?new Date(Date.UTC(v,x,b,w,_,D,$)):(T=new Date(v,x,b,w,_,D,$),p&&(T=s(T).week(p).toDate()),T)}catch(t){return new Date("")}}(n,c,s,r),this.init(),f&&!0!==f&&(this.$L=this.locale(f).$L),(u||d)&&n!=this.format(c)&&(this.$d=new Date("")),a={}}else if(c instanceof Array)for(var m=c.length,y=1;y<=m;y+=1){o[1]=c[y-1];var k=r.apply(this,o);if(k.isValid()){this.$d=k.$d,this.$L=k.$L,this.init();break}y===m&&(this.$d=new Date(""))}else l.call(this,i)}}}()},70162:function(t){t.exports=function(t,e){var i=e.prototype,n=i.format;i.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return n.bind(this)(t);var r=this.$utils(),s=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return i.ordinal(e.$D);case"gggg":return e.weekYear();case"GGGG":return e.isoWeekYear();case"wo":return i.ordinal(e.week(),"W");case"w":case"ww":return r.s(e.week(),"w"===t?1:2,"0");case"W":case"WW":return r.s(e.isoWeek(),"W"===t?1:2,"0");case"k":case"kk":return r.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();case"z":return"["+e.offsetName()+"]";case"zzz":return"["+e.offsetName("long")+"]";default:return t}});return n.bind(this)(s)}}},80701:(t,e,i)=>{"use strict";i.d(e,{diagram:()=>tq});var n,r,s,a=i(27017),o=i(21661),l=i(87059),c=i(40852),u=i(3100),d=i(68080),h=i(70162),f=i(35638),m=i(11976),y=i(88750);function k(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function p(t,e){return null==t||null==e?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function g(t){let e,i,n;function r(t,n,s=0,a=t.length){if(s<a){if(0!==e(n,n))return a;do{let e=s+a>>>1;0>i(t[e],n)?s=e+1:a=e}while(s<a)}return s}return 2!==t.length?(e=k,i=(e,i)=>k(t(e),i),n=(e,i)=>t(e)-i):(e=t===k||t===p?t:b,i=t,n=t),{left:r,center:function(t,e,i=0,s=t.length){let a=r(t,e,i,s-1);return a>i&&n(t[a-1],e)>-n(t[a],e)?a-1:a},right:function(t,n,r=0,s=t.length){if(r<s){if(0!==e(n,n))return s;do{let e=r+s>>>1;0>=i(t[e],n)?r=e+1:s=e}while(r<s)}return r}}}function b(){return 0}let v=g(k);function x(t){return function(e,i,n=i){if(!((i*=1)>=0))throw RangeError("invalid rx");if(!((n*=1)>=0))throw RangeError("invalid ry");let{data:r,width:s,height:a}=e;if(!((s=Math.floor(s))>=0))throw RangeError("invalid width");if(!((a=Math.floor(void 0!==a?a:r.length/s))>=0))throw RangeError("invalid height");if(!s||!a||!i&&!n)return e;let o=i&&t(i),l=n&&t(n),c=r.slice();return o&&l?(T(o,c,r,s,a),T(o,r,c,s,a),T(o,c,r,s,a),w(l,r,c,s,a),w(l,c,r,s,a),w(l,r,c,s,a)):o?(T(o,r,c,s,a),T(o,c,r,s,a),T(o,r,c,s,a)):l&&(w(l,r,c,s,a),w(l,c,r,s,a),w(l,r,c,s,a)),e}}function T(t,e,i,n,r){for(let s=0,a=n*r;s<a;)t(e,i,s,s+=n,1)}function w(t,e,i,n,r){for(let s=0,a=n*r;s<n;++s)t(e,i,s,s+a,n)}function _(t){let e=Math.floor(t);if(e===t){var i;let e;return e=2*(i=t)+1,(t,n,r,s,a)=>{if(!((s-=a)>=r))return;let o=i*n[r],l=a*i;for(let t=r,e=r+l;t<e;t+=a)o+=n[Math.min(s,t)];for(let i=r,c=s;i<=c;i+=a)o+=n[Math.min(s,i+l)],t[i]=o/e,o-=n[Math.max(r,i-l)]}}let n=t-e,r=2*t+1;return(t,i,s,a,o)=>{if(!((a-=o)>=s))return;let l=e*i[s],c=o*e,u=c+o;for(let t=s,e=s+c;t<e;t+=o)l+=i[Math.min(a,t)];for(let e=s,d=a;e<=d;e+=o)l+=i[Math.min(a,e+c)],t[e]=(l+n*(i[Math.max(s,e-u)]+i[Math.min(a,e+u)]))/r,l-=i[Math.max(s,e-c)]}}v.right,v.left,g(function(t){return null===t?NaN:+t}).center,x(_),x(function(t){let e=_(t);return(t,i,n,r,s)=>{e(t,i,(n<<=2)+0,(r<<=2)+0,s<<=2),e(t,i,n+1,r+1,s),e(t,i,n+2,r+2,s),e(t,i,n+3,r+3,s)}});Array.prototype.slice;var D=i(66056);function $(t){return t}function C(t){return"translate("+t+",0)"}function S(t){return"translate(0,"+t+")"}function K(){return!this.__axis}function M(t,e){var i=[],n=null,r=null,s=6,a=6,o=3,l="u">typeof window&&window.devicePixelRatio>1?0:.5,c=1===t||4===t?-1:1,u=4===t||2===t?"x":"y",d=1===t||3===t?C:S;function h(h){var f=null==n?e.ticks?e.ticks.apply(e,i):e.domain():n,m=null==r?e.tickFormat?e.tickFormat.apply(e,i):$:r,y=Math.max(s,0)+o,k=e.range(),p=+k[0]+l,g=+k[k.length-1]+l,b=(e.bandwidth?function(t,e){return e=Math.max(0,t.bandwidth()-2*e)/2,t.round()&&(e=Math.round(e)),i=>+t(i)+e}:function(t){return e=>+t(e)})(e.copy(),l),v=h.selection?h.selection():h,x=v.selectAll(".domain").data([null]),T=v.selectAll(".tick").data(f,e).order(),w=T.exit(),_=T.enter().append("g").attr("class","tick"),D=T.select("line"),C=T.select("text");x=x.merge(x.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),T=T.merge(_),D=D.merge(_.append("line").attr("stroke","currentColor").attr(u+"2",c*s)),C=C.merge(_.append("text").attr("fill","currentColor").attr(u,c*y).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),h!==v&&(x=x.transition(h),T=T.transition(h),D=D.transition(h),C=C.transition(h),w=w.transition(h).attr("opacity",1e-6).attr("transform",function(t){return isFinite(t=b(t))?d(t+l):this.getAttribute("transform")}),_.attr("opacity",1e-6).attr("transform",function(t){var e=this.parentNode.__axis;return d((e&&isFinite(e=e(t))?e:b(t))+l)})),w.remove(),x.attr("d",4===t||2===t?a?"M"+c*a+","+p+"H"+l+"V"+g+"H"+c*a:"M"+l+","+p+"V"+g:a?"M"+p+","+c*a+"V"+l+"H"+g+"V"+c*a:"M"+p+","+l+"H"+g),T.attr("opacity",1).attr("transform",function(t){return d(b(t)+l)}),D.attr(u+"2",c*s),C.attr(u,c*y).text(m),v.filter(K).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),v.each(function(){this.__axis=b})}return h.scale=function(t){return arguments.length?(e=t,h):e},h.ticks=function(){return i=Array.from(arguments),h},h.tickArguments=function(t){return arguments.length?(i=null==t?[]:Array.from(t),h):i.slice()},h.tickValues=function(t){return arguments.length?(n=null==t?null:Array.from(t),h):n&&n.slice()},h.tickFormat=function(t){return arguments.length?(r=t,h):r},h.tickSize=function(t){return arguments.length?(s=a=+t,h):s},h.tickSizeInner=function(t){return arguments.length?(s=+t,h):s},h.tickSizeOuter=function(t){return arguments.length?(a=+t,h):a},h.tickPadding=function(t){return arguments.length?(o=+t,h):o},h.offset=function(t){return arguments.length?(l=+t,h):l},h}var E=i(23948),A=function(){var t=(0,o.K2)(function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},"o"),e=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],i=[1,26],n=[1,27],r=[1,28],s=[1,29],a=[1,30],l=[1,31],c=[1,32],u=[1,33],d=[1,34],h=[1,9],f=[1,10],m=[1,11],y=[1,12],k=[1,13],p=[1,14],g=[1,15],b=[1,16],v=[1,19],x=[1,20],T=[1,21],w=[1,22],_=[1,23],D=[1,25],$=[1,35],C={trace:(0,o.K2)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:(0,o.K2)(function(t,e,i,n,r,s,a){var o=s.length-1;switch(r){case 1:return s[o-1];case 2:case 6:case 7:this.$=[];break;case 3:s[o-1].push(s[o]),this.$=s[o-1];break;case 4:case 5:this.$=s[o];break;case 8:n.setWeekday("monday");break;case 9:n.setWeekday("tuesday");break;case 10:n.setWeekday("wednesday");break;case 11:n.setWeekday("thursday");break;case 12:n.setWeekday("friday");break;case 13:n.setWeekday("saturday");break;case 14:n.setWeekday("sunday");break;case 15:n.setWeekend("friday");break;case 16:n.setWeekend("saturday");break;case 17:n.setDateFormat(s[o].substr(11)),this.$=s[o].substr(11);break;case 18:n.enableInclusiveEndDates(),this.$=s[o].substr(18);break;case 19:n.TopAxis(),this.$=s[o].substr(8);break;case 20:n.setAxisFormat(s[o].substr(11)),this.$=s[o].substr(11);break;case 21:n.setTickInterval(s[o].substr(13)),this.$=s[o].substr(13);break;case 22:n.setExcludes(s[o].substr(9)),this.$=s[o].substr(9);break;case 23:n.setIncludes(s[o].substr(9)),this.$=s[o].substr(9);break;case 24:n.setTodayMarker(s[o].substr(12)),this.$=s[o].substr(12);break;case 27:n.setDiagramTitle(s[o].substr(6)),this.$=s[o].substr(6);break;case 28:this.$=s[o].trim(),n.setAccTitle(this.$);break;case 29:case 30:this.$=s[o].trim(),n.setAccDescription(this.$);break;case 31:n.addSection(s[o].substr(8)),this.$=s[o].substr(8);break;case 33:n.addTask(s[o-1],s[o]),this.$="task";break;case 34:this.$=s[o-1],n.setClickEvent(s[o-1],s[o],null);break;case 35:this.$=s[o-2],n.setClickEvent(s[o-2],s[o-1],s[o]);break;case 36:this.$=s[o-2],n.setClickEvent(s[o-2],s[o-1],null),n.setLink(s[o-2],s[o]);break;case 37:this.$=s[o-3],n.setClickEvent(s[o-3],s[o-2],s[o-1]),n.setLink(s[o-3],s[o]);break;case 38:this.$=s[o-2],n.setClickEvent(s[o-2],s[o],null),n.setLink(s[o-2],s[o-1]);break;case 39:this.$=s[o-3],n.setClickEvent(s[o-3],s[o-1],s[o]),n.setLink(s[o-3],s[o-2]);break;case 40:this.$=s[o-1],n.setLink(s[o-1],s[o]);break;case 41:case 47:this.$=s[o-1]+" "+s[o];break;case 42:case 43:case 45:this.$=s[o-2]+" "+s[o-1]+" "+s[o];break;case 44:case 46:this.$=s[o-3]+" "+s[o-2]+" "+s[o-1]+" "+s[o]}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:n,14:r,15:s,16:a,17:l,18:c,19:18,20:u,21:d,22:h,23:f,24:m,25:y,26:k,27:p,28:g,29:b,30:v,31:x,33:T,35:w,36:_,37:24,38:D,40:$},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:36,11:17,12:i,13:n,14:r,15:s,16:a,17:l,18:c,19:18,20:u,21:d,22:h,23:f,24:m,25:y,26:k,27:p,28:g,29:b,30:v,31:x,33:T,35:w,36:_,37:24,38:D,40:$},t(e,[2,5]),t(e,[2,6]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),t(e,[2,25]),t(e,[2,26]),t(e,[2,27]),{32:[1,37]},{34:[1,38]},t(e,[2,30]),t(e,[2,31]),t(e,[2,32]),{39:[1,39]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),{41:[1,40],43:[1,41]},t(e,[2,4]),t(e,[2,28]),t(e,[2,29]),t(e,[2,33]),t(e,[2,34],{42:[1,42],43:[1,43]}),t(e,[2,40],{41:[1,44]}),t(e,[2,35],{43:[1,45]}),t(e,[2,36]),t(e,[2,38],{42:[1,46]}),t(e,[2,37]),t(e,[2,39])],defaultActions:{},parseError:(0,o.K2)(function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},"parseError"),parse:(0,o.K2)(function(t){var e=this,i=[0],n=[],r=[null],s=[],a=this.table,l="",c=0,u=0,d=0,h=s.slice.call(arguments,1),f=Object.create(this.lexer),m={};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(m[y]=this.yy[y]);f.setInput(t,m),m.lexer=f,m.parser=this,void 0===f.yylloc&&(f.yylloc={});var k=f.yylloc;s.push(k);var p=f.options&&f.options.ranges;function g(){var t;return"number"!=typeof(t=n.pop()||f.lex()||1)&&(t instanceof Array&&(t=(n=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof m.parseError?this.parseError=m.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,o.K2)(function(t){i.length=i.length-2*t,r.length=r.length-t,s.length=s.length-t},"popStack"),(0,o.K2)(g,"lex");for(var b,v,x,T,w,_,D,$,C,S={};;){if(x=i[i.length-1],this.defaultActions[x]?T=this.defaultActions[x]:(null==b&&(b=g()),T=a[x]&&a[x][b]),void 0===T||!T.length||!T[0]){var K="";for(_ in C=[],a[x])this.terminals_[_]&&_>2&&C.push("'"+this.terminals_[_]+"'");K=f.showPosition?"Parse error on line "+(c+1)+":\n"+f.showPosition()+"\nExpecting "+C.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==b?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(K,{text:f.match,token:this.terminals_[b]||b,line:f.yylineno,loc:k,expected:C})}if(T[0]instanceof Array&&T.length>1)throw Error("Parse Error: multiple actions possible at state: "+x+", token: "+b);switch(T[0]){case 1:i.push(b),r.push(f.yytext),s.push(f.yylloc),i.push(T[1]),b=null,v?(b=v,v=null):(u=f.yyleng,l=f.yytext,c=f.yylineno,k=f.yylloc,d>0&&d--);break;case 2:if(D=this.productions_[T[1]][1],S.$=r[r.length-D],S._$={first_line:s[s.length-(D||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(D||1)].first_column,last_column:s[s.length-1].last_column},p&&(S._$.range=[s[s.length-(D||1)].range[0],s[s.length-1].range[1]]),void 0!==(w=this.performAction.apply(S,[l,u,c,m,T[1],r,s].concat(h))))return w;D&&(i=i.slice(0,-1*D*2),r=r.slice(0,-1*D),s=s.slice(0,-1*D)),i.push(this.productions_[T[1]][0]),r.push(S.$),s.push(S._$),$=a[i[i.length-2]][i[i.length-1]],i.push($);break;case 3:return!0}}return!0},"parse")};function S(){this.yy={}}return C.lexer={EOF:1,parseError:(0,o.K2)(function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},"parseError"),setInput:(0,o.K2)(function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,o.K2)(function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},"input"),unput:(0,o.K2)(function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},"unput"),more:(0,o.K2)(function(){return this._more=!0,this},"more"),reject:(0,o.K2)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:(0,o.K2)(function(t){this.unput(this.match.slice(t))},"less"),pastInput:(0,o.K2)(function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,o.K2)(function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,o.K2)(function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},"showPosition"),test_match:(0,o.K2)(function(t,e){var i,n,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var s in r)this[s]=r[s];return!1},"test_match"),next:(0,o.K2)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,n,r=this._currentRules(),s=0;s<r.length;s++)if((i=this._input.match(this.rules[r[s]]))&&(!e||i[0].length>e[0].length)){if(e=i,n=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,r[s])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[n]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,o.K2)(function(){var t=this.next();return t||this.lex()},"lex"),begin:(0,o.K2)(function(t){this.conditionStack.push(t)},"begin"),popState:(0,o.K2)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,o.K2)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,o.K2)(function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},"topState"),pushState:(0,o.K2)(function(t){this.begin(t)},"pushState"),stateStackSize:(0,o.K2)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,o.K2)(function(t,e,i,n){switch(i){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:case 15:case 18:case 21:case 24:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:case 9:case 10:case 12:case 13:break;case 11:return 10;case 14:this.begin("href");break;case 16:return 43;case 17:this.begin("callbackname");break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 22:return 42;case 23:this.begin("click");break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}},(0,o.K2)(S,"Parser"),S.prototype=C,C.Parser=S,new S}();A.parser=A,c.extend(u),c.extend(d),c.extend(h);var Y={friday:5,saturday:6},L="",I="",W=void 0,F="",O=[],N=[],P=new Map,z=[],B=[],H="",R="",G=["active","done","crit","milestone"],V=[],j=!1,U=!1,Z="sunday",X="saturday",q=0,Q=(0,o.K2)(function(){z=[],B=[],H="",V=[],tM=0,n=void 0,r=void 0,tL=[],L="",I="",R="",W=void 0,F="",O=[],N=[],j=!1,U=!1,q=0,P=new Map,(0,o.IU)(),Z="sunday",X="saturday"},"clear"),J=(0,o.K2)(function(t){I=t},"setAxisFormat"),tt=(0,o.K2)(function(){return I},"getAxisFormat"),te=(0,o.K2)(function(t){W=t},"setTickInterval"),ti=(0,o.K2)(function(){return W},"getTickInterval"),tn=(0,o.K2)(function(t){F=t},"setTodayMarker"),tr=(0,o.K2)(function(){return F},"getTodayMarker"),ts=(0,o.K2)(function(t){L=t},"setDateFormat"),ta=(0,o.K2)(function(){j=!0},"enableInclusiveEndDates"),to=(0,o.K2)(function(){return j},"endDatesAreInclusive"),tl=(0,o.K2)(function(){U=!0},"enableTopAxis"),tc=(0,o.K2)(function(){return U},"topAxisEnabled"),tu=(0,o.K2)(function(t){R=t},"setDisplayMode"),td=(0,o.K2)(function(){return R},"getDisplayMode"),th=(0,o.K2)(function(){return L},"getDateFormat"),tf=(0,o.K2)(function(t){O=t.toLowerCase().split(/[\s,]+/)},"setIncludes"),tm=(0,o.K2)(function(){return O},"getIncludes"),ty=(0,o.K2)(function(t){N=t.toLowerCase().split(/[\s,]+/)},"setExcludes"),tk=(0,o.K2)(function(){return N},"getExcludes"),tp=(0,o.K2)(function(){return P},"getLinks"),tg=(0,o.K2)(function(t){H=t,z.push(t)},"addSection"),tb=(0,o.K2)(function(){return z},"getSections"),tv=(0,o.K2)(function(){let t=tN(),e=0;for(;!t&&e<10;)t=tN(),e++;return B=tL},"getTasks"),tx=(0,o.K2)(function(t,e,i,n){return!n.includes(t.format(e.trim()))&&(!!(i.includes("weekends")&&(t.isoWeekday()===Y[X]||t.isoWeekday()===Y[X]+1)||i.includes(t.format("dddd").toLowerCase()))||i.includes(t.format(e.trim())))},"isInvalidDate"),tT=(0,o.K2)(function(t){Z=t},"setWeekday"),tw=(0,o.K2)(function(){return Z},"getWeekday"),t_=(0,o.K2)(function(t){X=t},"setWeekend"),tD=(0,o.K2)(function(t,e,i,n){let r;if(!i.length||t.manualEndTime)return;let[s,a]=t$(r=(r=t.startTime instanceof Date?c(t.startTime):c(t.startTime,e,!0)).add(1,"d"),t.endTime instanceof Date?c(t.endTime):c(t.endTime,e,!0),e,i,n);t.endTime=s.toDate(),t.renderEndTime=a},"checkTaskDates"),t$=(0,o.K2)(function(t,e,i,n,r){let s=!1,a=null;for(;t<=e;)s||(a=e.toDate()),(s=tx(t,i,n,r))&&(e=e.add(1,"d")),t=t.add(1,"d");return[e,a]},"fixTaskDates"),tC=(0,o.K2)(function(t,e,i){i=i.trim();let n=/^after\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==n){let t=null;for(let e of n.groups.ids.split(" ")){let i=tF(e);void 0!==i&&(!t||i.endTime>t.endTime)&&(t=i)}if(t)return t.endTime;let e=new Date;return e.setHours(0,0,0,0),e}let r=c(i,e.trim(),!0);if(r.isValid())return r.toDate();{o.Rm.debug("Invalid date:"+i),o.Rm.debug("With date format:"+e.trim());let t=new Date(i);if(void 0===t||isNaN(t.getTime())||-1e4>t.getFullYear()||t.getFullYear()>1e4)throw Error("Invalid date:"+i);return t}},"getStartDate"),tS=(0,o.K2)(function(t){let e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return null!==e?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},"parseDuration"),tK=(0,o.K2)(function(t,e,i,n=!1){i=i.trim();let r=/^until\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==r){let t=null;for(let e of r.groups.ids.split(" ")){let i=tF(e);void 0!==i&&(!t||i.startTime<t.startTime)&&(t=i)}if(t)return t.startTime;let e=new Date;return e.setHours(0,0,0,0),e}let s=c(i,e.trim(),!0);if(s.isValid())return n&&(s=s.add(1,"d")),s.toDate();let a=c(t),[o,l]=tS(i);if(!Number.isNaN(o)){let t=a.add(o,l);t.isValid()&&(a=t)}return a.toDate()},"getEndDate"),tM=0,tE=(0,o.K2)(function(t){return void 0===t?"task"+(tM+=1):t},"parseId"),tA=(0,o.K2)(function(t,e){let i=(":"===e.substr(0,1)?e.substr(1,e.length):e).split(","),n={};tj(i,n,G);for(let t=0;t<i.length;t++)i[t]=i[t].trim();let r="";switch(i.length){case 1:n.id=tE(),n.startTime=t.endTime,r=i[0];break;case 2:n.id=tE(),n.startTime=tC(void 0,L,i[0]),r=i[1];break;case 3:n.id=tE(i[0]),n.startTime=tC(void 0,L,i[1]),r=i[2]}return r&&(n.endTime=tK(n.startTime,L,r,j),n.manualEndTime=c(r,"YYYY-MM-DD",!0).isValid(),tD(n,L,N,O)),n},"compileData"),tY=(0,o.K2)(function(t,e){let i=(":"===e.substr(0,1)?e.substr(1,e.length):e).split(","),n={};tj(i,n,G);for(let t=0;t<i.length;t++)i[t]=i[t].trim();switch(i.length){case 1:n.id=tE(),n.startTime={type:"prevTaskEnd",id:t},n.endTime={data:i[0]};break;case 2:n.id=tE(),n.startTime={type:"getStartDate",startData:i[0]},n.endTime={data:i[1]};break;case 3:n.id=tE(i[0]),n.startTime={type:"getStartDate",startData:i[1]},n.endTime={data:i[2]}}return n},"parseData"),tL=[],tI={},tW=(0,o.K2)(function(t,e){let i={section:H,type:H,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},n=tY(r,e);i.raw.startTime=n.startTime,i.raw.endTime=n.endTime,i.id=n.id,i.prevTaskId=r,i.active=n.active,i.done=n.done,i.crit=n.crit,i.milestone=n.milestone,i.order=q,q++;let s=tL.push(i);r=i.id,tI[i.id]=s-1},"addTask"),tF=(0,o.K2)(function(t){return tL[tI[t]]},"findTaskById"),tO=(0,o.K2)(function(t,e){let i={section:H,type:H,description:t,task:t,classes:[]},r=tA(n,e);i.startTime=r.startTime,i.endTime=r.endTime,i.id=r.id,i.active=r.active,i.done=r.done,i.crit=r.crit,i.milestone=r.milestone,n=i,B.push(i)},"addTaskOrg"),tN=(0,o.K2)(function(){let t=(0,o.K2)(function(t){let e=tL[t],i="";switch(tL[t].raw.startTime.type){case"prevTaskEnd":{let t=tF(e.prevTaskId);e.startTime=t.endTime;break}case"getStartDate":(i=tC(void 0,L,tL[t].raw.startTime.startData))&&(tL[t].startTime=i)}return tL[t].startTime&&(tL[t].endTime=tK(tL[t].startTime,L,tL[t].raw.endTime.data,j),tL[t].endTime&&(tL[t].processed=!0,tL[t].manualEndTime=c(tL[t].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),tD(tL[t],L,N,O))),tL[t].processed},"compileTask"),e=!0;for(let[i,n]of tL.entries())t(i),e=e&&n.processed;return e},"compileTasks"),tP=(0,o.K2)(function(t,e){let i=e;"loose"!==(0,o.D7)().securityLevel&&(i=(0,l.J)(e)),t.split(",").forEach(function(t){void 0!==tF(t)&&(tH(t,()=>{window.open(i,"_self")}),P.set(t,i))}),tz(t,"clickable")},"setLink"),tz=(0,o.K2)(function(t,e){t.split(",").forEach(function(t){let i=tF(t);void 0!==i&&i.classes.push(e)})},"setClass"),tB=(0,o.K2)(function(t,e,i){if("loose"!==(0,o.D7)().securityLevel||void 0===e)return;let n=[];if("string"==typeof i){n=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let t=0;t<n.length;t++){let e=n[t].trim();e.startsWith('"')&&e.endsWith('"')&&(e=e.substr(1,e.length-2)),n[t]=e}}0===n.length&&n.push(t),void 0!==tF(t)&&tH(t,()=>{a._K.runFunc(e,...n)})},"setClickFun"),tH=(0,o.K2)(function(t,e){V.push(function(){let i=document.querySelector(`[id="${t}"]`);null!==i&&i.addEventListener("click",function(){e()})},function(){let i=document.querySelector(`[id="${t}-text"]`);null!==i&&i.addEventListener("click",function(){e()})})},"pushFun"),tR=(0,o.K2)(function(t,e,i){t.split(",").forEach(function(t){tB(t,e,i)}),tz(t,"clickable")},"setClickEvent"),tG=(0,o.K2)(function(t){V.forEach(function(e){e(t)})},"bindFunctions"),tV={getConfig:(0,o.K2)(()=>(0,o.D7)().gantt,"getConfig"),clear:Q,setDateFormat:ts,getDateFormat:th,enableInclusiveEndDates:ta,endDatesAreInclusive:to,enableTopAxis:tl,topAxisEnabled:tc,setAxisFormat:J,getAxisFormat:tt,setTickInterval:te,getTickInterval:ti,setTodayMarker:tn,getTodayMarker:tr,setAccTitle:o.SV,getAccTitle:o.iN,setDiagramTitle:o.ke,getDiagramTitle:o.ab,setDisplayMode:tu,getDisplayMode:td,setAccDescription:o.EI,getAccDescription:o.m7,addSection:tg,getSections:tb,getTasks:tv,addTask:tW,findTaskById:tF,addTaskOrg:tO,setIncludes:tf,getIncludes:tm,setExcludes:ty,getExcludes:tk,setClickEvent:tR,setLink:tP,getLinks:tp,bindFunctions:tG,parseDuration:tS,isInvalidDate:tx,setWeekday:tT,getWeekday:tw,setWeekend:t_};function tj(t,e,i){let n=!0;for(;n;)n=!1,i.forEach(function(i){let r=RegExp("^\\s*"+i+"\\s*$");t[0].match(r)&&(e[i]=!0,t.shift(1),n=!0)})}(0,o.K2)(tj,"getTaskTags");var tU=(0,o.K2)(function(){o.Rm.debug("Something is calling, setConf, remove the call")},"setConf"),tZ={monday:f.AB,tuesday:f.PG,wednesday:f.Gu,thursday:f.Mo,friday:f.TU,saturday:f.rG,sunday:f.YP},tX=(0,o.K2)((t,e)=>{let i=[...t].map(()=>-1/0),n=[...t].sort((t,e)=>t.startTime-e.startTime||t.order-e.order),r=0;for(let t of n)for(let n=0;n<i.length;n++)if(t.startTime>=i[n]){i[n]=t.endTime,t.order=n+e,n>r&&(r=n);break}return r},"getMaxIntersections"),tq={parser:A,db:tV,renderer:{setConf:tU,draw:(0,o.K2)(function(t,e,i,n){let r,a=(0,o.D7)().gantt,l=(0,o.D7)().securityLevel;"sandbox"===l&&(r=(0,m.Lt)("#i"+e));let u="sandbox"===l?(0,m.Lt)(r.nodes()[0].contentDocument.body):(0,m.Lt)("body"),d="sandbox"===l?r.nodes()[0].contentDocument:document,h=d.getElementById(e);void 0===(s=h.parentElement.offsetWidth)&&(s=1200),void 0!==a.useWidth&&(s=a.useWidth);let k=n.db.getTasks(),p=[];for(let t of k)p.push(t.type);p=A(p);let g={},b=2*a.topPadding;if("compact"===n.db.getDisplayMode()||"compact"===a.displayMode){let t={};for(let e of k)void 0===t[e.section]?t[e.section]=[e]:t[e.section].push(e);let e=0;for(let i of Object.keys(t)){let n=tX(t[i],e)+1;e+=n,b+=n*(a.barHeight+a.barGap),g[i]=n}}else for(let t of(b+=k.length*(a.barHeight+a.barGap),p))g[t]=k.filter(e=>e.type===t).length;h.setAttribute("viewBox","0 0 "+s+" "+b);let v=u.select(`[id="${e}"]`),x=(0,y.w7)().domain([function(t,e){let i;if(void 0===e)for(let e of t)null!=e&&(i>e||void 0===i&&e>=e)&&(i=e);else{let n=-1;for(let r of t)null!=(r=e(r,++n,t))&&(i>r||void 0===i&&r>=r)&&(i=r)}return i}(k,function(t){return t.startTime}),function(t,e){let i;if(void 0===e)for(let e of t)null!=e&&(i<e||void 0===i&&e>=e)&&(i=e);else{let n=-1;for(let r of t)null!=(r=e(r,++n,t))&&(i<r||void 0===i&&r>=r)&&(i=r)}return i}(k,function(t){return t.endTime})]).rangeRound([0,s-a.leftPadding-a.rightPadding]);function T(t,e){let i=t.startTime,n=e.startTime,r=0;return i>n?r=1:i<n&&(r=-1),r}function w(t,e,i){let r=a.barHeight,s=r+a.barGap,o=a.topPadding,l=a.leftPadding,c=(0,y.m4)().domain([0,p.length]).range(["#00B9FA","#F95002"]).interpolate(D.bE);$(s,o,l,e,i,t,n.db.getExcludes(),n.db.getIncludes()),C(l,o,e,i),_(t,s,o,l,r,c,e),S(s,o),K(l,o,e,i)}function _(t,i,r,s,l,c,u){let d=[...new Set(t.map(t=>t.order))].map(e=>t.find(t=>t.order===e));v.append("g").selectAll("rect").data(d).enter().append("rect").attr("x",0).attr("y",function(t,e){return t.order*i+r-2}).attr("width",function(){return u-a.rightPadding/2}).attr("height",i).attr("class",function(t){for(let[e,i]of p.entries())if(t.type===i)return"section section"+e%a.numberSectionStyles;return"section section0"});let h=v.append("g").selectAll("rect").data(t).enter(),f=n.db.getLinks();if(h.append("rect").attr("id",function(t){return t.id}).attr("rx",3).attr("ry",3).attr("x",function(t){return t.milestone?x(t.startTime)+s+.5*(x(t.endTime)-x(t.startTime))-.5*l:x(t.startTime)+s}).attr("y",function(t,e){return t.order*i+r}).attr("width",function(t){return t.milestone?l:x(t.renderEndTime||t.endTime)-x(t.startTime)}).attr("height",l).attr("transform-origin",function(t,e){return e=t.order,(x(t.startTime)+s+.5*(x(t.endTime)-x(t.startTime))).toString()+"px "+(e*i+r+.5*l).toString()+"px"}).attr("class",function(t){let e="";t.classes.length>0&&(e=t.classes.join(" "));let i=0;for(let[e,n]of p.entries())t.type===n&&(i=e%a.numberSectionStyles);let n="";return t.active?t.crit?n+=" activeCrit":n=" active":t.done?n=t.crit?" doneCrit":" done":t.crit&&(n+=" crit"),0===n.length&&(n=" task"),t.milestone&&(n=" milestone "+n),n+=i,"task"+(n+=" "+e)}),h.append("text").attr("id",function(t){return t.id+"-text"}).text(function(t){return t.task}).attr("font-size",a.fontSize).attr("x",function(t){let e=x(t.startTime),i=x(t.renderEndTime||t.endTime);t.milestone&&(e+=.5*(x(t.endTime)-x(t.startTime))-.5*l),t.milestone&&(i=e+l);let n=this.getBBox().width;return n>i-e?i+n+1.5*a.leftPadding>u?e+s-5:i+s+5:(i-e)/2+e+s}).attr("y",function(t,e){return t.order*i+a.barHeight/2+(a.fontSize/2-2)+r}).attr("text-height",l).attr("class",function(t){let e=x(t.startTime),i=x(t.endTime);t.milestone&&(i=e+l);let n=this.getBBox().width,r="";t.classes.length>0&&(r=t.classes.join(" "));let s=0;for(let[e,i]of p.entries())t.type===i&&(s=e%a.numberSectionStyles);let o="";return(t.active&&(o=t.crit?"activeCritText"+s:"activeText"+s),t.done?o=t.crit?o+" doneCritText"+s:o+" doneText"+s:t.crit&&(o=o+" critText"+s),t.milestone&&(o+=" milestoneText"),n>i-e)?i+n+1.5*a.leftPadding>u?r+" taskTextOutsideLeft taskTextOutside"+s+" "+o:r+" taskTextOutsideRight taskTextOutside"+s+" "+o+" width-"+n:r+" taskText taskText"+s+" "+o+" width-"+n}),"sandbox"===(0,o.D7)().securityLevel){let t=(0,m.Lt)("#i"+e).nodes()[0].contentDocument;h.filter(function(t){return f.has(t.id)}).each(function(e){var i=t.querySelector("#"+e.id),n=t.querySelector("#"+e.id+"-text");let r=i.parentNode;var s=t.createElement("a");s.setAttribute("xlink:href",f.get(e.id)),s.setAttribute("target","_top"),r.appendChild(s),s.appendChild(i),s.appendChild(n)})}}function $(t,e,i,r,s,l,u,d){let h,f;if(0===u.length&&0===d.length)return;for(let{startTime:t,endTime:e}of l)(void 0===h||t<h)&&(h=t),(void 0===f||e>f)&&(f=e);if(!h||!f)return;if(c(f).diff(c(h),"year")>5)return void o.Rm.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");let m=n.db.getDateFormat(),y=[],k=null,p=c(h);for(;p.valueOf()<=f;)n.db.isInvalidDate(p,m,u,d)?k?k.end=p:k={start:p,end:p}:k&&(y.push(k),k=null),p=p.add(1,"d");v.append("g").selectAll("rect").data(y).enter().append("rect").attr("id",function(t){return"exclude-"+t.start.format("YYYY-MM-DD")}).attr("x",function(t){return x(t.start)+i}).attr("y",a.gridLineStartPadding).attr("width",function(t){return x(t.end.add(1,"day"))-x(t.start)}).attr("height",s-e-a.gridLineStartPadding).attr("transform-origin",function(e,n){return(x(e.start)+i+.5*(x(e.end)-x(e.start))).toString()+"px "+(n*t+.5*s).toString()+"px"}).attr("class","exclude-range")}function C(t,e,i,r){let s=M(3,x).tickSize(-r+e+a.gridLineStartPadding).tickFormat((0,E.DC)(n.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d")),o=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(n.db.getTickInterval()||a.tickInterval);if(null!==o){let t=o[1],e=o[2],i=n.db.getWeekday()||a.weekday;switch(e){case"millisecond":s.ticks(f.t6.every(t));break;case"second":s.ticks(f.uc.every(t));break;case"minute":s.ticks(f.wX.every(t));break;case"hour":s.ticks(f.Ag.every(t));break;case"day":s.ticks(f.UA.every(t));break;case"week":s.ticks(tZ[i].every(t));break;case"month":s.ticks(f.Ui.every(t))}}if(v.append("g").attr("class","grid").attr("transform","translate("+t+", "+(r-50)+")").call(s).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),n.db.topAxisEnabled()||a.topAxis){let i=M(1,x).tickSize(-r+e+a.gridLineStartPadding).tickFormat((0,E.DC)(n.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d"));if(null!==o){let t=o[1],e=o[2],r=n.db.getWeekday()||a.weekday;switch(e){case"millisecond":i.ticks(f.t6.every(t));break;case"second":i.ticks(f.uc.every(t));break;case"minute":i.ticks(f.wX.every(t));break;case"hour":i.ticks(f.Ag.every(t));break;case"day":i.ticks(f.UA.every(t));break;case"week":i.ticks(tZ[r].every(t));break;case"month":i.ticks(f.Ui.every(t))}}v.append("g").attr("class","grid").attr("transform","translate("+t+", "+e+")").call(i).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function S(t,e){let i=0,n=Object.keys(g).map(t=>[t,g[t]]);v.append("g").selectAll("text").data(n).enter().append(function(t){let e=t[0].split(o.Y2.lineBreakRegex),i=-(e.length-1)/2,n=d.createElementNS("http://www.w3.org/2000/svg","text");for(let[t,r]of(n.setAttribute("dy",i+"em"),e.entries())){let e=d.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttribute("alignment-baseline","central"),e.setAttribute("x","10"),t>0&&e.setAttribute("dy","1em"),e.textContent=r,n.appendChild(e)}return n}).attr("x",10).attr("y",function(r,s){if(!(s>0))return r[1]*t/2+e;for(let a=0;a<s;a++)return i+=n[s-1][1],r[1]*t/2+i*t+e}).attr("font-size",a.sectionFontSize).attr("class",function(t){for(let[e,i]of p.entries())if(t[0]===i)return"sectionTitle sectionTitle"+e%a.numberSectionStyles;return"sectionTitle"})}function K(t,e,i,r){let s=n.db.getTodayMarker();if("off"===s)return;let o=v.append("g").attr("class","today"),l=new Date,c=o.append("line");c.attr("x1",x(l)+t).attr("x2",x(l)+t).attr("y1",a.titleTopMargin).attr("y2",r-a.titleTopMargin).attr("class","today"),""!==s&&c.attr("style",s.replace(/,/g,";"))}function A(t){let e={},i=[];for(let n=0,r=t.length;n<r;++n)Object.prototype.hasOwnProperty.call(e,t[n])||(e[t[n]]=!0,i.push(t[n]));return i}(0,o.K2)(T,"taskCompare"),k.sort(T),w(k,s,b),(0,o.a$)(v,b,s,a.useMaxWidth),v.append("text").text(n.db.getDiagramTitle()).attr("x",s/2).attr("y",a.titleTopMargin).attr("class","titleText"),(0,o.K2)(w,"makeGantt"),(0,o.K2)(_,"drawRects"),(0,o.K2)($,"drawExcludeDays"),(0,o.K2)(C,"makeGrid"),(0,o.K2)(S,"vertLabels"),(0,o.K2)(K,"drawToday"),(0,o.K2)(A,"checkUnique")},"draw")},styles:(0,o.K2)(t=>`
  .mermaid-main-font {
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }
`,"getStyles")}}}]);