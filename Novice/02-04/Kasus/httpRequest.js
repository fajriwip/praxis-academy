let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
function requestAjax(callback){
    let xhr = new XMLHttpRequest();

    xhr.open('GET','https://jsonplaceholder.typicode.com/posts/5');

    xhr.onload = function(){
        if(xhr.status === 200){
            callback(xhr.responseText)
        } else{
            callback('failed')
        }
    }

    xhr.send();
}

function showResult(data){
    if(data != 'failed'){
        data = JSON.parse(data)
        console.log(data)
    }
}

requestAjax(showResult)