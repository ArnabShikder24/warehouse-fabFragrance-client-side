import { useEffect, useState } from "react"

const useSingelItem = (id) => {
    const [item, setitem] =  useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
        .then(res => res.json())
        .then(data => setitem(data));
    }, [id, item]);

    return [item];
}

export default useSingelItem;