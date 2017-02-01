var {names, animalSounds} = require('./modules')
var apply = require('./apply')

//huh, module.exports = {...} doesn't work with circ deps
module.exports.speak = speak 
module.exports.animals = animals 

function animals() {
  return apply.map(names)() 
}

function speak(type) {
  return apply.first(animalSounds)(type) 
}

