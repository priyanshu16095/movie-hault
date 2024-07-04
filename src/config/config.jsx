export const API_KEY = '339e999de85d751bc7d76de4cbe5b857'
export const API_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzllOTk5ZGU4NWQ3NTFiYzdkNzZkZTRjYmU1Yjg1NyIsIm5iZiI6MTcxOTk1MTE4MC43ODcwNzQsInN1YiI6IjY2N2M3ZGI2YzY0ZWMwMTVmYTU1N2VlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.92svOFvAEYHSH_mYgtUwDPYuF60qSmtcaP1sA7ld21c'

export const img_300 = 'https://image.tmdb.org/t/p/w300'
export const img_500 = 'https://image.tmdb.org/t/p/w500'

export const unavailable = 'https://www.movienewz.com/img/films/poster-holder.jpg'
export const unavailable_landscape = 'https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f8'
export const no_picture = 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'

export const trending_url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
export const movies_url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
export const tv_url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`
export const genre_url = (type) => `https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}`

// https://api.themoviedb.org/3/discover/movie?api_key=339e999de85d751bc7d76de4cbe5b857&language=en-US&sort_by=popularity.desc 

// Give an array of genres
// https://api.themoviedb.org/3/genre/movie/list?api_key=339e999de85d751bc7d76de4cbe5b857


// https://api.themoviedb.org/3/movie/550?api_key=339e999de85d751bc7d76de4cbe5b857

// https://image.tmdb.org/t/p/w300/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg?api_key=339e999de85d751bc7d76de4cbe5b857