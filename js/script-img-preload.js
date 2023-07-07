window.addEventListener("load", function() {
  var images = [
    "img/ama1.png",
    "img/detrans.jpg",
    "img/fabrica-1.jpg",
    "img/jardin-ambulante1.jpg",
    "img/lap1.jpg",
    "img/madraza-1.jpg",
    "img/museo-situado1.jpg",
    "img/poliglotia1.jpg"
  ];

  // Precarga las imágenes
  function preloadImages() {
    for (var i = 0; i < images.length; i++) {
      var img = new Image();
      img.src = images[i];
    }
  }

  // Carga las imágenes en el slider
  function loadImages() {
    var slider = document.getElementById("slider");

    for (var i = 0; i < images.length; i++) {
      var img = document.createElement("img");
      img.src = images[i];
      slider.appendChild(img);
    }
  }

  // Llama a las funciones de precarga y carga después de un pequeño retraso
  setTimeout(function() {
    preloadImages();
    loadImages();
  }, 500);
});
