$(document).ready(function(){

  $('button').on('click', function(){
      var item = $(this).attr("name").trim().replace(/ /g, "-");
      
      $.ajax({
        type: 'DELETE',
        url: '/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});

