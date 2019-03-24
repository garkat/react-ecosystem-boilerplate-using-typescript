import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { LOGO } from '../../../data/views-schema/header';
import HeaderStyle from './Header.scss';

const HeaderComponent: React.FC<{}> = (): JSX.Element => (
  <header
    className={`display-flex flex-items-align-center padding-all-15 ${HeaderStyle['header']}`}
  >
    <h1>
      <NavLink
        className={`width-100 ${HeaderStyle['logo']}`}
        data-test="logo"
        to={LOGO.linkToLocation}
      >
        {LOGO.name}
      </NavLink>
    </h1>
  </header>
);

export default HeaderComponent;
