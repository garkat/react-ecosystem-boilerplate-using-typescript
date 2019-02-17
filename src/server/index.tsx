import * as express from 'express';
import { resolve } from 'path';
import * as React from 'react';
import { renderToNodeStream } from 'react-dom/server';

import { PORTS } from '../data/constants/app/config';

import App from '../shared/views/App';

// Run time environment
const runTimeEnvironment = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

// Distribution path based on run time environment
const distPathPublic = resolve(
  __dirname,
  `../../../${runTimeEnvironment === 'prod' ? 'prod' : 'dev'}/public`
);

// Port - first try to use port from process environment.
// If it's not found, use it from the app config file.
// If it doesn't exist in the app config file either, use 3000.
const port = process.env.PORT || runTimeEnvironment === 'prod' ? PORTS.prod : PORTS.dev || 3000;

// Create a server
const server = express();

// Stats
let stats: {
  client: string;
  vendor: string;
};

// Please don't use runTimeEnvironment instead of process.env.NODE_ENV in the condition below.
// Webpack doesn't compile successfully.
if (process.env.NODE_ENV === 'production') {
  // @ts-ignore
  import('../../dist/prod/public/stats/manifest.json')
    .then((module) => {
      stats = {
        client: module.client,
        vendor: module.vendor,
      };
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(`Error: ${err.message}`);
    });
}

// Disable x-powered-by header
server.disable('x-powered-by');

// Serve static files from the distPath directory
server.use(
  express.static(distPathPublic, {
    // Disable directory indexing to prevent express from using index file under distPathPublic.
    index: false,
    dotfiles: 'deny',
    setHeaders(response: express.Response) {
      if (runTimeEnvironment === 'prod') {
        response.set('Cache-Control', 'public, max-age=31536000, s-maxage=31536000');
      }
    },
  })
);

// Render to node stream
server.get('*', (_: express.Request, response: express.Response) => {
  response.write(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>React ecosystem boilerplate</title>
        <meta name="description" content="React ecosystem boilerplate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="root">`);

  const stream = renderToNodeStream(<App />);

  stream.pipe(
    response,
    { end: false }
  );

  stream.on('end', () => {
    response.write(`</div>
        <script src=${runTimeEnvironment === 'prod' ? stats['client'] : 'js/client.js'}></script>
        <script src=${runTimeEnvironment === 'prod' ? stats['vendor'] : 'js/vendor.js'}></script>
      </body>
    </html>`);
    response.end();
  });
});

// Bind and listen for connections on the specified port.
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Express server listening on port ${port}`);
});
