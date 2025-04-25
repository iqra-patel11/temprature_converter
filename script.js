document.getElementById('convertBtn').addEventListener('click', function() {
    const tempInput = document.getElementById('tempInput').value;
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;
    const result = document.getElementById('result');
    
    // Validate input
    if (isNaN(tempInput) || tempInput === "") {
      result.textContent = "Please enter a valid number.";
      result.style.color = "red";
      return;
    }
  
    let convertedTemp;
  
    // Convert based on units
    if (unitFrom === "C") {
      if (unitTo === "F") {
        convertedTemp = (tempInput * 9/5) + 32;
      } else if (unitTo === "K") {
        convertedTemp = parseFloat(tempInput) + 273.15;
      } else {
        convertedTemp = tempInput;
      }
    } else if (unitFrom === "F") {
      if (unitTo === "C") {
        convertedTemp = (tempInput - 32) * 5/9;
      } else if (unitTo === "K") {
        convertedTemp = (tempInput - 32) * 5/9 + 273.15;
      } else {
        convertedTemp = tempInput;
      }
    } else if (unitFrom === "K") {
      if (unitTo === "C") {
        convertedTemp = tempInput - 273.15;
      } else if (unitTo === "F") {
        convertedTemp = (tempInput - 273.15) * 9/5 + 32;
      } else {
        convertedTemp = tempInput;
      }
    }
  
    result.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${unitTo}`;
    result.style.color = "#0072ff";
  });
  