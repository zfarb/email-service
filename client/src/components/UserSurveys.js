import { useGetSurveysQuery } from '../store';
import ShowSurvey from './ShowSurvey';
import { useEffect, useState } from 'react';

function UserSurveys() {
    const { data } = useGetSurveysQuery();
    const [renderedSurveys, setRenderedSurveys] = useState([]);

    useEffect(() => {
        async function renderSurveys() {
            if (!data) return [];

            const promises = data
                .slice()
                .reverse()
                .map(async (survey) => {
                    const result = await (
                        <ShowSurvey key={survey.title} data={survey} />
                    );
                    return result;
                });

            const surveys = await Promise.all(promises);
            setRenderedSurveys(surveys);
        }
        renderSurveys();
    }, [data]);

    return <div>{renderedSurveys}</div>;
}

export default UserSurveys;
