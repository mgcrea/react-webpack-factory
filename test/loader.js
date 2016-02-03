import module from 'module';
require('debug-utils');

const load = module._load;
module._load = function(request, parent) {
  if (request.match(/\.html$/)) {
    return 'foo';
  }
  return load.apply(this, arguments);
};
