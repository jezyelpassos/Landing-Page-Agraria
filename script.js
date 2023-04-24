$(document).ready(function() {
  
    // Adiciona efeito de desvanecimento ao rolar a página
    $(window).scroll(function() {
      $('.fade-in').each(function() {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_element) {
          $(this).animate({'opacity': '1'}, 500);
        }
      });
    });

  });


const whatsappBtn = document.querySelector('.whatsapp-float');

whatsappBtn.addEventListener('click', () => {
    const phoneNumber = '+55 62996874557'; // número de telefone desejado
    const message = 'Olá, gostaria de mais informações.'; // mensagem desejada
    const url = `https://api.whatsapp.com/send?phone=${62996874557}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});


$(document).ready(function() {
  $("#servicos div").each(function(i) {
    $(this).delay(400 * i).animate({
      marginTop: "-=20",
      opacity: "1"
    }, 800);
  });
});
