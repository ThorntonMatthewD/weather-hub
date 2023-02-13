import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  setZipCode,
  selectZipCode,
} from './../../features/user/userSlice';

import LocationSelector from '../components/LocationSelector';
import COPY from '../../COPY.json';

type HomeProps = {};

const Home = (props: HomeProps) => {
  const zipCode = useAppSelector(selectZipCode);
  const dispatch = useAppDispatch();

  return(
    <>
      <h1>Welcome to Weather Hub</h1>
      <LocationSelector
        zipCode={zipCode}
        placeholder={COPY.ZIP_CODE_PLACEHOLDER}
        onChange={(e: React.FormEvent<HTMLInputElement>) => dispatch(setZipCode(e.currentTarget.value))}
      />
    </>
  );
};

export default Home;
