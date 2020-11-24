import React from "react";
import {Field, reduxForm} from "redux-form";

import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControl";


 const maxLengthCreator50 = maxLengthCreator(50);

const AddMassageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newMessageBody" component={TextArea}
                       placeholder="Enter your message" validate={[required, maxLengthCreator50]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMassageFormRedux = reduxForm({form: 'dialogAddMassageForm'})(AddMassageForm);

export default AddMassageFormRedux