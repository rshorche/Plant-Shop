import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import supabase from "../../supabase";

const LoginForm = () => {
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

    const { data: user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("خطا در ورود:", error.message);
      setStatus("خطا در ورود: " + error.message);
    } else {
      console.log("کاربر وارد شد:", user);
      setStatus("ورود موفقیت‌آمیز!");
      localStorage.setItem("isLoggedIn", true);
      navigate("/cms");
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <h2 className="text-2xl mb-4">ورود</h2>
      {status && <p className="mb-4 text-center">{status}</p>}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-bold mb-2">
          ایمیل
        </label>
        <input
          id="email"
          type="email"
          {...register("email", { required: true })}
          className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight "
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
          className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight "
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-2">رمز عبور الزامی است</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className={`bg-green text-white font-bold py-2 px-4 rounded-full  ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}>
        {isLoading ? "در حال ارسال..." : "ورود"}
      </button>
    </form>
  );
};

export default LoginForm;
