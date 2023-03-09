let car1 = prompt("Escreva o nome do primeiro carro:");
let vel1 = prompt("Qual é a velocidade dele?");
let car2 = prompt("Escreva o nome do segundo carro:");
let vel2 = prompt("Qual é a velocidade dele?");

if (vel1 > vel2) {
  alert(`O ${car1} é mais rápido que o ${car2}`);
} else if (vel1 < vel2) {
  alert(`O ${car2} é mais rápido que o ${car1}`);
} else {
  alert(`O ${car1} e o ${car2} tem a mesma velocidade`);
}
