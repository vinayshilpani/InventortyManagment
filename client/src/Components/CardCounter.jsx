import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";


const CardCounter = () => {

    const [data, setData] = useState({});
    const getDataCountFun = async () => {
        try {
            axios
                .get("/getInventoryCount")
                .then((res) => {
                    console.log(res.data);
                    setData(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getDataCountFun();
    }, []);



    return (
        <div className="col-5 px-2 py-2">
            <div className="px-4 py-3 cardCounter">
                <div className="row align-items-center " >
                    <div className="col-6 offset-md-1" >
                        <h6> Total Available </h6>
                        <h3> Products </h3>
                    </div>
                    <div className="col-4" >
                        <h2> {data.productsDataCount} </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardCounter;