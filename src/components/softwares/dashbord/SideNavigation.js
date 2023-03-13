import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'

const SideNavigation = () => {

  const user = {
    name: "Kaushal",
    action_one: "Action",
    action_two: "Action",
    action_three: "Action",
  }

  const generalSoftwares = [
    {
      nav: "Payroll Software",
      icon: <FontAwesomeIcon icon={faGauge} />,
    },
    {
      nav: "Sales Force Automation",
      icon: <FontAwesomeIcon icon={faMoneyBill} />,
    },
    {
      nav: "Billing Software",
      icon: <FontAwesomeIcon icon={faMoneyBill} />,
    },
    {
      nav: "GST Software",
      icon: <FontAwesomeIcon icon={faMoneyBill} />,
    },
    {
      nav: "Inventory Software",
      icon: <FontAwesomeIcon icon={faMoneyBill} />,
    },
    {
      nav: "Invoice Software",
      icon: <FontAwesomeIcon icon={faMoneyBill} />,
    },
    {
      nav: "Accounting Software",
      icon: <FontAwesomeIcon icon={faMoneyBill} />,
    },
    {
      nav: "E-Invoicing Software",
      icon: <FontAwesomeIcon icon={faMoneyBill} />,
    },
  ]
  const erps = [
    {
      nav:"Retail Chain Management"
    },
    {
      nav:"Supply Chain Management"
    },
    {
      nav:"ERP Software Solution"
    },
    {
      nav:"Pharma ERP Software"
    },
  ]

  const lists = generalSoftwares.map((generalSoftware) => <li><span className='me-2'>{generalSoftware.icon}</span><a href='#'>{generalSoftware.nav}</a></li>)

  return (
    <>
      <div className='payroll-nav-sidebar'>
        <div className='row'>
          <div className='container col-2 shadow'>
            <div className=' border-bottom border-dark'>
              <div className='dropdown my-3 '>
                <button className='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle="dropdown" aria-expanded="false" onClick={console.log('Clicked')}>
                  {user.name}
                </button>
                <ul className='dropdown-menu'>
                  <li>
                    <a href='#' className='m-2'>{user.action_one}</a>
                  </li>
                  <li>
                    <a href='#' className='m-2'>{user.action_two}</a>
                  </li>
                  <li>
                    <a href='#' className='m-2'>{user.action_three}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <p className='m-0 ps-2 text-muted'>Softwares</p>
              <div>
                <ul>
                  {
                    lists
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideNavigation