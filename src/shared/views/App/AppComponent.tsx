import * as React from 'react';
import { hot } from 'react-hot-loader/root';

import '../../../static/css/global.scss';
import styles from './App.scss';

const App: React.FC<{}> = (): JSX.Element => (
  <div className={`font-size-12 ${styles['greeting']}`}>Hello World!</div>
);

export default hot(App);
