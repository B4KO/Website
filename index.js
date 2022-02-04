function myFunction() {
    var copyText = "gabriel.molinski@gmail.com";
  
    navigator.clipboard.writeText(copyText);

    document.getElementById("mail").innerHTML = "Copied!"
  }