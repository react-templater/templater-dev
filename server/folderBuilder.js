const path = require('path')
var copy = require('recursive-copy');
module.exports = (req,res,next) => {

let froms = path.join(__dirname, './../store/template')
let tos = path.join(__dirname, './../store/polymerUI')
// function fromd(elem){
//     return path.join(__dirname, `./../store/template/${elem}`)
// }
// for(let w in req.body){
//     if(req.body[w] === 'assets'){
//         copy(fromd(w),tos, (err,result)=>{
//             if(err){console.log('Copy Failed: ' + err)}
//             else{console.info('Copied ' + result.length + ' files')}
//         })
//         console.log(fromd('w'))
//     }
// }
// if(!req.body.assets && !req.body.components && !req.body.build && req.body.style){
copy(froms, tos, function(error, results) {
   if (error) {
       console.error('Copy failed: ' + error);
   } else {
       console.info('Copied ' + results.length + ' files');
   }
   next()
});

if(req.body.assets){
    copy(fromd(w),tos, (err,result)=>{
        if(err){console.log('Copy Failed: ' + err)}
        else{console.info('Copied ' + result.length + ' files')}
    })
    console.log(fromd('w'))
}
}
// }
// assets, auuthor, build, components, name, style


// const path = require('path')
// var copy = require('recursive-copy');
// module.exports = (req,res,next) => {

// let froms = path.join(__dirname, './../store/template')
// let tos = path.join(__dirname, './../store/polymerUI')
// copy(froms, tos, function(error, results) {
//     if (error) {
//         console.error('Copy failed: ' + error);
//     } else {
//         console.info('Copied ' + results.length + ' files');
//     }
//     next()
//  });
// }