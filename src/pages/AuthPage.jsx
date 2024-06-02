import { useState } from "react";
import LoginForm from "./Login";
import SignUpForm from "./SignUp";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-2xl flex">
        <div className="w-full sm:w-1/2 p-4">
          {isLogin ? <LoginForm /> : <SignUpForm />}
          <button onClick={toggleForm} className="mt-4 text-blue-500 ">
            {isLogin
              ? "حساب کاربری ندارید؟ ثبت نام کنید"
              : "حساب کاربری دارید؟ وارد شوید"}
          </button>
          {isLogin && (
            <div className="mt-4">
              <a href="/passwordReset" className="text-blue-500 ">
                رمز عبور خود را فراموش کرده‌اید؟
              </a>
            </div>
          )}
        </div>
        <div className="hidden sm:w-1/2 p-4 md:flex justify-center items-center">
          <img
            src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/other/auth.jpg"
            alt="Auth Banner"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
