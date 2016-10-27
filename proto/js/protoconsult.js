/*
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */

$(document).ready(function () {
"use strict";
  function init_multifield(max, wrap, butt, fname_p) {
    var max_fields = max; //maximum input boxes allowed
    var wrapper = $(wrap); //Fields wrapper
    var add_button = $(butt); //Add button class
    var fname = fname_p;

    
    $(add_button).on("click", "summary", function(event) {
      //console.log("btn cont1 event", event)
      var sel = $(event.target).parent("details")
      if (sel.has("textarea").length) {
	      
	      	if ((typeof sel.attr("open")) != 'undefined') {
		      	
		      	//var ctext = $(event.target ).find("textarea")
		      	
	      	//alert('detail open '+$(ctext ).val() );
       	if ( $(event.target ).find("textarea").val() == '') {
	      // 	alert('Removing textarea for '+event.target.innerText);
	                  sel.removeClass("commentpresent");
           $( event.target ).next("div").remove();
         }
         }
      } else {
	     // alert('Adding text for '+ event.target.innerText);
	     
        sel.append('<div><textarea form="commentsubmission" class="form-control full-width" rows="5"  placeholder="Please enter your feedback" name="mytext[]"></textarea><button class="btn btn-default close_field" type="button">Close</button><a href="#formsummary" >Submit all comments</a></div>'); //add input box
        sel.addClass("commentpresent");
        
        
      }
    });
	$(add_button).on("click", ".close_field", function(e) { //user click on remove text
          e.preventDefault();
		  var sel = $(e.target).parent("details")
         sel.removeAttr("open");
         if ($(e.target ).prev("textarea").val() == '') {
	       
           sel.removeClass("commentpresent");
           $( e.target ).closest("div").remove();
         }

        });
  }

  init_multifield(10, '.input_fields_wrap', '#commentsubmission', 'user_music[]');
  // alert("All is well");
});
