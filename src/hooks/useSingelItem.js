import { useState } from "react"

const useSingelItem = (id) => {
    const [item, setitem] =  useState({});

    fetch(`http://localhost:5000/inventory/${id}`)
    .then(res => res.json())
    .then(data => setitem(data));

    return [item];
}

export default useSingelItem;