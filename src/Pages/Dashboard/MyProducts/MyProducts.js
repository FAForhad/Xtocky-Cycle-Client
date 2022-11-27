import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loader from '../../../Components/Loader/Loader';
import { Authcontext } from '../../../UserContext/UserContext';

const MyProducts = () => {
    const { user } = useContext(Authcontext)
    const { data: myProducts = [], isLoading } = useQuery({
        queryKey: ['myproduct?email', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproduct?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })


    const handleDeleteItem = () => {

    }


    if (isLoading) {
        return <Loader></Loader>
    }
    console.log(myProducts)

    return (
        <div className='w-full h-full '>
            <div className="overflow-x-auto w-full ">
                <table className="table w-full rounded-none" >
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Picture</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Delete item</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myProducts?.map(myproduct => <tr>
                                <th>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myproduct?.picture} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {myproduct?.name}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Condition : {myproduct?.condition}</span>
                                </td>
                                <td>$ {myproduct?.Original_price}</td>
                                <th className='text-green-500'>
                                    available
                                </th>
                                <th><button onClick={handleDeleteItem} className='hover:text-orange-500'>
                                    Delete Item
                                </button>
                                </th>
                            </tr>)
                        }






                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;