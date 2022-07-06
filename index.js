var target = 40;
var p1 = 0;
var p2 = 0;
var count = 1;
const btn = document.getElementById("btn");
const game = () => {
  document.getElementById("out").innerHTML = "RESULT";
  console.log("hi");
  if (count % 2 == 1) {
    var player1 = (Math.floor(Math.random() * 10) % 6) + 1;
    document.getElementById("score").value = player1;
    p1 += player1;
    document.getElementById("in1").value = p1;
  } else {
    var player2 = (Math.floor(Math.random() * 10) % 6) + 1;
    document.getElementById("score").value = player2;
    p2 += player2;
    document.getElementById("in2").value = p2;
  }
  count++;
  if (p1 >= target) {
    document.getElementById("out").innerHTML = "Player 1 won the match";
    document.getElementById("in1").value = 0;
    document.getElementById("in2").value = 0;
    p1 = 0;
    p2 = 0;
  } else if (p2 >= target) {
    document.getElementById("out").innerHTML = "Player 2 won the match";
    document.getElementById("in1").value = 0;
    document.getElementById("in2").value = 0;
    p1 = 0;
    p2 = 0;
  }
};
btn.addEventListener("click", game);
