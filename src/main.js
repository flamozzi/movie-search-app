import App from './App'
import router from './routes' // index.js 는 생략해도 됨(default)

const root = document.querySelector('#root')
root.append(new App().el)

router()
