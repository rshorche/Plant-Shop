import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    const { email, password } = data;
    setIsLoading(true);
    setStatus("در حال ارسال درخواست...");

    const { user, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.error("خطا در ثبت نام:", error.message);
      setStatus("خطا در ثبت نام: " + error.message);
    } else {
      console.log("کاربر ثبت نام شد:", user);
      setStatus("ثبت نام موفقیت‌آمیز!");
      localStorage.setItem("isLoggedIn", true);
      setTimeout(() => navigate("/cms"), 2000); // هدایت به /cms بعد از 2 ثانیه
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <h2 className="text-2xl mb-4">ثبت نام</h2>
      {status && <p className="mb-4 text-center">{status}</p>}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-bold mb-2">
          ایمیل
        </label>
        <input
          id="email"
          type="email"
          {...register("email", { required: true })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-2">ایمیل الزامی است</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-bold mb-2">
          رمز عبور
        </label>
        <input
          id="password"
          type="password"
          {...register("password", { required: true })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-2">رمز عبور الزامی است</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className={`bg-green text-white font-bold py-2 px-4 rounded-full${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}>
        {isLoading ? "در حال ارسال..." : "ثبت نام"}
      </button>
    </form>
  );
};

export default SignUpForm;
