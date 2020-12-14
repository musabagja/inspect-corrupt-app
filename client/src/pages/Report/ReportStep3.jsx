import React from 'react';

function ReportStep3(props) {

    // const ADD_REPORT = gql`
    //     mutation addReport($payload: newReport) {
    //         AddReport(payload: $payload) {
    //             _id
    //         }
    //     }
    // `;

    // const [addReport] = useMutation(ADD_REPORT)

    // const [inputPayload, setInputPayload] = useState({
    //     UserId: '',
    //     case: '',
    //     entity: '',
    //     province: '',
    //     city: '',
    //     dateHappened: '',
    //     description: '',
    //     isDocumentProvided: false,
    //     involvedPerson: [''],
    //     personRole:'' ,  
    //     isReported: false,
    //     isKeepInTouch: false,
    // })


    // const history = useHistory()

    // function onSubmitForm(event) {
    //     event.preventDefault()
    //     addReport({
    //         variables: {
    //             payload: inputPayload
    //         }
    //     })
    //     history.push('/finish')    
    // }

    return (
        <div class="uk-container uk-margin-xlarge-top">
            <div class="uk-flex">
                <form> 
                    {/* onSubmit={(event) => onSubmitForm(event)} */}
                    <h4>WE WOULD LIKE TO GET IN TOUCH WITH YOU FOR FURTHER INFORMATION</h4>

                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                        <label>
                            <input 
                            class="uk-radio" 
                            type="radio" 
                            name="radio2" /> Yes, please keep in touch with me</label>
                        <label>
                            <input 
                            class="uk-radio" 
                            type="radio" 
                            name="radio2" /> No, please do not contact me in future</label>
                    </div>
                    <h4><p>PLEASE HELP US IMPROVE OUR SERVICE.</p>  
                    <p>HOW DID YOU LEARN ABOUT INSPECT APP?</p></h4>
                    <div class="uk-margin">
                        <textarea 
                        class="uk-textarea" 
                        rows="5" 
                          placeholder="Textarea"></textarea>
                    </div>
                    <button class="uk-button uk-button-primary">Submit your report</button>
                </form>
            </div>
        </div>
    )
}

export default ReportStep3