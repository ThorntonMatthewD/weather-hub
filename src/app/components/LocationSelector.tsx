export type LocationSelectorProps = {
  zipCode: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>void;
}

const LocationSelector = (props: LocationSelectorProps) => {

  return (
    <>
      <input
        type="text"
        className="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="usrZipCode"
        name="userZipCode"
        placeholder={props.placeholder}
        value={props.zipCode}
        onChange={props.onChange}
        maxLength={5}
      />
    </>
  );
};

export default LocationSelector;
