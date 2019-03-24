import { LoadableComponent } from '@loadable/component';

type ReactComponent<P> = React.ComponentClass<P> | React.SFC<P> | null;

export interface RouteSchemaType {
  componentName: string;
  exact: boolean;
  pathToMatch: string;
}

export interface RouteConfigType {
  component: LoadableComponent<ReactComponent<{}>>;
  exact: boolean;
  path: string;
}
