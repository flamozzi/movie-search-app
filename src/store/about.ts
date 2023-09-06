import { Store } from '../core/core'

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo:
    'https://velog.velcdn.com/images/flamozzi/profile/25a35fbc-f5f4-4fc0-ad83-10ce51a69267/image.png',
  name: 'flamozzi / ParkJiSung',
  email: 'pjs99047@gmail.com',
  blog: 'https://velog.io/@flamozzi',
  github: 'https://github.com/flamozzi',
  repository: 'https://github.com/flamozzi/movie-search-app',
})
