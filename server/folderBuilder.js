// const path = require('path')
// var copy = require('recursive-copy');
// module.exports = (req,res,next) => {

//   let source = path.join(__dirname, './../store/template')
//   let destination = path.join(__dirname, './../store/polymerUI')
//   let assetsDir = path.join(__dirname, './../store/polymerUI/client/assets/')

//   function fromd(elem){
//       return path.join(__dirname, `./../store/options/${elem}`)
//   }

//   copy(source, destination, function(error, results) {
//     if (error ) {
//         console.error('Copy failed: ' + error);
//     } else {
//         console.info('Copied ' + results.length + ' files');
//     }
//     next()    
//   });

//   if(req.body.assets){
//     copy(fromd('assets'), assetsDir, (err,result)=>{
//         console.log(fromd("assets"), 'This is Assets')
//         if(err){console.log('Copy Failed: ' + err)}
//         else{console.info('Copied ' + result.length + ' files')}
//     })
//   }
// }
