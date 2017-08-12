"use strict";
const express = require('express');
const fallback = require('express-history-api-fallback');
const app = express();
const config = require('./config.json');

app.use(express.static(__dirname + '/build'));
app.use(fallback('index.html', { root: __dirname + '/build/html' }));
app.get('/', (req, res) => res.sendFile(__dirname + '/build/html/index.html'));

app.get('/api', (req, res) => res.json({ message: 'helloworld' }));

app.listen(config.port, () => console.log(`Express Server listen at port ${config.port}...`));