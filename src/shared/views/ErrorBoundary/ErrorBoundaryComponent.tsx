import * as React from 'react';

import { ErrorBoundaryComponentStateInterface, ErrorInfoInterface } from './ErrorBoundaryType';

class ErrorBoundaryComponent extends React.Component<{}, ErrorBoundaryComponentStateInterface> {
  public readonly state: Readonly<ErrorBoundaryComponentStateInterface> = {
    hasError: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_error: Error): ErrorBoundaryComponentStateInterface {
    return {
      hasError: true,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfoInterface): void {
    // TODO: Add a development envionment check for the following console.log statement,
    // and use a logger such as winston.
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  public render(): React.ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <section className="display-flex flex-items-align-center flex-items-justify-content-center font-size-18 height-100vh">
          <h1>Something went wrong. Please refresh the page, and try again.</h1>
        </section>
      );
    }

    return children;
  }
}

export default ErrorBoundaryComponent;
