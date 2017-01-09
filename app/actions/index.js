
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

const getLocation = (address) => {
  console.log(address);
  geocodeByAddress(address, (err, { lat, lng }) => {
    if (err) {
      console.log('Oh no!', err)
    }
    console.log(`Yay! got latitude and longitude for ${address}`, { lat, lng })
    return { lat, lng };
  })
};

// submit autocomplete form
export const handleFormSubmit = (address) => {
  const location = getLocation(address).then(
    (({ lat, lng}) => { location = { lat, lng } });
  );
  return ({
    type: 'HANDLE_FORMSUBMIT',
    location,
  });
};

// when map clicked
export const handleClick = nextMarkers => ({
  type: 'HANDLE_CLICK',
  nextMarkers,
});
