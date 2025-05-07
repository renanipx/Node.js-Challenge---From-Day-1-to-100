require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  ignore: [/(node_modules)/],
  extensions: ['.js', '.jsx']
});
require('ignore-styles');

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./components/App.jsx').default;

const app = express();

app.get('/', (req, res) => {
  const appHtml = ReactDOMServer.renderToString(React.createElement(App));

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>SSR with Express</title>
      </head>
      <body>
        <div id="root">${appHtml}</div>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('SSR server running at http://localhost:3000');
});