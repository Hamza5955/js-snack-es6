/*Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const squadre = [
  {
    nome: "Juventus",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Milan",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Inter",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Atalanta",
    punti: 0,
    falli: 0,
  },
];

const j = [];

for (i = 0; i < squadre.length; i++) {
  squadre[i].punti = Math.round(Math.random() * 40);
  squadre[i].falli = Math.round(Math.random() * 50);

  const { nome, falli } = squadre[i];
  j.push({ nome, falli });
}

console.log(squadre);
console.log(j);
