import { Button } from "@/components/ui/button";
import MainLayout from "../Components/Layouts/MainLayout";
import Navbar from "../Components/Fragments/Navbar";
import TransactionForm from "../Components/Fragments/TransactionForm";
import { useState } from "react";
import SideBar from "../Components/Fragments/Sidebar";
import MonthlyCard from "../Components/Fragments/MonthlyCard";
import TransactionRecord from "../Components/Fragments/TransactionRecord";

const TransactionPage = () => {
    const [tForm, setTForm] = useState(false);

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
                <div className="grid h-full md:grid-cols-4 lg:grid-cols-8">
                    <SideBar></SideBar>

                    <div className="col-span-3 lg:col-span-7">
                        <Navbar></Navbar>
                        <div>
                            <div className="px-4">
                                <div className="flex justify-end">
                                    <Button onClick={() => setTForm(true)}>
                                        Add Transaction
                                    </Button>
                                    <TransactionRecord></TransactionRecord>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default TransactionPage;
