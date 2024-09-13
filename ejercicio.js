const form = document.getElementById('numberForm');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    // Función para encontrar el menor de los tres números
    const findSmallest = (a, b, c) => (a <= b && a <= c ? a : b <= a && b <= c ? b : c);
    
    // Función para verificar si hay números iguales
    const checkEqual = (a, b, c) => (a === b && a === c) ? `Todos los números son iguales: ${a}` :
                                   (a === b) ? `El número que es igual es el: ${a}` :
                                   (b === c) ? `El número que es igual es el: ${b}` :
                                   (a === c) ? `El número que es igual es el: ${a}` : "No hay números iguales";

    // Promesa que procesa los resultados
    const promise = new Promise((resolve) => {
        const smallest = findSmallest(num1, num2, num3);
        const equalMessage = checkEqual(num1, num2, num3);
        
        resolve(`El número menor es: ${smallest}.  ${equalMessage}`);
    });

    // Manejo de la promesa y actualización del DOM
    promise
        .then(message => {
            result.textContent = message; // Mostrar el resultado en el <p>
        })
        .catch(error => result.textContent = error);
});
