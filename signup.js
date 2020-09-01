$(document).ready(() => {

    $("button").click(() => {

        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var rpassword = $("#rpassword").val();

        if(fname === ""){
            $("#fname").css("border-bottom","2px solid rgb(255, 148, 148)");
            alert("Firstname must be filled");
        }

        if(lname === ""){
            $("#lname").css("border-bottom","2px solid rgb(255, 148, 148)");
            alert("Lastname must be filled");
        }

        if(email === ""){
            $("#email").css("border-bottom","2px solid rgb(255, 148, 148)");
            alert("Email must be filled");
        }

        if(password === ""){
            $("#password").css("border-bottom","2px solid rgb(255, 148, 148)");
            alert("Password must be filled");
        }

        if(rpassword === ""){
            $("#rpassword").css("border-bottom","2px solid rgb(255, 148, 148)");
            alert("Re-type the password");
        }
        
        if(password !== rpassword) {
            alert("password must be same");
        }

        $("#fname").val("");
        $("#lname").val("");
        $("#email").val("");
        $("#password").val("");
        $("#rpassword").val("");
    });

    $(".form-control").mouseenter(() => {
        $(".form-control").css("border-bottom","2px solid rgb(136, 135, 135)");
    });
    
});