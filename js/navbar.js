// bug navbar quand refresh : besoin descroll pour s'afficher 

$(document).ready(function () {
    $(window).scroll(function() {
       if ($(this).scrollTop() < $("#img").height()) {
          
             $(".navbar").removeClass("bg-secondary");
             $(".navbar").removeClass("bg-primary");
      }
      else{
         //si darkmode :
          if (document.body.classList.contains("bg-dark")) {
              $(".navbar").addClass("bg-secondary");
             
          } else { 
             $(".navbar").addClass("bg-primary");
          }
      }
    });
  });