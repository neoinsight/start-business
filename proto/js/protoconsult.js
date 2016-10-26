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
        //do something
      } else {
        $(event.target).parent("details").append('<div><textarea class="form-control full-width" rows="5"  placeholder="Please enter your feedback" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
        $(event.target).parent('details').addClass("commentpresent");
        $(event.target).parent('details').on("click", ".remove_field", function(e) { //user click on remove text
          //e.preventDefault();
          alert("will remove " +  $(e.target ).parent("details").nodeName);
          
//if (window.confirm("Do you really want to delete this comment?")) {
       //alert("will remove " +  e.target.nodeName);
         $(e.target ).parent("details").removeAttribute("open");
          $( e.target ).parent("details").removeClass("commentpresent");
          $( e.target ).parent("div").remove();
         
//}
         

        });
      }
    });

  }

  init_multifield(10, '.input_fields_wrap', '.addcomment', 'user_music[]');
  // alert("All is well");
});
