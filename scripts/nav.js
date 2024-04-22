function navFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function navFunction2() {
    var x = document.getElementById("myBottomNav");
    if (x.className === "footer") {
      x.className += " responsive";
    } else {
      x.className = "footer";
    }
  
} 

function bars() {
    document.getElementById("github").innerHTML ="Github Repo";
}