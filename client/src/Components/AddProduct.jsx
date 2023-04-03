import React from "react";
import axios from "axios";
import { useState } from "react";

const AddProduct = () => {

    const [data, setdata] = useState({
        productName: "",
        productDesc: "",
        productCategory: "",
        productImage: "",
        productPrice: "",
        productMRP: "",
    });

    let name, value;
    const handleInputData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setdata({ ...data, [name]: value });
    };

    const handleImg = (e) => {
        setdata({ ...data, productImage: e.target.files[0] });
    };

    const sendFormData = async (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append("productName", data.productName);
        formData.append("productDesc", data.productDesc);
        formData.append("productCategory", data.productCategory);
        formData.append("productImage", data.productImage);
        formData.append("productPrice", data.productPrice);
        formData.append("productMRP", data.productMRP);

        if (!data.productName || !data.productDesc || !data.productCategory || !data.productPrice || !data.productMRP || !data.productImage) {
            return alert("Please Fill all the Fields");
        }

        axios
            .post("/addItems", formData)
            .then((res) => {
                console.log(res.data);
                if (res.data === "please Fill All The Fields") {
                    return alert("please fill all the fields");
                } else if (res.data === "DataSaved") {
                    setdata({ productName: "", productDesc: "", productCategory: "", productPrice: "", productMRP: "", productImage: "" });
                    window.location.reload();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="py-4" >
            <div className="formforProduct p-5" >
                <div className="mb-3" >
                    <small> Product Name </small> <br />
                    <input type="text" onChange={handleInputData}
                        value={data.productName}
                        name={"productName"} className="cInput w-100" id="" />
                </div>
                <div className="mb-3" >
                    <small> Product Description </small> <br />
                    <input type="text" onChange={handleInputData}
                        value={data.productDesc}
                        name={"productDesc"} className="cInput w-100" id="" />
                </div>
                <div className="d-flex" >
                    <div className="mb-3 pe-1 w-50" >
                        <small> Product Category </small> <br />
                        <select id="" onChange={handleInputData} className="form-control mt-2 w-100"
                            value={data.productCategory}
                            name={"productCategory"}>
                            <option value="Bakery & Dairy"> Bakery & Dairy</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Fruit & Vegetalable">Fruit & Vegetalable</option>
                            <option value="Non-Veg">Non-Veg</option>
                        </select>
                    </div>
                    <div className="mb-3 ps-1 w-50" >
                        <small> Choose Image </small> <br />
                        <input type="file" onChange={handleImg} accept=".png,.jpg,.jpeg" name={"productImage"} className="cInput w-100" id="fileinput" />
                    </div>
                </div>
                <div className="d-flex pe-1" >
                    <div className="mb-3" >
                        <small> Product Price </small> <br />
                        <input type="text" onChange={handleInputData}
                            value={data.productPrice}
                            name={"productPrice"} className="cInput w-100" id="" />
                    </div>
                    <div className="mb-3 ps-1" >
                        <small> Product MRP </small> <br />
                        <input type="text" onChange={handleInputData}
                            value={data.productMRP}
                            name={"productMRP"} className="cInput w-100" id="" />
                    </div>
                </div>
                <div>
                    <button className="cBtn" onClick={sendFormData} > Add Product </button>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;