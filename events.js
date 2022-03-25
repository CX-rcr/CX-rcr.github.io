window.onload = function() {
    let btn = document.getElementById("button");
    btn.onclick = function() {
        let name = document.getElementById("name").value;
        let quesComm = document.getElementById("quesComm").value;
        let email = document.getElementById("email").value;
        alert(name + quesComm + email);
    }
}
