const reverseGeocoder = (location) => {
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'location': location }, (results, status) => {
    if (status === 'OK') {
      if (results[0]) {
        console.log(results[0].formatted_address);
      } else {
        console.log('No results found');
      }
    } else {
      console.log('Geocoder failed due to: ' + status);
    }
    return results[0].formatted_address;
  });
};

export default reverseGeocoder;
