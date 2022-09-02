import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className="flex center-screen">
            <div className="text-section box-item">
                <h2 className="text-align-center">MediEvalBay</h2>
                <p className="text-align-center">
                    Your one-stop-shop-trip for all the best tools(very sharp tools), armor(highly
                    protective plates) and machinery(typically flings heavy artillery at enemy
                    camps). Consult our head chief for the best tips to groom your beard(at some
                    additional cost) and which sword has the sharpest and most pointies bit!
                </p>
            </div>

            <div className="text-section box-item">
                <h3 className="text-align-center">Today, from the village...</h3>
                <p className="text-align-center">
                    Head clothier William has perfected the use of the neighbouring clan's
                    "fibercloth", scavenged from the last grand battle against the swiss. While it
                    can be incorporated into our armor, all it does is make them slightly silky to
                    the touch. Henceforth they shall be used to decorate our warbanners and carpets.
                </p>
            </div>
        </div>
    );
}

export default Home;
