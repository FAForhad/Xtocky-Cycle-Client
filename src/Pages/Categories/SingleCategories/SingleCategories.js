import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Loadercard from '../../../Components/Loadercard/Loadercard';
import Product from '../../Products/Product/Product';

const SingleCategories = () => {
    const data = useLoaderData()
    const { _id, about, category, picture } = data;


    const { data: products, isLoading } = useQuery({
        queryKey: ['/allproducts/category?categoryId', _id],
        queryFn: async () => {
            const res = await fetch(`https://xtocky-cycle-server.vercel.app/allproducts/category?categoryId=${_id}`)
            const data = res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loadercard></Loadercard>
    }

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
                    <div className="flex justify-center xl:w-1/2">
                        <img className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full" src={picture} alt="" />
                    </div>

                    <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                            {category}
                        </h2>

                        <p className="block text-start max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">{about}</p>

                        <div className="mt-6 sm:-mx-2">
                            <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
                                <Link className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto">
                                    <span className="mx-2">
                                        Get it on the App Store
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 -m-4">
                        {
                            products?.map(products => <Product key={products._id} products={products}></Product>)
                        }
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SingleCategories;