import loadable from '@loadable/component';

import { ROUTES } from '../../data/views-schema/routes';
import { RouteSchemaType, RouteConfigType } from './routes.type';

const routes: RouteConfigType[] = [];

ROUTES.forEach((route: RouteSchemaType) => {
  const routeConfig: RouteConfigType = {
    component: loadable(() => import(`../views/${route.componentName}`)),
    exact: route.exact,
    path: route.pathToMatch,
  };

  routes.push(routeConfig);
});

export default routes;
