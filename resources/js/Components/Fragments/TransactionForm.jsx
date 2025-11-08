import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/components/ui/select";
import { useForm } from "@inertiajs/react";

const TransactionForm = (props) => {
    const { setTForm } = props;
    const { data, setData, post, processing, errors, reset } = useForm({
        category_id: "",
        type: "expense",
        amount: "",
        description: "",
        transaction_date: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/transactions", {
            onSuccess: () => reset("amount", "description"),
            preserveScroll: true,
        });
    };

    const close = (e) => {
        e.preventDefault();
        setTForm(false);
    };

    return (
        <form onSubmit={submit} className="">
            <div className="relative">
                <Button
                    variant="outline"
                    size="icon-sm"
                    className="absolute rounded-full right-[-10px] top-[-10px]"
                    onClick={close}
                >
                    x
                </Button>
            </div>
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
                        onChange={(e) => setData("description", e.target.value)}
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
                        onChange={(e) => setData("amount", e.target.value)}
                    />
                    {errors.amount && (
                        <p className="text-sm text-red-500">{errors.amount}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="type">Tipe</Label>
                    <Select
                        value={data.type}
                        onValueChange={(val) => setData("type", val)}
                    >
                        <SelectTrigger
                            className="bg-gray-300"
                            id="type"
                            name="type"
                        >
                            <SelectValue placeholder="Pilih tipe" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="expense">Pengeluaran</SelectItem>
                            <SelectItem value="income">Pemasukan</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.type && (
                        <p className="text-sm text-red-500">{errors.type}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="transaction_date">Tanggal (opsional)</Label>
                    <Input
                        id="transaction_date"
                        name="transaction_date"
                        type="date"
                        className="bg-gray-300"
                        value={data.transaction_date}
                        onChange={(e) =>
                            setData("transaction_date", e.target.value)
                        }
                    />
                    {errors.transaction_date && (
                        <p className="text-sm text-red-500">
                            {errors.transaction_date}
                        </p>
                    )}
                    <p className="text-xs text-muted-foreground">
                        Kosongkan jika ingin default ke tanggal hari ini.
                    </p>
                </div>

                <Button type="submit" disabled={processing}>
                    Tambah
                </Button>
            </Card>
        </form>
    );
};

export default TransactionForm;
