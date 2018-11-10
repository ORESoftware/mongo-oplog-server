'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var bunion_1 = require("bunion");
var url = 'mongodb://localhost';
exports.client = new mongodb_1.MongoClient(url, {
    reconnectTries: Number.MAX_VALUE,
    autoReconnect: true
});
exports.client.connect(function (err) {
    if (err)
        throw err;
    bunion_1.default.info('mongo client connected.');
});
