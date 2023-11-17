const submitButton1 = document.getElementById('button1');
const commentContainer1 = document.getElementById('comment-container1');
var message1;

submitButton1.onclick = () => {
  let numberInput1 = document.getElementById('number-input1').value;
 message1 =  numberValue(numberInput1);
  // Challenge 1: Use if else condition to store the respective comments in the variable "message1" based on the score input.
  // when the user gives a number input and clicks on the submit button, the respective comments should be displayed.
  // Here are the values and their respective comments
  // Score of less than 0 or more than 100 — “This is not possible. An error has occurred.”
  // Score of 0 to 19 — “That was a terrible score!”
  // Score of 20 to 39 — “You know some things. Needs improvement.”
  // Score of 40 to 69 — “You did a passable job, not bad!”
  // Score of 70 to 89 — “That’s a great score. You really know your stuff.”
  // Score of 90 to 100 — “What an amazing score!”

  commentContainer1.innerHTML = message1;
};

function numberValue(val) {
  if (val < 0 && val > 100) {
    return 'This is not possible. An error has occurred';
  } else if (val >=0 && val <= 19) {
    return 'That was a terrible score!';
  } else if (val >=20 && val <= 39) {
    return 'You know some things. Needs improvement.';
  } else if (val >=40 && val <= 69) {
    return 'You did a passable job, not bad!';
  } else if (val >=70 && val <= 89) {
    return 'That’s a great score. You really know your stuff.';
  } else if (val >=90 && val <= 100) {
    return 'What an amazing score!';
  }
}

var val = 0;
console.log('outsideclicked');

const submitButton2 = document.getElementById('button2');
const commentContainer2 = document.getElementById('comment-container2');
var message2;

submitButton2.onclick = () => {
  let numberInput2 = document.getElementById('number-input2').value;
  message2 =  numberValue(numberInput2);
  // Challenge 2: Use Switch statements to store the respective comments in the variable "message2" based on the input.
  // when the user gives a number input and clicks on the submit button, the respective comments should be displayed.
  // Here are the values and their respective comments
  // Score of less than 0 or more than 100 — “This is not possible. An error has occurred.”
  // Score of 0 to 19 — “That was a terrible score!”
  // Score of 20 to 39 — “You know some things. Needs improvement.”
  // Score of 40 to 69 — “You did a passable job, not bad!”
  // Score of 70 to 89 — “That’s a great score. You really know your stuff.”
  // Score of 90 to 100 — “What an amazing score!”

  commentContainer2.innerHTML = message2;
};


function switchSee(numberinput2){
  var message2 = ""
switch (true){
  case(numberinput2 < 0 && numberinput2 > 100):
  message2 = "This is not possible. An error has occurred."
  break;
  case(numberinput2 >=0 && numberinput2 <= 19):
  message2 = "That was a terrible score!"
  break;
  case(numberinput2 >=20 && numberinput2 <= 39):
  message2 = "That was a terrible score!"
  break;
  case(numberinput2 >=40 && numberinput2 <= 69):
  message2 = "That was a terrible score!"
  break;
  case(numberinput2 >=70 && numberinput2 <= 89):
  message2 = "That was a terrible score!"
  break;
  case(numberinput2 >=90 && numberinput2 <= 100):
  message2 = "That was a terrible score!"
}
}

let numberinput2 = 0;
console.log('outsideclicked');



//This was a great assigment and u learned a lot from it Athithya. ALways compare this with the normal one provided to u in the assgn and we can learn a lot