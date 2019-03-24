import { shallow } from 'enzyme';
import React from 'react';

import NotFound from './NotFoundComponent';

describe('"Not Found" component', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper).toMatchSnapshot();
  });
});
