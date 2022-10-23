
import React, { Fragment } from "react";
import Featured from "../components/featured";
import FeaturedProperties from "../components/featuredProperties";
import { Footer } from "../components/footer";
import Header from "../components/Header";
import { MailList } from "../components/mailList";
import Navbar from "../components/navbar";
import Properties from "../components/popertyList";

 const Home = () => {
    return(
        <Fragment>
            <Navbar />
            <Header />
            <div className="homeContainer mt-[50px] flex flex-col items-center gap-[30px]">
                <Featured />
                <h1 className="homeTitle text-[20px] lg:w-[1024px]">Browse by property type</h1>
                <Properties />
                <h1 className="homeTitle text-[20px] lg:w-[1024px]">Homes guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </Fragment>
    )
}


export default Home;