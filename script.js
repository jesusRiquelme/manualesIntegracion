const cardsPerPage = 3;
let currentPage = 1;
let filteredManuales = manuales;  // Usamos los manuales desde data.js

// Generar tarjetas dinámicamente
function generateCards(page) {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const paginatedManuales = filteredManuales.slice(start, end);

    paginatedManuales.forEach(manual => {
        const card = `
            <div class="col-md-4">
                <div class="card" onclick="window.open('${manual.url}', '_blank')" style="cursor: pointer;">
                    <div class="card-body">
                        <h5 class="card-title">${manual.nombre}</h5>
                        <p class="card-text">Tipo: ${manual.tipo}</p>
                        <p class="card-text">Fecha: ${manual.fecha}</p>
                        <p class="card-text">${manual.descripcion}</p>
                    </div>
                </div>
            </div>`;
        cardContainer.innerHTML += card;
    });
}

// Generar la paginación
function generatePagination() {
    const paginationContainer = document.getElementById('paginationContainer');
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(filteredManuales.length / cardsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageItem = `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
            </li>`;
        paginationContainer.innerHTML += pageItem;
    }
}

// Cambiar página
function changePage(page) {
    currentPage = page;
    generateCards(currentPage);
    generatePagination();
}

// Filtrar tarjetas
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase();
    filteredManuales = manuales.filter(manual => {
        return (
            manual.tipo.toLowerCase().includes(searchValue) ||
            manual.nombre.toLowerCase().includes(searchValue) ||
            manual.fecha.includes(searchValue) ||
            manual.descripcion.toLowerCase().includes(searchValue)
        );
    });
    currentPage = 1;
    generateCards(currentPage);
    generatePagination();
});

// Inicializar
generateCards(currentPage);
generatePagination();

