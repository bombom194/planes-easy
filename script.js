// Función para agregar un nuevo plan
function addPlan() {
    const input = document.getElementById('plan-input');
    const planText = input.value.trim();

    if (planText === '') {
        alert('Por favor, ingresa un plan.');
        return;
    }

    const plansList = document.getElementById('plans');

    // Crear un nuevo elemento de lista para el plan
    const planItem = document.createElement('li');
    planItem.classList.add('plan-item');

    // Agregar el texto del plan
    const planTextNode = document.createTextNode(planText);
    planItem.appendChild(planTextNode);

    // Crear botón de eliminar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.onclick = function () {
        plansList.removeChild(planItem);
    };
    planItem.appendChild(deleteButton);

    // Agregar el nuevo plan a la lista
    plansList.appendChild(planItem);

    // Limpiar el campo de entrada
    input.value = '';
}
