import { useEffect, useState } from "react";

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState('');
    const [isSellerLoading, setIsSellerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/allusres?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.role)
                    setIsSellerLoading(false);
                })
        }
    }, [email])
    return [isSeller, isSellerLoading];
};
export default useSeller;