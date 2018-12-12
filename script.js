$(document).ready(function() {

  $.ajax({

    url: 'https://www.boolean.careers/api/array/basket?',
    method: 'GET',
    data: {
      n: parseInt(prompt('inserisci il numero di giocatori che vuoi visualizzare'))
    },
    success: function(data) {

      var giocatore = data.response;

      for (var i = 0; i < giocatore.length; i++) {
        var listaGiocatori = giocatore[i].playerCode

        var listItem = $('.template .listItem').clone()

        $(listItem).append(listaGiocatori)

        $('.sidebar').append(listItem)

        var stats = $('.template .stats').clone()

        var item = $(stats).children('.item').append()

        $(item).children('.player').append(giocatore[i].playerCode)
        $(item).children('.punti').append(giocatore[i].points)
        $(item).children('.rimbalzi').append(giocatore[i].rebounds)
        $(item).children('.falli').append(giocatore[i].fouls)
        $(item).children('.percentualetirida2').append(giocatore[i].twoPoints)
        $(item).children('.percentualetirida3').append(giocatore[i].threePoints)

        $('.main').append(stats)

        $('.listItem').click(function() {

          $('.listItem').removeClass('active')

          $(this).addClass('active')

          $('.stats').removeClass('active');

          var numerogiocatore = $(this).index();

          $('.stats').eq(numerogiocatore).addClass('active');

        });

      };

    },
    error: function() {
      console.log('errore');
    },

  });

});
