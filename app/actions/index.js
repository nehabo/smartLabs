import { geocodeByAddress } from 'react-places-autocomplete';

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

// onchange method of autocomplete
export const onChange = address => ({
  type: 'ON_CHANGE',
  address,
});

// onselect method of autocomplete
export const onSelect = address => ({
  type: 'ON_SELECT',
  address,
});

export const geocodeSuccess = (lat, lng) => ({
  type: 'ON_GEOCODESUCCESS',
  lat,
  lng,
});

export const getAddress = results => ({
  type: 'GET_ADDRESS',
  results,
});

// when map clicked
export const handleClick = nextMarkers => ({
  type: 'HANDLE_CLICK',
  nextMarkers,
});

// when form street input changed
export const handleStreetInput = street => ({
  type: 'HANDLE_STREETINPUT',
  street,
});

// when form locality input changed
export const handleLocalityInput = locality => ({
  type: 'HANDLE_LOCALITYINPUT',
  locality,
});

// when form postal code input changed
export const handlePostalInput = pincode => ({
  type: 'HANDLE_POSTALINPUT',
  pincode,
});

// handles form submission
export const handleFormSubmit = () => ({
  type: 'HANDLE_FORMSUBMIT',
});
