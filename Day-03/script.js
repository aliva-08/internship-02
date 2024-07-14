var Name="Aliva",
username,
password;
function Signupform(){
    Name=document.getElementById("Name").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    console.log("Name:"+Name);
    console.log("Email:"+email);
    console.log("Password:"+password);
    alert("Hello $(Name),you have succesfully signed up");
    window.location.href="login.html";
}
function login(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username == "Aliva"){
        if(password == "hello"){
            alert("login succesful");
            window.location.href="welcome.html";
        }
}else{
    alert("login not succesful");
}
}