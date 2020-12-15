import './tax.css';
import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from "react-router-dom";
import ReactLoading from 'react-loading';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

const CREDIBILITY = gql`
  mutation Credibility($company: String) {
    credibility(company: $company) {
      kpbn
      indoInvestments
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

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  position: absolute;
  margin-left: 34.5vw; 
`; // Margin leftnya bisa diubah aja, niatnya mau ditengah posisi absolute

export default function TaxAndCredibility() {
  const history = useHistory();
  const [company, setCompany] = useState('');
  const [npwp, setNpwp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [kbpn, setKbpn] = useState(true);
  const [indoInvestments, setIndoInvestments] = useState(true);
  const [idx, setIdx] = useState(true);

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
      if (credibility) {
        console.log(credibility);
      }
      console.log(credibility);
    })
  }

  return (
    // alert credibility
    <div className="uk-container tax-credibility">
      { successMessage ? 
        <div className="uk-alert-success" uk-alert="true">
          <a className="uk-alert-close" uk-close="true"></a>
          <p>{ successMessage }</p>
        </div>
      :
        ''
      }
      {
        errorMessage ?
          <div className="uk-alert-danger" uk-alert="true">
            <a className="uk-alert-close" uk-close="true"></a>
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
  )
}