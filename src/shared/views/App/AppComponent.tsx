import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Switch } from 'react-router-dom';

import '../../../static/css/global.scss';
import AppStyles from './App.scss';

import Header from '../Header';
import Footer from '../Footer';
import NotFound from '../NotFound';
import routes from '../../routes';

const AppComponent: React.FC<{}> = (): JSX.Element => (
  <div className={AppStyles['wrapper']}>
    <Header />
    <section className={`padding-all-15 ${AppStyles['page-specific-content']}`}>
      <Switch>
        // TODO: Check if any type can be avoided below.
        {routes.map((
          { path, exact, component: C, ...rest }: any // eslint-disable-line @typescript-eslint/no-explicit-any
        ) => (
          <Route
            exact={exact}
            key={path}
            path={path}
            render={(props) => <C {...props} {...rest} />}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
    </section>
    <Footer />
  </div>
);

export default hot(AppComponent);
