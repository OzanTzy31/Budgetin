import { Link, useForm, usePage } from "@inertiajs/react";
import { Button } from "@/components/ui/button";

const TransactionRecord = () => {
    const { transactions } = usePage().props;

    const { delete: destroy } = useForm();

    function handleEdit(e, id) {
        e.preventDefault();
        patch(`/transactions/${transaction.id}`);
    }

    function handleDelete(e, id) {
        e.preventDefault();
        destroy(`/transactions/${id}`);
    }

    return (
        <>
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
                                    {Number(t.amount).toLocaleString("id-ID")}
                                </p>
                            </td>
                            <td className="py-2">{t.transaction_date}</td>
                            <td className="flex py-2 gap-x-2">
                                <Button
                                    type="button"
                                    onClick={(e) => handleEdit(e, t.id)}
                                >
                                    edit
                                </Button>
                                <Button
                                    type="button"
                                    onClick={(e) => handleDelete(e, t.id)}
                                >
                                    hapus
                                </Button>
                            </td>
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
                            dangerouslySetInnerHTML={{
                                __html: link.label,
                            }}
                            className={`p-1 mx-1 font-bold ${
                                link.active ? "text-slate-400 font-bold" : ""
                            }`}
                        />
                    ) : (
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{
                                __html: link.label,
                            }}
                            className="p-1 mx-1 text-slate-300"
                        ></span>
                    )
                )}
            </div>
        </>
    );
};

export default TransactionRecord;
