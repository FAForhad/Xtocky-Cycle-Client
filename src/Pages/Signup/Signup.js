import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import Navber from '../Shared/Navber/Navber';
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
    return (

        <section class="bg-white">
            <Navber></Navber>
            <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section
                    class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
                >
                    <img
                        alt="Night"
                        src="https://www.teahub.io/photos/full/255-2556908_mountain-bikes-wallpapers-hd.jpg"
                        class="absolute inset-0 h-full w-full object-cover opacity-80"
                    />

                    <div class="hidden lg:relative lg:block lg:p-12">
                        <a class="block text-white border-spacing-5 border w-52 h-14 border-orange-500" href="/">
                            <span class="ml-2 text-xl font-bold tracking-wide text-gray-500 uppercase">
                                <span className='text-4xl text-orange-500'> X</span>tocky Cycle
                            </span>
                        </a>

                        <p class="mt-4 leading-relaxed text-white/90">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
                            dolorum aliquam, quibusdam aperiam voluptatum.
                        </p>
                    </div>
                </section>

                <main
                    aria-label="Main"
                    class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
                >
                    <div class="max-w-xl lg:max-w-3xl">
                        <div class="relative -mt-16 block lg:hidden">
                            <a
                                class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                                href="/"
                            >
                                <span class="sr-only">Home</span>

                            </a>

                            <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                <span className='text-4xl text-orange-500'> X</span>tocky Cycle
                            </span>

                            <p class="mt-4 leading-relaxed text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
                                nam dolorum aliquam, quibusdam aperiam voluptatum.
                            </p>
                        </div>

                        <form class="mt-8 grid grid-cols-6 gap-6">
                            <div class="col-span-6">
                                <label
                                    for="FirstName"
                                    class="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>

                                <input
                                    type="text"
                                    id="FirstName"
                                    name="first_name"
                                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div class="col-span-6">
                                <label for="Email" class="block text-sm font-medium text-gray-700">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            <div class="col-span-6">
                                <label for="Email" class="block text-sm font-medium text-gray-700">
                                    Type
                                </label>

                                <select
                                    type="email"
                                    id="Email"
                                    name="email"
                                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"

                                >
                                    <option value="Buyer">Buyer</option>
                                    <option value="Seller">Seller</option>

                                </select>
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                                <label
                                    for="Password"
                                    class="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>

                                <input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label
                                    for="PasswordConfirmation"
                                    class="block text-sm font-medium text-gray-700"
                                >
                                    Password Confirmation
                                </label>

                                <input
                                    type="password"
                                    id="PasswordConfirmation"
                                    name="password_confirmation"
                                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div class="col-span-6">
                                <label for="MarketingAccept" class="flex gap-4">
                                    <span class="text-sm text-gray-700">
                                        I want to receive emails about events, product updates and
                                        company announcements.
                                    </span>
                                </label>
                            </div>
                            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <Button>
                                    <span className='text-black'>Create an account</span>

                                </Button>

                                <Button>
                                    <span className='text-black'><FcGoogle></FcGoogle></span>

                                </Button>

                                <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Already have an account?
                                    <Link to='/signin' class="text-gray-700 underline">Sign In</Link>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>

    );
};

export default Signup;