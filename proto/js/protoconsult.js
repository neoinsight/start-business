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
      //alert('Container 1 button clicked ('+event.target.innerText+')');
      if ($(event.target).parent("details").has("textarea").length) {
       
      } else {
        $(event.target).parent("details").append('<div><textarea data-autoresize class="form-control full-width" rows="5"  placeholder="Please enter your feedback" name="mytext[]"></textarea><button class="btn btn-default close_field" type="button">Close</button><a href="#formsummary" >Submit all comments</a></div>'); //add input box
        $(event.target).parent('details').addClass("commentpresent");
        
        $(event.target).parent("details").on("click", ".close_field", function(e) { //user click on remove text
          e.preventDefault();
      
         $(e.target ).closest("details").removeAttr("open");
         if ($(e.target ).prev("textarea").text().length == 0) {
           $( e.target ).closest("details").removeClass("commentpresent");
           $( e.target ).closest("div").remove();
         }

        });
      }
    });

  }

  init_multifield(10, '.input_fields_wrap', '.addcomment', 'user_music[]');
  // alert("All is well");
});
