import React from 'react';
import Button from '../../../Components/Button/Button';

const MyOrders = () => {
    return (
        <div className='w-full h-full '>
            <div className="overflow-x-auto w-full ">
                <table className="table w-full rounded-none" >
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th></th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://www.herocycles.com/admin/public/uploads/bestseller/62876f27aa1ddd1Dch0vKZd.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <Button><span className='text-black'>Pay</span></Button>
                            </th>
                        </tr>
                        {/* <!-- row 2 --> */}
                        <tr>
                            <th>

                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                Carroll Group
                                <br />
                                <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                            </td>
                            <td>Red</td>
                            <th>
                                <Button><span className='text-black'>Pay</span></Button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;