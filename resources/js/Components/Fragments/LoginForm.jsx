import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Button } from "../ui/button";
import { useForm } from "@inertiajs/react";

const LoginForm = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/login");
    };

    return (
        <form onSubmit={submit} className="flex flex-col mt-2 gap-y-6 ">
            <Label htmlFor="email">email</Label>
            <Input
                id="email"
                name="email"
                type="email"
                placeholder="johndoe@example.com"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
            ></Input>

            <Label htmlFor="password">password</Label>
            <Input
                id="password"
                name="password"
                type="password"
                placeholder="******"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
            ></Input>

            <Button variant="">Login</Button>
        </form>
    );
};

export default LoginForm;
