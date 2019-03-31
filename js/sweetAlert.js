function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var name =name.toUpperCase();

    if (name===""||email===""){
            swal("OOPS!", "Somebody didnt fill all inputs", "error");
        }
        else{
        swal("Well Come! " + name ,
        "Just right on time!", "success").then(function() {
            window.location = "index2.html";
        });
        }
    }
