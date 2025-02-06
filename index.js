// Get the payment ID from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const paymentId = urlParams.get('page');

fetch('data.min.json')
  .then(response => response.json())
  .then(data => {
    // Find the payment method data by ID
    const paymentData = paymentId ? data.find(item => item.id === paymentId) : data[0];
    const mainContainer = document.querySelector('.css-qtfaqv');
    const contentDiv = document.createElement('div');
    
    // Add description
    contentDiv.innerHTML = `${paymentData.description}<br><br>`;
    
    // Add sections with subtitles and contents
    paymentData.sections.forEach(section => {
      // Add subtitle
      contentDiv.innerHTML += `<b>${section.subtitle}</b>`;
      
      // Create ordered list
      const ol = document.createElement('ol');
      
      // Add list items
      section.contents.forEach(content => {
        const li = document.createElement('li');
        li.innerHTML = content;
        ol.appendChild(li);
      });
      
      contentDiv.appendChild(ol);
    });
    
    // Add note only if it exists
    if (paymentData.note) {
      contentDiv.innerHTML += `&nbsp;
        <div class=\"article-content__note\">
          <p><b>Catatan:</b> ${paymentData.note}</p>
        </div>`;
    }
    
    // Replace existing content
    mainContainer.innerHTML = '';
    mainContainer.appendChild(contentDiv);
    
    // Update title
    document.querySelector('.css-6kestm-unf-heading').textContent = paymentData.title;
  })
  .catch(error => console.error('Error loading data:', error));