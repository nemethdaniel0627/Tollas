function myFunction(x) {
    if (x.matches) { // If media query matches
        $('#nav__menu--toggle').prop("checked", false);
        // alert();
    }
  }
  
  var x = window.matchMedia("(min-width: 1200px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
