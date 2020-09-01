$(document).ready(() => {

    $("button").click(() => {

        var email = $("#email").val();
        var newpassword = $("#newpassword").val();
        var retypenewpassword = $("#retypenewpassword").val();

        if(email === ""){
            $("#email").css("border-bottom","2px solid rgb(255, 148, 148)");
            alert("Enter email id");
        }

        if(newpassword === ""){
            $("#newpassword").css("border-bottom","2px solid rgb(255, 148, 148)");
            alert("Enter new password");
        }

        if(retypenewpassword === ""){
            $("#retypenewpassword").css("border-bottom","2px solid rgb(255, 148, 148)");
            alert("Re type new password");
        }

        if(newpassword !== retypenewpassword) {
            alert("password must be same !");
        }

        $("#email").val("");
        $("#newpassword").val("");
        $("#retypenewpassword").val("");

    });

    $(".form-control").mouseenter(() => {
        $(".form-control").css("border-bottom","2px solid rgb(136, 135, 135)");
    });
});