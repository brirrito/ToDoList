(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(e){return t(1,arguments),e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}function n(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function a(a){if(t(1,arguments),!e(a)&&"number"!=typeof a)return!1;var r=n(a);return!isNaN(Number(r))}var r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function o(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}var i,s={date:o({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:o({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:o({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},c={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function d(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=r.width?String(r.width):o;a=t.formattingValues[i]||t.formattingValues[o]}else{var s=t.defaultWidth,c=r.width?String(r.width):t.defaultWidth;a=t.values[c]||t.values[s]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function u(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;var i,s=o[0],c=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(c)?m(c,(function(t){return t.test(s)})):l(c,(function(t){return t.test(s)}));i=t.valueCallback?t.valueCallback(d):d,i=n.valueCallback?n.valueCallback(i):i;var u=e.slice(s.length);return{value:i,rest:u}}}function l(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function m(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const h={code:"en-US",formatDistance:function(t,e,n){var a,o=r[t];return a="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:s,formatRelative:function(t,e,n,a){return c[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:d({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:d({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:d({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:d({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:d({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(i={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(i.matchPattern);if(!n)return null;var a=n[0],r=t.match(i.parsePattern);if(!r)return null;var o=i.valueCallback?i.valueCallback(r[0]):r[0];o=e.valueCallback?e.valueCallback(o):o;var s=t.slice(a.length);return{value:o,rest:s}}),era:u({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:u({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:u({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:u({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:u({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function g(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function f(e,a){t(2,arguments);var r=n(e).getTime(),o=g(a);return new Date(r+o)}function p(e,n){t(2,arguments);var a=g(n);return f(e,-a)}function v(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const w=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return v("yy"===e?a%100:a,e.length)},T=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):v(n+1,2)},k=function(t,e){return v(t.getUTCDate(),e.length)},y=function(t,e){return v(t.getUTCHours()%12||12,e.length)},b=function(t,e){return v(t.getUTCHours(),e.length)},P=function(t,e){return v(t.getUTCMinutes(),e.length)},j=function(t,e){return v(t.getUTCSeconds(),e.length)},D=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return v(Math.floor(a*Math.pow(10,n-3)),e.length)};var E=864e5;function C(e){t(1,arguments);var a=1,r=n(e),o=r.getUTCDay(),i=(o<a?7:0)+o-a;return r.setUTCDate(r.getUTCDate()-i),r.setUTCHours(0,0,0,0),r}function L(e){t(1,arguments);var a=n(e),r=a.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(r+1,0,4),o.setUTCHours(0,0,0,0);var i=C(o),s=new Date(0);s.setUTCFullYear(r,0,4),s.setUTCHours(0,0,0,0);var c=C(s);return a.getTime()>=i.getTime()?r+1:a.getTime()>=c.getTime()?r:r-1}function M(e){t(1,arguments);var n=L(e),a=new Date(0);a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0);var r=C(a);return r}var x=6048e5;function N(e,a){t(1,arguments);var r=a||{},o=r.locale,i=o&&o.options&&o.options.weekStartsOn,s=null==i?0:g(i),c=null==r.weekStartsOn?s:g(r.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=n(e),u=d.getUTCDay(),l=(u<c?7:0)+u-c;return d.setUTCDate(d.getUTCDate()-l),d.setUTCHours(0,0,0,0),d}function S(e,a){t(1,arguments);var r=n(e,a),o=r.getUTCFullYear(),i=a||{},s=i.locale,c=s&&s.options&&s.options.firstWeekContainsDate,d=null==c?1:g(c),u=null==i.firstWeekContainsDate?d:g(i.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(o+1,0,u),l.setUTCHours(0,0,0,0);var m=N(l,a),h=new Date(0);h.setUTCFullYear(o,0,u),h.setUTCHours(0,0,0,0);var f=N(h,a);return r.getTime()>=m.getTime()?o+1:r.getTime()>=f.getTime()?o:o-1}function I(e,n){t(1,arguments);var a=n||{},r=a.locale,o=r&&r.options&&r.options.firstWeekContainsDate,i=null==o?1:g(o),s=null==a.firstWeekContainsDate?i:g(a.firstWeekContainsDate),c=S(e,n),d=new Date(0);d.setUTCFullYear(c,0,s),d.setUTCHours(0,0,0,0);var u=N(d,n);return u}var B=6048e5;function U(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),o=a%60;if(0===o)return n+String(r);var i=e||"";return n+String(r)+i+v(o,2)}function W(t,e){return t%60==0?(t>0?"-":"+")+v(Math.abs(t)/60,2):A(t,e)}function A(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+v(Math.floor(r/60),2)+n+v(r%60,2)}const O={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return w(t,e)},Y:function(t,e,n,a){var r=S(t,a),o=r>0?r:1-r;return"YY"===e?v(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):v(o,e.length)},R:function(t,e){return v(L(t),e.length)},u:function(t,e){return v(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return v(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return v(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return T(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return v(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,a,r,o){var i=function(e,a){t(1,arguments);var r=n(e),o=N(r,a).getTime()-I(r,a).getTime();return Math.round(o/B)+1}(e,o);return"wo"===a?r.ordinalNumber(i,{unit:"week"}):v(i,a.length)},I:function(e,a,r){var o=function(e){t(1,arguments);var a=n(e),r=C(a).getTime()-M(a).getTime();return Math.round(r/x)+1}(e);return"Io"===a?r.ordinalNumber(o,{unit:"week"}):v(o,a.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):k(t,e)},D:function(e,a,r){var o=function(e){t(1,arguments);var a=n(e),r=a.getTime();a.setUTCMonth(0,1),a.setUTCHours(0,0,0,0);var o=a.getTime(),i=r-o;return Math.floor(i/E)+1}(e);return"Do"===a?r.ordinalNumber(o,{unit:"dayOfYear"}):v(o,a.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return v(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return v(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return v(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return y(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):b(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):v(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):v(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):P(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):j(t,e)},S:function(t,e){return D(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return W(r);case"XXXX":case"XX":return A(r);default:return A(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return W(r);case"xxxx":case"xx":return A(r);default:return A(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+U(r,":");default:return"GMT"+A(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+U(r,":");default:return"GMT"+A(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return v(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return v((a._originalDate||t).getTime(),e.length)}};function Y(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function q(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}var H={p:q,P:function(t,e){var n,a=t.match(/(P+)(p+)?/),r=a[1],o=a[2];if(!o)return Y(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",Y(r,e)).replace("{{time}}",q(o,e))}};const F=H;function z(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var R=["D","DD"],Q=["YY","YYYY"];function G(t){return-1!==R.indexOf(t)}function X(t){return-1!==Q.indexOf(t)}function $(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var J=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,_=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,K=/^'([^]*?)'?$/,V=/''/g,Z=/[a-zA-Z]/;function tt(t){return t.match(K)[1].replace(V,"'")}function et(e){t(1,arguments);var a=n(e);return a.setHours(0,0,0,0),a}function nt(e,n){t(2,arguments);var a=et(e),r=et(n);return a.getTime()===r.getTime()}function at(e,a){t(1,arguments);var r=a||{},o=r.locale,i=o&&o.options&&o.options.weekStartsOn,s=null==i?0:g(i),c=null==r.weekStartsOn?s:g(r.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=n(e),u=d.getDay(),l=(u<c?7:0)+u-c;return d.setDate(d.getDate()-l),d.setHours(0,0,0,0),d}function rt(e,n,a){t(2,arguments);var r=at(e,a),o=at(n,a);return r.getTime()===o.getTime()}function ot(e,a){t(2,arguments);var r=n(e),o=g(a);return isNaN(o)?new Date(NaN):o?(r.setDate(r.getDate()+o),r):r}class it{constructor(t){this.name=t,this.tasks=[]}setName(t){this.name=t}getName(){return this.name}setTasks(t){this.tasks=t}getTasks(){return this.tasks}getTask(t){return this.tasks.find((e=>e.getName()===t))}contains(t){return this.tasks.some((e=>e.getName()===t))}addTask(t){if(this.tasks.find((e=>e.getName()===t.name)))return this.tasks.push(t)}deleteTask(t){this.tasks=this.tasks.filter((e=>e.name!==t))}getTasksToday(){return this.tasks.filter((e=>function(e){return t(1,arguments),nt(e,Date.now())}(n(new Date(e.getDateFormatted())))))}getTasksThisWeek(){return this.tasks.filter((e=>function(e,n){return t(1,arguments),rt(e,Date.now(),n)}(function(e,n){t(2,arguments);var a=g(n);return ot(e,-a)}(n(new Date(e.getDateFormatted())),1))))}}class st{constructor(t,e="No date"){this.name=t,this.dueDate=e}setName(t){this.name=t}getName(){return this.name}setDate(t){this.dueDate=t}getDate(){return this.dueDate}getDateFormatted(){const t=this.dueDate.split("/")[0];return`${this.dueDate.split("/")[1]}/${t}/${this.dueDate.split("/")[2]}`}}class ct{constructor(){this.projects=[],this.projects.push(new it("Inbox")),this.projects.push(new it("Today")),this.projects.push(new it("This Week"))}setProjects(t){this.projects=t}getProjects(){return this.projects}getProject(t){return this.projects.find((e=>e.getName()===t))}contains(t){return this.projects.some((e=>e.getName()===t))}addProject(t){if(this.projects.find((e=>e.name===t.name)))return this.projects.push(t)}deleteProject(t){const e=this.projects.find((e=>e.getName()===t));this.projects.splice(this.projects.indexOf(e),1)}updateTodayProject(){this.getProject("Today").tasks=[],this.projects.forEach((t=>{"Today"!==t.getName()&&"This week"!==t.getName()&&t.getTasksToday().forEach((e=>{const n=`${e.getName()} (${t.getName()})`;this.getProject("Today").addTask(new st(n,e.getDate()))}))}))}updateWeekProject(){this.getProject("This week").tasks=[],this.projects.forEach((t=>{"Today"!==t.getName()&&"This week"!==t.getName()&&t.getTasksThisWeek().forEach((e=>{const n=`${e.getName()} (${t.getName()})`;this.getProject("This week").addTask(new st(n,e.getDate()))}))})),this.getProject("This week").setTasks(this.getProject("This week").getTasks().sort(((e,a)=>function(e,a){t(2,arguments);var r=n(e),o=n(a),i=r.getTime()-o.getTime();return i<0?-1:i>0?1:i}(n(new Date(e.getDateFormatted())),n(new Date(a.getDateFormatted()))))))}}class dt{static saveToDoList(t){localStorage.setItem("todoList",JSON.stringify(t))}static getToDoList(){const t=Object.assign(new ct,JSON.parse(localStorage.getItem("todoList")));return t.setProjects(t.getProjects().map((t=>Object.assign(new it,t)))),t.getProjects().forEach((t=>t.setTasks(t.getTasks().map((t=>Object.assign(new st,t)))))),t}static addProject(t){const e=dt.getToDoList();e.addProject(t),dt.saveToDoList(e)}static deleteProject(t){const e=dt.getToDoList();e.deleteProject(t),dt.saveToDoList(e)}static addTask(t,e){const n=dt.getToDoList();n.getProject(t).addTask(e),dt.saveToDoList(n)}static deleteTask(t,e){const n=dt.getToDoList();n.getProject(t).deleteTask(e),dt.saveToDoList(n)}static renameTask(t,e,n){const a=dt.getToDoList();a.getProject(t).getTask(e).setName(n),dt.saveToDoList(a)}static setTaskDate(t,e,n){const a=dt.getToDoList();a.getProject(t).getTask(e).setDAte(n),dt.saveToDoList(a)}static updateTodayProject(){const t=dt.getToDoList();t.updateTodayProject(),dt.saveToDoList(t)}static updateWeekProject(){const t=dt.getToDoList();t.updateWeekProject(),dt.saveToDoList(t)}}class ut{static loadHomePage(){ut.loadProjects(),ut.initProjectButtons(),ut.openProject("Inbox",document.getElementById("button-inbox-projects")),document.addEventListener("keydown",ut.handleKeyboardInput)}static loadProjects(){dt.getToDoList().getProjects().forEach((t=>{"Inbox"!==t.name&&"Today"!==t.name&&"This week"!==t.name&&ut.createProject(t.name)})),ut.initAddProjectButtons()}static loadTasks(t){dt.getToDoList().getProject(t).getTasks().forEach((t=>ut.createTask(t.name,t.dueDate))),"Today"!==t&&"This week"!==t&&ut.initAddTaskButtons()}static loadProjectContent(t){const e=document.getElementById("project-preview");e.innerHTML=`\n    <h1 id="project-name">${t}</h1>\n    <div class="tasks-list" id="tasks-list"></div>`,"Today"!==t&&"This week"!==t&&(e.innerHTML='\n      <button class="button-add-task" id="button-add-task">\n      <i class="fas fa-plus"></i>\n      Add Task\n      </button>\n      <div class="add-task-popup" id="add-task-popup">\n        <input\n            class="input-add-task-popup"\n            type="text"\n        />\n      <div class="add-task-popup-buttons">\n        <button class="button-add-task-popup" id="button-add-task-popup">\n          Add\n        </button>\n        <button class="button-cancel-task-popup" id="button-cancel-task-popup">\n          Cancel\n        </button>\n      </div>\n    </div>'),ut.loadTasks(t)}static createProject(t){document.getElementById("projects-list").innerHTML+=`\n      <button class="button-project" id="data-project-button">\n        <div class="left-project-panel">\n          <i class="fas fa-tasks"></i>\n          <span>${t}</span>\n        </div>\n        <div class="right-project-panel">\n          <i class="fas fa-times"</i>\n        </div>\n      </button>`,ut.initProjectButtons()}static createTask(t,e){document.getElementById("tasks-list").innerHTML+=`\n      <button class="button-task" id="data-task-button">\n        <div class="left-task-panel">\n          <i class="far fa-circle"></i>\n          <p class="task-content">${t}</p>\n          <input type="text" class="input-task-name" id="data-input-task-name">\n        </div>\n        <div class="right-task-panel">\n          <p class="due-date" id="due-date">${e}</p>\n          <input type="date" class="input-due-date" id="data-input-due-date">\n          <i class="fas fa-times"></i>\n        </div>\n      </button>`,ut.initTaskButtons()}static clear(){ut.clearProjectPreview(),ut.clearProjects(),ut.clearTasks()}static clearProjectPreview(){document.getElementById("project-preview").textContent=""}static clearProjects(){document.getElementById("projects-list").textContent=""}static clearTasks(){document.getElementById("tasks-list").textContent=""}static closeAllPopups(){ut.closeAddProjectPopup(),document.getElementById("button-add-task")&&ut.closeAddTaskPopup(),document.getElementById("tasks-list")&&""!==document.getElementById("tasks-list").innerHTML&&ut.closeAllInputs()}static closeAllInputs(){document.querySelectorAll("[data-task-button]").forEach((t=>{ut.closeRenameInput(t),ut.closeSetDateInput(t)}))}static handleKeyboardInput(t){"Escape"===t.key&&ut.closeAllPopups()}static initAddProjectButtons(){const t=document.getElementById("button-add-project"),e=document.getElementById("button-add-project-popup"),n=document.getElementById("button-cancel-project-popup"),a=document.getElementById("input-add-project-popup");t.addEventListener("click",ut.openAddProjectPopup),e.addEventListener("click",ut.addProject),n.addEventListener("click",ut.closeAddProjectPopup),a.addEventListener("keypress",ut.handleAddProjectPopupInput)}static openAddProjectPopup(){const t=document.getElementById("add-project-popup"),e=document.getElementById("button-add-project");ut.closeAllPopups(),t.classList.add("active"),e.classList.add("active")}static closeAddProjectPopup(){const t=document.getElementById("add-project-popup"),e=document.getElementById("button-add-project"),n=document.getElementById("input-add-project-popup");t.classList.remove("active"),e.classList.remove("active"),n.value=""}static addProject(){const t=document.getElementById("input-add-project-popup"),e=t.value;if(""!==e){if(dt.getToDoList().contains(e))return t.value="",void alert("Project names must be different.");dt.addProject(new it(e)),ut.createProject(e),ut.closeAddProjectPopup()}else alert("Create a name for your project.")}static handleAddProjectPopupInput(t){"Enter"===t.key&&ut.addProject()}static initProjectButtons(){const t=document.getElementById("button-inbox-projects"),e=document.getElementById("button-today-projects"),n=document.getElementById("button-week-projects"),a=document.querySelectorAll("[data-project-button]"),r=document.getElementById("button-open-nav");t.addEventListener("click",ut.openInboxTasks),e.addEventListener("click",ut.openTodayTasks),n.addEventListener("click",ut.openWeekTasks),a.forEach((t=>t.addEventListener("click",ut.handleProjectButton))),r.addEventListener("click",ut.openNav)}static openProject(t,e){[...document.querySelectorAll(".button-default-project"),...document.querySelectorAll(".button-project")].forEach((t=>t.classList.remove("active"))),e.classList.add("active"),ut.closeAddProjectPopup(),ut.loadProjectContent(t)}static deleteProject(t,e){e.classList.contains("active")&&ut.clearProjectPreview(),dt.deleteProject(t),ut.clearProjects(),ut.loadProjects()}static openNav(){const t=document.getElementById("nav");ut.closeAllPopups(),t.classList.toggle("active")}static initAddTaskButtons(){const t=document.getElementById("button-add-task"),e=document.getElementById("button-add-task-popup"),n=document.getElementById("button-cancel-task-popup"),a=document.getElementById("input-add-task-popup");t.addEventListener("click",ut.openAddTaskPopup),e.addEventListener("click",ut.addTask),n.addEventListener("click",ut.closeAddTaskPopup),a.addEventListener("keypress",ut.handleAddTaskPopupInput)}static openAddTaskPopup(){const t=document.getElementById("add-task-popup"),e=document.getElementById("button-add-task");ut.closeAllPopups(),t.classList.add("active"),e.classList.add("active")}static closeAddTaskPopup(){const t=document.getElementById("add-task-popup"),e=document.getElementById("button-add-task"),n=document.getElementById("input-add-task-popup");t.classList.remove("active"),e.classList.remove("active"),n.value=""}static addTask(){const t=document.getElementById("project-name").textContent,e=document.getElementById("input-add-task-popup"),n=e.value;if(""!==n){if(dt.getToDoList().getProject(t).contains(n))return alert("Task Names must be different."),void(e.value="");dt.addTask(t,new st(n)),ut.createTask(n,"No date"),ut.closeAddTaskPopup()}else alert("Provide a Task Name.")}static handleAddTaskPopupInput(t){"Enter"===t.key&&ut.addTask()}static initTaskButtons(){const t=document.querySelectorAll("[data-task-button]"),e=document.querySelectorAll("[data-input-task-name]"),n=document.querySelector("[data-input-due-date]");t.forEach((t=>t.addEventListener("click",ut.handleTaskButton))),e.forEach((t=>t.addEventListener("keypress",ut.renameTask))),n.forEach((t=>t.addEventListener("change",ut.setTaskDate)))}static handleTaskButton(t){t.target.classList.contains("fa-circle")?ut.setTaskCompleted(this):t.target.classList.contains("fa-times")?ut.deleteTask(this):t.target.classList.contains("task-content")?ut.openRenameInput(this):t.target.classList.contains("due-date")&&ut.openSetDateInput(this)}static setTaskCompleted(t){const e=document.getElementById("project-name").textContent,n=t.children[0].children[1].textContent;if("Today"===e||"This week"===e){const t=n.split("(")[1].split(")")[0];dt.deleteTask(t,n.split(" ")[0]),"Today"===e?dt.updateTodayProject():dt.updateWeekProject()}else dt.deleteTask(e,n);ut.clearTasks(),ut.loadTasks(e)}static openRenameInput(t){const e=t.children[0].children[1];let n=e.textContent;const a=t.children[0].children[2],r=t.parentNode.parentNode.children[0].textContent;"Today"!==r&&"This week"!==r||([n]=n.split(" (")),ut.closeAllPopups(),e.classList.add("active"),a.classList.add("active"),a.value=n}static closeRenameInput(t){const e=t.children[0].children[1],n=t.children[0].children[2];e.classList.remove("active"),n.classList.remove("active"),n.value=""}static renameTask(t){if("Enter"!==t.key)return;const e=document.getElementById("project-name").textContent,n=this.previousElementSibling.textContent,a=this.value;if(""!==a){if(dt.getToDoList().getProject(e).contains(a))return this.value="",void alert("Task Names must be different.");if("Today"===e||"This week"===e){const t=n.split("(")[1].split(")")[0],r=n.split(" ")[0];dt.renameTask(e,n,`${a} (${t})`),dt.renameTask(t,r,a)}else dt.renameTask(e,n,a);ut.clearTasks(),ut.loadTasks(e),ut.closeRenameInput(this.parentNode.parentNode)}else alert("Provide a Task Name.")}static openSetDateInput(t){const e=t.children[1].children[0],n=t.children[1].chidlren[1];ut.closeAllPopups(),e.classList.add("active"),n.classList.add("active")}static closeSetDateInput(t){const e=t.children[1].children[0],n=t.children[1].children[1];e.classList.remove("active"),n.classList.remove("active")}static setTaskDate(){const e=this.parentNode.parentNode,r=document.getElementById("project-name").textContent,o=e.children[0].children[1].textContent,i=function(e,r,o){t(2,arguments);var i=String(r),s=o||{},c=s.locale||h,d=c.options&&c.options.firstWeekContainsDate,u=null==d?1:g(d),l=null==s.firstWeekContainsDate?u:g(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=c.options&&c.options.weekStartsOn,f=null==m?0:g(m),v=null==s.weekStartsOn?f:g(s.weekStartsOn);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!c.localize)throw new RangeError("locale must contain localize property");if(!c.formatLong)throw new RangeError("locale must contain formatLong property");var w=n(e);if(!a(w))throw new RangeError("Invalid time value");var T=z(w),k=p(w,T),y={firstWeekContainsDate:l,weekStartsOn:v,locale:c,_originalDate:w};return i.match(_).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,F[e])(t,c.formatLong,y):t})).join("").match(J).map((function(t){if("''"===t)return"'";var n=t[0];if("'"===n)return tt(t);var a=O[n];if(a)return!s.useAdditionalWeekYearTokens&&X(t)&&$(t,r,e),!s.useAdditionalDayOfYearTokens&&G(t)&&$(t,r,e),a(k,t,c.localize,y);if(n.match(Z))throw new RangeError("Format string contains an unescaped latin alphabet character `"+n+"`");return t})).join("")}(new Date(this.value),"dd/mm/yyyy");if("Today"===r||"This week"===r){const t=o.split("(")[1].split(")")[0],e=o.split(" (")[0];dt.setTaskDate(r,o,i),dt.setTaskDate(t,e,i),"Today"===r?dt.updateTodayProject():dt.updateWeekProject()}else dt.setTaskDate(r,o,i);ut.clearTasks(),ut.loadTasks(r),ut.closetSetDateInput(e)}}document.addEventListener("DOMContentLoaded",ut.loadHomePage)})();
//# sourceMappingURL=main.js.map