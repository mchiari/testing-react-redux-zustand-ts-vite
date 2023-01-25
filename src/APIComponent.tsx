import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const APIComponent: React.FunctionComponent = () => {

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



    return (
        <div>{data && <div role={"contentinfo"}>Name is {data.name}</div>}</div>
    )
}
