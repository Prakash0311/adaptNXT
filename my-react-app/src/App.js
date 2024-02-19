import './App.css'
import {Component} from 'react'
import ThemeContext from './context/ThemeContext'
import Home from './components/Home'

class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  render() {
    const {isDarkTheme} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Home />
      </ThemeContext.Provider>
    )
  }
}

export default App
