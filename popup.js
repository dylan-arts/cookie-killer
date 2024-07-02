(function() {
  console.log('Popup script loaded!');
  class Popup {
    constructor(question) {
      this.question = question;
      this.createPopup();
    }

    createPopup() {
      console.log('Creating popup...');
      // Create the popup container
      const popupContainer = document.createElement('div');
      popupContainer.className = 'popup-container';

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
      console.log('Popup appended to body');
    }

    handleSubmit(response) {
      console.log('User response:', response);
      // Here you can handle the response, like sending it to your server
      alert('Thank you for your response!');
      this.closePopup();
    }

    closePopup() {
      const popupContainer = document.querySelector('.popup-container');
      if (popupContainer) {
        document.body.removeChild(popupContainer);
        console.log('Popup closed');
      }
    }
  }

  // Expose the Popup class globally
  window.Popup = Popup;
})();

// To ensure the Popup is created, you need to instantiate the class.
document.addEventListener('DOMContentLoaded', function() {
  new Popup('What is your favorite color?');
});
``
