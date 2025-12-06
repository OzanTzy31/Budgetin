import { usePage } from "@inertiajs/react";
import EditForm from "../Components/Fragments/EditForm";

const EditPage = () => {
    const { transactions } = usePage().props;

    return <EditForm transaction={transactions} />;
};

export default EditPage;
