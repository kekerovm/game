alert("Welcome To VOLVO 920980!")

var driver = confirm("Are you the driver?")

if (driver) {
  alert("Welcome, Driver!")
  var name = prompt("What is your name?")
  alert(`Hi, ${name}.`)
  var id = prompt("Please enter your driver id")
  if (
    id == `9402` ||
    id == `3518` ||
    id == `9527` ||
    id == `2469` ||
    id == `7834`
  ) {
    alert("Thank you. Please be safe today")
    // } else {
    //   alert("You are not Authorized!")
  }
} else {
  alert("You are NOT the driver. Goodbye")
}

// (function() {
// 	var input 	= "",
// 		correct = "1593";

// var str=DriverIdNumber = ("9402", "3518", "9527", "2469", "7834")
// if (matcher.matches) () {
//   System.out.println(DriverIdNumber + " = Thank you. Please be safe today!") :
// } else
//   System.out.println(DriverIdNumber + " = Please call Dispatch"):
// }
