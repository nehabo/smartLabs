export const handleSelect = item => ({
  type: 'HANDLE_SELECT',
  item,
});

export const handleRemove = item => ({
  type: 'HANDLE_REMOVE',
  item,
});

export const handleInput = userInput => ({
  type: 'HANDLE_INPUT',
  userInput,
});
