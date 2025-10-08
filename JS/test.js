document.addEventListener('DOMContentLoaded', function() {
    // Show that the script was loaded
    console.log("Script loaded");
    // Get the reference to neccessary variables
    var toggleMode_btn = document.getElementById("mode");
    var body = document.body;
    var rootStyle = document.documentElement.style;

    //set initial mode
    var mode = "light";

    // Get mode from local storage then set it if it exists and if its not then keep it as light
    if (localStorage.getItem("mode")) {
        mode = localStorage.getItem("mode");
        console.log("Grabbed mode from local storage: " + mode);
    }


    // Apply the mode
    function setMode(){
        if (mode == "light") {
            console.log("Setting mode to light");

            rootStyle.setProperty('--bg-color', 'white');
            rootStyle.setProperty('--text-color', 'black');
            console.log("Current mode was set to: " + mode);
            toggleMode_btn.textContent = "Light Mode";

    }else if (mode == "dark") {
            console.log("Setting mode to dark");

            rootStyle.setProperty('--bg-color', 'black');
            rootStyle.setProperty('--text-color', 'white');
            console.log("Current mode was set to: " + mode);
            toggleMode_btn.textContent = "Dark Mode";
        }else{
            console.log("Mode was not set to neither light or dark, something went wrong mode is: " + mode);
        }
    }

    //call setMode to apply the mode on page load
    setMode();

    // when button is clicked
    toggleMode_btn.addEventListener("click", function() {
        // switch mode
        if (mode == "light") {
            mode = "dark";
            localStorage.setItem("mode", "dark");
        } else if (mode == "dark") {                    //save mode to local storage then call setMode to apply the mode
            mode = "light";
            localStorage.setItem("mode", "light");
        }
        setMode();
        console.log("Mode is: " + mode, "and has been saved to local storage");
    }
    );
});



