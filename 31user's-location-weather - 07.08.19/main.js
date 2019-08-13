"use strict";

function main() {
    createUserInputBox();
    let name = document.getElementById('nameInput');
    if (window.localStorage.getItem('name') != null) {
        deleteLoginBox();
        usersLocationWeatherPage();
        otherCitiesWeather();
    } else {
        document.getElementById('loginButton').addEventListener('click', function () {
            let isChecked = document.getElementById('checkbox');
            if (isChecked.checked == true) {
                window.localStorage.setItem('name', JSON.stringify(name.value));
                deleteLoginBox();
                usersLocationWeatherPage();
                otherCitiesWeather();
            } else {
                window.sessionStorage.setItem('name', JSON.stringify(name.value));
                deleteLoginBox();
                usersLocationWeatherPage();
                otherCitiesWeather();
            }
        });
    }
}

function createUserInputBox() {
    let loginPage = document.createElement('div');
    loginPage.id = 'loginPage';
    document.body.appendChild(loginPage);

    let nameInput = document.createElement('input');
    nameInput.id = 'nameInput';
    nameInput.setAttribute('placeholder', 'name');
    loginPage.appendChild(nameInput);

    let loginButton = document.createElement('button');
    loginButton.id = 'loginButton';
    loginPage.appendChild(loginButton);
    loginButton.innerText = 'Login';

    let rememberMeCheckbox = document.createElement('input');
    rememberMeCheckbox.id = 'checkbox';
    rememberMeCheckbox.setAttribute('type', 'checkbox');

    let labelForCheckbox = document.createElement('label');
    labelForCheckbox.htmlFor = 'checkbox';

    loginPage.appendChild(labelForCheckbox);
    loginPage.appendChild(rememberMeCheckbox);
    loginPage.appendChild(document.createTextNode('  Remember Me'));
}

function deleteLoginBox() {
    let loginPage = document.getElementById('loginPage');
    document.body.removeChild(loginPage);
    let HelloUser = document.createElement('p');
    document.body.appendChild(HelloUser);
    if (window.localStorage.getItem('name') !== null) {
        let nameStr = window.localStorage.getItem('name');
        let newNameStr = nameStr.replace(/"/g, '');
        HelloUser.innerText = `Hello ${newNameStr}`;
    } else if (window.sessionStorage.getItem('name') !== null) {
        let nameStr = window.sessionStorage.getItem('name');
        let newNameStr = nameStr.replace(/"/g, '');
        HelloUser.innerText = `Hello ${newNameStr}`;
    }
}

function usersLocationWeatherPage() {
    let weatherBox = document.createElement('div');
    weatherBox.id = 'weatherBox';
    document.body.appendChild(weatherBox);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, noPermission);
    } else {
        weatherBox.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    let latitude = Math.floor(position.coords.latitude);
    let longitude = Math.floor(position.coords.longitude);
    var url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=32b777ae23bb546c5cc3f439ec42caa5`;
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url);
    oReq.send();

    oReq.addEventListener("load", function () {
        var obj = JSON.parse(this.responseText);
        console.log(obj);
        weatherBox.innerHTML = `<u>Your Location</u> <br> City: ${obj.name} <br> temp: ${Math.floor(obj.main.temp)} &#8451`;
    });
}

function noPermission() {
    weatherBox.innerHTML = "You denied permission to your location";
}

function otherCitiesWeather() {
    let weatherForFewCities = document.createElement('div');
    weatherForFewCities.id = 'weatherForFewCities';
    weatherForFewCities.setAttribute('ondrop', 'dropBack(event)');
    weatherForFewCities.setAttribute('ondragover', 'allowDrop(event)');
    document.body.appendChild(weatherForFewCities);
    weatherForFewCities.innerText = 'Other cities in the world'

    let jerusalem = document.createElement('div');
    jerusalem.id = 'Jerusalem';
    jerusalem.className = 'city';
    jerusalem.setAttribute('draggable', 'true');
    jerusalem.setAttribute('ondragstart', 'drag(event)');
    weatherForFewCities.appendChild(jerusalem);
    jerusalem.innerText = 'Jerusalem';

    let berlin = document.createElement('div');
    berlin.id = 'Berlin';
    berlin.className = 'city';
    berlin.setAttribute('draggable', 'true');
    berlin.setAttribute('ondragstart', 'drag(event)');
    weatherForFewCities.appendChild(berlin);
    berlin.innerText = 'Berlin';

    let barcelona = document.createElement('div');
    barcelona.id = 'Barcelona';
    barcelona.className = 'city';
    barcelona.setAttribute('draggable', 'true');
    barcelona.setAttribute('ondragstart', 'drag(event)');
    weatherForFewCities.appendChild(barcelona);
    barcelona.innerText = 'Barcelona';

    let london = document.createElement('div');
    london.id = 'London';
    london.className = 'city';
    london.setAttribute('draggable', 'true');
    london.setAttribute('ondragstart', 'drag(event)');
    weatherForFewCities.appendChild(london);
    london.innerText = 'London';

    let dropTo = document.createElement('div');
    dropTo.id = 'dropTo';
    dropTo.setAttribute('ondrop', 'drop(event)');
    dropTo.setAttribute('ondragover', 'allowDrop(event)');
    document.body.appendChild(dropTo);
    dropTo.innerText = 'Drop Here';
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    let parentElement = document.getElementById('dropTo');
    let cityBoxId = event.dataTransfer.getData("text");
    TempOfCity(cityBoxId);
    parentElement.appendChild(document.getElementById(cityBoxId));
}

function TempOfCity(cityName) {
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=32b777ae23bb546c5cc3f439ec42caa5`;
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url);
    oReq.send();

    oReq.addEventListener("load", function () {
        let obj = JSON.parse(this.responseText);
        let cityBoxWithTemp = document.getElementById(cityName);
        cityBoxWithTemp.innerHTML = `${obj.name} \n Temp: ${Math.floor(obj.main.temp)} &#8451`;
    });
}

function dropBack() {
    event.preventDefault();
    let parentElement = document.getElementById('weatherForFewCities');
    let cityBoxId = event.dataTransfer.getData("text");
    let cityBoxWithoutTemp = document.getElementById(cityBoxId);
    cityBoxWithoutTemp.innerText = cityBoxId;
    parentElement.appendChild(document.getElementById(cityBoxId));
}

main();
