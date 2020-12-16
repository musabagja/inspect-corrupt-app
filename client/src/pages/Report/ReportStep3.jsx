import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { reportData3 } from '../../config/index'
import { gql, useMutation } from '@apollo/client';
import { reportData1, reportData2 } from '../../config/index'

function ReportStep3() {

  const MAKE_REPORT = gql`
    mutation AddReport($payload: newReport!) {
      AddReport(payload: $payload) { 
        _id 
        case 
        entity
        province
        city
        dateHappened
        description
        isDocumentProvided
        involvedPerson
        personRole
        isReported
        isKeepInTouch
        aboutInspectApp
      }
    }
  `

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
        history.push('/sign-in')
        }
    }, [])
  
  const SEND_MAIL = gql`
    mutation sendMail($payload: mailInfo!) {
      mail(payload: $payload) { message }
    }
  `

  const history = useHistory()
  const { report } = useParams()
  const data1cache = reportData1()
  const data2cache = reportData2()
  const [addReport] = useMutation(MAKE_REPORT)
  const [sendMail] = useMutation(SEND_MAIL)

  const [data3, setData3] = useState({
    isKeepInTouch: '',
    aboutInspectApp: ''
  })

  function handleChange(event) {
    const { name, value } = event.target
    setData3({
      ...data3,
      [name]: value
    })
  }

  function handleChange(event) {
    const { name, value } = event.target
    setData3({
      ...data3,
      [name]: value
    })
    console.log({
      ...data3,
      [name]: value
    });
  }

  function handleNext(e) {
    e.preventDefault()
    if (data3.isKeepInTouch && data3.aboutInspectApp) {
      const payload = { ...data1cache, ...data2cache, ...data3 }
      if (payload.isKeepInTouch === 'true') {
        sendMail({
          variables: {
            payload: {
              toReceiver: 'bagja7musa@gmail.com',
              subjectEmail: 'Report Submission',
              message: `
              <p>Your Report has been recorded, because you choose to keep in touch with us, we'll inform you any status of your report.</p>                       
              <p>
                Case: ${payload.case} <br/>
                Entity: ${payload.entity} <br/>
                Date Happened: ${payload.dateHappened} <br/>
                Location: ${payload.city}, ${payload.province} <br/>
                Description: ${payload.description} <br/>
                Involved Person: ${payload.involvedPerson}
              </p>
              `
            }
          }
        })
      }
      addReport({
        variables: { payload: payload }
      })
      history.push(`/report/${report}/4`)
    }
    else {
      console.log("Gabisa ke submit, belum diisi semua")
    }
  }

  function handleChange(event) {
    const { name, value } = event.target
    setData3({
      ...data3,
      [name]: value
    })
  }

  return (
    <div className="uk-container uk-margin-xlarge-top">
      <div className="uk-flex">
        <form>
          {/* onSubmit={(event) => onSubmitForm(event)} */}
          <h4>WE WOULD LIKE TO GET IN TOUCH WITH YOU FOR FURTHER INFORMATION</h4>
          <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label>
              <input
                onChange={(event) => handleChange(event)}
                value="true"
                className="uk-radio"
                type="radio"
                name="isKeepInTouch" /> Yes, please keep in touch with me</label>
            <label>
              <input
                onChange={(event) => handleChange(event)}
                value="false"
                className="uk-radio"
                type="radio"
                name="isKeepInTouch" /> No, please do not contact me in future</label>
          </div>
          <h4><p>PLEASE HELP US IMPROVE OUR SERVICE.</p>
            <p>HOW DID YOU LEARN ABOUT INSPECT APP?</p></h4>
          <div className="uk-margin">
            <textarea
              onChange={(event) => handleChange(event)}
              name="aboutInspectApp"
              className="uk-textarea"
              rows="5"
              placeholder="Textarea"></textarea>
          </div>
          <button onClick={e => handleNext(e)} className="uk-button uk-button-primary">Submit your report</button>
        </form>
      </div>
    </div>
  )
}

export default ReportStep3