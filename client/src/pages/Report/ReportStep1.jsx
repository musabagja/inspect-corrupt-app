import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { reportData1 } from '../../config'
import './reportStep1.css'

export default function ReportStep1() {

  const { report } = useParams()
  const [data1, setData1] = useState({
    case: report.split("-").join(" "),
    entity: "",
    province: "",
    city: ""
  })
  const history = useHistory()

  function handleNext() {
    reportData1(data1)
    history.push(`/report/${report}/2`)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setData1({
      ...data1,
      [name]: value
    })
  }

  return (
    <>
      <div className="uk-container">
        <h2 className="q1-custom">SELECT THE KIND OF ENTITY INVOLVED IN THE INCIDENT</h2>
        <hr />
        <div className="a1-rad-custom">
          <input onChange={e => handleChange(e)} className="rad-input" type="radio" name="entity" id="Local Government" value="Local Government" />
          <label htmlFor="Local Government">Local Government</label> <br />
          <input onChange={e => handleChange(e)} className="rad-input" type="radio" name="entity" id="Provincial Government" value="Provincial Government" />
          <label htmlFor="Provincial Government">Provincial Government</label> <br />
          <input onChange={e => handleChange(e)} className="rad-input" type="radio" name="entity" id="National Government" value="National Government" />
          <label htmlFor="National Government">National Government</label> <br />
          <input onChange={e => handleChange(e)} className="rad-input" type="radio" name="entity" id="Private Sector" value="Private Sector" />
          <label htmlFor="Private Sector">Private Sector</label> <br />
        </div>
        <h2 className="q2-custom">PLEASE CHOOSE THE LOCATION WHERE THE INCIDENT TOOK PLACE</h2>
        <div className="a2-custom">
          <label htmlFor="province">Province</label> <br />
          <input
            style={{ height: "25px", borderRadius: "3px", backgroundColor: "#2c3e50", color: "#ffffff" }}
            type="text"
            name="province"
            onChange={e => handleChange(e)}
          />
          <br />
          <label htmlFor="city">City</label> <br />
          <input
            style={{ height: "25px", borderRadius: "3px", backgroundColor: "#2c3e50", color: "#ffffff" }}
            type="text"
            name="city"
            onChange={handleChange}
          />
        </div>
        <button style={{ borderRadius: "3px" }} className="btn-custom" onClick={handleNext}>Next</button>
      </div>
    </>
  )
}