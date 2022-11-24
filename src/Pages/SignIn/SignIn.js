import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import Navber from '../Shared/Navber/Navber';
import { FcGoogle } from "react-icons/fc";
import { Authcontext } from '../../UserContext/UserContext';
import toast from 'react-hot-toast';

const SignIn = () => {
    const { user, googleLogin } = useContext(Authcontext)

    const handleloginUser = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }


    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('Login Successful')
            })
            .catch(error => console.log(error))
    }




    return (
        <section class="bg-white">
            <Navber></Navber>
            <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section
                    class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
                >
                    <img
                        alt="Night"
                        src="https://electrek.co/wp-content/uploads/sites/3/2019/09/bianchi_esuv_eurobike_5.jpg?quality=82&strip=all"
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

                        <form
                            onSubmit={handleloginUser}
                            class="mt-8 grid grid-cols-6 gap-6">


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


                            <div class="col-span-6">
                                <label for="MarketingAccept" class="flex gap-4">

                                    <span class="text-sm text-gray-700">
                                        I want to receive emails about events, product updates and
                                        company announcements.
                                    </span>
                                </label>
                            </div>

                            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">

                                <Button
                                    type='submit'
                                >
                                    <span className='text-black'>Sign In</span>

                                </Button>

                                <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Do not have an account ?
                                    <Link to='/signup' class="text-gray-700 underline"> SignUp</Link>.
                                </p>
                            </div>
                        </form>
                        <Button>
                            <div onClick={handleGoogleLogin} >
                                <span className='text-black flex items-center gap-2 p-1'><FcGoogle></FcGoogle> SignIn With Google </span>
                            </div>
                        </Button>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default SignIn;