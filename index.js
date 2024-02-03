const textBox = document.getElementById("textBox");
const fahrenheit = document.getElementById("toFahrenheit");
const celsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

function convert(e){
    e.preventDefault();
    const temp = Number(textBox.value);
    if(fahrenheit.checked)
        result.textContent = (temp * 1.8 + 32).toFixed(1);

    else if(celsius.checked)
        result.textContent = ((temp - 32) * (5/9)).toFixed(1);

    else
        result.textContent = "Choose one of units";
}
