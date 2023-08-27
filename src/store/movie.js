import { Store } from '../core/core'

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {},
  loading: false,
  message: 'Search for the movie title!',
})

export default store
export const searchMovies = async (page) => {
  store.state.loading = true
  store.state.page = page
  if (page === 1) {
    store.state.movies = []
    store.state.message = ''
  }
  try {
    const res = await fetch('/api/movie', {
      method: 'POST',
      body: JSON.stringify({
        title: store.state.searchText,
        page,
      }),
    })
    const { Search, totalResults, Response, Error } = await res.json()
    if (Response === 'True') {
      // prettier-ignore
      store.state.movies = [
        ...store.state.movies,
        ...Search
      ]
      store.state.pageMax = Math.ceil(Number(totalResults) / 10)
    } else {
      store.state.message = Error
      // 추가 페이지 상태(pageMax)값이 2 이상일 때 영화 목록을 가져올 수 없는 상황이 되면 상태를 초기화 하는 코드
      store.state.pageMax = 1
    }
  } catch (error) {
    console.log('searchMovies error:', error)
  } finally {
    store.state.loading = false
  }
}
export const getMovieDetails = async (id) => {
  try {
    const res = await fetch('/api/movie', {
      method: 'POST',
      body: JSON.stringify({
        id,
      }),
    })
    store.state.movie = await res.json()
  } catch (error) {
    console.log('getMovieDetails error:', error)
  }
}
