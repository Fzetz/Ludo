// alle rutene i en array med x og y verdier
let routeValues = [];

routeValues[1] = [370, 225], // rute 1
routeValues[2] = [440, 225], // rute 2
routeValues[3] = [510, 225], // rute 3
routeValues[4] = [510, 158], // rute 4
routeValues[5] = [510, 52], // rute 5
routeValues[6] = [580, 52], // rute 5
routeValues[7] = [650, 52], // rute 6
routeValues[8] = [790, 52], // rute 7
routeValues[9] = [863, 52], // rute 8
routeValues[10] = [863, 134], // rute 9
routeValues[11] = [863, 204], // rute 10
routeValues[12] = [863, 264], // rute 11
routeValues[13] = [935, 264], // rute 12
routeValues[14] = [935, 324], // rute 13
routeValues[15] = [935, 390], // rute 14
routeValues[16] = [935, 486], // rute 15
routeValues[17] = [865, 486], // rute 16
routeValues[18] = [800, 486], // rute 17
routeValues[19] = [735, 506], // rute 18
routeValues[20] = [735, 584], // rute 19
routeValues[21] = [735, 652], // rute 20
routeValues[22] = [665, 652], // rute 21
routeValues[23] = [595, 652], // rute 22
routeValues[24] = [525, 652], // rute 23
routeValues[25] = [455, 652], // rute 24
routeValues[26] = [385, 652], // rute 25
routeValues[27] = [299, 655], // rute 26
routeValues[28] = [299, 585], // rute 27
routeValues[29] = [299, 516], // rute 28
routeValues[30] = [299, 450], // rute 29
routeValues[31] = [299, 383], // rute 30
routeValues[32] = [299, 303], // rute 31
routeValues[33] = [299, 226] // rute 32

// regler variabler
let reglerBtn = document.getElementById("reglerBtn");
let reglerContainer = document.getElementById("reglerContainer");
let reglerState = 0;

// velg karakter variabler
let charContainer = document.getElementById("charContainer");
let selectLogo = document.getElementById("selectLogo");
let none = document.getElementById("none");
let apple = document.getElementById("apple");
let win = document.getElementById("win");
let linux = document.getElementById("linux");
let android = document.getElementById("android");
let spillBtn = document.getElementById("spillBtn");

// svg Variabler
let svg = document.getElementById("svgContainer");

// mini variabler

// alle apple mini
let allAppleMini = document.getElementsByClassName("appleMini");
let appleMiniOne = document.getElementById("appleMini-1");

// alle windows mini
let allWinMini = document.getElementsByClassName("winMini");
let allLinuxMini = document.getElementsByClassName("linuxMini");
let allAndroidMini = document.getElementsByClassName("androidMini");

// velg tilfeldig for datamaskin variabel
let computerNotApple = [allWinMini, allLinuxMini, allAndroidMini];
let computerNotWin = [allAppleMini, allLinuxMini, allAndroidMini];
let computerNotLinux = [allAppleMini, allWinMini, allAndroidMini];
let computerNotAndroid = [allAppleMini, allWinMini, allLinuxMini];

let computerRandomApple = Math.floor(Math.random() * computerNotApple.length);
let computerRandomWin = Math.floor(Math.random() * computerNotWin.length);
let computerRandomLinux = Math.floor(Math.random() * computerNotLinux.length);
let computerRandomAndroid = Math.floor(Math.random() * computerNotAndroid.length);


// kast/ terning variabler
let kastBtn = document.getElementById("kastBtn");
let kastResultat = document.getElementById("kastResultat");
let terningArray = [1, 2, 3, 4, 5, 6];

// karakter bevegelse variabler
let motionState = false;

// laster opp alle funksjonenen
window.onload = oppstart => {

    reglerBtn.onclick = rulesToggle;
    spillBtn.onclick = startGame;
    kastBtn.onclick = characterMotion;
    appleMiniOne.onclick = characterMotion;

}


// en funksjon som åpner og lukker reglene
function rulesToggle () {

    // reglerState er for å sjekke om den er lukket eller åpnet

    if (reglerState == 0) {

        // viser regler
        reglerContainer.style.display = "block";
        reglerState = 1;

    } else if (reglerState == 1) {

        // viser ikke regler
        reglerContainer.style.display = "none";
        reglerState = 0;

    }

}


// en funksjon som spillerBrettet med den valgte karakteren
function startGame () {

    // når man selv har valgt karakter, så får datamaskinen en tilfeldig karakter

    if (selectLogo.value == apple.value) {

    // viser apple
        charContainer.style.display = "none";
        svg.style.display = "block";
        
        for (x of allAppleMini) {

            x.style.display = "block";

        }

        for (x of computerNotApple[computerRandomApple]) {

                x.style.display = "block";

        }
        
    } else if (selectLogo.value == win.value) {

    // viser windows
        charContainer.style.display = "none";
        svg.style.display = "block";      
        
        for (let x of allWinMini) {

            x.style.display = "block";

        }

        for (x of computerNotWin[computerRandomWin]) {

                x.style.display = "block";

        }

    } else if (selectLogo.value == linux.value) {

    // viser linux
        charContainer.style.display = "none";
        svg.style.display = "block";      
        
        for (let x of allLinuxMini) {

            x.style.display = "block";

        }

        for (x of computerNotLinux[computerRandomLinux]) {

                x.style.display = "block";

        }

    } else if (selectLogo.value == android.value) {

    // viser android
        charContainer.style.display = "none";
        svg.style.display = "block";   
        
        for (let x of allAndroidMini) {

            x.style.display = "block";

        }


        for (x of computerNotAndroid[computerRandomAndroid]) {

            x.style.display = "block";

    }

    }

}

// en funksjon som håndterer karakteren din sin bevegelse
function characterMotion (e) {

    if (e.target.id === "kastBtn" && motionState == false) {

        let kastRandom = Math.random() * terningArray.length;
        let kastFloor = Math.floor(kastRandom) + 1;

        // endrer kastResultatet sin tekst til kastFloor tallet
        kastResultat.innerHTML = kastFloor;

        console.log(kastResultat.innerHTML);
        console.log(kastFloor);

        // endrer til motionState sant for å gi tilgang til rute
        motionState = true;

    }

    if (e.target.id === "appleMini-1" && motionState == true) {

        // forandrer posisjonen til x og y koordinasjonen til karakteren
        appleMiniOne.setAttribute("cx", routeValues[kastResultat.innerHTML][0]);
        appleMiniOne.setAttribute("cy", routeValues[kastResultat.innerHTML][1]);

        // sletter alt i arrayen fra 0 til variabelen sin verdi
        console.log(routeValues.splice(1, kastResultat.innerHTML));
        console.log(routeValues);

        // endrer tilbake til usant for å gi tilgang til terningen igjen
        motionState = false;

    }

}