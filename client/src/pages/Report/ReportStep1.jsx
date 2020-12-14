import React from 'react'
import './reportStep1.css'

export default function ReportStep1() {
  return (
    <>
    <div className="uk-container">
      <h2 className="q1-custom">SELECT THE KIND OF ENTITY INVOLVED IN THE INCIDENT</h2>
      <hr />
      <div className="a1-rad-custom">
        <input className="rad-input" type="radio" name="entity" id="Local Government" value="Local Government" />
        <label htmlFor="Local Government">Local Government</label> <br />
        <input className="rad-input" type="radio" name="entity" id="Provincial Government" value="Provincial Government" />
        <label htmlFor="Provincial Government">Provincial Government</label> <br />
        <input className="rad-input" type="radio" name="entity" id="National Government" value="National Government" />
        <label htmlFor="National Government">National Government</label> <br />
        <input className="rad-input" type="radio" name="entity" id="Private Sector" value="Private Sector" />
        <label htmlFor="Private Sector">Private Sector</label> <br />
      </div>
      <h2 className="q2-custom">PLEASE CHOOSE THE LOCATION WHERE THE INCIDENT TOOK PLACE</h2>
      <div className="a2-custom">
        <label htmlFor="province">Province</label> <br />
        <select name="province" id="province"> <br />
          <option value="">Select Province</option>
          <option value="DKI Jakarta">DKI Jakarta</option>
          <option value="Jawa Barat">Jawa Barat</option>
        </select> <br />
        <label htmlFor="city">City</label> <br />
        <select name="city" id="city"> <br />
          <option value="">Select City</option>
          <option value="Jakarta Pusat">Jakarta Pusat</option>
          <option value="Jakarta Selatan">Jakarta Selatan</option>
        </select>
      </div>
      <button className="btn-custom">Next</button>
    </div>
    </>
  )
}