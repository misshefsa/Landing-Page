import React from 'react'
import style from './managesystem.module.css'
import system1 from './assets/system1.png'
import system2 from './assets/system2.png'
import system3 from './assets/system3.png'
export default function managesystem() {
  return (
   <div className="container">
    <div className="row">
        <div className={`${style.col} col-12 col-md-4 col-sm-12 `}>
            <img src={system1} alt={system1}className={`${style.systemimg}`} />
            <h5>Membership Organisations</h5>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className={`${style.col} col-12 col-md-4 col-sm-12 `}>
            <img src={system2} alt={system2}className={`${style.systemimg}`} />
            <h5>National Associations</h5>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className={`${style.col} col-12 col-md-4 col-sm-12 `}>
            <img src={system3} alt={system3} className={`${style.systemimg}`}/>
            <h5>Clubs And Groups</h5>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
    </div>
   </div>
  )
}
