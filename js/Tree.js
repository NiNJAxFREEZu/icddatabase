function getSearchText(){

    var searchtext = document.getElementById("searchfield").value;
    return searchtext;
}


function getTree(searchtext) {

  $.ajax({
      url: "https://apiicd.herokuapp.com/",
      dataType: "json",
      success: function (data) {
          var str = JSON.stringify(data);


          data = JSON.parse(str);
          console.log(data);
        //   createJSTree(data);
      }
  });

  function createJSTree(jsondata) {
      $('#tree').jstree({
          'core': {
              'data': jsondata
          }
      });
  }

  function replaceAll(str, find, replace) {
      return str.replace(new RegExp(find, 'g'), replace);
  }

}

function pingApi(){

   $.ajax({
      url: "",
      dataType: "json",
      success: function (data) {
          window.alert("SUCCESS, mejbi");
      }
  });   
}

