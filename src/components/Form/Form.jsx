import { useForm } from "react-hook-form";
import supabase from "../../supabase";
export default function Form() {
  const services = {
    a: "اجاره گیاهان",
    b: "طراحی سفارشی",
    c: "نگهداری از گیاهان",
    d: "نصب دیوار سبز",
    e: "تحویل گیاه",
    f: "مشاوره گیاهی",
  };
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      services: services,
      textArea: "",
    },
  });

  const formSubmitin = async (datas) => {
    const quiz = {
      firstName: datas.firstName,
      lastName: datas.lastName,
      email: datas.email,
      service: datas.service,
      questions: datas.textArea,
    };

    const { data, error } = await supabase.from("UserQuestions").insert(quiz);

    if (error) {
      console.error("Error creating user:", error);
    } else {
      console.log("User created:", data);
    }
  };

  return (
    <div className="my-10">
      <form
        onSubmit={handleSubmit(formSubmitin)}
        className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 flex flex-col">
          <label className="text-base m-2" htmlFor="firstName">
            نام
          </label>
          <input
            className="border rounded-full px-8 py-4 m-2"
            id="firstName"
            type="text"
            placeholder="رضا"
            {...register("firstName", { required: true })}
          />
        </div>

        <div className="w-full sm:w-1/2 flex flex-col">
          <label className="text-base m-2" htmlFor="lastName">
            نام خانوادگی
          </label>
          <input
            className="border rounded-full px-8 py-4 m-2"
            id="lastName"
            type="text"
            placeholder="شورچه"
            {...register("lastName")}
          />
        </div>

        <div className="w-full sm:w-1/2 flex flex-col">
          <label className="text-base m-2" htmlFor="email">
            ایمیل
          </label>
          <input
            className="border rounded-full px-8 py-4 m-2"
            id="email"
            type="text"
            placeholder="rshorche@gmail.com"
            {...register("email")}
          />
        </div>

        <div className="w-full sm:w-1/2 flex flex-col">
          <label className="text-base m-2" htmlFor="service">
            خدمات
          </label>
          <select
            className="border rounded-full px-8 py-4 m-2"
            id="service"
            {...register("service")}
            defaultValue="اجاره گیاهان">
            <option className="py-4 px-8 " value="اجاره گیاهان">
              اجاره گیاهان
            </option>
            <option className="py-4 px-8 " value="طراحی سفارشی">
              طراحی سفارشی
            </option>
            <option className="py-4 px-8 " value="نصب دیوار سبز">
              نصب دیوار سبز
            </option>
            <option className="py-4 px-8 " value="تحویل گیاه">
              تحویل گیاه
            </option>
            <option className="py-4 px-8 " value="مشاوره گیاهی">
              مشاوره گیاهی
            </option>
          </select>
        </div>

        <div className="w-full my-6 ">
          <label htmlFor="textArea" className="text-base">
            چه سوالی دارید؟
          </label>
          <textarea
            id="textArea"
            {...register("textArea", {})}
            placeholder="چه مشکلی برات پیش امده ؟"
            className="border w-full h-60 block rounded-xl my-2 p-2"
          />
        </div>

        <input
          type="submit"
          value={"ارسال"}
          className="bg-orange text-white py-4 px-10 rounded-full text-sm md:text-base md:px-7"
        />
      </form>
    </div>
  );
}
