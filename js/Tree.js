function GetSearchText(){

    var searchtext = document.getElementById("searchfield").value;
    return searchtext;
}

function GetTree(searchtext) {
    var searchtext = GetSearchText();
    var icd = "MB47";
    var name = "abnormal";

    SearchDisease(icd, name);
}
