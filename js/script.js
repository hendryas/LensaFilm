// Menggunakan Fetch
const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', function () {

	const inputKeyword = document.querySelector('#search-input');
	const movieTitle = document.querySelector('#movie-title');
	resultKeyword = inputKeyword.value;
	movieTitle.innerHTML = resultKeyword;

	fetch('http://www.omdbapi.com/?apikey=274aa182&s=' + inputKeyword.value)
		.then(response => response.json())
		.then(response => {

			const movies = response.Search;
			let cards = '';
			movies.forEach(m => cards += showCards(m));
			const movieList = document.querySelector('#movie-list');
			movieList.innerHTML = cards;

			//Ketika tombol readme diklik
			const seeDetail = document.querySelectorAll('.see-detail');
			seeDetail.forEach(btn => {
				btn.addEventListener('click', function () {
					const imdbID = this.dataset.imdbid;
					fetch('http://www.omdbapi.com/?apikey=274aa182&i=' + imdbID)
						.then(response => response.json())
						.then(m => {
							const movieDetail = showDetailMovie(m);
							const modalBody = document.querySelector('.modal-body');
							modalBody.innerHTML = movieDetail;
						});
				});
			});


		});

});

function showCards(m) {
	return `
				<div class="card card-block mx-2 border-0" style="min-width: 300px;">
					<img src="${m.Poster}" style="border-radius: 20px;" class="card-img-top shadow"
						alt="...">
					<div class="card-body">
						<p class="card-text">${m.Title}</p>
						<p class="card-text">${m.Year}</p>
						<a href="#" style="background-color: #B7DF69;"
							class="btn btn-sm text-white shadow see-detail" role="button" data-toggle="modal"
							data-target="#movieDetailModal" data-imdbid="${m.imdbID}" aria-disabled="true">Read
							More</a>
					</div>
				</div>
			`
}

function showDetailMovie(m) {
	return `
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-3">
							<img src="${m.Poster}" alt="img-detail-movie" class="img-fluid">
						</div>
						<div class="col-md">
							<ul class="list-group">
								<li class="list-group-item">
									<h3>${m.Title} (${m.Year})</h3>
								</li>
								<li class="list-group-item"> <strong>Director : </strong> ${m.Director} </li>
								<li class="list-group-item"> <strong>Actors : </strong> ${m.Actors} </li>
								<li class="list-group-item"> <strong>Writter : </strong> ${m.Writer} </li>
								<li class="list-group-item"> <strong>Plot : </strong> ${m.Plot} </li>
							</ul>
						</div>
					</div>
				</div>
			`
}

fetch('http://www.omdbapi.com/?apikey=274aa182&s=My Hero Academia')
	.then(response => response.json())
	.then(response => {

		const movies = response.Search;
		let cardsFavorit = '';
		movies.forEach(m => cardsFavorit += showCardsFavorit(m));
		const movieListFavorit = document.querySelector('#movie-list-favorit');
		movieListFavorit.innerHTML = cardsFavorit;

		//Ketika tombol readme diklik
		const seeDetailFavorit = document.querySelectorAll('.see-detail-favorit');
		seeDetailFavorit.forEach(btn => {
			btn.addEventListener('click', function () {
				const imdbID = this.dataset.imdbid;
				fetch('http://www.omdbapi.com/?apikey=274aa182&i=' + imdbID)
					.then(response => response.json())
					.then(m => {
						const movieDetail = showDetailMovie(m);
						const modalBody = document.querySelector('.modal-body');
						modalBody.innerHTML = movieDetail;
					});
			});
		});

	});

fetch('http://www.omdbapi.com/?apikey=274aa182&s=Haikyuu')
	.then(response => response.json())
	.then(response => {

		const movies = response.Search;
		let cardsFavoritSport = '';
		movies.forEach(m => cardsFavoritSport += showCardsFavoritSport(m));
		const movieListFavoritSport = document.querySelector('#movie-list-favorit-sport');
		movieListFavoritSport.innerHTML = cardsFavoritSport;

		//Ketika tombol readme diklik
		const seeDetailFavoritSport = document.querySelectorAll('.see-detail-favorit-sport');
		seeDetailFavoritSport.forEach(btn => {
			btn.addEventListener('click', function () {
				const imdbID = this.dataset.imdbid;
				fetch('http://www.omdbapi.com/?apikey=274aa182&i=' + imdbID)
					.then(response => response.json())
					.then(m => {
						const movieDetail = showDetailMovie(m);
						const modalBody = document.querySelector('.modal-body');
						modalBody.innerHTML = movieDetail;
					});
			});
		});

	});

function showCardsFavorit(m) {
	return `
				<div class="card card-block mx-2 border-0" style="min-width: 300px;">
					<img src="${m.Poster}" style="border-radius: 20px;" class="card-img-top shadow"
						alt="...">
					<div class="card-body">
						<p class="card-text">${m.Title}</p>
						<p class="card-text">${m.Year}</p>
						<a href="#" style="background-color: #B7DF69;"
							class="btn btn-sm text-white shadow see-detail-favorit" role="button" data-toggle="modal"
							data-target="#movieDetailModal" data-imdbid="${m.imdbID}" aria-disabled="true">Read
							More</a>
					</div>
				</div>
			`
}

function showCardsFavoritSport(m) {
	return `
				<div class="card card-block mx-2 border-0" style="min-width: 300px;">
					<img src="${m.Poster}" style="border-radius: 20px;" class="card-img-top shadow"
						alt="...">
					<div class="card-body">
						<p class="card-text">${m.Title}</p>
						<p class="card-text">${m.Year}</p>
						<a href="#" style="background-color: #B7DF69;"
							class="btn btn-sm text-white shadow see-detail-favorit-sport" role="button" data-toggle="modal"
							data-target="#movieDetailModal" data-imdbid="${m.imdbID}" aria-disabled="true">Read
							More</a>
					</div>
				</div>
			`
}

