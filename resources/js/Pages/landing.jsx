import MainLayout from "../Components/Layouts/MainLayout";
import Hero from "../Components/Fragments/Hero";
import Navbar from "../Components/Fragments/Navbar";
import Footer from "../Components/Fragments/Footer";

const LandingPage = () => {
    return (
        <>
            <div className="bg-[var(--background)]">
                <MainLayout>
                    <Navbar></Navbar>
                    <Hero></Hero>
                    <Footer></Footer>
                </MainLayout>
            </div>
        </>
    );
};

export default LandingPage;
