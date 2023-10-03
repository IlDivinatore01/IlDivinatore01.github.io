import { sortBeveragesInSection, getUnitText } from './utils.js';

let sections = [];

export function initialize() {
  return new Promise((resolve, reject) => {
    // Inizializzazione del codice dell'applicazione, inclusi i gestori degli eventi
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString("default", { month: "long" });
    const currentDay = currentDate.getDate();

    const predefinedContainers = document.querySelectorAll('.beverage-section .form-group');

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

