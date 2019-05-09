// Defining essential variables

// Player1 = TL
// Player2 = TR
// Player3 = BR
// Player4 = BL

// Defining the route each piece has to make before the player piece is secured
var routePlayer1 = [".TL0", ".TL1", ".TL2", ".TL3", ".TL4", ".TL5", ".TL6", ".TL7", ".TL8", ".TL9", ".TL10", ".TL11", ".TL12", ".TL13",
"TR0", ".TR1", ".TR2", ".TR3", ".TR4", ".TR5", ".TR6", ".TR7", ".TR8", ".TR9", ".TR10", ".TR11", ".TR12", ".TR13",
"BR0", ".BR1", ".BR2", ".BR3", ".BR4", ".BR5", ".BR6", ".BR7", ".BR8", ".BR9", ".BR10", ".BR11", ".BR12", ".BR13",
"BL0", ".BL1", ".BL2", ".BL3", ".BL4", ".BL5", ".BL6", ".BL7", ".BL8", ".BL9", ".BL10", ".BL11", ".BL12",
"eL1", ".eL2", ".eL3", ".eL4", ".eL5", ".eL6"];

var routePlayer2 = ["TR0", ".TR1", ".TR2", ".TR3", ".TR4", ".TR5", ".TR6", ".TR7", ".TR8", ".TR9", ".TR10", ".TR11", ".TR12", ".TR13",
"BR0", ".BR1", ".BR2", ".BR3", ".BR4", ".BR5", ".BR6", ".BR7", ".BR8", ".BR9", ".BR10", ".BR11", ".BR12", ".BR13",
"BL0", ".BL1", ".BL2", ".BL3", ".BL4", ".BL5", ".BL6", ".BL7", ".BL8", ".BL9", ".BL10", ".BL11", ".BL12", ".BL13",
"TL0", ".TL1", ".TL2", ".TL3", ".TL4", ".TL5", ".TL6", ".TL7", ".TL8", ".TL9", ".TL10", ".TL11", ".TL12",
"eT1", ".eT2", ".eT3", ".eT4", ".eT5", ".eT6"];

var routePlayer3 = ["BR0", ".BR1", ".BR2", ".BR3", ".BR4", ".BR5", ".BR6", ".BR7", ".BR8", ".BR9", ".BR10", ".BR11", ".BR12", ".BR13",
"BL0", ".BL1", ".BL2", ".BL3", ".BL4", ".BL5", ".BL6", ".BL7", ".BL8", ".BL9", ".BL10", ".BL11", ".BL12", ".BL13",
"TL0", ".TL1", ".TL2", ".TL3", ".TL4", ".TL5", ".TL6", ".TL7", ".TL8", ".TL9", ".TL10", ".TL11", ".TL12", ".TL13",
"TR0", ".TR1", ".TR2", ".TR3", ".TR4", ".TR5", ".TR6", ".TR7", ".TR8", ".TR9", ".TR10", ".TR11", ".TR12",
"eR1", ".eR2", ".eR3", ".eR4", ".eR5", ".eR6"];

var routePlayer4 = ["BL0", ".BL1", ".BL2", ".BL3", ".BL4", ".BL5", ".BL6", ".BL7", ".BL8", ".BL9", ".BL10", ".BL11", ".BL12", ".BL13",
"TL0", ".TL1", ".TL2", ".TL3", ".TL4", ".TL5", ".TL6", ".TL7", ".TL8", ".TL9", ".TL10", ".TL11", ".TL12", ".TL13",
"TR0", ".TR1", ".TR2", ".TR3", ".TR4", ".TR5", ".TR6", ".TR7", ".TR8", ".TR9", ".TR10", ".TR11", ".TR12", ".TR13",
"BR0", ".BR1", ".BR2", ".BR3", ".BR4", ".BR5", ".BR6", ".BR7", ".BR8", ".BR9", ".BR10", ".BR11", ".BR12",
"eB1", ".eB2", ".eB3", ".eB4", ".eB5", ".eB6"];

