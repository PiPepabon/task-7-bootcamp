document.addEventListener('DOMContentLoaded', () => {

    const origen = document.querySelector('#origen');
    origen.value = `
      <p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>
    `;
  
    const destino = document.querySelector('#destino');
  
    const buttons = document.querySelectorAll('input[type="button"], button');
  
    buttons.forEach(button => {
      button.disabled = false;
  
      if (button.id === 'btn-reemplazar') {
        button.onclick = () => {
          destino.innerHTML = origen.value;
        }
      }
  
      if (button.className.includes('btn-agregar')) {
        if (button.value.includes('5')) {
          button.onclick = () => {
            for (let i = 0; i < 5; i++) {
              destino.innerHTML += origen.value;
            }
          }
        } else if (button.value.includes('10')) {
          button.onclick = () => {
            for (let i = 0; i < 10; i++) {
              destino.innerHTML += origen.value;
            }
          }
        } else {
          button.onclick = () => {
            destino.innerHTML += origen.value;
          }
        }
      }
    });
  
    const btnVaciar = document.querySelector('.btn-vaciar');
    btnVaciar.onclick = () => {
      destino.innerHTML = '';
    }  
  
    const btnMayusculas = document.querySelector('.btn-convertir-a-mayusculas');
    btnMayusculas.onclick = () => {
      destino.innerHTML = destino.innerHTML.toUpperCase();
    }
  
    origen.addEventListener('input', () => {
      buttons.forEach(b => b.disabled = false);
    });
  
    const lis = document.querySelectorAll('li');
    lis.forEach(li => {
      li.innerHTML = '[Ok] ' + li.innerHTML;
    });
  
  });