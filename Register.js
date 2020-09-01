$(document).ready(() => {

    $('#submitbtn').click(() => {

        var fname = $("#Firstname").val();
        var lname = $("#Lastname").val();

        var email = $("#inputEmail4").val();
        var mobno = $("#Mobileno").val();

        var dob = $("#dob").val();
        var password = $("#password").val();

        var address = $("#inputAddress").val();
        var address2 = $("#inputAddress2").val();

        var city = $("#inputCity").val();
        var state = $("#inputState").val();
        var pin = $("#inputZip").val();

        var proexp = $("#pe").val();
        var workingarea = $("#workingarea").val();

        if(fname === ""){
            alert("Firstname must be entered");
        }

        if(lname === ""){
            alert("Lastname must be entered");
        }

        if(email === ""){
            alert("email must be entered");
        }

        if(mobno === ""){
            alert("Mobile no must be entered");
        }

        if(dob === ""){
            alert("Date of Birth must be entered");
        }

        if(password === ""){
            alert("password must be entered");
        }

        if(address === ""){
            alert("address must be entered");
        }

        if(address2 === ""){
            alert("address2 must be entered");
        }

        if(city === ""){
            alert("city must be entered");
        }

        if(state === ""){
            alert("state must be entered");
        }

        if(pin === ""){
            alert("pin no must be entered");
        }

        if(proexp === ""){
            alert("Profession/expertise must be entered");
        }

        if(workingarea === ""){
            alert("Workin area must be entered");
        }


        $("#Firstname").val("");
        $("#Lastname").val("");

        $("#inputEmail4").val("");
        $("#Mobileno").val("");

        $("#dob").val("");
        $("#password").val("");

        $("#inputAddress").val("");
        $("#inputAddress2").val("");

        $("#inputCity").val("");
        $("#inputState").val("");
        $("#inputZip").val("");

        $("#pe").val("");
        $("#workingarea").val("");

    });

    $("#resetbtn").click(() => {

        $("#Firstname").val("");
        $("#Lastname").val("");

        $("#inputEmail4").val("");
        $("#Mobileno").val("");

        $("#dob").val("");
        $("#password").val("");

        $("#inputAddress").val("");
        $("#inputAddress2").val("");

        $("#inputCity").val("");
        $("#inputState").val("");
        $("#inputZip").val("");

        $("#pe").val("");
        $("#workingarea").val("");
    });
});