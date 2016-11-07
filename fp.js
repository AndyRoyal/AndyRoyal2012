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