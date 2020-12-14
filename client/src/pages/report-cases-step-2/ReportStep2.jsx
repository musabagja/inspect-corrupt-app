import React from 'react'
import './style.css'

export default function ReportStep2() {
  return (
    <>
      <div className="col-1-custom">
        <h2>PLEASE DESCRIBE THE INCIDENT WITH AS MUCH DETAIL AS POSSIBLE</h2>
        <div className="q-1-sect">
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="dateHappened">When did it happen?</label> <br />
            <input type="date" name="dateHappened" id="dateHappened" /> <br />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="description">What happened?</label> <br />
            <textarea name="description" id="description" cols="30" rows="10"></textarea> <br />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="">Could you provide the documents?</label> <br />
            <input type="radio" name="isDocumentProvided" id="Yes" value="Yes" />
            <label htmlFor="Yes">Yes</label> <br />
            <input type="radio" name="isDocumentProvided" id="No" value="No" />
            <label htmlFor="No">No</label>
          </div>
        </div>
      </div>
      <div className="col-2-custom">
        <h2>CAN YOU NAME AN INDIVIDUAL, OR PROVIDE ANY INFORMATION THAT WOULD HELP IDENTIFY AN INDIVIDUAL?</h2>
        <div className="q-2-sect">
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="involvedPerson">Name(s) of the person(s) involved</label> <br />
            <textarea name="involvedPerson" id="involvedPerson" cols="30" rows="10"></textarea> <br />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="personRole">Role of the person</label> <br />
            <textarea name="personRole" id="personRole" cols="30" rows="10"></textarea> <br />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="">Have you already reported the incident to another authority?</label> <br />
            <input type="radio" name="isReported" id="Yes" value="Yes" />
            <label htmlFor="Yes">Yes</label> <br />
            <input type="radio" name="isReported" id="No" value="No" />
            <label htmlFor="No">No</label>
          </div>
        </div>
        <button style={{ marginBottom: "10px" }} className="btn-custom-1">Next</button>
      </div>
    </>
  )
}