import { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import BookNowModal from '../../../Components/Modal/BookNowModal/BookNowModal';

const Product = ({ products }) => {

    const [modalSheet, setModalSheet] = useState(null)
    console.log(modalSheet)
    const { name, picture, Original_price, Used_year, resale_price, about, condition, location } = products
    return (
        <div className="p-4 ">
            <div className="h-full  rounded-lg overflow-hidden">
                <div className='lg:h-72 md:h-36 w-full object-cover object-center '>
                    <img className="" src={picture} alt="blog" />
                </div>
                <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{name}</h1>
                    <h2 className="tracking-widest flex justify-center items-center text-sm title-font font-medium text-gray-900 mb-3"><span className='font-bold mr-2'>{products?.author} </span> {products?.isVerified && <FcCheckmark></FcCheckmark>}</h2>
                    <p className="leading-relaxed mb-3 text-start">{about}</p>
                    <br />
                    <p className="leading-relaxed mb-3 text-start">Location : {location}</p>
                    <div className="flex items-center flex-wrap ">
                        <span className="text-gray-600 font-semibold  mr-1 inline-flex items-center pr-1  py-1 border-r-2 border-gray-300">
                            Original Price :$ {Original_price}
                        </span>
                        <span className="text-gray-600  font-semibold mr-1 inline-flex text-sm pr-1 py-1 border-r-2 border-gray-300">
                            Sale Price : $ {resale_price}
                        </span>
                        <span className="text-gray-600  font-semibold mr-1 inline-flex items-center leading-none text-sm">
                            Used Year : {Used_year}
                        </span>
                        <span className="text-gray-600  font-bold mr-1 inline-flex items-center leading-none text-sm">
                            Condition : {condition}
                        </span>
                    </div>
                    <label htmlFor="my-modal-3" onClick={() => { setModalSheet(products) }} className="text-orange-600 hover:text-orange-700 font-bold text-xl inline-flex items-center md:mb-2 lg:mb-0">Book Now</label>
                </div>
                {
                    modalSheet && <BookNowModal key={products._id} modalSheet={modalSheet} setModalSheet={setModalSheet}></BookNowModal>
                }
            </div>
        </div>
    );
};

export default Product;