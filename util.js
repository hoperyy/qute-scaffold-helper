var _undefined = void 0;

module.exports = {
  	formatArgs: function (argv) {
      var obj = {}

      for (var i = 0, len = argv.length; i < len; i++) {
        if (/\=/.test(argv[i])) {
          var subArr = argv[i].split('=');

          if (subArr[1] !== _undefined && subArr[1] !== 'undefined') {
            obj[subArr[0]] = subArr[1]
          }
        }
      }

      return obj
    }
};
