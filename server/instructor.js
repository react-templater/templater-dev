let reqs = {}
reqs.body = {
  'components': {1:"a", 2: "b", 3: "c"},
  'styles': {1:"a", 2: "b", 3: "c"},
	'build': {1:"a", 2: "b", 3: "c"}
}
module.exports = (req,res,next) => {
  let template = Object.values(reqs.body)
  let templateInstructions = []
  if(typeof(template[0]) === "object"){
    for(let i = 0; i < template.length; i++){
      templateInstructions.push(Object.values(template[i]))
    }
    templateInstructions = templateInstructions.toString()
  }
  next()
  console.log(templateInstructions)
}