import { useSelector } from 'react-redux';
import Button from './Button';
import { useAddSurveyMutation } from '../store';
import { useGetUserQuery } from '../store';
import { withRouter } from 'react-router-dom';
import { useState } from 'react';

function SurveyReview({ onReviewForm, history }) {
    const [enoughCredits, setEnoughCredits] = useState(false);
    const { values } = useSelector((state) => state.form.surveyForm);
    const [addSurvey] = useAddSurveyMutation();
    const { data } = useGetUserQuery();
    const { credits } = data;

    const handleAddSurvey = (args) => {
        if (credits >= 1) {
            addSurvey(args);
            setEnoughCredits(false);
        } else {
            setEnoughCredits(true);
        }
    };

    const renderSurvey = Object.keys(values).map((field) => {
        return (
            <div key={field}>
                <h1>{field.charAt(0).toUpperCase() + field.slice(1)}</h1>
                <p>{values[field]}</p>
            </div>
        );
    });

    return (
        <div>
            SurveyReview
            {renderSurvey}
            <div className="flex items-center justify-between">
                <Button danger onClick={onReviewForm}>
                    Go Back
                </Button>
                <div className="grid">
                    <Button
                        className="m-auto"
                        success
                        onClick={() => handleAddSurvey({ values, history })}
                    >
                        Submit
                    </Button>
                    {enoughCredits && 'Not enough credits'}
                </div>
            </div>
        </div>
    );
}

export default withRouter(SurveyReview);
