'use strict';

const http = require('http');
const express = require('express');
const fs = require('fs');
const app = express();

(function initWebpack() {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack/common.config');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath,
  }));
  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
  }));
  app.use(require('body-parser').json())
  app.post('/get/users/amount', (req, res) => {  
    fs.readFile( __dirname + '/' + 'data/users.json', 'utf8', (err, data) => {
      const usersAmount = JSON.parse(data).users.length;
      res.end(JSON.stringify({ usersAmount }));
    });
  })
  app.post('/get/users', (req, res) => {
    const startIndex = req.body.startIndex;
    fs.readFile( __dirname + '/' + 'data/users.json', 'utf8', (err, data) => {
      const users = JSON.parse(data).users;
      const currentUsers = users.filter((item, index) => index >= startIndex && index < startIndex + 10)
      res.end(JSON.stringify(currentUsers));
    });
  })
  app.post('/check/email', (req, res) => {  
    const email = req.body.email; 
    fs.readFile( __dirname + '/' + 'data/users.json', 'utf8', (err, data) => {
      const users = JSON.parse(data).users;
      const isEmailUnique = users.every(item => item.email !== email)
      res.end(JSON.stringify(isEmailUnique));
    });
  })
  app.post('/check/isEmail', (req, res) => {  
    const email = req.body.email; 
    fs.readFile( __dirname + '/' + 'data/users.json', 'utf8', (err, data) => {
      const users = JSON.parse(data).users;
      const isEmail = users.some(item => item.email === email)
      res.end(JSON.stringify(isEmail));
    });
  })
  app.post('/check/user', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const lastVisit = req.body.lastVisit;
    fs.readFile( __dirname + '/' + 'data/users.json', 'utf8', (err, data) => {
      const users = JSON.parse(data).users;
      const updatedUsersBase = users.map(item => {
        if (item.email === email && item.password === password) {
          return {
            email: item.email,
            password: item.password,
            name: item.name,
            company: item.company,
            lastVisit: lastVisit
          }
        } else {
          return item
        }
      })
      const userData = updatedUsersBase.find(item => item.email === email && item.password === password) || null;
      if (userData) {
        fs.writeFile('data/users.json', JSON.stringify({ users: updatedUsersBase }), err => {
          if (err) return console.log(err);
          console.log('Wrote!');
        });
      }
      res.end(JSON.stringify(userData));
    });
  })
  app.post('/add/user', (req, res) => {  
    const user = req.body; 
    fs.readFile( __dirname + '/' + 'data/users.json', 'utf8', (err, data) => {
      const dataParse = JSON.parse(data);
      dataParse.users.push(user);
      console.log( dataParse );
      fs.writeFile('data/users.json', JSON.stringify(dataParse), err => {
        if (err) return console.log(err);
        console.log('Wrote!');
      });  
      res.end( JSON.stringify(user));
    });
  });
  app.use(express.static(__dirname + '/'));
})();

app.get(/.*/, function root(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, function onListen() {
  const address = server.address();
  console.log('Listening on: %j', address);
  console.log(' -> that probably means: http://localhost:%d', address.port);
});

