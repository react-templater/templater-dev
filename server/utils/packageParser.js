const fs = require('fs');

const me = {
  name: 'Jon Project',
  author: 'Jon Roach',
};

function packageParser(options) {
  fs.readFile('./store/test/testpackage.json', 'utf8', (err, data) => {
    if (err) throw err;
    const pkg = JSON.parse(data);
    pkg.name = options.name;
    pkg.author = options.author;
    const pkgJson = JSON.stringify(pkg, null, 1);
    console.log(pkgJson);
    fs.writeFile('./store/test/testpackage.json', pkgJson, (error) => {
      if (error) throw error;
    });
  });
}

packageParser(me);
// module.exports = packageParser;
