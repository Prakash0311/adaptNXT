import './index.css'

const Customer = props => {
  const {customerData} = props
  const {orderNo,orderDate,city,customerName,orderValue} = customerData

  return (
    <li className="customer-item">
        <p>+</p>
        <input type='checkbox' />
        <img src="https://apis.ccbp.in/sample-image11" alt="customer" className="thumbnail" />
        <p className="order-no">{orderNo}</p>
        <p className="order-date">by {orderDate}</p>
        <p className='city'>{city}</p>
        <p className='customer-name'>{customerName}</p>
        <p className='order-value'>{orderValue}</p>
        <button>Pending</button>
        <button>Actions</button>
    </li>
  )
}
export default Customer
