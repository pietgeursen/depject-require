module.exports = {
  animalSound,
  name
}

function animalSound(type) {
  if(type !== 'cat') return
  return 'meow'
}

function name() {
  return 'Fluffy'  
}
