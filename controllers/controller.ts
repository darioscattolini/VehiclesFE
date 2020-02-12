function retrieveInput(inputId: string) {
    return (<HTMLInputElement>document.querySelector(`#${inputId}`)).value;
}

function createCar(plate:string, brand:string, color:string){
    let car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    displayCarInfo(car);
}

function callCreateCar() {
    const plate = retrieveInput("plate");
    const brand = retrieveInput("brand");
    const color = retrieveInput("color");
    createCar(plate, brand, color);
}

function displayCarInfo(car: Car) {
    const display = <HTMLDivElement>document.querySelector("#carInfo");
    display.innerHTML = "<p>The new car was successfully created:<p>";
    const carData = document.createElement("table");
    carData.innerHTML += `<tr><td>Plate</td> <td>${car.plate}</td></tr>`;
    carData.innerHTML += `<tr><td>Brand</td> <td>${car.brand}</td></tr>`;
    carData.innerHTML += `<tr><td>Color</td> <td>${car.color}</td></tr>`;
    carData.innerHTML += `<tr><td>Wheels</td> <td><pre>${JSON.stringify(car.wheels, undefined, 2)}</pre></td></tr>`;
    display.append(carData);
}