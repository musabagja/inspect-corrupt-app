import "./register.css";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <>
      <div className="uk-container">
        <div className="login-page">
          <div className="uk-child-width-expand@s uk-text-center login" uk-grid>
            <div className="title">
                <h1>INSPECT</h1>
                <p>We’ll be watching you</p>
            </div>
              <div className="uk-card uk-card-default uk-card-body card-register">
                <form>
                  <fieldset className="uk-fieldset">
                  <legend className="uk-legend">SIGN UP</legend>
                    <p className="legend-2">Have an account?</p>
                    <Link to="/sign-in">
                      <p className="legend-2 l-2" style={{color: "#E74C3C"}}>Lets sign in</p>
                    </Link>

                    <div className="uk-grid-column-medium uk-child-width-1-2 form" uk-grid>
                      <div className="uk-margin" style={{marginTop: 20}}>
                          <input className="uk-input" type="text" placeholder="First Name"/>
                      </div>
                      <div className="uk-margin">
                          <input className="uk-input" type="text" placeholder="Last Name"/>
                      </div>
                      <div className="uk-margin">
                          <input className="uk-input" type="text" placeholder="Email"/>
                      </div>
                      <div className="uk-margin">
                          <input className="uk-input" type="text" placeholder="Password"/>
                      </div>
                      <div className="uk-margin">
                          <input className="uk-input" type="text" placeholder="Nationalist"/>
                      </div>
                      <div className="uk-margin">
                          <input className="uk-input" type="date" placeholder="Birt Date"/>
                      </div>
                      <div className="uk-margin">
                          <input className="uk-input" type="text" placeholder="Gender"/>
                      </div>
                    </div>
                    <button className="uk-button uk-button-default btn-sign-up">SIGN UP</button>
                  </fieldset>
                </form>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
