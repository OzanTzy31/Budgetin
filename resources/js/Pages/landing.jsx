import MainLayout from "../Components/Layouts/MainLayout";
// import { Label } from "@/Components/ui/label";
// import { Input } from "@/Components/ui/input";
import Hero from "../Components/Fragments/Hero";
import Header from "../Components/Fragments/Header";
import Footer from "../Components/Fragments/Footer";

const LandingPage = () => {
    return (
        <>
            <div className="bg-[var(--background)]">
                <MainLayout>
                    <Header></Header>
                    <Hero></Hero>
                    <Footer></Footer>
                </MainLayout>
            </div>
        </>
    );
};

export default LandingPage;
