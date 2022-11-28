import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../Components/Loader/Loader';

const AllBuyers = () => {

    const { data: allbuyers, isLoading, refetch } = useQuery({
        queryKey: ['allsellers?role=Buyer'],
        queryFn: async () => {
            const res = await fetch('https://xtocky-cycle-server.vercel.app/allbuyers?role=Buyer', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('Token')}`
                }
            })
            const data = res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    const handleDeleteItem = (id) => {
        const confirm = window.confirm('Are you sure, you want to delete this Item??')
        if (confirm) {
            fetch(`https://xtocky-cycle-server.vercel.app/allbuyers/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
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
                            <th>Photo</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allbuyers?.map(allbuyer => <tr>
                                <th>
                                </th>
                                <th>

                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={allbuyer?.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{allbuyer?.name}</td>
                                <th className='text-green-400'>
                                    {allbuyer?.email}
                                </th>
                                <th><button onClick={() => handleDeleteItem(allbuyer._id)} className='hover:text-orange-500'>
                                    Delete user
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

export default AllBuyers;