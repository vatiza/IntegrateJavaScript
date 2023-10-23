document.getElementById('double-btn').addEventListener('click', function () {
    const getNumberFromField = document.getElementById('input-field');
    const getStringNumber = getNumberFromField.value;
    const FieldStringConvetNumber = parseFloat(getStringNumber);


    const calculateToDouble = FieldStringConvetNumber * 2;

    const addNewElment = document.getElementById('outputli');
    const createNewLi = document.createElement('li');
    createNewLi.innerText = calculateToDouble;
    addNewElment.appendChild(createNewLi)
})

document.getElementById('triple-btn').addEventListener('click', function () {
    const getNumberFromField = document.getElementById('input-field');
    const getStringNumber = getNumberFromField.value;
    const FieldStringConvetNumber = parseFloat(getStringNumber);


    const calculateToDouble = FieldStringConvetNumber * 3;

    const addNewElment = document.getElementById('outputli');
    const createNewLi = document.createElement('li');
    createNewLi.innerText = calculateToDouble;
    addNewElment.appendChild(createNewLi)
})