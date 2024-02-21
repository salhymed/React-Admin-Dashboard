import React from 'react'
import './menu.scss'
import { Link } from 'react-router-dom'
import { menu } from '../../data.js';
function Menu() {
  return (
    <div className='menu'>
      {
        menu.map(item => {
          return (
            <div className="item" key={item.id}>
              <span className='title'>{item.title}</span>
              {
                item.listItem.map(listItem => {
                  return (
                    <Link key={listItem.id} to={listItem.url} className={listItem.active ? 'listItem active' : 'listItem'}>
                      <img src={listItem.icon} alt="" />
                      <span className="listItemTitle">{listItem.title}</span>
                    </Link>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Menu