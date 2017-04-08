// variables for the function
    const tablesize = 4;
    const maxRows = tablesize, maxCols = tablesize;
    let qArray = [], picOpen = [];
    const totalPairs = Math.floor(maxCols*maxRows/2);
    let cnt1 = -1;

    // arrays and the images picking up
    let tableStr = "<center><table class='table1' id='table2'>";
    for (let x = 0; x < maxRows; x++) {
        tableStr+="<tr>";
        for (let y = 0; y < maxCols; y++) {
            cnt1++;
            tableStr+='<td ><img src="main.jpg" id="'+cnt1+'" /></td>';
        }
        tableStr+="</tr>";
    }
    tableStr+="</table></center>";


    document.getElementById("tableP").innerHTML = tableStr;


    let randomNums = [], rNum;
let mylet = setInterval(function(){ myTimer() }, 1000);
let timeoutHandle;
function countdown(minutes) {
    let seconds = 60;
    let mins = minutes
    function tick() {
        let counter = document.getElementById("timer");
        let current_minutes = mins-1
        seconds--;
        counter.innerHTML =
        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            timeoutHandle=setTimeout(tick, 1000);
        }

                else {

            if(mins > 1){

               // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
               setTimeout(function () { countdown(mins - 1); }, 1000);

            }
        }
    }
    tick();

}

countdown(1);
function myTimer() {
    const d = new Date();
    const t = d.toLocaleTimeString();
document.getElementById("demo2").innerHTML = "Current time   " + t;}

    // setup random numbers for the board
    for (let x = 0; x <= (maxRows*maxCols-1); x++) {
        rNum = Math.floor((Math.random() * maxCols*maxRows));
        while (randomNums.indexOf(rNum) >= 0)
            rNum = Math.floor((Math.random() * maxCols*maxRows));
        randomNums[x] = rNum;
    }


    // Chop down numbers in randomNums to have pairs
    for (let x = 0; x <= (maxRows*maxCols-1); x++) {
        if (randomNums[x] >= Math.floor(maxRows*maxCols/2)) {
            randomNums[x]-= Math.floor(maxRows*maxCols/2);
        }
        // Initialize picOpen array to all false values - this will track which cards are already open
        picOpen[x] = false;
        qArray[x] =  "" + randomNums[x] + ".jpg";
    }




    let cardsclicked = 0;


    let table2 = document.getElementById("table2");
    let pickArray = ["",""];


    table2.addEventListener("click", function(event) {
        //console.log(event.target.id);


        if (totalPairs!==0) {
            if (picOpen[event.target.id]) {
                alert("Cannot pick that element - its already done");
            } else {
                cardsclicked++;
                pickArray[cardsclicked-1] = event.target.id;
                if (cardsclicked == 2) {
                    cardsclicked = 0;
                    if (pickArray[0] == pickArray[1]) {
                        alert("Cannot pick the same two cards!!");
                    } else {
                        showPicks(pickArray);
                    }
                pickArray = [];
                }
            }
        }
    });
let mylet22;
function myFunction() {
   mylet22 = setTimeout(alertFunc, 60000);
}
    function alertFunc() {
    alert("Time Out!");
}
    function showPicks(picks) {


        console.log(picks);
        let cnt = 0;


        let intervalId = setInterval(function() {
            if (cnt == 1) {
                clearInterval(intervalId);
                if (qArray[picks[0]] != qArray[picks[1]]) {
                    document.getElementById(picks[0]).src = "main.jpg";
                    document.getElementById(picks[1]).src = "main.jpg";
                }
            } else {
                document.getElementById(picks[0]).src = qArray[picks[0]];
                document.getElementById(picks[1]).src = qArray[picks[1]];
                if (qArray[picks[0]] == qArray[picks[1]]) {
                    picOpen[picks[0]] = true;
                    picOpen[picks[1]] = true;
                    totalPairs--;
                    if (totalPairs===0) {
                        let message="You win.";
                    alert(message);
                    }
                }
                cnt++;
            }
        },800);
    }
let resetButton = document.getElementbyId('resetButton');
resetButton.onclick= reloadPage;

function reloadPage(){
   window.location.reload(true);
   window.clearTimeout(mylet);
     clearTimeout(mylet);
   window.history.forward(1);
   myFunction();
 countdown(1);
 alert("Restarted");

}