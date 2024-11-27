// Function to convert number to words
function numberToWords(number) {
  const units = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const teens = [
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  const thousands = ["", "Thousand", "Million", "Billion"];

  if (number === 0) return "Zero";

  let word = "";
  let i = 0;

  while (number > 0) {
    let chunk = number % 1000;
    if (chunk > 0) {
      word = `${convertChunk(chunk)} ${thousands[i]} ${word}`;
    }
    number = Math.floor(number / 1000);
    i++;
  }

  return word.trim();

  function convertChunk(chunk) {
    let chunkWord = "";

    if (chunk > 99) {
      chunkWord += `${units[Math.floor(chunk / 100)]} Hundred `;
      chunk %= 100;
    }
    if (chunk > 10 && chunk < 20) {
      chunkWord += `${teens[chunk - 11]} `;
    } else {
      chunkWord += `${tens[Math.floor(chunk / 10)]} `;
      chunkWord += `${units[chunk % 10]} `;
    }
    return chunkWord.trim();
  }
}

// Handle form submission
document.getElementById("convertForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const numberInput = document.getElementById("numberInput").value;
  const number = parseInt(numberInput, 10);

  if (isNaN(number) || number < 0) {
    document.getElementById("result").textContent =
      "Please enter a valid positive number.";
  } else {
    document.getElementById("result").textContent = numberToWords(number);
  }
});
