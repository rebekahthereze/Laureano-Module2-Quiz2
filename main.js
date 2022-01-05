let age = document.getElementById('age');
let gender = document.getElementById('gender');
let height = document.getElementById('height');
let weight = document.getElementById('weight');
let activity = document.getElementById('activity');

let calculate = document.getElementById('calculate');
let calCount = document.getElementById('calCount');

calculate.onclick = function() {
    document.getElementById('food-input').style.visibility = "visible";
    document.getElementById('food-input');
    if (gender.value == "1") {
        var BMR = getBMRMale();
    } else if (gender.value == "2") {
        var BMR = getBMRFemale();
    } 

    if (activity.value == "1") {
        calCount.innerHTML = BMR + "<br /> calories/day";  
    } else if (activity.value == "2") {
        calCount.innerHTML = Math.round(BMR * 1.2)  + "<br /> calories/day";
    } else if (activity.value == "3") {
        calCount.innerHTML = Math.round(BMR * 1.375) + "<br /> calories/day";
    } else if (activity.value == "4") {
        calCount.innerHTML = Math.round(BMR * 1.55) + "<br /> calories/day";
    } else if (activity.value == "5") {
        calCount.innerHTML = Math.round(BMR * 1.725) + "<br /> calories/day";
    } else if (activity.value == "6") {
        calCount.innerHTML = Math.round(BMR * 1.9) + "<br /> calories/day";
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
