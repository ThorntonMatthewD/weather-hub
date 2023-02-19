import { TextField } from '@mui/material';

export type LocationSelectorProps = {
  zipCode: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>void;
}

const LocationSelector = (props: LocationSelectorProps) => {

  return (
    <>
      <TextField
        id="zip-code-input"
        label="U.S. Zip Code"
        variant="outlined"
        value={props.zipCode}
        placeholder={props.placeholder}
        onChange={props.onChange}
        name="userZipCode"
        inputProps={{ maxLength: 5 }}
        autoFocus
      />
    </>
  );
};

export default LocationSelector;
