import React, { useState } from "react";
import ProductCardBrowse from "../components/ProductCardBrowse";
import ProductCardHomepage from "../components/ProductCardHomepage";
import { Product, useProduct } from "../context/ProductContext";
import "./Home.css";
import { getAmountOfProducts } from "../data/data";

function Home() {
    const products = getAmountOfProducts(2);

    return (
        <div>
            <div className="flex-container center-items products-main center-non-flex">
                <div className="flex-item-two text text-align-center">
                    <h2>MediEvalBay</h2>
                    <p>
                        Your one-stop-shop-trip for all the best tools(very sharp tools),
                        armor(highly protective plates) and machinery(typically flings heavy
                        artillery at enemy camps). Consult our head chief for the best tips to groom
                        your beard(at some additional cost) and which sword has the sharpest and
                        most pointies bit!
                    </p>
                </div>

                <div className="flex-item-two text text-align-center">
                    <h3>Today, from the village...</h3>
                    <p>
                        Head clothier William has perfected the use of the neighbouring clan's
                        "fibercloth", scavenged from the last grand battle against the swiss. While
                        it can be incorporated into our armor, all it does is make them slightly
                        silky to the touch. Henceforth they shall be used to decorate our warbanners
                        and carpets.
                    </p>
                </div>
            </div>

            <div className="text-align-center">
                <h2 className="">Merlins featured item</h2>
            </div>

            <div className="flex-container flex-wrap products-main center-items center-non-flex">


                {products.map((product) => (
                    <div className="product-margin">
                        <ProductCardBrowse
                            key={product.id}
                            product={product}
                            cardClickable={true}
                        />
                    </div>
                ))}
            </div>
            <img className="center max-width" src="https://i.imgur.com/M8wqbsv.gif"></img>
        </div>
    );
}

export default Home;
