import React from 'react'
import Checkbox from '../components/form/form-controls/checkbox'
import ErrorBox from '../components/form/error-box/error-box'
import Loader from '../components/ui/loader/loader'

const privacyAndPolicy = (props) => {
    return(
        <div>
            Hi I'm privacy and policy of this company. So that kindy read me carefully...
            <Checkbox onCheck={props.onAccept}>
                I am accepting terms &amp; conditions.
            </Checkbox>
            { props.errorMsg ? <ErrorBox errorMsgs={props.errorMsg} /> : null}
            { props.showLoader ? <Loader>Submitting your request...</Loader> : null }
        </div>
    )
}

export default privacyAndPolicy