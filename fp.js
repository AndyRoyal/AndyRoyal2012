 
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