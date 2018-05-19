function sendHttpRequest(url,callback){
    //do something
    var return_code;
    var response_body;
    if (url != null){
             return_code = '200';
             response_body = 'hello_world';
    }else{
            return_code = '400';
            response_body = 'invalid url';
    } 
    callback(return_code,response_body);    
}

var request = sendHttpRequest("www..baidu.com",function(return_code, response_body){

    if (return_code == '200'){
        console.log(response_body);    
}else{
    console.log(response_body);
}
});



