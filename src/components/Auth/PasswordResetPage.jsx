import { useState } from "react";
import { useForm } from "react-hook-form";
import supabase from "../../supabase";

const PasswordResetPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    const { email } = data;
    setIsLoading(true);
    setStatus("در حال ارسال درخواست...");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + "/update-password", // مسیر بازنشانی بعد از تایید ایمیل
    });

    if (error) {
      console.error("خطا در بازنشانی رمز عبور:", error.message);
      setStatus("خطا در بازنشانی رمز عبور: " + error.message);
    } else {
      setStatus("ایمیل بازنشانی رمز عبور ارسال شد!");
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl mb-4">فراموشی رمز عبور</h2>
        {status && <p className="mb-4 text-center">{status}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            ایمیل
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: true })}
            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight"
          />
          {errors.email && (
            <p className="text-error text-xs mt-2">ایمیل الزامی است</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`bg-green text-white font-bold py-2 px-4 rounded-full ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}>
          {isLoading ? "در حال ارسال..." : "ارسال لینک بازنشانی"}
        </button>
      </form>
    </div>
  );
};

export default PasswordResetPage;
