const cards = document.querySelectorAll('.skill-card');
const spotlightTitle = document.getElementById('spotlightTitle');
const spotlightEmoji = document.getElementById('spotlightEmoji');
const spotlightText = document.getElementById('spotlightText');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    cards.forEach((item) => item.classList.remove('active'));
    card.classList.add('active');
  });

  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      card.click();
    }
  });
});

const shapeModal = document.getElementById('shapeModal');
const shapeModalBtn = document.getElementById('shapeModalBtn');
const closeShapeModal = document.getElementById('closeShapeModal');
const shapeModalEmoji = document.getElementById('shapeModalEmoji');
const shapeModalTitle = document.getElementById('shapeModalTitle');
const shapeModalText = document.getElementById('shapeModalText');

const shapeFacts = [
  { skill: 'Circle', emoji: '⚪', text: 'A circle is round and has no corners.' },
  { skill: 'Square', emoji: '🟦', text: 'A square has four equal sides and four corners.' },
  { skill: 'Triangle', emoji: '🔺', text: 'A triangle has three sides and three corners.' },
  { skill: 'Rectangle', emoji: '▭', text: 'A rectangle has four sides with two long and two short.' },
  { skill: 'Star', emoji: '⭐', text: 'A star has five points and shines brightly.' },
  { skill: 'Heart', emoji: '💖', text: 'A heart is a shape that shows love and kindness.' },
  { skill: 'Oval', emoji: '🥚', text: 'An oval is like a stretched circle.' },
  { skill: 'Diamond', emoji: '🔶', text: 'A diamond has four sides and sharp corners.' },
  { skill: 'Hexagon', emoji: '⬡', text: 'A hexagon has six sides and six corners.' },
  { skill: 'Crescent', emoji: '🌙', text: 'A crescent is a curved shape like a tiny moon.' }
];

function openShapeModal(shapeData) {
  shapeModalEmoji.textContent = shapeData.emoji;
  shapeModalTitle.textContent = shapeData.skill;
  shapeModalText.textContent = shapeData.text;
  shapeModal.classList.add('visible');
  shapeModal.setAttribute('aria-hidden', 'false');
}

shapeModalBtn.addEventListener('click', () => {
  const randomShape = shapeFacts[Math.floor(Math.random() * shapeFacts.length)];
  openShapeModal(randomShape);
});

const shapeCards = document.querySelectorAll('#shapes .skill-card');
shapeCards.forEach((card) => {
  card.addEventListener('click', () => {
    openShapeModal({
      skill: card.dataset.skill,
      emoji: card.dataset.emoji,
      text: card.dataset.text
    });
  });
});

closeShapeModal.addEventListener('click', () => {
  shapeModal.classList.remove('visible');
  shapeModal.setAttribute('aria-hidden', 'true');
});

shapeModal.addEventListener('click', (event) => {
  if (event.target === shapeModal) {
    shapeModal.classList.remove('visible');
    shapeModal.setAttribute('aria-hidden', 'true');
  }
});

const animalSlides = [
  { emoji: '🐶', title: 'Dog', text: 'Dogs love to play fetch and wag their tails.' },
  { emoji: '🐱', title: 'Cat', text: 'Cats enjoy naps, whiskers, and soft purrs.' },
  { emoji: '🐦', title: 'Bird', text: 'Birds sing in the morning and fly through the sky.' },
  { emoji: '🐮', title: 'Cow', text: 'Cows graze in green fields and say moo.' },
  { emoji: '🐸', title: 'Frog', text: 'Frogs hop near ponds and love splashy water.' },
  { emoji: '🐟', title: 'Fish', text: 'Fish swim with fins and breathe underwater.' },
  { emoji: '🐻', title: 'Bear', text: 'Bears sleep through winter and love honey.' },
  { emoji: '🦁', title: 'Lion', text: 'Lions are brave and roar loudly in the jungle.' },
  { emoji: '🐎', title: 'Horse', text: 'Horses run fast and gallop across open fields.' },
  { emoji: '🐘', title: 'Elephant', text: 'Elephants use their trunks to drink and explore.' }
];

const animalIcon = document.getElementById('animalIcon');
const animalSlideTitle = document.getElementById('animalSlideTitle');
const animalSlideText = document.getElementById('animalSlideText');
const prevAnimal = document.getElementById('prevAnimal');
const nextAnimal = document.getElementById('nextAnimal');
let animalIndex = 0;

function updateAnimalSlide(index) {
  const slide = animalSlides[index];
  animalIcon.textContent = slide.emoji;
  animalSlideTitle.textContent = slide.title;
  animalSlideText.textContent = slide.text;
}

prevAnimal.addEventListener('click', () => {
  animalIndex = (animalIndex - 1 + animalSlides.length) % animalSlides.length;
  updateAnimalSlide(animalIndex);
});

nextAnimal.addEventListener('click', () => {
  animalIndex = (animalIndex + 1) % animalSlides.length;
  updateAnimalSlide(animalIndex);
});

