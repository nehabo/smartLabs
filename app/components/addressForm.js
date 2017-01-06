import React from 'react';

export default (props) => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <input name="stree_address" placeholder="Street Address" />
      <input name="locality" placeholder="Locality" />
      <input name="city" placeholder="City" />
      <input name="postal_code" placeholder="Postal Code" />
      <input name="state" placeholder="State" />
      <button type="submit">Confirm Location</button>
    </form>
  );
};
