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
    






    // Start of Game code
    //Get the money box
    var moneyBox = document.getElementById("box");
    var clickBtn = document.getElementById("clickBtn");
    var resetBtn = document.getElementById("resetBtn");
    //set initial money
    var money = 0;
    var moneyPerClick = 1;


    // Update money box
    function updateMoneyBox(amount){
        moneyBox.textContent = "Money: $" + amount;
        saveGame();
        console.log("Money updated, current money is: " + money, "And game saved");
    }


    // Load game data from local storage
    function loadGame(){
        if (localStorage.getItem("money")) {
            money = parseInt(localStorage.getItem("money"));
            console.log("Loaded money from local storage: " + money);
        if (localStorage.getItem("moneyPerClick")) {
            moneyPerClick = parseInt(localStorage.getItem("moneyPerClick"));
            console.log("Loaded moneyPerClick from local storage: " + moneyPerClick);
        } else {
            console.log("no values  found in local storage, setting to defaults");
        
    }}};

    // Save game data from local storage
    function saveGame(){
        localStorage.setItem("money", money);
        localStorage.setItem("moneyPerClick", moneyPerClick);
        console.log("Game saved");
    };

    //Add money 
    function updateMoney(){
        money += moneyPerClick;
        updateMoneyBox(money * moneyPerClick);
    };

    clickBtn.addEventListener("click", function() {
        updateMoney();
        });

    //Reset game
    function resetGame(){
        money = money * 0;
        moneyPerClick = 1; 
        updateMoneyBox(money);
    };

    resetBtn.addEventListener("click", function() {
        resetGame();
    });

    loadGame();
    updateMoneyBox(money)
});



