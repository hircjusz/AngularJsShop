/*
 AngularJS v1.5.0-beta.1
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(J,f,C){'use strict';function D(s,e){e=e||{};f.forEach(e,function(f,g){delete e[g]});for(var g in s)!s.hasOwnProperty(g)||"$"===g.charAt(0)&&"$"===g.charAt(1)||(e[g]=s[g]);return e}var x=f.$$minErr("$resource"),G=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;f.module("ngResource",["ng"]).provider("$resource",function(){var s=/^https?:\/\/[^\/]*/,e=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};
this.$get=["$http","$q",function(g,F){function v(f,a){return encodeURIComponent(f).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function y(f,a){this.template=f;this.defaults=r({},e.defaults,a);this.urlParams={}}function z(l,a,n,h){function d(c,q){var d={};q=r({},a,q);t(q,function(b,q){w(b)&&(b=b());var p;if(b&&b.charAt&&"@"==b.charAt(0)){p=c;var a=b.substr(1);if(null==a||""===a||"hasOwnProperty"===a||!G.test("."+a))throw x("badmember",
a);for(var a=a.split("."),k=0,e=a.length;k<e&&f.isDefined(p);k++){var g=a[k];p=null!==p?p[g]:C}}else p=b;d[q]=p});return d}function H(c){return c.resource}function k(c){D(c||{},this)}var s=new y(l,h);n=r({},e.defaults.actions,n);k.prototype.toJSON=function(){var c=r({},this);delete c.$promise;delete c.$resolved;return c};t(n,function(c,q){var a=/^(POST|PUT|PATCH)$/i.test(c.method);k[q]=function(b,A,p,e){var h={},l,n,B;switch(arguments.length){case 4:B=e,n=p;case 3:case 2:if(w(A)){if(w(b)){n=b;B=A;
break}n=A;B=p}else{h=b;l=A;n=p;break}case 1:w(b)?n=b:a?l=b:h=b;break;case 0:break;default:throw x("badargs",arguments.length);}var v=this instanceof k,m=v?l:c.isArray?[]:new k(l),u={},y=c.interceptor&&c.interceptor.response||H,z=c.interceptor&&c.interceptor.responseError||C;t(c,function(c,b){"params"!=b&&"isArray"!=b&&"interceptor"!=b&&(u[b]=I(c))});a&&(u.data=l);s.setUrlParams(u,r({},d(l,c.params||{}),h),c.url);h=g(u).then(function(b){var a=b.data,d=m.$promise;if(a){if(f.isArray(a)!==!!c.isArray)throw x("badcfg",
q,c.isArray?"array":"object",f.isArray(a)?"array":"object",u.method,u.url);c.isArray?(m.length=0,t(a,function(b){"object"===typeof b?m.push(new k(b)):m.push(b)})):(D(a,m),m.$promise=d)}m.$resolved=!0;b.resource=m;return b},function(b){m.$resolved=!0;(B||E)(b);return F.reject(b)});h=h.then(function(b){var a=y(b);(n||E)(a,b.headers);return a},z);return v?h:(m.$promise=h,m.$resolved=!1,m)};k.prototype["$"+q]=function(b,a,c){w(b)&&(c=a,a=b,b={});b=k[q].call(this,b,this,a,c);return b.$promise||b}});k.bind=
function(c){return z(l,r({},a,c),n)};return k}var E=f.noop,t=f.forEach,r=f.extend,I=f.copy,w=f.isFunction;y.prototype={setUrlParams:function(l,a,e){var h=this,d=e||h.template,g,k,r="",c=h.urlParams={};t(d.split(/\W/),function(a){if("hasOwnProperty"===a)throw x("badname");!/^\d+$/.test(a)&&a&&(new RegExp("(^|[^\\\\]):"+a+"(\\W|$)")).test(d)&&(c[a]={isQueryParamValue:(new RegExp("\\?.*=:"+a+"(?:\\W|$)")).test(d)})});d=d.replace(/\\:/g,":");d=d.replace(s,function(a){r=a;return""});a=a||{};t(h.urlParams,
function(c,e){g=a.hasOwnProperty(e)?a[e]:h.defaults[e];f.isDefined(g)&&null!==g?(k=c.isQueryParamValue?v(g,!0):v(g,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),d=d.replace(new RegExp(":"+e+"(\\W|$)","g"),function(a,c){return k+c})):d=d.replace(new RegExp("(/?):"+e+"(\\W|$)","g"),function(a,c,d){return"/"==d.charAt(0)?d:c+d})});h.defaults.stripTrailingSlashes&&(d=d.replace(/\/+$/,"")||"/");d=d.replace(/\/\.(?=\w+($|\?))/,".");l.url=r+d.replace(/\/\\\./,"/.");t(a,function(a,c){h.urlParams[c]||
(l.params=l.params||{},l.params[c]=a)})}};return z}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map