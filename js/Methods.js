function gotoSearch(){

    var searchtext = document.getElementById("searchfield").value;
    location.href='results.html?search=' + searchtext;
}

function displaySearchText(){
    var qs = new Querystring();
    var searchtext = qs.get("search");
}

function parseSearch(){

    var icd, disease;    
}

function PingApi()
{
    var response = API_REQUEST_ASYNC("https://apiicd.herokuapp.com/api/ICD/test");
    console.log(response);
}

function API_REQUEST(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function API_REQUEST_ASYNC(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            window.alert(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}