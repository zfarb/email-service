function ShowSurvey({ data }) {
    const lastResponded = Math.floor(
        (Date.parse(data.lastResponded) - Date.parse(data.dateSent)) / 86400000
    );

    return (
        <div className="border border-black m-3">
            <div>Title: {data.title}</div>
            <div>Subject: {data.subject}</div>
            <div>Body: {data.body}</div>
            <div>Yes: {data.yes}</div>
            <div>No: {data.no}</div>
            <div>
                Last responded:{' '}
                {data.lastResponded
                    ? lastResponded > 0
                        ? `${lastResponded} days`
                        : 'Today'
                    : 'No responses yet'}
            </div>
        </div>
    );
}

export default ShowSurvey;
