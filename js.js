/**
 * Created by ubuntu on 3/20/18.
 */
function pattern(){
    var telNumber=document.getElementById("telNumber");
    var warn=document.getElementById("warn");
    var number=document.getElementById("getNumber");
    var rep=/^[1][3,4,5,7,8][0-9]{9}$/;
    if(telNumber.value==''){
        warn.innerHTML="请输入手机号";
        telNumber.onfocus=function(){
            warn.innerHTML="";
        };
        return false;
    }
    else if(!rep.test(telNumber.value)){
        warn.innerHTML="手机格式不正确";
        telNumber.onfocus=function(){
            warn.innerHTML="";
        };
        return false;

    }
    else{
        var count=10;
        number.innerHTML="10s后重发";
        // var time=setInterval(function(){//使用setInterval()计时器
        //     count=count-1;
        //     if(count<0){
        //         number.innerHTML="重新获取";
        //         clearInterval(time);
        //     }
        //     else{
        //         number.innerHTML=count+"S后可重发";
        //     }
        // },1000);
        var time=setTimeout(function(){ //使用setTimeout()计时器
            count=count-1;
            if(count<0){
                number.innerHTML="重新获取";
                clearTimeout(time);
            }
            else{
                number.innerHTML=count+"S后可重发";
                setTimeout(arguments.callee,1000);
            }
        },1000);
        return true;
    }
}


