import React from "react";
import About from "./about";
import Contact from "./contact";
import Resume from "./resume";
import Showcase from "./showcase";
import PageContent from "./pageContent";


function Page({ currentPage }) {
    const render = () => {
        switch (currentPage.name) {
            case 'about Me':
                return <About />;
            case 'showcase':
                return <Showcase />
            case 'contact':
                return <Contact />
            case 'resume':
                return <Resume />

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
