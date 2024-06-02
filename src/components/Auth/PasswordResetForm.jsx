import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import supabase from "../../supabase";

const PasswordResetForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get("access_token");

  const onSubmit = async (data) => {
    const { password } = data;
    setIsLoading(true);
    setStatus("در حال ارسال درخواست...");

    const { error } = await supabase.auth.updateUser(accessToken, { password });

    if (error) {
      console.error("خطا در تغییر رمز عبور:", error.message);
      setStatus("خطا در تغییر رمز عبور: " + error.message);
    } else {
      setStatus("رمز عبور با موفقیت تغییر کرد!");
      setTimeout(() => navigate("/login"), 2000); // هدایت به /login بعد از 2 ثانیه
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl mb-4">تغییر رمز عبور</h2>
        {status && <p className="mb-4 text-center">{status}</p>}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-bold mb-2">
            رمز عبور جدید
          </label>
          <input
            id="password"
            type="password"
            {...register("password", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
          />
          {errors.password && (
            <p className="text-error text-xs mt-2">رمز عبور الزامی است</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`bg-green text-white font-bold py-2 px-4 rounded-full  ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}>
          {isLoading ? "در حال ارسال..." : "تغییر رمز عبور"}
        </button>
      </form>
    </div>
  );
};

export default PasswordResetForm;
