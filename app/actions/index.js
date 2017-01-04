// selection of item in multisearch bar
export const handleSelect = item => ({
  type: 'HANDLE_SELECT',
  item,
});

// removal of item in multisearch bar
export const handleRemove = item => ({
  type: 'HANDLE_REMOVE',
  item,
});

// input of test into multisearch bar
export const handleInput = userInput => ({
  type: 'HANDLE_INPUT',
  userInput,
});

// submit/bill cart items
export const handleSubmit = items => ({
  type: 'HANDLE_SUBMIT',
  items,
});

export const handleFormSubmit = event => ({
  type: 'HANDLE_FORM_SUBMIT',
  event,
});
