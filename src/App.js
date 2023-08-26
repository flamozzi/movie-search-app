import { Component } from './core/core'
import TheHeader from './components/TheHeader'

export default class App extends Component {
  render() {
    const theHeader = new TheHeader().el
    const routerView = document.createElement('router-view')

    // prettier-ignore
    this.el.append(
      theHeader,
      routerView
    )
  }
}
