 
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