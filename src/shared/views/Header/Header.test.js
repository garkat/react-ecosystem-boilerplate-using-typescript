import { shallow } from 'enzyme';
import React from 'react';

import Header from './HeaderComponent';

describe('Header component', () => {
  it('renders correctly.', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});
