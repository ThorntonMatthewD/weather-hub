import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  setZipCode,
  selectZipCode,
} from './../../features/user/userSlice';
import { useGetCurrentWeatherQuery } from '../../features/weatherInfo/weatherInfoAPI';

import LocationSelector from '../components/LocationSelector';
import COPY from '../../COPY.json';

type HomeProps = {};

const Home = (props: HomeProps) => {
  const zipCode = useAppSelector(selectZipCode);
  const dispatch = useAppDispatch();

  const {
    data: weatherInfo,
    isFetching,
    isLoading,
  } = useGetCurrentWeatherQuery(zipCode, {
    refetchOnMountOrArgChange: true,
    skip: false,
  })

  console.dir(process.env)

  return(
    <>
      <h1>Welcome to Weather Hub</h1>
      {isFetching && <h2>Grabbing weather info</h2>}
      {isLoading && <h2>Loading weather info</h2>}
      <LocationSelector
        zipCode={zipCode}
        placeholder={COPY.ZIP_CODE_PLACEHOLDER}
        onChange={(e: React.FormEvent<HTMLInputElement>) => dispatch(setZipCode(e.currentTarget.value))}
      />
      {weatherInfo && (
        <>
          <h2>The weather info you've requested:</h2>
          <p>{JSON.stringify(weatherInfo)}</p></>
        )
      }
    </>
  );
};

export default Home;
