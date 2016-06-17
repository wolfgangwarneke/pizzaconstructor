// obtain and store preferred name of OVC
// var OurValuedCustomer = "";
// function setCookie(cookieUserName,cookieUserNameValue) {
//   document.cookie = cookieUserName+"="+cookieUserNameValue+";";
// }
//
// function getCookie(cookieUserName) {
//   var name = cookieUserName + "=";
//   var splitArray = document.cookie.split(';');
//   for (i = 0; i < splitArray.length; i++) {
//     var c = splitArray[i];
//     while (c.charAt(0)==' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) === 0) {
//       return c.substring(cookieUserName.length,c.length);
//     } else {
//       return "";
//     }
//   }
// }
//
// function checkCookie() {
//   var ourValuedCustomer = getCookie("customername");
//   if (ourValuedCustomer !== "") {
//     OurValuedCustomer = ourValuedCustomer;
//     alert(ourValuedCustomer);
//   } else {
//     ourValuedCustomer = prompt("Valued customer, what is your name?","");
//     if (ourValuedCustomer !== "" && ourValuedCustomer !== null) {
//       setCookie("customername", ourValuedCustomer);
//       OurValuedCustomer = ourValuedCustomer;
//     }
//   }
// }
//
// checkCookie();
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}

checkCookie();
