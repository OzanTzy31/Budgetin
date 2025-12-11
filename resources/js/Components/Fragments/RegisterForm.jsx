import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { useForm } from "@inertiajs/react";
import { Label } from "@/Components/ui/label";

const RegisterForm = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/register");
    };

    console.log(data.name);

    return (
        <form onSubmit={submit} className="flex flex-col mt-4 gap-y-4">
            <Label htmlFor="name">name</Label>
            <Input
                label="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
            ></Input>

            <Label htmlFor="email">email</Label>
            <Input
                label="email"
                name="email"
                type="email"
                placeholder="johndoe@example.com"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
            ></Input>

            <Label htmlFor="password">password</Label>
            <Input
                label="password"
                name="password"
                type="password"
                placeholder="******"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
            ></Input>

            <Label htmlFor="password-confirmation">confirm password</Label>
            <Input
                label="password_confirmation"
                name="password_confirmation"
                type="password"
                placeholder="******"
                value={data.password_confirmation}
                onChange={(e) =>
                    setData("password_confirmation", e.target.value)
                }
            ></Input>

            <Button className="w-full" type="submit">
                Register
            </Button>
        </form>
    );
};

export default RegisterForm;
