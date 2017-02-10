console.log('Good to go!');

var myGlobalConnectGame;


$(document).ready(function(){
  myGlobalConnectGame = new ConnectFour('Daniel', 'Nizar');


  console.log(myGlobalConnectGame);

  renderBoard();

});


function renderBoard(){
  $('#board').empty();

  myGlobalConnectGame.board.forEach(function(row){
    row.forEach(function(slot){

      var checkerClass;

      if (slot === 1) {
        //player 1 checker
        checkerClass = 'checker-player-1';
      }
      else if (slot === 2){
        //player 2 checker
        checkerClass = 'checker-player-2';
      }
      else{
        checkerClass='';
      }

      var slotHtml = '<div class = "square"><div class = "slot '+ checkerClass +'"></div></div>';
      $('#board').append(slotHtml);

    });
  });


}
