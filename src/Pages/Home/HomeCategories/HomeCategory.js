import React from 'react';

const HomeCategory = ({ categorie }) => {
    const { picture, category, about } = categorie

    return (
        <div>
            <a href="#" class="block">
                <img
                    alt="Simple Watch"
                    src={picture}
                    class="aspect-square w-full rounded object-cover"
                />

                <div class="mt-2">
                    <h3 class="font-medium">{category}</h3>

                    <p class="mt-1 text-sm text-gray-700">{about && about.slice(0, 110) + '...'}</p>
                </div>
            </a>
        </div>
    );
};

export default HomeCategory;