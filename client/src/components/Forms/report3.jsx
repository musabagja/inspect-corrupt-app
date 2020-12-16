import React from 'react'

export default function Report3(props) {

  const { handleChange, input, setInput } = props

  return (
    <div className="uk-container uk-margin-xlarge-top">
      <div className="uk-flex">
        <h4>WE WOULD LIKE TO GET IN TOUCH WITH YOU FOR FURTHER INFORMATION</h4>
        <div className="uk-margin">
          <label>
            <input
              onChange={e => handleChange(e)}
              value="true"
              className="uk-radio"
              type="radio"
              name="isKeepInTouch" /> Yes, please keep in touch with me</label>
        </div>
        <div className="uk-margin">
          <label>
            <input
              onChange={e => handleChange(e)}
              value="false"
              className="uk-radio"
              type="radio"
              name="isKeepInTouch" /> No, please do not contact me in future</label>
        </div>
        <h4><p>PLEASE HELP US IMPROVE OUR SERVICE.</p>
          <p>HOW DID YOU LEARN ABOUT INSPECT APP?</p></h4>
        <div className="uk-margin">
          <textarea
            onChange={e => handleChange(e)}
            name="aboutInspectApp"
            className="uk-textarea"
            rows="5"
            placeholder="Textarea"></textarea>
        </div>
      </div>
    </div >
  )
}