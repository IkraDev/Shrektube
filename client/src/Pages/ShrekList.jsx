import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import DataList from "../Components/DataList/DataList";

const fetchShreks = () => {
    return fetch("http://127.0.0.1:8080/api/shreks").then((res) => res.json());
};

const ShrekList = () => {
    const [shreks, setShreks] = useState(null);
    const searchTerm = useOutletContext();

    useEffect(() => {
        fetchShreks().then((results) => {
            setShreks(results);
        });
    }, []);

    const filteredShreks = shreks?.filter((shrek) =>
        shrek.name.toLowerCase().includes(searchTerm.toLowerCase())
    );



    return (
        <>
            <DataList datas={filteredShreks} />
        </>
    );
};

export default ShrekList;
