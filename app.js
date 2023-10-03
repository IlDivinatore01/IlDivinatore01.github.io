import { sortBeveragesInSection, getUnitText } from './utils.js';

let sections = [];
let predefinedContainers = [];

function addPredefinedBeverages() {
  predefinedContainers.forEach(container => {
    const sectionId = container.dataset.section;
    const section = sections.find(sec => sec.id === sectionId);

    if (section) {
      const beveragesContainer = container.querySelector('.beverages-container');
      beveragesContainer.innerHTML = '';

      section.beverages.forEach(beverage => {
        const beverageDiv = document.createElement('div');
        beverageDiv.classList.add('form-group');

        const nameLabel = document.createElement('label');
        nameLabel.textContent = 'Nome Bevanda';
        nameLabel.setAttribute('for', 'beverage');

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.classList.add('beverage');
        nameInput.value = beverage.name;
        nameInput.readOnly = true;

        const quantityLabel = document.createElement('label');
        quantityLabel.textContent = 'Quantità';
        quantityLabel.setAttribute('for', 'quantity');

        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.classList.add('quantity');
        quantityInput.value = 0;

        const unitLabel = document.createElement('label');
        unitLabel.textContent = 'Unità';
        unitLabel.setAttribute('for', 'unit');

        const unitSelect = createUnitSelectElement();

        beverageDiv.appendChild(nameLabel);
        beverageDiv.appendChild(nameInput);
        beverageDiv.appendChild(quantityLabel);
        beverageDiv.appendChild(quantityInput);
        beverageDiv.appendChild(unitLabel);
        beverageDiv.appendChild(unitSelect);

        beveragesContainer.appendChild(beverageDiv);
      });
    }
  });
}

export function initialize() {
  return new Promise((resolve, reject) => {
    // Inizializzazione del codice dell'applicazione, inclusi i gestori degli eventi
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString("default", { month: "long" });
    const currentDay = currentDate.getDate();

    predefinedContainers = document.querySelectorAll('.beverage-section .form-group');

    // ... Gestori degli eventi e altre funzioni di inizializzazione ...

    // Carica il file JSON
    fetch('bevande.json')
      .then(response => response.json())
      .then(data => {
        sections = data.sections;
        addPredefinedBeverages();
        resolve(); // Risolvi la promessa quando il caricamento è completato
      })
      .catch(error => {
        console.error('Errore durante il caricamento del file JSON:', error);
        reject(error); // Reindirizza l'errore se il caricamento fallisce
      });
  });
}

// Altre funzioni di utilità, se necessarie
