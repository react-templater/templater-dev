const fs = require('fs');

function packageParser(options) {
  fs.readFile('./TBC', 'utf8', (err, data) => {
    if (err) throw err;
    const pkg = JSON.parse(data);
    pkg.name = options.name;
    pkg.author = options.author;
    const pkgJson = JSON.stringify(pkg, null, 1);
    console.log(pkgJson);
    fs.writeFile('./TBC', pkgJson, (error) => {
      if (error) throw error;
    });
  });
}

module.exports = packageParser;
