import React from 'react'
import './TopBox.scss'
import { deals } from '../../data'
const TopBox = () => {
  return (
    <div className="topBox">
      <h2>Top Deals</h2>
      <div className='deals'>
        {
          deals.map(user => {
            return (

              <div className='deal' key={user.id}>
                <div className="user">
                  <img src={user.img} alt="" />
                  <div className="info">
                    <span>{user.username}</span>
                    <span>{user.email}</span>
                  </div>
                </div>
                <span className='amount'>${user.amount}</span>
              </div>
            )
          })
        }
      </div>


    </div>
  )
}

export default TopBox