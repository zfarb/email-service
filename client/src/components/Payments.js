import { useAddCreditsMutation } from '../store';
import StripeCheckout from 'react-stripe-checkout';

function Payments({ amount, onClose }) {
    const [addCredits] = useAddCreditsMutation();

    return (
        <StripeCheckout
            name="Emaily"
            description="Buy credits"
            amount={amount}
            token={(token) => addCredits({ token, amount })}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            closed={onClose}
        />
    );
}

export default Payments;
