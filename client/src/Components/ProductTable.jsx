import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";


const ProductTable = () => {

    const [data, setData] = useState({});
    const getDataFun = async () => {
        try {
            axios
                .get("/getInventoryData")
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
        getDataFun();
    }, []);


    return (
        <div className="col-12 table-responsive p-3" >
            <table className="table" >
                <thead>
                    <tr>
                        <th></th>
                        <th> Name </th>
                        <th> Category </th>
                        <th> Price & MRP </th>
                        <th> Descrition </th>
                    </tr>
                </thead>
                <tbody>

                    {data.length > 0 && (
                        <>
                            {data.map((dbData) => (
                                <tr key={dbData.id}>
                                    <td>
                                        <img
                                            src={"upload/" + dbData.productImage}
                                            alt=""
                                            style={{ width: "70px", borderRadius: "50%" }}
                                        />
                                    </td>
                                    <td> <small>{dbData.productName} <br />
                                        {dbData.cDate}</small> </td>
                                    <td> <small>{dbData.productCategory}</small> </td>
                                    <td>
                                        <small>
                                            Price: ₹ {dbData.productPrice}  <br />
                                            MRP: ₹ {dbData.productMRP}
                                        </small>
                                    </td>
                                    <td style={{ width: "30%" }} >
                                        <small className="text-wrap" >
                                            {dbData.productDesc}
                                        </small>
                                    </td>
                                </tr>
                            ))}
                        </>
                    )}
                </tbody>
            </table>
        </div>
    )
};

export default ProductTable;