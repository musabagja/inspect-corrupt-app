import "./register.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <div className="uk-container">
        <div className="login-page">
          <div className="uk-child-width-expand@s uk-text-center login" uk-grid>
            <div className="title">
                <h1>INSPECT</h1>
                <p>We’ll be watching you</p>
            </div>
            <div className="card-login">
              <div className="uk-card uk-card-default uk-card-body">
                <form>
                  <fieldset class="uk-fieldset">
                  <legend class="uk-legend">SIGN UP</legend>
                    <p className="legend-2">Have an account?</p>
                    <Link to="/sign-in">
                      <p className="legend-2 l-2" style={{color: "#E74C3C"}}>Lets sign in</p>
                    </Link>

                    <div class="uk-grid-column-medium uk-child-width-1-2 form" uk-grid>
                      <div class="uk-margin" style={{marginTop: 20}}>
                          <input class="uk-input" type="text" placeholder="First Name"/>
                      </div>
                      <div class="uk-margin">
                          <input class="uk-input" type="text" placeholder="Last Name"/>
                      </div>
                      <div class="uk-margin">
                          <input class="uk-input" type="text" placeholder="Email"/>
                      </div>
                      <div class="uk-margin">
                          <input class="uk-input" type="text" placeholder="Password"/>
                      </div>
                      <div class="uk-margin">
                          <input class="uk-input" type="text" placeholder="Nationalist"/>
                      </div>
                      <div class="uk-margin">
                          <input class="uk-input" type="date" placeholder="Birt Date"/>
                      </div>
                      <div class="uk-margin">
                          <input class="uk-input" type="text" placeholder="Gender"/>
                      </div>
                    </div>
                    <button class="uk-button uk-button-default" style={{color: "white", marginTop: 50, borderRadius: 11}}>SIGN UP</button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
