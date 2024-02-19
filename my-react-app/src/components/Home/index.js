import {Component} from 'react'
import Customer from '../Customer'
import {
  HomeContainer,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import './index.css'

const customers = [
    {
        id: 1,
        orderNo: '#TKNS0344551',
        orderDate: '2022-04-25',
        city: 'Lucknow',
        customerName: 'Abishekh Pandey',
        orderValue: '300.00',
    },
    {
        id: 2,
        orderNo: '#TKNS0344559',
        orderDate: '2022-05-04',
        city: 'Bangalore',
        customerName: 'Abishekh Dixit',
        orderValue: '1500.00',

    },
    {
        id: 3,
        orderNo: '#TKNS0344564',
        orderDate: '2022-05-06',
        city: 'Mumbai',
        customerName: 'Mohit Sharma',
        orderValue: '4200.00',
    },
    {
        id: 4,
        orderNo: '#TKNS0344573',
        orderDate: '2022-05-24',
        city: 'Hyderabad',
        customerName: 'Arjun Prasad',
        orderValue: '1000.00',
    }
]

class Home extends Component {

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <HomeContainer darkMode={isDarkTheme} data-testid="home">
                <SideBar />
                <div className='first-container'>
                <div className=''>
                    <p className='orders-text'>Orders x</p>
                    <p>Settings</p>
                </div>
                <ul>
                    <li>Pending</li>
                    <li>Accepted</li>
                    <li>AWB created</li>
                    <li>Ready to Ship</li>
                    <li>Shipped</li>
                    <li>Completed</li>
                    <li>Cancelled</li>
                </ul>
                </div>
                <div className='second-container'>
                    <div className=''>
                        <div className=''>
                            <button>Import Orders</button>
                            <button>Accept</button>
                            <button>Print</button>
                        </div>
                        <button>Refresh</button>
                    </div>  
                </div>
                <div className='list-container'>
                    <input type='checkbox' />
                    <p>Channel</p>
                    <p>Order No</p>
                    <p>Order Date</p>
                    <p>City</p>
                    <p>Customer Name</p>
                    <p>Order Value</p>
                    <p>Status</p>
                    <p>Operation</p>
                </div>
                <ul className=''>
                    {customers.map(customer => (
                        <Customer customerData = {customer} key={customer.id} />
                    ))}
                </ul>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home