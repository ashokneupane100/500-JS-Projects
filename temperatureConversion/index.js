function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    let result;
  
    if (unit === 'C') {
      // Convert Celsius to Fahrenheit
      result = (temperatureInput * 9/5) + 32;
      document.getElementById('result').innerText = `${temperatureInput} °C = ${result.toFixed(2)} °F`;
    } else {
      // Convert Fahrenheit to Celsius
      result = (temperatureInput - 32) * 5/9;
      document.getElementById('result').innerText = `${temperatureInput} °F = ${result.toFixed(2)} °C`;
    }
  }
  