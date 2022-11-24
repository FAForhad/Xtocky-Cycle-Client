import React from 'react';

const Product = ({ products }) => {
    console.log(products)
    const { name, picture, Original_price, Used_year, resale_price, about, condition } = products
    return (
        <div class="p-4 ">
            <div class="h-full  rounded-lg overflow-hidden">
                <img class="lg:h-72 md:h-36 w-full object-cover object-center" src={picture} alt="blog" />
                <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{name}</h1>
                    <p class="leading-relaxed mb-3">{about && about.slice(0, 110) + '...'}</p>
                    <div class="flex items-center flex-wrap ">
                        <span class="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                            Original Price : {Original_price}
                        </span>
                        <span class="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                            Sale Price : {resale_price}
                        </span>
                        <span class="text-gray-600 inline-flex items-center leading-none text-sm">
                            Condition : {condition}
                        </span>
                    </div>
                    <button class="text-orange-600 inline-flex items-center md:mb-2 lg:mb-0">Buy Now
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;