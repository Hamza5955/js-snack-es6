/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const bici = [
  { nome: "bwin540", peso: 19 },
  { nome: "bwin260", peso: 70 },
  { nome: "bwin789", peso: 12 },
];

let bicileg = Number.POSITIVE_INFINITY;
let bicinomel = "";

for (let i = 0; i < bici.length; i++) {
  const variabile = bici[i];
  const { peso } = variabile;
  console.log(peso);

  var j = bici[i].peso;
  if (j < bicileg) {
    bicileg = j;
    bicinomel = bici[i].nome;
  }
}

console.log(bicinomel + " " + bicileg);
