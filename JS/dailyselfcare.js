/*
This file contains the functions used in daily self care.

leaf is used to store the latest level visited by the user each day, so as to provide reward for the user. 
In MANAS reward system is maintained in a variable "leafcount", which has incremented for the app to provide reward in the app.


*/

let leaf = 0; // leaf stores the leaf count. 

let checkpoint = 1;// checkpoint stores the level of each subsection. Consider this is a game, with various levels. Each level has a unique checkpoint number. Section 1: checkpoint=1, section 2: checkpoint =2 and so on.

let value = 0;// value stores the latest subsection visited by the user. 




/*Tick mark functionality function: if user visited subsections: Daily Motivation, Morning exercise, today's affirmation, today's wellness tip, afternoon mediation, today's thougth, tomorrow thougth. when user visit this section it is marked with a tick symbol. 
*/

//Tick mark functionality  for daily motivation
function dailyMotivationModal(event) {
  dailyMotivationCard(event);
}
function dailyMotivationCard(event) {

checkpoint=1;
if(value < checkpoint){
    value=checkpoint;
}
  
//This function adds tickmark to the daily motivation.
  document.getElementById("dailymotivation").innerHTML =
    '<img src="../Images/checked.png" width="20px" height="20px">';
}

//Tick mark functionality  for morning exercise
function morningExerciseModal() {
  morningExerciseCard();
}


function morningExerciseCard() {

    checkpoint=2;
if(value < checkpoint){
    value=checkpoint;
}

//Tick mark image
  document.getElementById("morningexercise").innerHTML =
    '<img src="../Images/checked.png" width="20px" height="20px">';
}

//Tick mark functionality 
function todaysAffirmationModal() {
  todaysAffirmationCard();
}

function todaysAffirmationCard() {
    checkpoint=3;
   if(value < checkpoint){
    value=checkpoint;
	}
    //Tick mark image
  document.getElementById("todayaffirmation").innerHTML =
    '<img src="../Images/checked.png" width="20px" height="20px">';
}

//Tick mark functionality for today's wellness index
function todaysWellNessIndexModal() {
  todaysWellNessIndexCard();
}

function todaysWellNessIndexCard() {
    checkpoint=4;
    if(value < checkpoint){
    value=checkpoint;
}
    //Tick mark image
  document.getElementById("todaywellnesstip").innerHTML =
    '<img src="../Images/checked.png" width="20px" height="20px">';
}

//Tick mark functionality today's afternoon meditation
function todaysAfternoonMeditationModal() {
  todaysAfternoonMeditationCard();
}

function todaysAfternoonMeditationCard() {
     checkpoint=5;
    if(value < checkpoint){
    value=checkpoint;
	}
    //Tick mark image
  document.getElementById("todayafternoonmeditation").innerHTML =
    '<img src="../Images/checked.png" width="20px" height="20px">';
}

//Tick mark functionality for today's thougths
function todaysThoughtsModal() {
  todaysThoughtsCard();
}

function todaysThoughtsCard() {
     checkpoint=6;
    if(value < checkpoint){
    value=checkpoint;
	}
    //Tick mark image
  document.getElementById("yourtodaythougth").innerHTML =
    '<img src="../Images/checked.png" width="20px" height="20px">';
}

//Tick mark functionality for tomorrow's thougths
function tomorrowThoughtSubmit() {
  tomorrowThoughtCard();
  
}

function tomorrowThoughtCard() {
    checkpoint=7;
    if(value < checkpoint){
        value=checkpoint;
        leaf++;

        //locally storing leaf count
        localStorage.setItem("leafcount",leaf);
        leafcount()
    }
    
  //Tick mark image
  document.getElementById("wanttodotomorrow").innerHTML =
    '<img src="../Images/checked.png" width="20px" height="20px">';
   let modal = document.getElementById("wanttodotomorrow")
   modal.style.display = 'block';
}

//function to get leaf count
function leafcount(){

  let leaf = localStorage.getItem("leafcount")
  document.getElementById("leafcount").innerHTML = leaf;
}
