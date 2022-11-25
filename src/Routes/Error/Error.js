import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="grid h-screen px-4 bg-white place-content-center">
                <div className="text-center">

                    <iframe style={{ border: "none", height: "500px" }} src="https://rive.app/community/2686-5508-koneksi-terputus/embed" allowfullscreen ></iframe>
                    <h1
                        className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                    >
                        Uh-oh!
                    </h1>

                    <p className="my-4 text-gray-500">We can't find that page.</p>
                    <Link
                        className="inline-block rounded bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                        to={'/'}
                    >
                        <span
                            className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent"
                        >
                            Back to home
                        </span>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Error;