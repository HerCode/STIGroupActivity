var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
//*Author: Sahasha Reese*//
//*Date of Creation: 06/24/2015*//
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

//Step 1
function addArray(empArray) {
  var finalArray = [];
  for(var i=0; i<empArray.length; i++)
  finalArray.push (createEmployee(empArray[i]));
  return finalArray;
for (var i = 0; i < finalArray.length; i++) {
  console.log(finalArray[i]);
}
}

//Step 2
function createEmployee(nameArray) {
  newEmpArray = [];
  newEmpArray[0] = nameArray[0];
  newEmpArray[1] = bonus(nameArray);
  newEmpArray[3] = Math.round(newEmpArray[1] * nameArray[2]);
  newEmpArray[2] = newEmpArray[3] + parseInt(nameArray[2]);
  newEmpArray[1] = newEmpArray[1] * 100 + '%';
  return newEmpArray;
}

//Step 3

function bonus (nameArray) {
  var employeeBonus = 0;
  if(nameArray[3] <= 2) {
    employeeBonus += 0;
  }
    else if (nameArray[3] === 3) {
      employeeBonus += .04;
    }
    else if (nameArray[3] === 4) {
      employeeBonus += .06;
    }
    else if (nameArray[3] === 5) {
      employeeBonus += .10;
    }
  if (nameArray[1].length === 4) {
    employeeBonus += .05;
  }
  if (parseInt(nameArray[2]) > 65,000) {
    employeeBonus -= .01;
  }
  if (employeeBonus > .13) {
    employeeBonus = .13;
}
return employeeBonus
}

//Step 4

addArray(employees);
