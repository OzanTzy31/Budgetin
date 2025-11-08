import { Button } from "@/components/ui/button";
import MainLayout from "../Components/Layouts/MainLayout";
import Header from "../Components/Fragments/Header";
import TransactionForm from "../Components/Fragments/TransactionForm";
import { useState } from "react";
import SideBar from "../Components/Fragments/Sidebar";
import MonthlyCard from "../Components/Fragments/MonthlyCard";
import TransactionRecord from "../Components/Fragments/TransactionRecord";

const DashboardPage = () => {
    const [tForm, setTForm] = useState(false);

    // const { patch } = useForm({
    //     body: "",
    // });

    return (
        <>
            <div
                className={`${
                    tForm == true
                        ? "flex flex-col justify-center items-center w-screen h-screen bg-black/20 absolute z-50"
                        : "hidden"
                }`}
            >
                <div>
                    {tForm && (
                        <TransactionForm setTForm={setTForm}></TransactionForm>
                    )}
                </div>
            </div>
            <MainLayout>
                <div className="grid grid-cols-4">
                    <SideBar></SideBar>
                    <div className="col-span-3">
                        <Header></Header>
                        <div>
                            <div className="px-4">
                                <div className="flex justify-end">
                                    <Button onClick={() => setTForm(true)}>
                                        Add Transaction
                                    </Button>
                                </div>

                                <MonthlyCard></MonthlyCard>
                                <TransactionRecord></TransactionRecord>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default DashboardPage;
