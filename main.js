let age = document.getElementById('age');
let gender = document.getElementById('gender');
let height = document.getElementById('height');
let weight = document.getElementById('weight');
let activity = document.getElementById('activity');

let calculate = document.getElementById('calculate');
let calCount = document.getElementById('calCount');
let calCount2 = document.getElementById('calCount2');
var cal = 0;

calculate.onclick = function() {
    document.getElementById('food-input').style.visibility = "visible";
    document.getElementById('food-input');
    if (gender.value == "1") {
        var BMR = getBMRMale();
    } else if (gender.value == "2") {
        var BMR = getBMRFemale();
    } 

    if (activity.value == "1") {
        cal = BMR;
        calCount.innerHTML = cal + "<br /> calories/day";  
    } else if (activity.value == "2") {
        cal = Math.round(BMR) * 1.2;
        calCount.innerHTML = cal  + "<br /> calories/day";
    } else if (activity.value == "3") {
        cal = Math.round(BMR * 1.375);
        calCount.innerHTML = cal + "<br /> calories/day";
    } else if (activity.value == "4") {
        cal = Math.round(BMR * 1.55);
        calCount.innerHTML = cal + "<br /> calories/day";
    } else if (activity.value == "5") {
        cal = Math.round(BMR * 1.725);
        calCount.innerHTML =  cal + "<br /> calories/day";
    } else if (activity.value == "6") {
        cal = Math.round(BMR * 1.9);
        calCount.innerHTML = cal + "<br /> calories/day";
    }
}
function getBMRMale() {
    var BMR = (10 * weight.value) + (6.25 * height.value) - (5 * age.value) + 5;
    return BMR;
}

function getBMRFemale() {
    var BMR = (10 * weight.value) + (6.25 * height.value) - (5 * age.value) - 161;
    return BMR;
}

document.getElementById('calculate2').onclick = function() {
    calCount2.style.visibility = "visible";
    remCal = cal - document.getElementById('foodCal').value;
    calCount2.innerHTML = remCal + "<br /> remaining calories today";
} 
