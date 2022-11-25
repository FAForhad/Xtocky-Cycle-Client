import React from 'react';
import { Link } from 'react-router-dom';

const HomeCategory = ({ categorie }) => {
    const { _id, picture, category, about } = categorie

    return (
        <div>
            <Link to={`/signleCategory/${_id}`} className="block">
                <img
                    alt="Simple Watch"
                    src={picture}
                    className="aspect-square w-full rounded object-cover inset-0 opacity-100 transition-opacity hover:opacity-80"
                />

                <div className="mt-2">
                    <h3 className="font-medium">{category}</h3>

                    <p className="mt-1 text-sm text-gray-700">{about && about.slice(0, 110) + '...'}</p>
                </div>
            </Link>
        </div>
    );
};

export default HomeCategory;