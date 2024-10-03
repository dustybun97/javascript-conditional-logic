//Exercise 4
// Switch Statement
let lightBulbStatus = "On";
let statusMessage ;
//Start coding here

switch (lightBulbStatus) {
  case "On":
     statusMessage = "Light bulb is On.";
     break;
  case "Off":
     statusMessage = "Light bulb is Off.";
    break;
  case "Broken":
     statusMessage = "Light bulb is Broken.";
     break;
  default:
     statusMessage = "Please choose the correct input (On/Off/Broken) ";
     break;
};

console.log( statusMessage);

