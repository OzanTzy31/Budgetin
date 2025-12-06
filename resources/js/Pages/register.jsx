import AuthLayout from "../Components/Layouts/AuthLayout";
import RegisterForm from "../Components/Fragments/RegisterForm";

const LoginPage = () => {
    return (
        <div>
            <AuthLayout title="Sign Up" type="register">
                <RegisterForm />
            </AuthLayout>
        </div>
    );
};

export default LoginPage;
