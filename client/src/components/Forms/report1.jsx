import React from 'react'

export default function Report1(props) {

  const { handleChange, input, setInput } = props
  return (
    <>
      <div className="uk-container report-step-1">
        <div className="uk-flex">
          <div>
            <h2 className="q1-custom">SELECT THE KIND OF ENTITY INVOLVED IN THE INCIDENT</h2>
            <hr />
            <div className="a1-rad-custom">
              <input
                onChange={e => handleChange(e)}
                className="rad-input" type="radio"
                name="entity" id="Local Government"
                value="Local Government" />
              <label htmlFor="Local Government">Local Government</label> <br />
              <input onChange={e => handleChange(e)} className="rad-input" type="radio" name="entity" id="Provincial Government" value="Provincial Government" />
              <label htmlFor="Provincial Government">Provincial Government</label> <br />
              <input onChange={e => handleChange(e)} className="rad-input" type="radio" name="entity" id="National Government" value="National Government" />
              <label htmlFor="National Government">National Government</label> <br />
              <input onChange={e => handleChange(e)} className="rad-input" type="radio" name="entity" id="Private Sector" value="Private Sector" />
              <label htmlFor="Private Sector">Private Sector</label> <br />
            </div>
          </div>
          <div>
            <div className="a2-custom">
              <h2 className="q2-custom">PLEASE CHOOSE THE LOCATION WHERE THE INCIDENT TOOK PLACE</h2>
              <hr />
              <div className="input-province">
                <label htmlFor="province">Province</label> <br />
                <input
                  style={{ height: "25px", borderRadius: "3px", backgroundColor: "#2c3e50", color: "#ffffff" }}
                  type="text"
                  name="province"
                  onChange={e => handleChange(e)}
                />
              </div>
              <br />
              <div className="input-city">
                <label htmlFor="city">City</label> <br />
                <input
                  style={{ height: "25px", borderRadius: "3px", backgroundColor: "#2c3e50", color: "#ffffff" }}
                  type="text"
                  name="city"
                  onChange={e => handleChange(e)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}