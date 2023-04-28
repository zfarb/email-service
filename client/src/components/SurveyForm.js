import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import Button from './Button';

const FIELDS = [
    { name: 'title', label: 'Title' },
    { name: 'subject', label: 'Subject' },
    { name: 'body', label: 'Body' },
    {
        name: 'recipients',
        label: 'Recipients',
        placeholder:
            'Seperate emails with a comma (johndoe@gmail.com, janedoe@yahoo.com)'
    }
];

const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmails = (emails) => {
    const cleanupEmails = emails.replace(/,+(\s*)$/, '$1').trim();

    const invalidEmails = cleanupEmails
        .split(',')
        .map((email) => email.trim())
        .filter((email) => !emailRegex.test(email));

    if (invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails}`;
    }

    return;
};

const validate = (values) => {
    const errors = {};

    if (!values.recipients) {
        errors.recipients = '';
    } else {
        errors.recipients = validateEmails(values.recipients);
    }

    FIELDS.forEach(({ name }) => {
        if (!values[name]) {
            errors[name] = 'You must provide a value';
        }
    });

    return errors;
};

function SurveyForm(props) {
    const renderFields = FIELDS.map(({ name, label, placeholder }) => {
        return (
            <Field
                key={name}
                component={SurveyField}
                type="text"
                name={name}
                label={label}
                placeholder={placeholder}
            />
        );
    });

    return (
        <div>
            <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
                {renderFields}
                <div className="flex items-center justify-between">
                    <Link to="/dashboard">
                        <Button danger>Cancel</Button>
                    </Link>
                    <Button success>Next</Button>
                </div>
            </form>
        </div>
    );
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);
