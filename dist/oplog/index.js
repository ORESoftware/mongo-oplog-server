'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var oplog_rx_1 = require("oplog.rx");
var bunion_1 = require("bunion");
exports.oplog = new oplog_rx_1.ObservableOplog();
bunion_1.default.error(new Error('fooobar'));
bunion_1.default.infox({ varroooom: 'yup' }, 'shamrock');
bunion_1.default.debug('foobar is the newbar', { ron: 'jeremmaih' });
bunion_1.default.warn('foobar');
bunion_1.default.tracex({ ding: 'dong', zzz: 'zarrr', corner: 'case' }, 'foobaxxxxr');
exports.oplog.tail().then(function () {
    bunion_1.default.info('successfully started tailing the oplog.');
})
    .catch(function (err) {
    bunion_1.default.error('error while attempting to tail the oplog:', err.message || err);
});
