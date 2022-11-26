import React, { useContext } from 'react';
import { Authcontext } from '../../../UserContext/UserContext';
import Button from '../../Button/Button';

const BookNowModal = ({ modalSheet, setModalSheet }) => {
    const { user } = useContext(Authcontext)

    const handlePlaceBook = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const buyerName = form.buyerName.value
        const email = form.email.value
        const price = form.price.value
        const number = form.number.value
        const meetLocation = form.meetLocation.value
        console.log(name, buyerName, email, price, number, meetLocation)
    }
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
                    <form onSubmit={handlePlaceBook}>
                        <input type="text" name='name' value={modalSheet?.name} readOnly placeholder="Type here" className="input input-bordered input-md w-full max-w-sm mt-2" />
                        <input type="text" name='buyerName' value={user?.displayName} readOnly placeholder="Type here" className="input input-bordered input-md w-full max-w-sm mt-2" />
                        <input type="text" name='email' value={user?.email} readOnly placeholder="Type here" className="input input-bordered input-md w-full max-w-sm mt-2" />
                        <input type="text" name='price' value={modalSheet?.resale_price} readOnly placeholder="Type here" className="input input-bordered input-md w-full max-w-sm mt-2" />
                        <input type="number" name='number' required placeholder="Your Phone Number" className="input input-bordered textarea-warning input-md w-full max-w-sm mt-2" />
                        <textarea name='meetLocation' required className="textarea textarea-warning input-bordered input-md w-full max-w-sm mt-2" placeholder="Meet Location"></textarea>
                        <Button type='submit'> <span className='text-black'>BOOK NOW</span></Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookNowModal;