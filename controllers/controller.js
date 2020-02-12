"use strict";
function retrieveInput(inputId) {
    return document.querySelector("#" + inputId).value;
}
function createCar(plate, brand, color) {
    var car = new Car(plate, color, brand);
    displayCarInfo(car);
    displayAddWheelsForm(car);
}
function isPlateValid(plate) {
    var pattern = new RegExp("^([0-9]{4})([A-Z]{3})$", "i");
    return pattern.test(plate);
}
function callCreateCar() {
    var plate = retrieveInput("plate");
    var brand = retrieveInput("brand");
    var color = retrieveInput("color");
    if (isPlateValid(plate)) {
        createCar(plate, brand, color);
    }
    else {
        alert("Plate number not valid, must contain four digits and three letters (i.e. 1234ABC)");
    }
}
function displayCarInfo(car) {
    var display = document.querySelector("#carInfo");
    display.innerHTML = "<p>The new car was successfully created:<p>";
    var carData = document.createElement("table");
    carData.innerHTML += "<tr><td>Plate</td> <td>" + car.plate + "</td></tr>";
    carData.innerHTML += "<tr><td>Brand</td> <td>" + car.brand + "</td></tr>";
    carData.innerHTML += "<tr><td>Color</td> <td>" + car.color + "</td></tr>";
    carData.innerHTML += "<tr><td>Wheels</td> <td><pre>" + JSON.stringify(car.wheels, undefined, 2) + "</pre></td></tr>";
    display.append(carData);
}
function isDiameterValid(diameter) {
    return diameter >= 0.4 && diameter <= 2;
}
function displayAddWheelsForm(car) {
    document.querySelector("#carForm").classList.toggle("display-none");
    document.querySelector("#wheelsForm").classList.toggle("display-none");
    document.querySelector("#addWheels").addEventListener("click", function () {
        var wheels = [];
        for (var i = 1; i <= 4; i++) {
            var brand = document.querySelector("#wheel" + i + "Brand").value;
            var diameter = parseFloat(document.querySelector("#wheel" + i + "Diameter").value);
            if (isDiameterValid(diameter)) {
                wheels.push(new Wheel(diameter, brand));
            }
            else {
                alert("Invalid diameter for wheel " + i + ". Introduce a number between 0.4 and 2");
                wheels.splice(0, wheels.length);
                break;
            }
        }
        for (var _i = 0, wheels_1 = wheels; _i < wheels_1.length; _i++) {
            var wheel = wheels_1[_i];
            car.addWheel(wheel);
        }
        displayCarInfo(car);
    });
}
