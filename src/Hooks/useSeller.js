import { useEffect, useState } from "react";

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://xtocky-cycle-server.vercel.app/seller/allusres/${email}`)
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