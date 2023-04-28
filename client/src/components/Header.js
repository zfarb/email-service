import { useState, useRef } from 'react';
import { useGetUserQuery } from '../store';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Button from './Button';

function Header() {
    const [toggleModal, setToggleModal] = useState(false);
    const refDiv = useRef();

    const showModal = () => {
        setToggleModal(true);
    };

    const hideModal = () => {
        setToggleModal(false);
    };

    const { data } = useGetUserQuery();

    return (
        <div className="flex justify-between" ref={refDiv}>
            <Link to={data ? '/dashboard' : '/'}>Emaily</Link>
            {data ? (
                <div className="flex items-center">
                    <Button primary onClick={showModal}>
                        Add Credits
                    </Button>
                    {toggleModal && (
                        <Modal
                            hideModal={hideModal}
                            actionBar={
                                <Button
                                    secondary
                                    onClick={hideModal}
                                    className="absolute bottom-5 right-5"
                                >
                                    Hide Modal
                                </Button>
                            }
                        >
                            Add Credits
                        </Modal>
                    )}
                    Credits: {data.credits}
                    <a href="/api/logout">Logout</a>
                </div>
            ) : (
                <a href="/auth/google">Login with Google</a>
            )}
        </div>
    );
}

export default Header;
