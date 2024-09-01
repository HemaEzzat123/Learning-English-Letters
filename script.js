const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const keys = document.querySelectorAll(".key");
const randomButton = document.getElementById("randomButton");
const randomNumberInput = document.getElementById("randomNumberInput");
const keysContainer = document.getElementById("keysContainer");
const descriptionContainer = document.getElementById("descriptionContainer");
const image = document.getElementById("imageContainer");
// Function to hide all letters
const hideAllLetters = () => {
  keys.forEach((key) => (key.style.display = "none"));
};
hideAllLetters();

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// Function to show random letters
const showRandomLetters = (count) => {
  const shuffledLetters = [...letters];
  shuffleArray(shuffledLetters);
  const selectedLetters = shuffledLetters.slice(0, count);
  hideAllLetters();
  selectedLetters.forEach((letter) => {
    keys[letters.indexOf(letter)].style.display = "block";
  });
};

randomButton.addEventListener("click", () => {
  const number = parseInt(randomNumberInput.value);
  if (number > 26) {
    keysContainer.style.display = "none";
    image.style.display = "none";

    descriptionContainer.textContent = "Invalid number of Characters";
    descriptionContainer.style.backgroundColor = "white";
    descriptionContainer.style.color = "#a84b6e";
    descriptionContainer.style.width = "80%";
    descriptionContainer.style.height = "30px";
    descriptionContainer.style.display = "flex";
    descriptionContainer.style.alignItems = "center";
    descriptionContainer.style.justifyContent = "center";
    descriptionContainer.style.fontSize = "auto";
    descriptionContainer.style.fontWeight = "bold";
    descriptionContainer.style.marginTop = "10px";
  } else if (!isNaN(number) && number > 0 && number <= 26) {
    showRandomLetters(number);
    descriptionContainer.style.display = "none";
    keysContainer.style.display = "flex";
    image.style.display = "none";
  }
});

// Function to show letter image
const showLetterImage = (letter) => {
  letterImage.src = `images/${letter}.jpg`; // Assuming images are named as A.jpg, B.jpg, etc.
  letterImage.alt = `Image of letter ${letter}`;
  letterImage.style.display = "block";
};

keys.forEach((key) => {
  key.addEventListener("click", (event) => {
    const letter = event.target.getAttribute("data-letter");
    showLetterImage(letter);
    imageContainer.style.display = "block";
  });
});
