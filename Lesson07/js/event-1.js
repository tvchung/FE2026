// CLICK EVENT
document.getElementById("btnClick").addEventListener("click", function () {
    alert("Bạn vừa click vào button!");
});


// MOUSEOVER EVENT
document.getElementById("hoverText").addEventListener("mouseover", function () {
    this.style.color = "red";
});


// KEYBOARD EVENT
document.getElementById("nameInput").addEventListener("keyup", function () {
    let name = this.value;
    document.getElementById("result").innerText = "Xin chào " + name;
});


// CHANGE EVENT
document.getElementById("colorSelect").addEventListener("change", function () {
    document.body.style.backgroundColor = this.value;
});