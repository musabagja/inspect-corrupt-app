import React, { useState, useEffect } from 'react'
import { reportData2 } from '../../config/index'
import { useHistory, useParams } from 'react-router-dom'
import './reportStep2.css'

export default function ReportStep2() {

  const history = useHistory()
  const { report } = useParams()

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/sign-in')
    }
  }, [])

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
    <div className="uk-container">
      <div class="uk-flex report-step-2">
        <div className="side-left">
          <h3>PLEASE DESCRIBE THE INCIDENT WITH AS MUCH DETAIL AS POSSIBLE</h3>
          <div className="q-1-sect">
            <div className="uk-margin">
              <label htmlFor="dateHappened">When did it happen?</label> 
              <input onChange={(event) => handleChange(event)} value={data2.dateHappend} type="date" className="uk-input" name="dateHappened" id="dateHappened" /> 
            </div>
            <div className="uk-margin">
              <label htmlFor="description">What happened?</label> 
              <textarea className="uk-textarea" rows="5" onChange={(event) => handleChange(event)} value={data2.description} name="description" id="description"></textarea> 
            </div>
              <label htmlFor="">Could you provide the documents?</label> 
            <div className="uk-margin">
              <input className="uk-radio" onChange={(event) => handleChange(event)} type="radio" name="isDocumentProvided" id="Yes" value={true} />
              <label htmlFor="Yes">Yes</label> 
            </div>  
            <div className="uk-margin">
              <input className="uk-radio" onChange={(event) => handleChange(event)} type="radio" name="isDocumentProvided" id="No" value={false} />
              <label htmlFor="No">No</label>
            </div>
          </div>
        </div>
        <div className="side-right">
        <h3>CAN YOU NAME AN INDIVIDUAL, OR PROVIDE ANY INFORMATION THAT WOULD HELP IDENTIFY AN INDIVIDUAL?</h3>
        <div className="q-2-sect">
          <div className="uk-margin">
            <label htmlFor="involvedPerson">Name(s) of the person(s) involved</label> 
            <textarea className="uk-textarea" onChange={(event) => handleChange(event)} value={data2.involvedPerson} name="involvedPerson" id="involvedPerson" rows="5"></textarea> 
          </div>
          <div className="uk-margin">
            <label htmlFor="personRole">Role of the person</label> 
            <textarea className="uk-textarea" onChange={(event) => handleChange(event)} value={data2.personRole} name="personRole" id="personRole" rows="5"></textarea> 
          </div>
          <label htmlFor="">Have you already reported the incident to another authority?</label> 
          <div className="uk-margin">
            <input className="uk-radio" onChange={(event) => handleChange(event)} type="radio" name="isReported" id="Yes" value={true} />
            <label htmlFor="Yes">Yes</label> 
           </div>
           <div className="uk-margin"> 
            <input className="uk-radio" onChange={(event) => handleChange(event)} type="radio" name="isReported" id="No" value={false} />
            <label htmlFor="No">No</label>
{/* <!--           <div style={{ marginBottom: "10px" }}>
            <label htmlFor="">Have you already reported the incident to another authority?</label> <br />
            <input onChange={(event) => handleChange(event)} type="radio" name="isReported" id="Yes-1" value={true} />
            <label htmlFor="Yes-1">Yes</label> <br />
            <input onChange={(event) => handleChange(event)} type="radio" name="isReported" id="No-1" value={false} />
            <label htmlFor="No-1">No</label> --> */}
          </div>
        </div>
        <button className="btn-next" style={{borderRadius: 0}} onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  )
}