import { mount, shallow } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import App from './AppComponent';
import NotFound from '../NotFound';

describe('App component', () => {
  it('Invalid path renders "Not Found" page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(NotFound)).toHaveLength(1);

    wrapper.unmount();
  });

  it('Renders correctly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
