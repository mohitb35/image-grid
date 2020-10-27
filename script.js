const menuButton = document.getElementById('btn-menu');
const navMenu = document.getElementById('nav-menu');
const resultsGrid = document.getElementById('results-grid');

menuButton.addEventListener('click', toggleMenu);

function toggleMenu(){
	navMenu.classList.toggle('open');
	this.classList.toggle('open');
}

async function searchImages(searchTerm, pageSize = 10, currentPage = 1) {
	const searchURL = 
		`${BASE_URL}/search/photos?query=${searchTerm}
		&page=${currentPage}
		&per_page=${pageSize}
		&order_by=latest`;
	// Get image results
	const response = await fetch(searchURL,{
		method: 'GET',
		headers: {
			'Accept-Version': 'v1',
			'Authorization': `Client-ID ${UCK}`
		}
	});

	let data = await response.json();

	renderGrid(data.results);
}

// Convert image results from API to HTML and populate grid
function renderGrid(imageList) {
	const gridHTML = imageList.map(imageDetails => renderCard(imageDetails)).join('');

	resultsGrid.innerHTML = gridHTML;
}

// Generate HTML for a single card
function renderCard(imageDetails) {
	return (
		`
		<article class="result-card">
			<img class="result-image" src="${imageDetails.urls.small}">
			<h2 class="result-title">${imageDetails["alt_description"]}</h2>
		</article>
		`
	);
}


searchImages('travel');


// Get image results
// Construct image grid
// Load HTML