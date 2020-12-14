import "./login.css";
import { Link } from "react-router-dom";
import Google from "./img/google.png";

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
                  <legend class="uk-legend">SIGN IN</legend>
                    <p className="legend-2">New user?</p>
                    <Link to="/sign-up">
                      <p className="legend-2 l-2" style={{color: "#E74C3C"}}>Lets sign up</p>
                    </Link>
                    <div className="uk-margin">
                        <input className="uk-input" type="text" placeholder="Email"/>
                    </div>
                    <div className="uk-margin">
                        <input className="uk-input input-password" type="text" placeholder="Password"/>
                    </div>
                    <button className="uk-button uk-button-default btn-sign-in">SIGN IN</button>
                  </fieldset>
                </form>
              </div>
              <button className="uk-button uk-button-default btn-sign-in-google"><img src={Google} alt=""/> Continue with google</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
