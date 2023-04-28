import { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Payments from './Payments';

function Modal({ hideModal, children, actionBar }) {
    const [credits, setCredits] = useState(0);
    const refDiv = useRef();

    const handleChange = (event) => {
        setCredits(event.target.value);
    };

    useEffect(() => {
        const handler = (event) => {
            if (!refDiv.current) {
                return;
            }

            if (
                !refDiv.current.contains(event.target) ||
                event.key === 'Escape'
            ) {
                hideModal();
            }
        };

        document.addEventListener('click', handler, true);
        document.addEventListener('keydown', handler);

        return () => {
            document.removeEventListener('click', handler);
            document.removeEventListener('keydown', handler);
        };
    });

    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return ReactDOM.createPortal(
        <div>
            <div className="fixed inset-0 bg-gray-300 opacity-80"></div>
            <div ref={refDiv} className="fixed inset-40 bg-white">
                {children}
                <input
                    className="border border-black"
                    placeholder="Enter value in dollars"
                    type="number"
                    value={credits || ''}
                    onChange={handleChange}
                />
                <Payments amount={credits * 100} onClose={() => hideModal()} />
                {actionBar}
            </div>
        </div>,
        document.querySelector('.modalContainer')
    );
}

export default Modal;
