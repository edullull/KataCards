/*
TO Do list


*/

/* this code made for only one card for player
************************************************
    function whoWins(pack1, pack2){
    if(cardRank.indexOf(pack1[0]) < cardRank.indexOf(pack2[0])){
        return "Player2 win 1 to 0";
    }else if(cardRank.indexOf(pack1[0]) > cardRank.indexOf(pack2[0])){
        return "Player1 win 1 to 0";
    }else{
        return "empat";
    }
************************************************+
*/

const cardRank = "123456789TJQK";

function whoWins(pack1, pack2){
    var scorePlayer1 = 0;
    var scorePlayer2 = 0;
    

    for(i=0; i < pack1.length; i++){
        if(cardRank.indexOf(pack1[i]) < cardRank.indexOf(pack2[i])){
            ++scorePlayer2;
        }else if(cardRank.indexOf(pack1[i]) > cardRank.indexOf(pack2[i])){
            ++scorePlayer1;
        }
    }
    if(scorePlayer2 > scorePlayer1){
        return "Player2 wins 1 to 0";
    }else if(scorePlayer1 > scorePlayer2){
        return "Player1 wins 1 to 0";
    }else{
        return 'empat';
    }
};

module.exports={whoWins};
