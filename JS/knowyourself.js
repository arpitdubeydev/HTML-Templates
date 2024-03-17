var knowyourselfResult; //knowyourselfResult is used to store the score of know your self assessment test given by user to know mental wellness



let percent;// After completing self assessment test, user will get score in percentage.



// question1
function question1Handler(event) {

  //getting id of question1 and question2
  let q1 = document.getElementById("question1");
  let q2 = document.getElementById("question2");

  event.preventDefault();

  //taking the value of option to check wheather user have attempted question or not
  let ans1 = parseInt(document.myform.answer1.value);

  //check if user has attempted question
  if (!isNaN(ans1)) {

    //hide and display pages
    q1.style.display = "none";
    q2.style.display = "contents";
  } else {
    alert("");
  }
}

// question2
function question2Handler(event) {

   //getting id of question1 and question2
  let q2 = document.getElementById("question2");
  let q3 = document.getElementById("question3");

  event.preventDefault();

   //taking the value of option to check wheather user have attempted question or not
  let ans2 = parseInt(document.myform.answer2.value);


   //check if user has attempted question
  if (!isNaN(ans2)) {
    //hide and display pages
    q2.style.display = "none";
    q3.style.display = "contents";
  } else {
    alert("");
  }
}

// question3
function question3Handler(event) {

  //getting id of question1 and question2
  let q3 = document.getElementById("question3");
  let q4 = document.getElementById("question4");

  event.preventDefault();

  //taking the value of option to check wheather user have attempted question or not
  let ans3 = parseInt(document.myform.answer3.value);


  //check if user has attempted question
  if (!isNaN(ans3)) {

     //hide and display pages
    q3.style.display = "none";
    q4.style.display = "contents";
  } else {
    alert();
  }
}

// question4
function question4Handler(event) {

  //getting id of question1 and question2
  let q4 = document.getElementById("question4");
  let q5 = document.getElementById("question5");
 

  event.preventDefault();

   //taking the value of option to check wheather user have attempted question or not
  let ans4 = parseInt(document.myform.answer4.value);

  //check if user has attempted question
  if (!isNaN(ans4)) {
    //hide and display pages
    q4.style.display = "none";
    q5.style.display = "contents";
  } else {
    alert("");
  }
}

// submit
function submitHandler(event) {
  event.preventDefault();

  //getting id of question1 and question2
  let q5 = document.getElementById("question5");

  //result after calculating result
  let result = document.getElementById("result");
  //scores
  let score = document.getElementById("score");
  //remarks based on scores
  let recommend = document.getElementById("recommend");


  //After form submission getting values of selected option from each question
  let ans1 = parseInt(document.myform.answer1.value);
  let ans2 = parseInt(document.myform.answer2.value);
  let ans3 = parseInt(document.myform.answer3.value);
  let ans4 = parseInt(document.myform.answer4.value);
  let ans5 = parseInt(document.myform.answer5.value);

  q5.style.display = "none";
  result.style.display = "inline";
  document.getElementById("title").style.display = "none";

  //calculating percentage
  let total = 0;
  total = ans1 + ans2 + ans3 + ans4 + ans5;
  let percent = total * 4;

 // Assigning percentage to variable
  knowyourselfResult = percent;
  // percent < 20%
  if (total < 13 || ans1 < 2 || ans2 < 2 || ans3 < 2 || ans4 < 2 || ans5 < 2) {
    recommend.innerHTML = "Poor Performance ";
  }
  // percent 20% - 40%
  else if (percent >= 20 && percent < 40) {
    recommend.innerHTML = "Poor Performance";
  }

  // percent 40% - 60%
  else if (percent > 40 && percent <= 60) {
    recommend.innerHTML = "Average Performance";
  } else if (percent > 60 && percent <= 80) {
    recommend.innerHTML = "Good Performance";
  }

  // percent > 80%
  else if (percent > 80) {
    recommend.innerHTML = "Good Performance";
  }
  document.getElementById("resultImg").src = "./Images/trophy.jpg";
  score.innerHTML = "Your Score:" + "       " + percent + "%";
  
}



