// Ghostbusters Text Adventure Game
const start = `Welcome to the Fallout Text Adventure Game. Click 'OK' to start the game.`;

const enter = "Please enter 1 or 2 for your answer";

const gameOver = "Sorry GAME OVER!";

const q1 = `You are trying to get to the suit of T-45 power armor in the basement. Should you...
1. Take the elevator to the basment
OR
2. Take the stairs
${enter}`;

const gameOver1 = `You get overrun by rad roaches on the way down and die. ${gameOver}`;

const q2 = `When you get off the elevator you see something in the dark. Should you...
1. Shoot at it immediately.
OR
2. pull out your flashlight to see what it is.
${enter}`;

const gameOver2 = `It was a feral ghoul and it saw you before you saw it. ${gameOver}`;

const q3 = `It was a feral ghoul and you got it before it saw you, good job! So you walk around to look for the power armor. Should you...
1. Wonder around to try and find it in the dark.
OR
2. check your map to find it.
${enter}`;

const gameOver3 = `rounding a corner you run into a pack of ghouls and get overwhelmed! ${gameOver}`;

const q4 = `You get a good idea of where it is and start heading tword it. along the way you run into a sleeping dathclaw! Should you...
1. Sneak around it.
OR
2. start attacking it immediately.
${enter}`;

const gameOver4 = `it wakes up and effortlesly kills you before you even hurt it. ${gameOver}`;

const q5 = `You finnaly find the power armor but its surrounded by a small group of raiders! Should you...
1. Rush in (you got this)
OR
2. sneakaly take them out one by one.
${enter}`;

const gameOver5 = `You rushed in and they all started shooting you, you died instantly! ${gameOver}`;

const win = `You took care of them (threw a grenade at them) and got the power armor! Good job!`;

alert(start);

let userInput = prompt(q1);

// NESTED CONDITIONAL STATEMENTS


if (userInput == 1) {
  userInput = prompt(q2);

 

  if (userInput == 1){
    userInput = prompt(q3);

    if (userInput == 2) {
        userInput = prompt(q4);
    

        if (userInput == 1) {
            userInput = prompt(q5);

            if (userInput == 2) {
                userInput = alert(win);}
                else {alert(gameover5)}
        }else { alert  (gameOver4)}
    }else {alert (gameOver3)}

  } else {
    alert(gameOver2);
  }

} else {
  alert(gameOver1);
}