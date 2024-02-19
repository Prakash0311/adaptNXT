import {Component} from 'react'
import {AiOutlineDashboard, AiFillDashboard} from 'react-icons/ai'
import {MdInventory2, MdOutlineInventory2} from 'react-icons/md'
import {LiaShippingFastSolid} from 'react-icons/lia'
import {IoShareSocialOutline} from 'react-icons/io5'
import {FaRegAddressBook} from 'react-icons/fa'
import ThemeContext from '../../context/ThemeContext'
import {
  SideBarContainer,
  OptionItem,
  OptionsContainer,
} from './styledComponents'
import './index.css'

const SideBar = () => {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const textClassName = isDarkTheme ? 'dark' : 'light'
          return (
            <SideBarContainer darkMode={isDarkTheme}>
              <OptionsContainer>
                  <OptionItem>
                    {isDarkTheme ? (
                      <AiFillDashboard className="icon" />
                    ) : (
                      <AiOutlineDashboard className="icon" />
                    )}
                    Dashboard
                  </OptionItem>
                  <OptionItem>
                    {isDarkTheme ? (
                      <MdOutlineInventory2 className="icon" />
                    ) : (
                      <MdInventory2 className="icon" />
                    )}
                    Inventory
                  </OptionItem>
                  <OptionItem>
                    <FaRegAddressBook className="icon" />
                    Orders
                  </OptionItem>
                  <OptionItem>
                    <LiaShippingFastSolid className="icon" />
                    Shipping
                  </OptionItem>
                  <OptionItem>
                    <IoShareSocialOutline className="icon" />
                    Channel
                  </OptionItem>
              </OptionsContainer>
            </SideBarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
}

export default SideBar
