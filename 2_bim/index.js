const matriz = [ [1,2,3,4]
             , [5,6,7,8]
             , [9,10,11,12]
             , [13,14,15,16]];

// Calcula a primeira coluna
let coluna = 0
for(let i = 0; i < matriz.length; i++)
{
  coluna += matriz[i][0];
}
console.log('A soma da primeira coluna é', coluna)

// Calcula a primeira linha
let linha = 0
for(let i = 0; i < matriz.length; i++)
{
  linha += matriz[0][i];
}
console.log('A soma da primeira linha é', linha)


// Calcula os valores totais
let total = 0
for(let i = 0; i < matriz.length; i++)
{
  total += matriz[i][0];
  total += matriz[i][1];
  total += matriz[i][2];
  total += matriz[i][3];
}
console.log('A soma da matriz é', total)

// Calcula os valores diagonais
let diag = 0
for(let i = 0; i < matriz.length; i++)
{
  diag += matriz[i][i];
}
console.log('A soma da diagonal é', diag)
