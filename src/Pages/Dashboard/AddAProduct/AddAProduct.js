import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
import { Authcontext } from '../../../UserContext/UserContext';

const AddAProduct = () => {
    const { user } = useContext(Authcontext)
    const navigate = useNavigate()

    const handleAddproduct = (event) => {
        event.preventDefault()
        const form = event.target;
        const Original_price = form.Original_price.value;
        const resale_price = form.resale_price.value;
        const picture = form.picture.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const Used_year = form.Used_year.value;
        const condition = form.condition.value;
        const about = form.about.value;
        const categoryId = form.categoryId.value;
        const product = {
            Original_price, resale_price, picture, name, email, phone, location, Used_year, condition, about, categoryId, author: user?.displayName
        }
        fetch('http://localhost:5000/allproducts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(data => {
                console.log(data)
                toast.success('Your Post Added')
                navigate('/dashboard/myproducts')
                form.reset()
            })
            .catch(error => console.error(error))
    }







    return (
        <div>
            <section class="bg-gray-100">
                <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div class="lg:col-span-2 lg:py-12">
                            <p class="max-w-xl text-lg lg:text-3xl font-bold ">
                                ADD A PRODUCT
                            </p>

                            <div class="mt-10 not-italic text-lg lg:text-5xl font-bold text-orange-500">
                                Deal Online With <br /> Confidence

                            </div>
                        </div>

                        <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form onSubmit={handleAddproduct} class="space-y-4">
                                <div>
                                    <label class="sr-only" for="name">Product Name</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Product Name"
                                        type="text"
                                        required
                                        name='name'
                                    />
                                </div>
                                <div>
                                    <label class="sr-only " required for="name">Category</label>
                                    <select
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        name='categoryId'
                                    >
                                        <option value="637f87009ce572ca0f69f279">ROAD BIKES</option>
                                        <option value="637f87009ce572ca0f69f27b">HYBRID/COMMUTER BIKES</option>
                                        <option value="637f87009ce572ca0f69f27c">ELECTRIC BIKES</option>
                                        <option value="637f87009ce572ca0f69f27a">MOUNTAIN BIKES</option>
                                        <option value="637f87009ce572ca0f69f27d">WOMEN'S BIKES</option>
                                        <option value="637f87009ce572ca0f69f27e">KIDS BIKES</option>
                                    </select>


                                </div>


                                <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                    <div>
                                        <input
                                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Resale Price ($)"
                                            type="tel"
                                            required
                                            name='resale_price'
                                        />
                                    </div>
                                    <div>
                                        <input
                                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Original Price ($)"
                                            name='Original_price'
                                            type="tel"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Year of purchase"
                                            type="tel"
                                            required
                                            name='Used_year'
                                        />
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                    <div>
                                        <input
                                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="picture"
                                            type="tel"
                                            required
                                            name='picture'
                                        />
                                    </div>
                                    <div>
                                        <input
                                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Location"
                                            type="tel"
                                            required
                                            name='location'
                                        />
                                    </div>
                                    <div>
                                        <select
                                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder=""
                                            type="tel"
                                            required
                                            name='condition'
                                        >
                                            <option value="Excellent">Excellent</option>
                                            <option value="Good">Good</option>
                                            <option value="Fair">Fair</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label class="sr-only" for="message">About</label>
                                    <textarea
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="About Product"
                                        rows="8"
                                        name='about'
                                    ></textarea>
                                </div>
                                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label class="sr-only" for="email">Email</label>
                                        <input
                                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                            name='email'
                                            value={user?.email}
                                            readOnly
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label class="sr-only" for="phone">Phone</label>
                                        <input
                                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Phone Number"
                                            type="number"
                                            required
                                            id="phone"
                                            name='phone'
                                        />
                                    </div>
                                </div>

                                <div class="mt-4">
                                    <Button
                                        type="submit"
                                        class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                                    ><span className='text-black'> Place Product</span>
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AddAProduct;