function getTree() {

  $.ajax({
      url: "",
      dataType: "json",
      success: function (data) {
          var str = JSON.stringify(data);

          str = replaceAll(str,"label", "text");
          str = replaceAll(str,"nested", "children");

          data = JSON.parse(str);
          console.log(data);
          createJSTree(data);
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

