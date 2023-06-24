function enlargeImage(image) {
  var modal = document.getElementById("modal");
  var enlargedImage = document.getElementById("enlarged-image");
  enlargedImage.src = image.src;
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}
