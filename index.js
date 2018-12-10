module.exports = function(_process) {
    const util = require('./util');
    const args = util.formatArgs(_process.argv);

    return function(callback) {
        callback(args);
    };

};
