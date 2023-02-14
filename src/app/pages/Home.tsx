import React, { useMemo, useEffect } from 'react';
import { debounce } from 'lodash';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  setZipCode,
  selectZipCode,
} from './../../features/user/userSlice';
import { weatherAPI } from '../../features/weatherInfo/weatherInfoAPI';

import LocationSelector from '../components/LocationSelector';
import COPY from '../../COPY.json';

type HomeProps = {};

const Home = (props: HomeProps) => {
  const zipCode = useAppSelector(selectZipCode);
  const dispatch = useAppDispatch();

  const [trigger,
    {
      isFetching,
      isLoading,
      isError,
      error,
      data: weatherInfo
    }
  ] = weatherAPI.endpoints.getCurrentWeather.useLazyQuery();

  const handleZipCodeUpdate = (updatedZipCode: string) => trigger(updatedZipCode);

  const debouncedChangeHandler = useMemo(
    () => debounce(handleZipCodeUpdate, 1500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  , []);

  return(
    <>
      <h1>Welcome to Weather Hub</h1>
      {isFetching && <h2>Grabbing weather info</h2>}
      {isLoading && <h2>Loading weather info</h2>}
      {isError && <h2>{`Error: ${JSON.stringify(error)}`}</h2>}
      <LocationSelector
        zipCode={zipCode}
        placeholder={COPY.ZIP_CODE_PLACEHOLDER}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          dispatch(setZipCode(e.currentTarget.value));

          debouncedChangeHandler(e.currentTarget.value);
        }}
      />
      {weatherInfo && (
        <>
          <h2>The weather info you've requested:</h2>
          <p>{JSON.stringify(weatherInfo)}</p>
        </>
      )}
    </>
  );
};

export default Home;
