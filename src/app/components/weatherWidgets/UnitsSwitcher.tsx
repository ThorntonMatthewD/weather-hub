
type UnitsSwitcherProps = {
  enableFreedomUnits: boolean,
  onUnitsChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>void;
};

const UnitsSwitcher = (props: UnitsSwitcherProps) => {
  return <div className="form-check form-switch">
    <input
      type="checkbox"
      role="switch"
      id="flexSwitchCheckChecked"
      checked={props.enableFreedomUnits}
    />
    <label
    className="form-check-label inline-block text-gray-800"
    htmlFor="flexSwitchCheckChecked">
      Enable Freedom Units?
    </label>
  </div>

};

export default UnitsSwitcher;
