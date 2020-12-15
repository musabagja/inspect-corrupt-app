import './tax.css';
import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from "react-router-dom";
import { css } from '@emotion/core';
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
`;

export default function TaxAndCredibility() {
  const history = useHistory();
  const [company, setCompany] = useState('');
  const [npwp, setNpwp] = useState('');

  function onChange(e) {
    const value = e.target.value;
    setCompany(value);
  };

  function onChangeNpwp(e) {
    const value = e.target.value;
    console.log(value);
    setNpwp(value);
  }

  const [credibility, {loading, error, data}] = useMutation(CREDIBILITY);
  const [npwpValidator, {loading: npwpLoading, error: npwpError, data: npwpData}] = useMutation(NPWP_VALIDATOR);

  function onSubmitNpwp(e) {
    e.preventDefault();
    console.log("submit npwp");
    console.log(typeof npwp);
    npwpValidator({
      variables: {
        number: npwp
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
      }
    })
  }

  return (
    // alert credibility
    <div className="uk-container tax-credibility">
      { data !== undefined && data?.credibility.kpbn === true || data?.credibility.indoInvestments === true &&
        <div className="uk-alert-success" uk-alert>
          <a className="uk-alert-close" uk-close></a>
          <p>This company has intermediate credibility</p>
        </div>
      }
      { data !== undefined && data?.credibility.kpbn === false && data?.credibility.indoInvestments === false &&
        <div className="uk-alert-success" uk-alert>
          <a className="uk-alert-close" uk-close></a>
          <p>Company credibility less</p>
        </div>
      }

      {/* alert tax validator */}
      { npwpData !== undefined && npwpData?.npwp.npwpIsValid === false &&
        <div className="uk-alert-success" uk-alert>
          <a className="uk-alert-close" uk-close></a>
          <p>Your tax ID is invalid</p>
        </div>
      
      }
      { npwpData !== undefined && npwpData?.npwp.npwpIsValid === true &&
        <div className="uk-alert-success" uk-alert>
          <a className="uk-alert-close" uk-close></a>
          <p>Your tax ID is valid</p>
        </div>
      }

      {loading && <div className="sweet-loading">
        <ClipLoader
          css={override}
          size={150}
          color={"#123abc"}
        />
      </div>
      }
      <div className="uk-child-width-expand@s uk-text-center" uk-grid>
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