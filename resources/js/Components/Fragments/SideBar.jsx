import { Link } from "@inertiajs/react";

const SideBar = () => {
    return (
        <div className="flex flex-col h-full bg-[var(--app-bg-surface)]">
            <Link>DashBoard</Link>
            <Link>Transaction</Link>
        </div>
    );
};

export default SideBar;
