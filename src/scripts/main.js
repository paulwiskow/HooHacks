function testFunction() {
    let text = document.getElementById("bodypart").value.toLowerCase();
    document.getElementById("bodypart").value = "";

    returnWorkouts(text);
}

function returnWorkouts(input) {
    const armWorkout = ["Bicep curls", "Tricep pulldown"];
    const legWorkout = ["Squat", "Deadlift", "Lunges"];
    const backWorkout = ["Lat Pulldowns", "Pull-ups", "Rows"];
    const chestWorkout = ["Bench press", "Incline press", "Cable Flies"];

    if (input == "arms") {
        writeFromArray(armWorkout);
    } else if (input == "legs") {
        writeFromArray(legWorkout);
    } else if (input == "back") {
        writeFromArray(backWorkout);
    } else if (input == "chest") {
        writeFromArray(chestWorkout);
    } else {
        returnError();
    }

}

function writeFromArray(arr) {
    const para = document.createElement("p");
    let text = "";

    for (let i = 0; i < arr.length - 1; i++) {
        text += arr[i] + ", "
    }

    text += arr[arr.length - 1];

    const node = document.createTextNode(text);
    para.appendChild(node);

    const div = document.getElementById("output");
    div.innerHTML = "";
    div.appendChild(para);
}

function returnError() {
    const div = document.getElementById("output");
    div.innerHTML = "<p>Please enter a valid input.</p>";
}

