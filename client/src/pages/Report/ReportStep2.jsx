import React, { useState } from 'react'
import { reportData2 } from '../../config/index'
import { useHistory, useParams } from 'react-router-dom'
import './reportStep2.css'

export default function ReportStep2() {

  const history = useHistory()
  const { report } = useParams()

  const [data2, setData2] = useState({
    dateHappened:'',
    description: '',
    isDocumentProvided: '',
    involvedPerson: '',
    personRole: '',
    isReported: '',
  })
  
  function handleNext() {
    if(data2.dateHappened && data2.description && data2.isDocumentProvided && data2.involvedPerson && data2.personRole && data2.isReported) {
      reportData2(data2)
      history.push(`/report/${report}/3`)
    }
    else {
      console.log("Gabisa next, harus diisi semua")
    }
  }

  function  handleChange(event) {
    const { name, value } = event.target
    setData2({
      ...data2,
      [name]: value
    })
  }


  return (
    <>
      <div className="col-1-custom">
        <h2>PLEASE DESCRIBE THE INCIDENT WITH AS MUCH DETAIL AS POSSIBLE</h2>
        <div className="q-1-sect">
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="dateHappened">When did it happen?</label> <br />
            <input onChange={(event) => handleChange(event)} value={data2.dateHappend} type="date" name="dateHappened" id="dateHappened" /> <br />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="description">What happened?</label> <br />
            <textarea onChange={(event) => handleChange(event)} value={data2.description} name="description" id="description" cols="30" rows="10"></textarea> <br />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="">Could you provide the documents?</label> <br />
            <input onChange={(event) => handleChange(event)} type="radio" name="isDocumentProvided" id="Yes" value={true} />
            <label htmlFor="Yes">Yes</label> <br />
            <input onChange={(event) => handleChange(event)} type="radio" name="isDocumentProvided" id="No" value={false} />
            <label htmlFor="No">No</label>
          </div>
        </div>
      </div>
      <div className="col-2-custom">
        <h2>CAN YOU NAME AN INDIVIDUAL, OR PROVIDE ANY INFORMATION THAT WOULD HELP IDENTIFY AN INDIVIDUAL?</h2>
        <div className="q-2-sect">
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="involvedPerson">Name(s) of the person(s) involved</label> <br />
            <textarea onChange={(event) => handleChange(event)} value={data2.involvedPerson} name="involvedPerson" id="involvedPerson" cols="30" rows="10"></textarea> <br />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="personRole">Role of the person</label> <br />
            <textarea onChange={(event) => handleChange(event)} value={data2.personRole} name="personRole" id="personRole" cols="30" rows="10"></textarea> <br />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="">Have you already reported the incident to another authority?</label> <br />
            <input onChange={(event) => handleChange(event)} type="radio" name="isReported" id="Yes-1" value={true} />
            <label htmlFor="Yes-1">Yes</label> <br />
            <input onChange={(event) => handleChange(event)} type="radio" name="isReported" id="No-1" value={false} />
            <label htmlFor="No-1">No</label>
          </div>
        </div>
        <button style={{ marginBottom: "10px" }} className="btn-custom-1" onClick={handleNext}>Next</button>
      </div>
    </>
  )
}