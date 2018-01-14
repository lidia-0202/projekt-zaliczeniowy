$(".img-thumbnail").on("click", function() {
  var modalElement = $('#modal-image');
  var adresObrazka = $(this).attr('src');
  modalElement.attr('src', adresObrazka);
  $('#galeria-modal').modal();
});

