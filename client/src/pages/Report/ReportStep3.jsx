
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { reportData3 } from '../../config/index'
import { gql, useMutation } from '@apollo/client';
import { reportData1, reportData2 } from '../../config/index'
function ReportStep3() {

    const history = useHistory()
    const { report } = useParams()

    const [data3, setData3] = useState({
        isKeepInTouch: '',
        aboutInspectApp: ''
    })

    function handleNext() {
        reportData3(data3)
        history.push(`/report/${report}/4`)
    }

    function handleChange(event) {
        const { name, value } = event.target
        setData3({
            ...data3,
            [name]: value
        })
    }

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
  const data1cache = reportData1()
  const data2cache = reportData2()


  const history = useHistory()
  const { report } = useParams()
  const [addReport] = useMutation(MAKE_REPORT)

  const [data3, setData3] = useState({
    isKeepInTouch: '',
    aboutInspectApp: ''
  })

  function handleNext() {
    const payload = { ...data1cache, ...data2cache, ...data3 }
    console.log(payload)
    addReport({
      variables: { payload: payload }
    })
    history.push(`/report/${report}/4`)
  }
  
  function handleChange(event) {
    const { name, value } = event.target
    setData3({
      ...data3,
      [name]: value
    })
  }

  return (
    <div class="uk-container uk-margin-xlarge-top">
      <div class="uk-flex">
        <form>
          {/* onSubmit={(event) => onSubmitForm(event)} */}
          <h4>WE WOULD LIKE TO GET IN TOUCH WITH YOU FOR FURTHER INFORMATION</h4>
                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                        <label>
                            <input
                                onChange={(event) => handleChange(event)}
                                value="true"
                                class="uk-radio"
                                type="radio"
                                name="isKeepInTouch" /> Yes, please keep in touch with me</label>
                        <label>
                            <input
                                onChange={(event) => handleChange(event)}
                                value="false"
                                class="uk-radio"
                                type="radio"
                                name="isKeepInTouch" /> No, please do not contact me in future</label>
                    </div>
                    <h4><p>PLEASE HELP US IMPROVE OUR SERVICE.</p>
                        <p>HOW DID YOU LEARN ABOUT INSPECT APP?</p></h4>
                    <div class="uk-margin">
                        <textarea
                            onChange={(event) => handleChange(event)}
                            name="aboutInspectApp"
                            class="uk-textarea"
                            rows="5"
                            placeholder="Textarea"></textarea>
                    </div>
                    <button onClick={handleNext} class="uk-button uk-button-primary">Submit your report</button>
                </form>
            </div>
        </div>
    )
}

export default ReportStep3