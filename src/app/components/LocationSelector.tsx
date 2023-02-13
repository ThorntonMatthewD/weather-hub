import React from 'react';

type LocationSelectorProps = {
  zipCode: string;
  placeholder: string;
  onChange: (event: React.FormEvent<HTMLInputElement>)=>void;
}

const LocationSelector = (props: LocationSelectorProps) => {

  return (
    <>
      <label htmlFor="userZipCode">Zip Code: </label>
      <input
        value={props.zipCode}
        placeholder={props.placeholder}
        onChange={props.onChange}
        name="userZipCode"
        type="text"
        maxLength={5}
      />
    </>
  );
};

export default LocationSelector;
