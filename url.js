
//code forcountry flag


let xhr = new XMLHttpRequest();

xhr.open('Get',"https://restcountries.eu/rest/v2/all")
xhr.onload=function()
{
    if(xhr.status>=200&& xhr.status<300){
    //let data = JSON.parse(this.response);
    //console.log(data);
    console.log(this.response);
}else{
    console.log('error');
}
}
xhr.send();