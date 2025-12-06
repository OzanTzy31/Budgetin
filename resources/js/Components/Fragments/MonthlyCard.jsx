import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { usePage } from "@inertiajs/react";

const MonthlyCard = () => {
    const { summary } = usePage().props;

    const monthlyIncome = summary?.current_month?.income ?? 0;
    const monthlyExpense = summary?.current_month?.expense ?? 0;

    const idr = (n) =>
        Number(n || 0).toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
        });

    return (
        <div className="flex flex-col items-center justify-center my-10">
            <div className="grid gap-4 p-4 bg-transparent sm:grid-cols-2">
                <Card className="w-full max-w-sm bg-[var(--income)] hover:scale-110 hover:shadow-md duration-300 text-white font-semibold">
                    <CardHeader>
                        <CardTitle>Monthly Income</CardTitle>
                    </CardHeader>
                    <CardContent className="tabular">
                        {idr(monthlyIncome)}
                    </CardContent>
                </Card>
                <Card className="w-full max-w-sm bg-[var(--expense)] hover:scale-110 hover:shadow-md duration-300 text-white font-semibold">
                    <CardHeader>
                        <CardTitle>Monthly Expense</CardTitle>
                    </CardHeader>
                    <CardContent className="tabular">
                        {idr(monthlyExpense)}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
export default MonthlyCard;
