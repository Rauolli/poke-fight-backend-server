const fs = require('fs');
const axios = require('axios');

// Liste der URLs der SVG-Grafiken
const urls = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';

// Funktion zum Herunterladen und Speichern einer SVG-Grafik
async function downloadAndSaveSVG(url, filename) {
    try {
        // SVG-Grafik herunterladen
        const response = await axios.get(url, { responseType: 'text' });
        const svgContent = response.data;

        // SVG-Inhalt in eine Datei speichern
        fs.writeFileSync('./imgs/' + filename, svgContent);
        console.log(`SVG successfully downloaded and saved as ${filename}.`);
    } catch (error) {
        console.error(`Error downloading or saving SVG from ${url}:`, error);
    }
}

// Funktion zum Herunterladen und Speichern mehrerer SVG-Grafiken
async function downloadSVGs(urls) {
    for (let i = 1; i < 650; i++) {
        const url = urls + `${i}.svg`;
        const filename = `${i}.svg`;
        await downloadAndSaveSVG(url, filename);
    }
}

// Aufruf der Funktion
downloadSVGs(urls);
