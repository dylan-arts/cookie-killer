(function() {
  class Popup {
    constructor(question) {
      this.question = question;
      this.createPopup();
    }

    createPopup() {
      // Create the popup container
      const popupContainer = document.createElement('div');
      popupContainer.style.position = 'fixed';
      popupContainer.style.top = '50%';
      popupContainer.style.left = '50%';
      popupContainer.style.transform = 'translate(-50%, -50%)';
      popupContainer.style.padding = '20px';
      popupContainer.style.backgroundColor = 'white';
      popupContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
      popupContainer.style.zIndex = '1000';
      popupContainer.style.display = 'flex';
      popupContainer.style.flexDirection = 'column';
      popupContainer.style.alignItems = 'center';
      popupContainer.style.justifyContent = 'center';

      // Create the question text
      const questionText = document.createElement('p');
      questionText.textContent = this.question;
      popupContainer.appendChild(questionText);

      // Create the input field
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.placeholder = 'Enter your response here...';
      popupContainer.appendChild(inputField);

      // Create the submit button
      const submitButton = document.createElement('button');
      submitButton.textContent = 'Submit';
      submitButton.style.marginTop = '10px';
      submitButton.addEventListener('click', () => this.handleSubmit(inputField.value));
      popupContainer.appendChild(submitButton);

      // Append the popup container to the body
      document.body.appendChild(popupContainer);
    }

    handleSubmit(response) {
      console.log('User response:', response);
      // Here you can handle the response, like sending it to your server
      alert('Thank you for your response!');
      this.closePopup();
    }

    closePopup() {
      const popupContainer = document.querySelector('div');
      if (popupContainer) {
        document.body.removeChild(popupContainer);
      }
    }
  }

  // Expose the Popup class globally
  window.Popup = Popup;
})();
