function myfunction() {
    var x =document.getElementById("boxes");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}