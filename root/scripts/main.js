let armWorkout = ["Bicep curls", "Tricep pulldown", "Skull Crusher"];
let legWorkout = ["Squat", "Deadlift", "Lunges"];
let backWorkout = ["Lat Pulldowns", "Pull-ups", "Rows"];
let chestWorkout = ["Bench press", "Incline press", "Cable Flies"];
let fullWorkout = [];

let arm = false;
let leg = false;
let back = false;
let chest = false;

function returnArms() {
    arm = !arm;

    if (arm) {
        fullWorkout.push(armWorkout);
    }
}

function returnLegs() {
    leg = !leg;

    if (leg) {
        fullWorkout.push(legWorkout);
    }
}

function returnBack() {
    back = !back;

    if (back) {
        fullWorkout.push(backWorkout);
    }
}

function returnChest() {
    chest = !chest;

    if (chest) {
        fullWorkout.push(chestWorkout);
    }
}

function generate() {
    writeFromArray(fullWorkout);
    reset();
}

function writeFromArray(arr) {
    const numOfWorkouts = 2;
    const para = document.createElement("p");

    if (arr.length == 1) {
        for (let i = 0; i < arr[0].length; i++) {
            let text = arr[0][i] + "\n";
            const node = document.createTextNode(text);
            para.appendChild(node);
            para.innerHTML += "<br>";
        }
    } else if (arr.length > 1) {
        for (let i = 0; i < arr.length; i ++) {
            for (let j = 0; j < numOfWorkouts; j++) {  
                // let index = Math.floor(Math.random() * arr[i].length);
                let text = arr[i][j];

                // arr[i].splice(index,index)

                const node = document.createTextNode(text);
                para.appendChild(node);
                para.innerHTML += "<br>";
            }
        }
    }

    const div = document.getElementById("output");
    if (div.innerHTML === "") {
        div.appendChild(para);
    }

    armWorkout = ["Bicep curls", "Tricep pulldown", "Skull Crusher"];
    legWorkout = ["Squat", "Deadlift", "Lunges"];
    backWorkout = ["Lat Pulldowns", "Pull-ups", "Rows"];
    chestWorkout = ["Bench press", "Incline press", "Cable Flies"];
}

function clearDiv() {
    const div1 = document.getElementById("output");
    div1.innerHTML = "";
    reset();
}

function reset() {
    arm = false;
    leg = false;
    chest = false;
    back = false;

    fullWorkout = [];
}