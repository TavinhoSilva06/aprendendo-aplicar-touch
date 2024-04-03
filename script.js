function startup() {
    //Document, é uma classe que contém todo conteúdo do meu HTML
    //getElementsByTagName, é um método ou função que captura os elementos do meu HTML a partir de o nome de uma tag
    //[0], pega o primeiro elemento encontrado no HTML
    //Eu crei uma variável chamada "el", que contém o primeiro elemento encontrado no HTML
    var el = document.getElementsByTagName("canvas")[0];
    
    el.addEventListener("touchstart", tocounatela, false);
    console.log("Entrou na função startup");
    el.addEventListener("touchend", toqueterminou, false);
   
  }
  function tocounatela(evt) {
    evt.preventDefault();
    alert("O usuário tocou na tela");
  }
  function toqueterminou(evt) {
    evt.preventDefault();
    console.log("O usuário tirou o dedo ( la ele )");
  }


  function helloworld() {
    alert("Palmeiras não tem mundial");
  }