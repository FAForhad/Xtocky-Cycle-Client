import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Product from '../Product/Product';
import Loadercard from '../../../Components/Loadercard/Loadercard';

const Products = () => {

    const { data: allProducts, isLoading } = useQuery({
        queryKey: ['allproducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allproducts')
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loadercard></Loadercard>
    }

    return (
        <div>
            <section class="text-gray-700 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 -m-4">
                        {
                            allProducts?.map(products => <Product key={products._id} products={products}></Product>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;