// "TL0", "TL1", "TL2", "TL3", "TL4", "TL5", "TL6", "TL7", "TL8", "TL9", "TL10", "TL11", "TL12", "TL13",
// "TR0", "TR1", "TR2", "TR3", "TR4", "TR5", "TR6", "TR7", "TR8", "TR9", "TR10", "TR11", "TR12", "TR13",
// "BR0", "BR1", "BR2", "BR3", "BR4", "BR5", "BR6", "BR7", "BR8", "BR9", "BR10", "BR11", "BR12", "BR13",
// "BL0", "BL1", "BL2", "BL3", "BL4", "BL5", "BL6", "BL7", "BL8", "BL9", "BL10", "BL11", "BL12", "BL13",
//
// "eT1", "eT2", "eT3", "eT4", "eT5", "eT6"
// "eR1", "eR2", "eR3", "eR4", "eR5", "eR6"
// "eB1", "eB2", "eB3", "eB4", "eB5", "eB6"
// "eL1", "eL2", "eL3", "eL4", "eL5", "eL6"

// [currentPosition, lastPosition, lastMovedRound, fieldsMoved, fieldsLeft]
var player1_1 = [];
var player1_2 = [];
var player1_3 = [];
var player1_4 = [];
var player2_1 = [];
var player2_2 = [];
var player2_3 = [];
var player2_4 = [];
var player3_1 = [];
var player3_2 = [];
var player3_3 = [];
var player3_4 = [];
var player4_1 = [];
var player4_2 = [];
var player4_3 = [];
var player4_4 = [];

var gameRound = 0;

var diceHits = ["Start of round"];

// Initial startup procedures
if (gameRound == 0) {
  player1_1[0] = "spawnTL1";
  player1_2[0] = "spawnTL2";
  player1_3[0] = "spawnTL3";
  player1_4[0] = "spawnTL4";
  player2_1[0] = "spawnTR1";
  player2_2[0] = "spawnTR2";
  player2_3[0] = "spawnTR3";
  player2_4[0] = "spawnTR4";
  player3_1[0] = "spawnBR1";
  player3_2[0] = "spawnBR2";
  player3_3[0] = "spawnBR3";
  player3_4[0] = "spawnBR4";
  player4_1[0] = "spawnBL1";
  player4_2[0] = "spawnBL2";
  player4_3[0] = "spawnBL3";
  player4_4[0] = "spawnBL4";
}

function movePiece() {
  $( "#p1_1" ).appendTo(routePlayer1[gameRound]);
  $( "#p1_2" ).appendTo(1 + routePlayer1[gameRound]);
  $( "#p1_3" ).appendTo(2 + routePlayer1[gameRound]);
  $( "#p1_4" ).appendTo(3 + routePlayer1[gameRound]);
  $( "#p2_1" ).appendTo(routePlayer2[gameRound]);
  $( "#p2_2" ).appendTo(1 + routePlayer2[gameRound]);
  $( "#p2_3" ).appendTo(2 + routePlayer2[gameRound]);
  $( "#p2_4" ).appendTo(3 + routePlayer2[gameRound]);
  $( "#p3_1" ).appendTo(routePlayer3[gameRound]);
  $( "#p3_2" ).appendTo(1 + routePlayer3[gameRound]);
  $( "#p3_3" ).appendTo(2 + routePlayer3[gameRound]);
  $( "#p3_4" ).appendTo(3 + routePlayer3[gameRound]);
  $( "#p4_1" ).appendTo(routePlayer4[gameRound]);
  $( "#p4_2" ).appendTo(1 + routePlayer4[gameRound]);
  $( "#p4_3" ).appendTo(2 + routePlayer4[gameRound]);
  $( "#p4_4" ).appendTo(3 + routePlayer4[gameRound]);
}
