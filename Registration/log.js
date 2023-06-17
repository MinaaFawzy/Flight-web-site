
var objPeople = [
   {
       username: "hany",
       password: "12345"

   },

 {
     username: "youssef",
     password: "123456"

 }

]

   



function logIn() {

    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    if (username == "") {
        alert("Name must be filled out");
        return false;
    }
    if (password == "") {
        alert("password must be filled out");
        return false;
    }
    console.log("your user name is " + username + "password is " + password)
    for (var i = 0 ; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password) {
            console.log(username = "is loged in !")
            window.location.replace("../Home page/Home Page.html")
        }

    }

}

function NewUser() {
    var regUser = document.getElementById("NewUser")
    var regPassword = document.getElementById("NewPassword")
    var NewUser = {
        username: regUser,
        password: regPassword
    }
    focus(var i=0; i < objPeople.length; i
    {
        if(regUser== objPeople.length )
        {
            alert("this name is used")
            return;
        }
    }

    objPeople.push(NewUser)
    console.log(username = "is loged in !")
}