$(document).ready(function () {


  //récupere les variables de root
  var r = document.querySelector(':root');

  //variables
  var scrollbarColorDark = '#6c757d';
  var scrollbarColorLight = '#007BFF';

    // récup le mode du PC
  const isDarkMode = () =>
    globalThis.matchMedia?.("(prefers-color-scheme:dark)").matches ?? false;
  pcdark = isDarkMode();
  if (pcdark == true) {
    mode = "dark";
  } else {
    mode = "light";
  }




  function lightmode() {
    // light
    document.querySelectorAll('[id=dge-text-light]').forEach(element => element.id = 'dge-text-light');
    document.querySelectorAll('[id=dge-figure-light]').forEach(element => element.id = 'dge-figure-light');
    document.querySelectorAll('[id=dge-image-light]').forEach(element => element.id = 'dge-image-light');
    document.querySelectorAll('[id=dge-map-light]').forEach(element => element.id = 'dge-map-light');
    document.querySelectorAll('[id=dge-chart-light]').forEach(element => element.id = 'dge-chart-light');
    document.querySelectorAll('[id=dge-table-light]').forEach(element => element.id = 'dge-table-light');

    document.body.classList.remove('bg-dark');
    document.body.classList.remove('text-light');
    document.getElementById('carousel').classList.add("carousel-dark");
    document.getElementById('footer').classList.remove("bg-secondary");

    //scrollbar
    r.style.setProperty('--scrollbar', scrollbarColorLight);

    $(".navbar").removeClass("bg-secondary");


    //liste déroulante
    $(".li").removeClass("bg-secondary");
    $(".chosen-value").removeClass("bg-secondary text-light");




    //vérification du scroll pour la navbar
    if ($(this).scrollTop() > $("#img").height()) {
      $(".navbar").addClass("bg-primary");
    }

  }

  function darkmode() {
    // dark
    document.querySelectorAll('[id=dge-text-light]').forEach(element => element.id = 'dge-text-dark');
    document.querySelectorAll('[id=dge-figure-light]').forEach(element => element.id = 'dge-figure-dark');
    document.querySelectorAll('[id=dge-image-light]').forEach(element => element.id = 'dge-image-dark');
    document.querySelectorAll('[id=dge-map-light]').forEach(element => element.id = 'dge-map-dark');
    document.querySelectorAll('[id=dge-chart-light]').forEach(element => element.id = 'dge-chart-dark');
    document.querySelectorAll('[id=dge-table-light]').forEach(element => element.id = 'dge-table-dark');

    document.body.classList.add('bg-dark');
    document.body.classList.add('text-light');

    //document.getElementById('carousel').classList.add("carousel-dark");
    document.getElementById('footer').classList.add("bg-secondary");

    //scrollbar
    r.style.setProperty('--scrollbar', scrollbarColorDark);




    //liste déroulante
    $(".li").addClass("bg-secondary");
    $(".chosen-value").addClass("bg-secondary text-light");



    //vérification du scroll pour la navbar
    if ($(this).scrollTop() > $("#img").height()) {
      $(".navbar").addClass("bg-secondary");
    }

  }

  //function recup cookie
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  cookieactuel = getCookie("mode")
    //vérifie si il y a un cookie sur le navigateur
  if ((cookieactuel == "light") || (cookieactuel == "dark")){
    mode = getCookie("mode");
  }

  console.log(mode);
  //darkmode
  if (mode == "dark") {
    setTimeout(function () { darkmode() }, 500);
    
  }
  //light mode
  else {
    lightmode();
  }



  // lorsque click sur la checkbox
  const checkbox = document.getElementById('checkbox');
  checkbox.addEventListener('change', () => {
    document.body.classList.toggle('bg-dark');

    if (document.body.classList.contains("bg-dark")) {

      document.cookie = "mode=dark; expires=Fri, 31 Dec 9999 23:59:59 GMT";
      darkmode();

    }

    else {

      document.cookie = "mode=light; expires=Fri, 31 Dec 9999 23:59:59 GMT";
      lightmode();

    }

  })
});