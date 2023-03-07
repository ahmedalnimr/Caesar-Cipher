const caesarCipher = (str, shift, reverse = false) => {
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
  
      // Shift only letters, not special characters or numbers
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode((charCode - 65 + (reverse ? 26 - shift : shift)) % 26 + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode((charCode - 97 + (reverse ? 26 - shift : shift)) % 26 + 97);
      } else {
        result += str[i];
      }
    }
  
    return result;
  };
  
  const cipherButton = document.querySelector("#cipherButton");
  cipherButton.addEventListener("click", () => {
    const text = document.querySelector("#text").value;
    const shift = document.querySelector("#shiftAmount").value;
    const action = document.querySelector("#cipherAction").value;
    const cipheredText = caesarCipher(text, shift, action === "decode");
    document.querySelector("#cipheredText").value = cipheredText;
  });
  