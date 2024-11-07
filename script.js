//empiezo a crear las variables
const parrafo = document.querySelector('p');//parrafo (p)
const boton = document.querySelector('button');//la del button (boton)

//le digo que inicie a contar desde cero
let contador = 0;

//empieo a crear el evento para que el boton de (+ tenga su funcionalidad)
//y sume cada vez que le doy click
boton.addEventListener('click', () => {
  console.log('click');
  contador++;
  parrafo.textContent = contador;
});
