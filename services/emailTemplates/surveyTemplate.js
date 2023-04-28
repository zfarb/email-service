const keys = require('../../config/keys');

module.exports = (survey) => {
    return `
        <html>
            <body>
                <div>${survey.body}</div>
                <div>
                    <a href="${keys.mailRedirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
                </div>
                <div>
                    <a href="${keys.mailRedirectDomain}/api/surveys/${survey.id}/no">No</a>
                </div>
            </body>
        </html>

    `;
};
