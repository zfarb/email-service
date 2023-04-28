import { useState } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from '../components/SurveyForm';
import SurveyReview from '../components/SurveyReview';

function Survey() {
    const [showFormReview, setShowFormReview] = useState(false);

    return (
        <div>
            {showFormReview ? (
                <SurveyReview onReviewForm={() => setShowFormReview(false)} />
            ) : (
                <SurveyForm onSurveySubmit={() => setShowFormReview(true)} />
            )}
        </div>
    );
}

export default reduxForm({
    form: 'surveyForm'
})(Survey);
