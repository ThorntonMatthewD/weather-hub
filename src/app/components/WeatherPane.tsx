import { connect } from 'react-redux'

import UnitsSwitcher from "./weatherWidgets/UnitsSwitcher";

type WeatherPaneProps = {
  enableFreedomUnits: boolean
};

const WeatherPane = (props: WeatherPaneProps) => {
  return <>
    <UnitsSwitcher
      enableFreedomUnits={props.enableFreedomUnits}
      onUnitsChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        console.log(e.target.value)}
      }
    />
  </>
};

export default connect(
  (state: WeatherPaneProps) => ({
    enableFreedomUnits: state.enableFreedomUnits
  })
)(WeatherPane);;
