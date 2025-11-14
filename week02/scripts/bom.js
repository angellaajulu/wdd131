// Step 1: Get references to the input, button, and list
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Step 2: Add event listener to the button
button.addEventListener('click', () => {

  // Prevent empty submissions
  if (input.value.trim() === '') {
    input.focus();
    return;
  }

  // Step 3: Create new list item and delete button
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');

  // Step 4: Populate list item with input value
  li.textContent = input.value;

  // Step 5: Add delete icon
  deleteButton.textContent = '❌';

  // Step 6: Append delete button to list item
  li.append(deleteButton);

  // Step 7: Append list item to the list
  list.append(li);

  // Step 8: Clear the input field and focus
  input.value = '';
  input.focus();

  // Step 9: Add delete functionality
  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
  });
});
