import { shallow } from 'enzyme';
import React from 'react';

import ContactUs from './ContactUsComponent';

describe('"Contact Us" component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ContactUs />);

    expect(wrapper).toMatchSnapshot();
  });
});
