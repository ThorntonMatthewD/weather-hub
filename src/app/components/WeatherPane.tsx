import UnitsSwitcher from "./weatherWidgets/UnitsSwitcher";

type WeatherPaneProps = {};

const WeatherPane = (props: WeatherPaneProps) => {
  return <>
    <UnitsSwitcher
      enableFreedomUnits={true}
      onUnitsChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        console.log(e.target.value)}
      }
    />
  </>
};

export default WeatherPane;
