 
//随码1：
 function fn(param1,param2,param3){
    if(isfn(param1) && isfn(param2) && isfn(param3)){
        return [
            param1,param2,param3
        ]
    }
    if(iso(param1) && iso(param2) && iso(param3)){
        return  {
            o1:param1
            ,o2:param2
            ,o3:param3
        }
    }
    
 };
 function isfn(a){
    return a == null ? false:
        Object.prototype.toString.call(a) == '[object Function]';
 }

 function iso(a){
     return a == null ? false
         :Object.prototype.toString.call(a) == "[object Object]";
 }

 function setVal(div,val){
    div.attr("value",val);
 }
 function setAttr(name,value,div){
    return div.attr(name,value);
 }
 function addClass(clazz,div){
    return div.addClass(clazz);
 }
 function removeClass(clazz,div){
    return div.removeClass(clazz);
 }
 function jqis(selector,div){
    return div.is(selector);
 }
 function show(div){
    return div.show();
 }
 function hide(div){
    return div.hide();
 }
 function cbk(div,fn){
    return function(){
        fn(div);
    }
 }
 function jq(fn){
    return function(){
        var div=$(this);
        fn(div);
    }
 }
 function find(selector,div){
    return div.find(selector);
 }
 function attr(name,div){
    return div.attr(name);
 }
 function attrs(names,div){
    return map(function(name){
        return div.attr(name);
    },names);
 }



 //{}->[]
 function toArray(o){
    var a=[];
    for(var i=0;i<o.length;i++)a.push(o[i]);
    return a;
 }
 //改变function的length
 function arity(n,fn){
    switch (n) {
        case 0: return function() {return fn.apply(this, arguments);};
        case 1: return function(a0) {void a0; return fn.apply(this, arguments);};
        case 2: return function(a0, a1) {void a1; return fn.apply(this, arguments);};
        case 3: return function(a0, a1, a2) {void a2; return fn.apply(this, arguments);};
        case 4: return function(a0, a1, a2, a3) {void a3; return fn.apply(this, arguments);};
        case 5: return function(a0, a1, a2, a3, a4) {void a4; return fn.apply(this, arguments);};
        case 6: return function(a0, a1, a2, a3, a4, a5) {void a5; return fn.apply(this, arguments);};
        case 7: return function(a0, a1, a2, a3, a4, a5, a6) {void a6; return fn.apply(this, arguments);};
        case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) {void a7; return fn.apply(this, arguments);};
        case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {void a8; return fn.apply(this, arguments);};
        case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {void a9; return fn.apply(this, arguments);};
        default: throw new Error('First argument to arity must be a non-negative integer no greater than ten');
      }
 }

 //固定科里化
 //，柯里化（英语：Currying），又译为卡瑞化或加里化，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数
 //https://zh.wikipedia.org/wiki/%E6%9F%AF%E9%87%8C%E5%8C%96
 function curryN(length,fn){
    return arity(length, function() {
        var n = arguments.length;
        var shortfall = length - n;
        var idx = n;
        while (--idx >= 0) {
          if (arguments[idx] === __) {
            shortfall += 1;
          }
        }
        if (shortfall <= 0) {
          return fn.apply(this, arguments);
        } else {
          var initialArgs = toArray(arguments);
          return curryN(shortfall, function() {
            var currentArgs = toArray(arguments);
            var combinedArgs = [];
            var idx = -1;
            while (++idx < n) {
              var val = initialArgs[idx];
              combinedArgs[idx] = (val === __ ? currentArgs.shift() : val);
            }
            return fn.apply(this, combinedArgs.concat(currentArgs));
          });
        }
      });
 }
 /*
 * 自动科里化
 *(*->a)->(*->a)
 */
 function curry(fn){
    return curryN(fn.length,fn);
 }












 // scope function
    function isarray(a){
        return a == null ? false
            : Object.prototype.toString.call(a) == "[object Array]";
    }
    function isobject(a){
        return a == null ? false
            :Object.prototype.toString.call(a) == "[object Object]";
    }
    function isnumber(a){
        return typeof a == "number";
    }
    function isstring(a){
        return typeof a == "string";
    }
    function isdate(a){
        return a == null ? false
            :Object.prototype.toString.call(a) == "[object Date]";
    }