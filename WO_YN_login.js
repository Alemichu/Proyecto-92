function addUser()
{
    username1 = document.getElementById("username1").value;
    username2 = document.getElementById("username2").value;

    localStorage.setItem("PLAYER-1", username1);
    localStorage.setItem("PLAYER-2", username2);

    window.location = "WO_YN_page.html";
}