/**
 * Created by Administrator on 2015-11-28.
 */

/**
 * 将对象序列化为post请求参数字符串
 * 遍历对象属性，带级别前缀的。每个层次的前缀用点号分隔。
 * 示例：
 * var obj = {
 *   name:'Obj',
 *   level:1,
 *   subObj:{
 *      name:'SubObj',
 *      level:2
 *   }
 *   arr:['a1',['a2','3',4],{code:'code1'}]
 * }
 * 调用serializeObject('a','myObj')输出：&myObj=a
 * 调用serializeObject(['a2','3',4],'myList')输出：&myList[0]=a2&myList[1]=3&myList[2]=4
 * 调用serializeObject(obj)输出：&name=Obj&level=1&subObj.name=SubObj&subObj.level=2&arr[0]=a1&arr[1][0]=a2&arr[1][1]=3&arr[1][2]=4&arr[2].code=code1
 * 调用serializeObject(obj,'myObj')输出：&myObj.name=Obj&myObj.level=1&myObj.subObj.name=SubObj&myObj.subObj.level=2&myObj.arr[0]=a1&myObj.arr[1][0]=a2&myObj.arr[1][1]=3&myObj.arr[1][2]=4&myObj.arr[2].code=code1
 * @param obj json对象
 * @param objName 对象名
 * @returns {string} 标准URL参数字符串
 */
function serializeObject(obj, objName) {
    //重置前缀
    objName = arguments[1]||'';

    var s = "";
    //console.log('对象名称：'+objName);
    //console.log('对象类型：'+typeof obj);
    //console.log('对象值：'+ obj);
    //console.log('Array对象：'+ (obj instanceof Array));
    if (obj instanceof Array == true) {
        //是数组
        if(objName == ''){
            throw "objName must not be null when obj is a array instance.";
        }

        for( var i in obj){
            s += serializeObject(obj[i],(objName+"["+i+"]"));
        }
    } else if (obj instanceof Object == true) {
        //是json对象
        for (var key in obj) {//遍历属性名 key
            if(objName != ''){//有前缀
                s += serializeObject(obj[key], objName + '.' + key);
            }else{//无前缀
                s += serializeObject(obj[key], key);
            }
        }
    }
    else {
        //是简单值
        if(objName == ''){
            throw "objName must not be null when obj is a simple value.";
        }
        //转换参数中的加号
        s += "&" + encodeURI(objName) + "=" + encodeURIComponent(obj);
    }
    return s;
};
