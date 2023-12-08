// Corrected content of loadFile.js
function loadFileContent(filename, containerId) {
    // Fetch data from the file
    fetch(filename)
        .then(response => response.text())
        .then(data => {
            // Parse the data and format it as HTML
            const formattedData = data.split('\n').map(line => `<p>${line}</p>`).join('');

            // Display the formatted data in the specified container
            document.getElementById(containerId).innerHTML = formattedData;
        })
        .catch(error => {
            console.error(`Error fetching data from ${filename}:`, error);
        });
}