const { test, expect } = require("@jest/globals");

const card = require("./card");

test('game_play', function(){
    expect(card.whoWins([1], [2])).toBe("Player2 wins 1 to 0");
    expect(card.whoWins([2], [1])).toBe("Player1 wins 1 to 0");
});

test('ties',function(){
    expect(card.whoWins([0], [0])).toBe('empat');
});

test('Knows the cards ranking which not always matches the ascii order',function(){
    expect(card.whoWins(['K'], ['Q'])).toBe("Player1 wins 1 to 0");
});

test('wins with two cards',function(){
    expect(card.whoWins(['1','2'], ['1','1'])).toBe("Player1 wins 1 to 0");
});