import classNamesLib from 'classnames';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {
    const classNames = classNamesLib(
        rest.className,
        'flex items-center px-3 py-1.5 border',
        {
            'border-blue-600 bg-blue-500 text-white': primary,
            'border-gray-600 bg-gray-500 text-white': secondary,
            'border-green-600 bg-green-500 text-white': success,
            'border-yellow-600 bg-yellow-500 text-white': warning,
            'border-red-600 bg-red-500 text-white': danger,
            'outline-2 !bg-white': outline,
            '!text-blue-500': outline && primary,
            '!text-gray-500': outline && secondary,
            '!text-green-500': outline && success,
            '!text-yellow-500': outline && warning,
            '!text-red-500': outline && danger,
            '!rounded-full': rounded
        }
    );

    return (
        <button {...rest} className={classNames}>
            {children}
        </button>
    );
}

Button.propTypes = {
    checkVariation: ({ primary, secondary, success, warning, danger }) => {
        const variations =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger);

        if (variations > 1) {
            return new Error('Only one variation allowed');
        }
    }
};

export default Button;
