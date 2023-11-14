const inputText = document.getElementById('inputText');
const processButton = document.getElementById('processButton');
const outputText = document.getElementById('outputText');
const wordList = document.getElementById('wordList');

const lastWords = [];

inputText.addEventListener('input', function() {
    const text = inputText.value.trim();
    const isValid = /^[a-zA-Z\s]*$/.test(text);
    processButton.disabled = !isValid || text === '';
});

processButton.addEventListener('click', function() {
    alert('Cargando el proceso');
    const text = inputText.value.trim().toUpperCase();

    if (isValidName(text) && lastWords.length < 3) {
        if (!lastWords.includes(text)) {
            outputText.textContent = text;
            lastWords.push(text);
            updateWordList();
        } else {
            alert('El nombre ya está en la lista');
        }
    } else {
        alert('Ingresa un nombre válido (solo letras y espacios) o has alcanzado el límite de nombres');
    }
});

function isValidName(name) {
    return /^[a-zA-Z\s]*$/.test(name);
}

function updateWordList() {
    wordList.innerHTML = '';
    lastWords.forEach(word => {
        const listItem = document.createElement('li');
        listItem.textContent = word;
        wordList.appendChild(listItem);
    });
}
