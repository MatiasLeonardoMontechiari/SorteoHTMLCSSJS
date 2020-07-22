const nombresApellidos = ["Claudia Scala", "Alarcon Yanina", "Matias Montechiari","Natalia Lopez", "Ines Labadie", "Pablo Cano", "Eliza Nakashima", "Gabriela Manti", "Rodriguez Rodolfo", "Juan Fede Marino", "Liz Mafud"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
  `${nombresApellidos[getRandomNumber(nombresApellidos.length)]}`;

const setRandomName = () => {
  document.getElementById('random-name').innerText = getRandomName();
}

document.getElementById('generate')
  .addEventListener('click', setRandomName);