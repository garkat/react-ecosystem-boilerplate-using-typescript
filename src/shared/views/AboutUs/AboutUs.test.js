import { shallow } from 'enzyme';
import React from 'react';

import AboutUs from './AboutUsComponent';

describe('"About Us" component', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<AboutUs />);

    expect(wrapper).toMatchSnapshot();
  });
});