const animalCards = document.querySelectorAll('#animals .skill-card');
animalCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    animalIndex = index;
    updateAnimalSlide(animalIndex);
  });
});

const numberVisual = document.getElementById('numberVisual');
const numberPrompt = document.getElementById('numberPrompt');
const numberFeedback = document.getElementById('numberFeedback');
const countButtons = document.querySelectorAll('.count-btn');
const numberCards = document.querySelectorAll('#numbers .skill-card');
const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let remainingNumbers = [...allNumbers];
let currentNumber = 1;
let correctAnswers = 0;

function setNumberChallenge() {
  if (remainingNumbers.length === 0) {
    currentNumber = 0;
    return;
  }

  const randomIndex = Math.floor(Math.random() * remainingNumbers.length);
  currentNumber = remainingNumbers.splice(randomIndex, 1)[0];
  numberVisual.textContent = '⭐'.repeat(currentNumber);
  numberVisual.classList.remove('celebrate');
  numberPrompt.textContent = 'How many stars do you see?';
  numberFeedback.textContent = 'Pick a number!';
  numberFeedback.style.color = '#2f5d66';
}

function advanceNumberChallenge() {
  if (correctAnswers === allNumbers.length) {
    numberPrompt.textContent = 'Good job! You are ready for the next section.';
    numberVisual.textContent = '🎉';
    numberVisual.classList.add('celebrate');
    numberFeedback.textContent = 'You counted every number correctly!';
    numberFeedback.style.color = '#2e8b57';
    countButtons.forEach((button) => {
      button.disabled = true;
      button.style.opacity = '0.5';
    });
    return;
  }

  setNumberChallenge();
}

countButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedAnswer = Number(button.dataset.answer);

    if (selectedAnswer === currentNumber) {
      correctAnswers += 1;
      numberFeedback.textContent = 'Yay! You counted correctly!';
      numberFeedback.style.color = '#2e8b57';

      if (correctAnswers === allNumbers.length) {
        advanceNumberChallenge();
      } else {
        setTimeout(() => {
          advanceNumberChallenge();
        }, 700);
      }
    } else {
      numberFeedback.textContent = 'Nice try! Count the stars again.';
      numberFeedback.style.color = '#d9534f';
    }
  });
});

numberCards.forEach((card) => {
  card.addEventListener('click', () => {
    const cardNumber = Number(card.querySelector('h3').textContent.trim());
    if (cardNumber === currentNumber) {
      correctAnswers += 1;
      numberFeedback.textContent = 'Yay! You counted correctly!';
      numberFeedback.style.color = '#2e8b57';

      if (correctAnswers === allNumbers.length) {
        advanceNumberChallenge();
      } else {
        setTimeout(() => {
          advanceNumberChallenge();
        }, 700);
      }
    } else {
      numberFeedback.textContent = 'Nice try! Count the stars again.';
      numberFeedback.style.color = '#d9534f';
    }
  });
});

advanceNumberChallenge();

const colorPreview = document.getElementById('colorPreview');
const colorFact = document.getElementById('colorFact');
const colorSwatches = document.querySelectorAll('.color-swatch');
const colorCards = document.querySelectorAll('#colors .skill-card');

const colorMap = {
  Red: '#ff6b6b',
  Blue: '#5dade2',
  Yellow: '#ffd166',
  Green: '#66d98d',
  Purple: '#b39ddb',
  Orange: '#ffb347',
  Pink: '#ff8ec7',
  Brown: '#a66a3d',
  Black: '#2f2f2f',
  White: '#f4f4f4'
};

const colorFacts = {
  Red: 'Red is warm and bright like a fire truck or a strawberry.',
  Blue: 'Blue is the color of the sky and the ocean water.',
  Yellow: 'Yellow is sunny and cheerful like a happy sunbeam.',
  Green: 'Green is fresh and leafy, like grass and trees.',
  Purple: 'Purple is a magical color like grapes and flowers.',
  Orange: 'Orange is sweet and bright like a pumpkin or a carrot.',
  Pink: 'Pink is soft and happy like a flower or a balloon.',
  Brown: 'Brown is cozy and earthy, like tree bark and chocolate.',
  Black: 'Black is dark and shiny, like a pencil or a night sky.',
  White: 'White is light and fluffy, like snow or a cloud.'
};

function applyColorChoice(colorName) {
  const hex = colorMap[colorName] || '#ffd166';
  colorPreview.style.background = `linear-gradient(135deg, ${hex}, #ffffff)`;
  colorFact.textContent = colorFacts[colorName] || 'A new color to discover!';
}

colorSwatches.forEach((swatch) => {
  swatch.addEventListener('click', () => {
    applyColorChoice(swatch.dataset.color);
  });
});

colorCards.forEach((card) => {
  card.addEventListener('click', () => {
    applyColorChoice(card.dataset.skill);
  });
});

const goTopBtn = document.getElementById('goTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    goTopBtn.classList.add('visible');
  } else {
    goTopBtn.classList.remove('visible');
  }
});

goTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
