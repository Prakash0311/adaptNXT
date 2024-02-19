import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import {IoReorderThreeOutline} from 'react-icons/io5'

import {
  NavDesktopContainer,
  NavBarDesktopContent,
  WebsiteLogo,
  OptionsContainer,
  ThemeLogo,
  ThemeButton,
  Profile,
} from './styledComponents'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onToggleTheme = () => {
        toggleTheme()
      }

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/sample11-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/sample22-img.png'

      const themeImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <NavDesktopContainer darkMode={isDarkTheme}>
          <NavBarDesktopContent>
            <Link to="/">
              <WebsiteLogo src={websiteLogo} alt="website logo" />
            </Link>
            <IoReorderThreeOutline />
            <OptionsContainer>
              <ThemeButton
                type="button"
                data-testid="theme"
                onClick={onToggleTheme}
              >
                <ThemeLogo src={themeImageURL} />
              </ThemeButton>
              <Profile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <br />
            </OptionsContainer>
          </NavBarDesktopContent>
        </NavDesktopContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
