import React, { useContext } from 'react';
import { Authcontext } from '../../../UserContext/UserContext';
import Button from '../../Button/Button';

const BookNowModal = ({ modalSheet, setModalSheet }) => {
    const { user } = useContext(Authcontext)
    console.log(user)
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setModalSheet(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{modalSheet?.name}</h3>
                    <img src={modalSheet?.picture} alt="" />
                    <p className='text-start'>{modalSheet?.about}</p>
                    <input type="text" value={modalSheet?.name} readOnly placeholder="Type here" className="input input-bordered input-md w-full max-w-sm mt-2" />
                    <input type="text" value={user?.displayName} readOnly placeholder="Type here" className="input input-bordered input-md w-full max-w-sm mt-2" />
                    <input type="text" value={user?.email} readOnly placeholder="Type here" className="input input-bordered input-md w-full max-w-sm mt-2" />
                    <input type="text" value={modalSheet?.resale_price} readOnly placeholder="Type here" className="input input-bordered input-md w-full max-w-sm mt-2" />
                    <input type="number" readOnly placeholder="Your Phone Number" className="input input-bordered input-md w-full max-w-sm mt-2" />
                    <textarea className="textarea textarea-warning input-bordered input-md w-full max-w-sm mt-2" placeholder="Meet Location"></textarea>
                    <Button> <span className='text-black'>BOOK NOW</span></Button>
                </div>
            </div>
        </div>
    );
};

export default BookNowModal;