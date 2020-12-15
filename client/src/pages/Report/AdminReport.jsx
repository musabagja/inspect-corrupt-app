import React from 'react'
import { gql, useQuery } from '@apollo/client'

const FETCH_REPORT = gql`
    query FetchReport {
        reports {
            UserEmail
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
`;

function AdminReport() {

    const { loading, error, data } = useQuery(FETCH_REPORT)


    if (loading) {
        return (<div uk-spinner></div>)
    }
    if (error) {
        return (<>{JSON.stringify(error)}</>)
    }




    console.log(data.reports, "ini data report")
    return (
        <div class="uk-container uk-margin-large-top">
            <h2>Data of reported</h2>
            <table class="uk-table uk-table-hover uk-table-divider">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>UserEmail</th>
                        <th>Case</th>
                        <th>Entity</th>
                        <th>Province</th>
                        <th>City</th>
                        <th>Date Happened</th>
                        <th>Description</th>
                        <th>Keep in touch</th>
                    </tr>
                </thead>

                <tbody>
                    {data.reports.map((el, i) => {
                        return (

                            <tr>
                                <td>{i + 1}</td>
                                <td>{el.UserEmail}</td>
                                <td>{el.case}</td>
                                <td>{el.entity}</td>
                                <td>{el.province}</td>
                                <td>{el.city}</td>
                                <td>{el.dateHappened}</td>
                                <td>{el.description}</td>
                                <td>{el.isKeepInTouch === "true" ? "yes" : "no"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default AdminReport