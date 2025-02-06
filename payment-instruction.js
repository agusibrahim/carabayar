// Payment Instruction Library
class PaymentInstruction {
  constructor() {
    this.data = null;
    this.modalContainer = null;
    this.init();
  }

  async init() {
    try {
      this.data = JSON_EMBED_HERE
    } catch (error) {
      console.error('Error loading payment instructions:', error);
    }
  }

  createModal() {
    const modal = document.createElement('div');
    modal.className = 'payment-instruction-modal';
    modal.innerHTML = `
      <div class="payment-instruction-content">
        <div class="payment-instruction-header">
          <h2></h2>
          <button class="close-button">&times;</button>
        </div>
        <div class="payment-instruction-body">
          <p class="description"></p>
          <div class="sections"></div>
        </div>
      </div>
    `;

    modal.querySelector('.close-button').addEventListener('click', () => {
      this.hideModal();
    });

    document.body.appendChild(modal);
    this.modalContainer = modal;
  }

  showModal(bankId) {
    if (!this.modalContainer) {
      this.createModal();
    }

    const instruction = this.data.find(item => item.id === bankId);
    if (!instruction) {
      console.error('Payment instruction not found for:', bankId);
      return;
    }

    const modal = this.modalContainer;
    modal.querySelector('h2').textContent = instruction.title;
    modal.querySelector('.description').textContent = instruction.description;

    const sectionsContainer = modal.querySelector('.sections');
    sectionsContainer.innerHTML = '';

    instruction.sections.forEach(section => {
      const sectionElement = document.createElement('div');
      sectionElement.className = 'css-qtfaqv';
      sectionElement.innerHTML = `
        <h3>${section.subtitle}</h3>
        <ol>
          ${section.contents.map(step => `<li>${step}</li>`).join('')}
        </ol>
      `;
      sectionsContainer.appendChild(sectionElement);
    });

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  hideModal() {
    if (this.modalContainer) {
      this.modalContainer.classList.remove('show');
      document.body.style.overflow = '';
    }
  }
}

// Initialize the library
const paymentInstruction = new PaymentInstruction();

// Global function to show payment instructions
window.showPaymentInstruction = (bankId) => {
  paymentInstruction.showModal(bankId);
};