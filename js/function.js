/*
   2016-02-18
*/
function getClass(classname,obj){//函数()
	var obj=obj||document;
	if(obj.getElementsByClassName){//隐式调用Boolean()函数
	   // alert("支持");
       return obj.getElementsByClassName(classname);//返回所传实参(类名)
	}else{
		// alert("不支持");
		var arr=[];//声明一个数组arr
		var alls=obj.getElementsByTagName('*');//获取页面当中所有的标签名
		for (var i = 0; i < alls.length; i++) {//遍历页面当中所有标签名的这个数组
		  if(checkClass(alls[i].className,classname)){//如果调用函数checkClass(没有拆分的类名,我们要找的类名)
                arr.push(alls[i]);//把找到的类名的标签名添加到数组的末尾
		  }
		};
		return arr; 
	}
}

function checkClass(newclass,oldclass){//函数(没有拆分的类名,我们要找的类名)
	 var flag=false; //开关思想
     var cl=newclass.split(' ');//把没有拆分的类名分割成数组
     for (var i = 0; i < cl.length; i++) {//遍历拆分出来的类名
      	if(cl[i]==oldclass){//如果拆分出来的每一个类名是我们要找的类名
            flag=true;
        }
     }; 
     return flag;
}







/*
兼容
*/
function getText(obj,val){
	if(val==undefined){
        if(typeof obj.textContent=="string"){
	    	console.log("IE9-11,f,c");
	    	return obj.textContent;
	    }else{
	    	console.log("IE6-8,c"); 
	    	return obj.innerText;
		}             
	}else{
		if(typeof obj.textContent=="string"){
	    	console.log("IE9-11,f,c");
	        obj.textContent=val;
	    }else{
	    	console.log("IE6-8,c"); 
	    	obj.innerText=val;
		}
	}                        
}


















