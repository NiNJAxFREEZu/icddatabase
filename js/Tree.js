//NINJAMARKER
function GetSearchText(){

    searchtext = parent.document.URL.substring(parent.document.URL.indexOf('=') + 1, parent.document.URL.length);
    return searchtext;
}


function SearchDisease(icd, name)
{
    var url;

    if(name == null)
        url = "https://apiicd.herokuapp.com/api/ICD?ICD11=" + icd;
   
    if(icd == null)
        url = "https://apiicd.herokuapp.com/api/ICD?name=" + name;
 
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            //CALLBACK
            DrawTree(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}


function GetTree() {
    var searchtext = GetSearchText();
    var icd = null;
    var name = null;

    if(/\d/.test(searchtext) == true)
        icd = searchtext;
    else
        name = searchtext;


    SearchDisease(icd, name);
}

function DrawTree(json){
    console.log(json);
    var wrapper = document.getElementById("search");
    json = JSON.parse(json);
    var tree = jsonTree.create(json, wrapper);
    tree.appendTo(wrapper);
}