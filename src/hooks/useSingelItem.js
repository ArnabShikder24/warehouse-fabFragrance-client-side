import { useEffect, useState } from "react"

const useSingelItem = (id) => {
    const [item, setitem] =  useState({});

    useEffect(() => {
        fetch(`https://damp-mesa-95348.herokuapp.com/inventory/${id}`)
        .then(res => res.json())
        .then(data => setitem(data));
    }, [id, item]);

    return [item];
}

export default useSingelItem;