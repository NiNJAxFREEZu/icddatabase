function gotoSearch(){

var searchtext = document.getElementById("searchfield").value;
window.alert(searchtext);

location.href='results.html?search=' + searchtext;
}