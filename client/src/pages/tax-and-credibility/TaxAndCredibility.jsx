import './tax.css';


export default function TaxAndCredibility() {
  return (
    <div className="uk-container tax-credibility">
      <div class="uk-child-width-expand@s uk-text-center" uk-grid>
        <div>
            <h3>Tax Validator</h3>
          <form>
            <fieldset class="uk-fieldset">
              <div className="uk-margin">
                  <input className="uk-input" type="text" placeholder="Insert your tax id"/>
              </div>
              <button className="uk-button uk-button-default btn-submit">SUBMIT</button>
            </fieldset>
          </form>
        </div>
        <div>
          <h3>Credibility</h3>
          <form>
            <fieldset class="uk-fieldset">
              <div className="uk-margin">
                  <input className="uk-input" type="text" placeholder="Insert company name"/>
              </div>
              <button className="uk-button uk-button-default btn-submit">SUBMIT</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}