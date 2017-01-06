// Search Function Actions
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

// Locate Me Button
export const onLocate = coords => ({
  type: 'ON_LOCATE',
  coords,
});
