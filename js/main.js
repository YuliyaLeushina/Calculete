const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const basePrice = 8000;
const inputs = document.querySelectorAll('input');
let totalPriceElement = document.querySelector('#total-price');
//радиокнопки
const radioTypes = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');
const radioCeiling = document.querySelector('input[name="ceiling"]');
const radioWalls = document.querySelector('input[name="walls"]');
const radioFloor = document.querySelector('input[name="floor"]');
//связка range с текстовым полем
//слушаем событие input

squareRange.addEventListener('input', function(){
    squareInput.value = squareRange.value;
})

//связка текстового поля с range

squareInput.addEventListener('input', function(){
    squareRange.value = squareInput.value;
})

function calculate(){
    let totalPrice = basePrice * parseInt(squareInput.value);
    const formatter = new Intl.NumberFormat('ru');
    
    for(const radio of radioTypes){
        if(radio.checked){
            totalPrice *= parseFloat(radio.value);
        }
    }
    for(const radio of radioBuilding){
        if(radio.checked){
            totalPrice *= parseFloat(radio.value);
        }
    }
    for(const radio of radioRooms){
        if(radio.checked){
            totalPrice *= parseFloat(radio.value);
        }
    }
    if(radioCeiling.checked){
        totalPrice *= parseFloat(radioCeiling.value);
    }
    if(radioWalls.checked){
        totalPrice *= parseFloat(radioWalls.value);
    }
    if(radioFloor.checked){
        totalPrice *= parseFloat(radioFloor.value);
    }
    totalPriceElement.textContent = formatter.format(totalPrice);
}
calculate();

for (const input of inputs){
    input.addEventListener('input', function(){
        calculate();
    })
}