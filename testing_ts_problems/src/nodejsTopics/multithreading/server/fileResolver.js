// not working
// it tries to compile typescript as javascript

// we can use a file resolver for to tackle filenames though. 
let fileResolver = function (filename) {
  // @ts-ignore // check if code is not running under ts-node
  if (!process[Symbol.for("ts-node.register.instance")]) {
    return filename.replace('.ts', '.js');
  }

  return filename;
}

module.exports = fileResolver;