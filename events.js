window.onload = function() {
    let btn = document.getElementById("button");
    btn.onclick = function() {
        let name = document.getElementById("name").value;
        let QorC = document.getElementById("QorC").value;
        let email = document.getElementById("email").value;
        alert(name + QorC + email);
    }
}
