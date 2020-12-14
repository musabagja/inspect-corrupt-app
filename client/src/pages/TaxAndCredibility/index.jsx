import './tax.css';
import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from "react-router-dom";

const CREDIBILITY = gql`
  mutation Credibility($company: String) {
    credibility(company: $company) {
      kpbn
      indoInvestments
    }
  }
`;

const NPWP_VALIDATOR = gql`
  mutation Npwp($number: Int) {
    npwp(number: $number) {
      npwpIsValid
    }
  } 
`;

export default function TaxAndCredibility() {
  const history = useHistory();
  const [company, setCompany] = useState('');
  const [npwp, setNpwp] = useState(0);

  function onChange(e) {
    const value = e.target.value;
    setCompany(value);
  };

  function onChangeNpwp(e) {
    const value = e.target.value;
    console.log(typeof value) ;
    console.log(value);
    setNpwp(value);
  }

  const [credibility, {loading, error}] = useMutation(CREDIBILITY);
  const [npwpValidator, {loading: npwpLoading, error: npwpError}] = useMutation(NPWP_VALIDATOR);

  function alert() {
    return (
      <div uk-alert>
        <a class="uk-alert-close" uk-close></a>
      </div>
    )
  }

  function onSubmitNpwp(e) {
    e.preventDefault();
    console.log("submit npwp");
    npwpValidator({
      variables: {
        number: +npwp
      }
    }).then(({ data }) => {
      console.log(data);
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
        alert('Success')
      }
    })
  }

  return (
    <div className="uk-container tax-credibility">
      <div class="uk-child-width-expand@s uk-text-center" uk-grid>
        <div>
            <h3>Tax Validator</h3>
          <form onSubmit={onSubmitNpwp}>
            <fieldset className="uk-fieldset">
              <div className="uk-margin">
                  <input name="npwp" value={npwp} onChange={onChangeNpwp} className="uk-input" type="number" placeholder="Insert your tax id"/>
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
              <button type="submit" className="uk-button uk-button-default btn-submit">SUBMIT</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}