import React from "react";
import About from "./about";
import Contact from "./contact";
import Resume from "./resume";
import Showcase from "./showcase";
import PageContent from "./pageContent";


function Page({page, currentPage}) {
    const render = () => {
        switch (currentPage.name) {
            case "About":
                return <About />;
            case "Showcase":
                return <Showcase />
            case "Contact":
                return <Contact />
            case "Resume":
                return <Resume />
            default:
                return null;

        }
    };
    return (
        <section>
            <h2>
                {currentPage.name}
                <PageContent>
                    {render()}
                </PageContent>
            </h2>
        </section>
    );
}
export default Page;
