var fs = require('fs');
exports.getType = function(item, target){
    if(item){
        var resulte = check(item, target);
        if(resulte == 1){
            return {parentTag: item}
        }else if(resulte == -1){
            return {type: item}
        }else {
            return false;
        }
    }else{
        return {};
    }
};
function check(item, target){
    var len = target.length;
    for(var i = 0; i < len; i++){
        if(target[i].mark == item){
            return 1;//副标题
        }
        if(target[i].children){
            var children = target[i].children,
                length = children.length;
            for(var k = 0; k < length; k++){
                if(children[k].mark == item){
                    return -1;//子标题
                }
            }
        }
    }
    return false;//不存在
};

exports.security = function(target){
    var obj = {};
    for(var item in target){
        if(target[item].indexOf('<script>') != -1){
            continue;
        }
        obj[item] = target[item];
    }
    return obj;
};

exports.setId = function(count){
    var str = count.toString(),
        len = str.length,
        id="";
    if(len < 3 && len > 0){
        for(var i = 0; i < len;i++){
            id = "0" + str;
        }
    }
    return id;
};
exports.readFile = function(path, callback){
    fs.readFile(path, function(err, data){
        if(callback){
            callback(err,data);
        }
    });
};
exports.getMine = function(){
    var args = arguments;
    var len = args.length;
    for(var i = 0; i < len;i++){
        var item = args[i];
        if(item){

        }
    }
};
function findMine(item){
    switch(item){

    }
}