import React from "react";
import CardCounter from "../Components/CardCounter";
import ProductTable from "../Components/ProductTable";
import AddProduct from "../Components/AddProduct";

const Home = () => {

    return (
        <div className="container-fluid" >
            <div className="row px-4" >
                <div className="col-12 py-4" >
                    <h4> INVENTORY MANAGEMENT SYSTEM </h4>
                </div>
                <div className="col-8" >
                    <CardCounter />
                    <ProductTable />
                </div>
                <div className="col-4" >
                    <div className="row" >
                        <AddProduct />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;