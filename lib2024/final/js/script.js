window.onload = init;

function init() {

  $('#form').submit(function (e) {
     
       e.preventDefault();
      
       $("#results").removeClass('reveal');
       var form = this;
      
       $(".overlay-container").fadeIn(1000, function(){
          
          showformValues(form);
           
          $('.overlay-container').delay(500).fadeOut(500);
          $("#results").addClass('reveal');
       });
  });

}

function showformValues(form){
  
  var formValues = $(form).serializeArray(); 
    
  $.each(formValues, function(index, field){

    
    $("#results").find("#"+field.name+"_result").text(field.value);

    
    if(field.name=="email"){
      $("#results").find("#"+field.name+"_result").attr("href", "mailto:"+field.value);
    }
  });        
}

