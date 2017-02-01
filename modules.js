module.exports.animalSounds = [
  require('./cat').animalSound,
  require('./dog').animalSound
]

module.exports.names = [
  require('./cat').name,
  require('./dog').name
]

module.exports.speaks = [
  require('./animals').speak
]

module.exports.animals = [
  require('./animals').animals
]
