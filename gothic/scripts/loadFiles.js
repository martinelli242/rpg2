function loadItems(jsonFilePath, containerId) {
    fetch(jsonFilePath)
      .then(response => response.json())
      .then(data => {
        const itemsHTML = data.map(item => `
          <div class="item">
            <div class="item-info">
              <h2>${item.name}</h2>
              <p>${item.description}</p>
              <p>${item.stats}</p>
              <p>${item.keywords}</p>
            </div>
          </div>
        `).join('');
  
        document.getElementById(containerId).innerHTML = itemsHTML;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  