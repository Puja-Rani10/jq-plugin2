$(document).ready(function(){
 
   notify("Alert text", 10, true);
       notify("Success text", 10, false);
       setTimeout(function(){
       notify("Alert text after 3 seconds ", 10, true);
       notify("Success text after 3 seconds", 10, false, function(){
       notify("On done function test", 10, false);
       });
     }, 3000);




    $("#picker1").colorPick({
			'initialColor' : '#8e44ad',
			'palette': ["#1abc9c", "#16a085", "#2ecc71", "#27ae60", "#3498db", "#2980b9", "#9b59b6", "#8e44ad", "#34495e", "#2c3e50", "#f1c40f", "#f39c12", "#e67e22", "#d35400", "#e74c3c", "#c0392b", "#ecf0f1"],
			'onColorSelected': function() {
				console.log("The user has selected the color: " + this.color)
				this.element.css({'backgroundColor': this.color, 'color': this.color});
			}
		});

        $("#picker2").colorPick({
			'initialColor' : '#34495e',
			'palette': ["#34495e", "#2c3e50", "#f1c40f", "#f39c12", "#e67e22", "#d35400", "#e74c3c", "#c0392b", "#ecf0f1"],
			'onColorSelected': function() {
				console.log("The user has selected the color: " + this.color)
				this.element.css({'backgroundColor': this.color, 'color': this.color});
			}
		});

          $(".progress-bar").ProgressBar();

           "use strict";
           // passing object
      $(".rotate").rotate({
        speed: 5000,
        degrees: 360
      });

       $('.adjust-text-1').adjustTextToBackground({
        lightness: 0.6
    });
    $('.adjust-text-2').adjustTextToBackground({
        lightness: 0.6
    });

});

 