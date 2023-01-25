import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const useAPI = () => {

    const [data, setData] = useState<{
        name: string
    }>()

    useEffect(() => {
        let isMounted = true;
        axios.get("/api")
            .then((res) => {
                if (isMounted) {
                    setData(res.data)
                }
            })
        return () => {
            isMounted = false;
        };
    }, []);

    return data !== undefined && data
}
