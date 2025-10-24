import { Link, useForm, usePage } from "@inertiajs/react";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MainLayout from "../Components/Layouts/MainLayout";
import Header from "../Components/Fragments/Header";
import Footer from "../Components/Fragments/Footer";

const TransactionForm = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        category_id: "",
        type: "expense",
        amount: "",
        description: "",
        transaction_date: "",
    });

    const { transactions, summary } = usePage().props;
    const monthlyIncome = summary?.current_month?.income ?? 0;
    const monthlyExpense = summary?.current_month?.expense ?? 0;

    const idr = (n) =>
        Number(n || 0).toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
        });

    // let tIncome = 0,
    //     tExpense = 0;

    // for (const t of transactions.data ?? []) {
    //     const amount = Number(t.amount || 0);
    //     if (t.type === "income") tIncome += amount;
    //     else if (t.type === "expense") tExpense += amount;
    // }

    // const idr = (n) =>
    //     n.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

    const submit = (e) => {
        e.preventDefault();
        post("/transactions", {
            onSuccess: () => reset("amount", "description"),
            preserveScroll: true,
        });
    };

    return (
        <>
            <MainLayout>
                <Header></Header>
                <div className="flex flex-col items-center justify-center my-10">
                    <div className="grid gap-4 p-4 bg-transparent lg:grid-cols-4 sm:grid-cols-2">
                        <Card className="w-full max-w-sm bg-[var(--card)]">
                            <CardHeader>
                                <CardTitle>Monthly Income</CardTitle>
                            </CardHeader>
                            <CardContent className="tabular">
                                {idr(monthlyIncome)}
                            </CardContent>
                        </Card>
                        <Card className="w-full max-w-sm bg-[var(--card)]">
                            <CardHeader>
                                <CardTitle>Monthly Expense</CardTitle>
                            </CardHeader>
                            <CardContent className="tabular">
                                {idr(monthlyExpense)}
                            </CardContent>
                        </Card>
                    </div>
                    <form onSubmit={submit} className="w-full max-w-xl mt-5">
                        <Card className="p-4 space-y-3">
                            <div>
                                <Label htmlFor="description">Deskripsi</Label>
                                <Input
                                    id="description"
                                    name="description"
                                    type="text"
                                    className="bg-gray-300"
                                    placeholder="Roti jala mak lima"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />
                                {errors.description && (
                                    <p className="text-sm text-red-500">
                                        {errors.description}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="amount">Jumlah</Label>
                                <Input
                                    id="amount"
                                    name="amount"
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    className="bg-gray-300"
                                    placeholder="200000"
                                    value={data.amount}
                                    onChange={(e) =>
                                        setData("amount", e.target.value)
                                    }
                                />
                                {errors.amount && (
                                    <p className="text-sm text-red-500">
                                        {errors.amount}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="type">Tipe</Label>
                                <Select
                                    value={data.type}
                                    onValueChange={(val) =>
                                        setData("type", val)
                                    }
                                >
                                    <SelectTrigger
                                        className="bg-gray-300"
                                        id="type"
                                        name="type"
                                    >
                                        <SelectValue placeholder="Pilih tipe" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="expense">
                                            Pengeluaran
                                        </SelectItem>
                                        <SelectItem value="income">
                                            Pemasukan
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.type && (
                                    <p className="text-sm text-red-500">
                                        {errors.type}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="transaction_date">
                                    Tanggal (opsional)
                                </Label>
                                <Input
                                    id="transaction_date"
                                    name="transaction_date"
                                    type="date"
                                    className="bg-gray-300"
                                    value={data.transaction_date}
                                    onChange={(e) =>
                                        setData(
                                            "transaction_date",
                                            e.target.value
                                        )
                                    }
                                />
                                {errors.transaction_date && (
                                    <p className="text-sm text-red-500">
                                        {errors.transaction_date}
                                    </p>
                                )}
                                <p className="text-xs text-muted-foreground">
                                    Kosongkan jika ingin default ke tanggal hari
                                    ini.
                                </p>
                            </div>

                            <Button type="submit" disabled={processing}>
                                Tambah
                            </Button>
                        </Card>
                    </form>
                </div>

                <table className="w-full mt-6 text-left">
                    <thead>
                        <tr className="text-sm">
                            <th className="py-2">Deskripsi</th>
                            <th className="py-2">Jenis Transaksi</th>
                            <th className="py-2">Jumlah</th>
                            <th className="py-2">Tanggal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.data.map((t) => (
                            <tr key={t.id} className="border-t border-white/10">
                                <td className="py-2">{t.description ?? "-"}</td>
                                <td className="py-2">{t.type}</td>
                                <td className="py-2">
                                    <p>
                                        Rp{" "}
                                        {Number(t.amount).toLocaleString(
                                            "id-ID"
                                        )}
                                    </p>
                                </td>
                                <td className="py-2">{t.transaction_date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex items-center justify-center w-full py-5 mt-5 ">
                    {transactions.links.map((link) =>
                        link.url ? (
                            <Link
                                key={link.label}
                                href={link.url || "#"}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className={`p-1 mx-1 font-bold ${
                                    link.active
                                        ? "text-slate-400 font-bold"
                                        : ""
                                }`}
                            />
                        ) : (
                            <span
                                key={link.label}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className="p-1 mx-1 text-slate-300"
                            ></span>
                        )
                    )}
                </div>
                <Footer></Footer>
            </MainLayout>
        </>
    );
};

export default TransactionForm;
