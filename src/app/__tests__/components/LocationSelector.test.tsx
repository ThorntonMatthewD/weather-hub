import React from 'react';
import { screen, render } from '@testing-library/react';

import LocationSelector, { LocationSelectorProps } from '../../components/LocationSelector';
import COPY from '../../../data/COPY.json';

const defaultZipCode: string = "12345";
const onChange = jest.fn();

const defaultProps = {
  zipCode: defaultZipCode,
  placeholder: COPY.ZIP_CODE_PLACEHOLDER,
  onChange
};

const renderLocationSelector = (props: LocationSelectorProps = defaultProps) => {
  return render(<LocationSelector {...props} />)
};

describe('LocationSelector', () => {
  it('Default zip code appears in input', () => {
    renderLocationSelector();

    expect(screen.getByDisplayValue(defaultZipCode)).toBeInTheDocument();
  });
});