/*
Logic for autolock feature

This logic is intended for the "know your self" section and the "daily self-care" section, both are linked.

the idea is that the user who achieves less than 70 percent must practise the " daily self-care" section for 2 to 4 weeks. 

After this time, the " daily self-care" section is automatically locked and the "know your self" section is unlocked so that the user can perform a self-assessment test to check his/her progress.

For demostration, the time duration is given in minutes. After five minutes, the "daily self-care" section is locked and the "know your self" section is unlocked. (the "know your self" section will be locked if the user has scored has achieved less than 70 percent).
*/




//Called when Okay! button clicked on know your self assessment result page.
function backToHome() {
  

  //set result locally
  let data = JSON.stringify(knowyourselfResult);
   localStorage.setItem("setdata", data);
}


//Logic of autolock feature
function lockandUnlockFeature(event) {
  let jsondata = localStorage.getItem("setdata");
  let states = localStorage.getItem("state");

  //After attempting dailyselfcare for a duration of time know your self is unlocked and daily selfcare therapy is locked
  if (states == "true") {
    //clear local storage
    localStorage.clear();
    localStorage.removeItem(states);

    //daily self care therapy section is locked message
    document.getElementById("levelstatus").innerHTML =
      "Please Visit to Know your self section to know your progress.";
      //daily self care therapy section lock image
    document.getElementById("lock1").innerHTML =
      '<img src="./Images/level_locked.png" width="30px" height="30px">';
      //daily self care therapy section button disabled
    document.getElementById("dailyselfcare").disabled = true;
  }

  //Logic of autolock feature
  // if user get less than 70% in know your self assessment test then daily
  //self care section is unlocked and know your self section will be locked
  else if (jsondata < 70) {
    //daily self care section is unlocked
    document.getElementById("levelstatus").innerHTML = "Level Unlocked";
     //daily self care therapy section unlock image
    document.getElementById("lock1").innerHTML =
      '<img src="./Images/level_unlocked.png" width="30px" height="30px">';
       //daily self care therapy section button enabled
    document.getElementById("dailyselfcare").disabled = false;

    document.getElementById("levelstatus1").innerHTML = "Level locked";
    document.getElementById("lock2").innerHTML =
      '<img src="./Images/level_locked.png" width="30px" height="30px">';
       //daily know your self button disabled
    document.getElementById("knowyourself").disabled = true;
  }

  //Logic of autolock feature
  // if user get greater than 70% and equal to 100% in know your self assessment test
  //then daily self care is locked and know your self will be unlocked
  else if (jsondata > 70 || jsondata == 100) {
    //daily self care is locked
    document.getElementById("levelstatus").innerHTML = "Level locked";
    document.getElementById("lock1").innerHTML =
      '<img src="./Images/level_locked.png" width="30px" height="30px">';
 //daily self care therapy section button disabled
    document.getElementById("dailyselfcare").disabled = true;
  }

  // daily self care is locked and know your self
  //will be unlocked if not condition is matched
  else {
    document.getElementById("levelstatus").innerHTML = "Level locked";
     //daily self care therapy section lock image
    document.getElementById("lock1").innerHTML =
      '<img src="./Images/level_locked.png" width="30px" height="30px">';
       //daily self care therapy section button disabled
    document.getElementById("dailyselfcare").disabled = true;
  }
}


/* 
From here after 5 minutes this function will get called and daily self care section will get locked and know your self section will get 
unlocked and user have to give self assessment test to know their progress.
*/
function dailySelfCareTimeInterval() {
  setTimeout(myFunction, 50000);
}


//this fucntion is as callback function inside setTimeout function and this redirect to main html page.
function myFunction() {
  console.log("Timeout complete!");
  localStorage.setItem("state", "true");
  localStorage.removeItem("setdata");
  window.history.back();
}


