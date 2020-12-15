import './tax.css';
import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import ReactLoading from 'react-loading';

const CREDIBILITY = gql`
  mutation Credibility($company: String) {
    credibility(company: $company) {
      kpbn
      indoInvestments
      idx
      npwp
      email
      telephone
      address
    }
  }
`;

const NPWP_VALIDATOR = gql`
  mutation Npwp($number: String) {
    npwp(number: $number) {
      npwpIsValid
    }
  } 
`;

export default function TaxAndCredibility() {
  const [company, setCompany] = useState('');
  const [npwp, setNpwp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [credibilityResult, setCredibilityResult] = useState('');

  function onChange(e) {
    const value = e.target.value;
    setCompany(value);
  };

  function onChangeNpwp(e) {
    const value = e.target.value;
    console.log(value);
    setNpwp(value);
  }

  const [credibility, { loading, error, data }] = useMutation(CREDIBILITY);
  const [npwpValidator, { loading: npwpLoading, error: npwpError, data: npwpData }] = useMutation(NPWP_VALIDATOR);

  function onSubmitNpwp(e) {
    e.preventDefault();
    console.log("submit npwp");
    console.log(typeof npwp);
    npwpValidator({
      variables: {
        number: npwp
      }
    }).then(({ data }) => {
      if (data.npwp.npwpIsValid) {
        setSuccessMessage('Tax ID is valid');
        setErrorMessage('');
      } else {
        setErrorMessage('Tax ID is invalid');
        setSuccessMessage('');
      }
      setTimeout(() => {
        setSuccessMessage('');
        setErrorMessage('');
      }, 5000)
      console.log(data.npwp.npwpIsValid);
    })
  }

  function onSubmitCredibility(e) {
    e.preventDefault();
    credibility({
      variables: {
        company: company
      }
    }).then(({ data }) => {
      const { credibility } = data;
      console.log(credibility)
      setCredibilityResult(credibility);
      // setTimeout(() => {
      //   setCredibilityResult('');
      // }, 5000)
      console.log(credibility);
    })
  }

  return (
    // alert credibility
    <React.Fragment>
      <div className="uk-container tax-credibility">
        { credibilityResult ? 
          <div className="uk-alert-success npwp-alert" uk-alert="true">
            <ul>
              { credibilityResult.kpbn ? 
                <li>Listed on <a target="_blank" href="https://kpbn.co.id/persh.php?alphabet=a">KPBN</a></li>
              :
                <li>Not listed on <a target="_blank" href="https://kpbn.co.id/persh.php?alphabet=a">KPBN</a></li>
              }
              { credibilityResult.indoInvestments ? 
                <li>Listed on <a target="_blank" href="https://kpbn.co.id/persh.php?alphabet=a">Indonesia Investments</a></li>
              :
                <li>Not listed on <a target="_blank" href="https://kpbn.co.id/persh.php?alphabet=a">Indonesia Investments</a></li>
              }
              { credibilityResult.idx ? 
                <li>Listed on <a target="_blank" href="https://www.idx.co.id/perusahaan-tercatat/profil-perusahaan-tercatat/">IDX</a></li>
              :
                <li>Not listed on <a target="_blank" href="https://www.idx.co.id/perusahaan-tercatat/profil-perusahaan-tercatat/">IDX</a></li>
              }
              <li>NPWP: { credibilityResult.npwp }</li>
              <li>Email Addres: { credibilityResult.email }</li>
              <li>Telephone: { credibilityResult.telephone }</li>
              <li>Address: { credibilityResult.address }</li>
            </ul>
          </div>
        :
          ''
        }
        { successMessage ? 
          <div className="uk-alert-success npwp-alert" uk-alert="true">
            {/* <a className="uk-alert-close" uk-close="true"></a> */}
            <p>{ successMessage }</p>
          </div>
        :
          ''
        }
        {
          errorMessage ?
            <div className="uk-alert-danger npwp-alert" uk-alert="true">
              {/* <a className="uk-alert-close" uk-close="true"></a> */}
              <p>{ errorMessage }</p>
            </div>
          :
            ''
        }
        {loading && 
          <div className="loading">
            <ReactLoading type="spinningBubbles" color="#e74c3c"/>
          </div>
        }
        <div className="uk-child-width-expand@s uk-text-center" uk-grid="true">
          <div>
              <h3>Tax Validator</h3>
            <form onSubmit={onSubmitNpwp}>
              <fieldset className="uk-fieldset">
                <div className="uk-margin">
                    <input name="npwp" value={npwp} onChange={onChangeNpwp} className="uk-input" type="text" placeholder="Insert your tax id"/>
                </div>
                <button type="submit" className="uk-button uk-button-default btn-submit">SUBMIT</button>
              </fieldset>
            </form>
          </div>
          <div>
            <h3>Credibility</h3>
            <form onSubmit={onSubmitCredibility}>
              <fieldset className="uk-fieldset">
                <div className="uk-margin">
                    <input className="uk-input" name="company" value={company} onChange={onChange} type="text" placeholder="Insert company name"/>
                </div>
              </fieldset>
              <button type="submit" className="uk-button uk-button-default btn-submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}