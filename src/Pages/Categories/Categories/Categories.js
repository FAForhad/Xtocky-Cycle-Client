import React from 'react';
import Button from '../../../Components/Button/Button';
import { useQuery } from '@tanstack/react-query';
import Loadercard from '../../../Components/Loadercard/Loadercard';
import HomeCategory from '../../Home/HomeCategories/HomeCategory';
import { Link } from 'react-router-dom';

const Categories = () => {

    const { data: allCategories, isLoading } = useQuery({
        queryKey: ['allcategories'],
        queryFn: async () => {
            const res = await fetch('https://xtocky-cycle-server.vercel.app/allcategories')
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loadercard></Loadercard>
    }

    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
                    <div
                        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch"
                    >
                        <div className="flex items-center rounded bg-gray-100 p-8" >
                            <div className="mx-auto text-center lg:text-left" >
                                <h2 className="text-2xl font-bold">CATEGORIES</h2>

                                <p className="mt-4 max-w-[45ch] text-sm text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                                    cupiditate mollitia saepe vitae libero nobis.
                                </p>
                                <Link to='/products'><Button> <span className='text-black'>View All Peoducts</span> </Button></Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12"
                        >

                            {
                                allCategories?.map(categorie => <HomeCategory key={categorie._id} categorie={categorie}></HomeCategory>)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Categories;