import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../Components/Loader/Loader';

const AllSellers = () => {

    const { data: allsellers, isLoading, refetch } = useQuery({
        queryKey: ['allsellers?role=Seller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allsellers?role=Seller')
            const data = res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }


    const handleUpdateUser = (id) => {
        fetch(`http://localhost:5000/verifyuser/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: true })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Verifyed successfully')
                    refetch()
                }
            })
    }


    const handleDeleteItem = (id) => {
        const confirm = window.confirm('Are you sure, you want to delete this Item??')
        if (confirm) {
            fetch(`http://localhost:5000/allsellers/${id}`, {
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
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allsellers?.map(allseller => <tr>
                                <th>
                                </th>
                                <th>

                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={allseller?.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{allseller?.name}</td>
                                <th >
                                    {allseller?.email}
                                </th>
                                <th><button onClick={() => handleUpdateUser(allseller._id)} className='text-green-500'>
                                    {allseller?.isVerifyed ? 'Verifyed' : "Verify Seller"}
                                </button>
                                </th>
                                <th><button onClick={() => handleDeleteItem(allseller._id)} className='hover:text-orange-500'>
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

export default AllSellers;