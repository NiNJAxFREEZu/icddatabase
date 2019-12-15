function GotoSearch(){

    var searchtext = document.getElementById("searchfield").value;
    location.href='results.html?search=' + searchtext;
}

function DisplaySearchText(){
    var qs = new Querystring();
    var searchtext = qs.get("search");
}

function ParseSearch(){

    var icd, disease;    
}

function PingApi()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            //CALLBACK
            console.log(xmlHttp.responseText);
    }
    xmlHttp.open("GET", "https://apiicd.herokuapp.com/api/ICD/test", true);
    xmlHttp.send(null);
}

function DownloadDatabase()
{
    location.href="https://apiicd.herokuapp.com/api/ICD/wholeDb";
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