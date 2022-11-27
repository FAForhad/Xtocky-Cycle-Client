import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Authcontext } from '../../../UserContext/UserContext';
import Button from '../../Button/Button';

const BookNowModal = ({ modalSheet, setModalSheet }) => {
    const { user } = useContext(Authcontext)

    const handlePlaceBook = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const picture = modalSheet?.picture;
        const authorEmail = modalSheet?.email;
        const buyerName = form.buyerName.value
        const email = form.email.value
        const price = form.price.value
        const number = form.number.value
        const meetLocation = form.meetLocation.value

        const booking = {
            name, buyerName, email, price, number, meetLocation, picture, authorEmail
        }

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(data => {
                console.log(data)
                toast.success('You are ready to buy, Please chech your booking products', {
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#713200',
                    },
                    iconTheme: {
                        primary: '#713200',
                        secondary: '#FFFAEE',
                    },
                })
                form.reset()
                setModalSheet(null)
            })
            .catch(error => console.error(error))

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