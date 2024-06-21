import { throttledSetItem } from './throttled-set-item.js';

const formDataKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const formDataString = localStorage.getItem(formDataKey);

if (!!formDataString) {
  const formData = JSON.parse(formDataString);
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

form.addEventListener('input', () => {
  throttledSetItem(formDataKey, JSON.stringify({ email: emailInput.value, message: messageInput.value }));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value
  };

  console.log(formData);

  emailInput.value = "";
  messageInput.value = "";

  localStorage.removeItem(formDataKey);
});
