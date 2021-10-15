var login_form = document.getElementById("login_form");
        var register_form = document.getElementById("register_form");
        var divider = document.getElementById("divider");

        function register(){
            login_form.style.transform = "translateX(0px)";
            register_form.style.transform = "translateX(0px)";
            divider.style.transform = "translateX(100px)";
        }

        function login(){
            login_form.style.transform = "translateX(300px)";
            register_form.style.transform = "translateX(300px)";
            divider.style.transform = "translateX(0)";
        }