// Get references to the buttons and product elements
const changeColor = document.getElementById('changeColor');
const changeHeadlines = document.getElementById('changeHeadlines');
const productCards = document.querySelectorAll('.my-card');
let isColorChanged = false;
let isHeadlinesChanged = false;
const originalHeadlines = ['Tourmaline & Eucalyptus Bar Soap', 'Tourmaline & Argan Oil Bar Soap', 'Tourmaline & Tea Tree Bar Soap', 'Tourmaline Unscented Bar Soap', 'Tourmaline & Tea Tree Bar Soap', 'Tourmaline Unscented Bar Soap', 'Tourmaline Unscented Bar Soap']

// Function to swap color of product cards 
function swapColors() {
    productCards.forEach((card, index) => {
        if (isColorChanged) {
            card.style.backgroundColor = index % 2 === 0 ? 'rgb(248, 215, 220)' : 'rgb(220, 248, 215)';
        } else {
            card.style.backgroundColor = index % 2 === 0 ? 'rgb(220, 248, 215)' : 'rgb(248, 215, 220)';
        }
    });
    isColorChanged = !isColorChanged;
}

// Function to swap headlines of product cards
function swapHeadlines() {
    productCards.forEach((card, index) => {
        const titleElement = card.querySelector('.my-card-title');
        if (!originalHeadlines[index]) {
            originalHeadlines[index]=titleElement.textContent 
        }
        if (isHeadlinesChanged) {
            titleElement.textContent = originalHeadlines[index];
        } else {
            titleElement.textContent = 'New Title';
        }
    });
    isHeadlinesChanged=!isHeadlinesChanged;
}


changeColor.addEventListener('click', swapColors);
changeHeadlines.addEventListener('click', swapHeadlines);




