let zipFolder = require('zip-folder');
const path = require('path');

module.exports = (req,res,next) => {
    zipFolder(path.join(__dirname, './../store'), './server/templateStore/zippedFile.zip', function(err) {
        if(err) {
            console.log('oh no!', err);
        } else {
            console.log('zipped');
        };
        next();
    });
};