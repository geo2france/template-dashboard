$(document).ready(function () {

  // déclaration de variable
  var inputField
  var dropdown
  var dropdownArray = [...document.querySelectorAll('li')];
  let valueArray = [];
  var cookieexist = false;
  var ville


  //*function exectuer quand la ville et selectionner ou quand un cookie est deja sur le navigateur :
  function selectVille(ville) {
    console.log(ville);
    // document.getElementById('dge-figure-light').setAttribute("text", "pop " + "de " + ville);

  }

  //*ajout élément - code perso : utilisation de papaparse pour completer la liste deroulante
  // si besoin possible de changer fichier CSV
  Papa.parse("./data/population.csv", {
    download: true,
    header: true,
    complete: function (results) {
      results.data.forEach(data => {
        if (data.ville != "") { // data."nomchamp"
          var ul = document.getElementById("liste-ville");
          var li = document.createElement("li");
          li.appendChild(document.createTextNode(data.ville)); // data."nomchamp"
          li.setAttribute("class", "li"); // added line
          ul.appendChild(li);
          valueArray.push(data.ville) // data."nomchamp"
        }
      });



  //function recup cookie
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }


  //vérifie si il y a un cookie sur le navigateur
  ville = getCookie("ville");
  if (ville!=null) {
    cookieexist = true;
    selectVille(ville)
  }





      // code gestuion de la liste deroulante

      // declaration de variable
      inputField = document.querySelector('.chosen-value');
      inputField.setAttribute("autocomplete", "off"); //desactive autocompletion


      dropdown = document.querySelector('.value-list');
      dropdownArray = [...document.querySelectorAll('li')];
      //dropdown.classList.add('open'); // activer barre à l'ouverture
      valueArray = [];
      dropdownArray.forEach(item => {
        valueArray.push(item.textContent);
      });



      //barre de recherche liste
      inputField.addEventListener('input', () => {
        dropdown.classList.add('open');
        let inputValue = inputField.value.toLowerCase();
        let valueSubstring;
        if (inputValue.length > 0) {
          for (let j = 0; j < valueArray.length; j++) {
            if (!(valueArray[j].toLowerCase().includes(inputValue.toLowerCase()))) {
            //if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
              dropdownArray[j].classList.add('closed');
            } else {
              dropdownArray[j].classList.remove('closed');
            }
          }
        } else {
          for (let i = 0; i < dropdownArray.length; i++) {
            dropdownArray[i].classList.remove('closed');
          }
        }
      });


      //vérifie si cookie exist et permet de définir l'element pour la barre de recherche
      if (cookieexist) {
        inputField.value = ville;

      }



      dropdownArray.forEach(item => {
        item.addEventListener('click', evt => {
          inputField.value = item.textContent;
          dropdownArray.forEach(dropdown => {
            dropdown.classList.add('closed');
          });


          document.cookie = "ville=" + inputField.value + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
          selectVille(inputField.value)
          // ici code lordque click li.




        });
      });



      inputField.addEventListener('focus', () => {
        dropdown.classList.add('open');
        dropdownArray.forEach(dropdown => {
          dropdown.classList.remove('closed');
        });
      });


      inputField.addEventListener('blur', () => {
        inputField.placeholder = 'Choisir ville';
        dropdown.classList.remove('open');
      });


      document.addEventListener('click', evt => {
        const isDropdown = dropdown.contains(evt.target);
        const isInput = inputField.contains(evt.target);
        if (!isDropdown && !isInput) {
          dropdown.classList.remove('open');
        }


      });

    }


  })
});
