function SurveyField({ input, label, placeholder, meta: { error, touched } }) {
    return (
        <div>
            <label>{label}</label>
            <input
                {...input}
                className="border border-black w-8/12"
                placeholder={placeholder}
            />
            {touched && error}
        </div>
    );
}

export default SurveyField;
