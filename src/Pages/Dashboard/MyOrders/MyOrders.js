import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../Components/Loader/Loader';
import { Authcontext } from '../../../UserContext/UserContext';

const MyOrders = () => {

    const { user } = useContext(Authcontext)
    const { data: myOrders = [], isLoading, refetch } = useQuery({
        queryKey: ['mybookings?email', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://xtocky-cycle-server.vercel.app/mybookings?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }


    const handleDeleteItem = (id) => {
        const confirm = window.confirm('Are you sure, you want to delete this Item forom cart??')
        if (confirm) {
            fetch(`https://xtocky-cycle-server.vercel.app/mybookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Deleted Successfully', {
                            style: {
                                border: '1px solid #713200',
                                padding: '16px',
                                color: '#713200',
                            },
                            iconTheme: {
                                primary: '#713200',
                                secondary: '#FFFAEE',
                            },
                        })
                        refetch()
                    }
                })
        }
    }



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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders?.map(myorder => <tr>
                                <th>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myorder?.picture} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {myorder?.name}
                                    <br />
                                </td>
                                <td>$ {myorder?.price}</td>
                                <th className='hover:text-green-500'>
                                    <button>
                                        PAY NOW
                                    </button>
                                </th>
                                <th className='hover:text-orange-500'>
                                    <button onClick={() => handleDeleteItem(myorder?._id)}>
                                        Delete To Cart
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

export default MyOrders;