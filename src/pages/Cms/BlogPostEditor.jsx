// src/pages/Cms/BlogPostEditor.jsx
import { useState } from "react";
import TinyMCE from "../../components/TinyMCE/TinyMCE";
import Uploader from "../../components/Uploader/Uploader";
import { useForm } from "react-hook-form";
import supabase from "../../supabase";

export default function BlogPostEditor() {
  const [cover, setCover] = useState("");
  const [articleBody, setArticleBody] = useState("");

  const { register, handleSubmit } = useForm({
    defaultValues: {
      author: "",
      title: "",
      cover: "",
      description: "",
      articleBody: "",
      category: "",
    },
  });

  const formSubmitin = async (datas) => {
    const today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = today.toLocaleDateString("fa-IR", options);

    console.log(datas);

    const article = {
      author: datas.author,
      title: datas.title,
      cover: `https://pikczwjotvdrlpersqnz.supabase.co/storage/v1/object/public/${cover}`,
      description: datas.description,
      articleBody: articleBody,
      author_Photo:
        "https://pikczwjotvdrlpersqnz.supabase.co/storage/v1/object/public/images/Users/Users_user5.jpeg",
      created_at: formattedDate,
      category: datas.category,
    };
    console.log(article);

    const { data, error } = await supabase.from("BlogPost").insert(article);

    if (error) {
      console.error("Error creating user:", error);
    } else {
      console.log("User created:", data);
    }
  };

  return (
    <div className="my-10 mx-10 overflow-hidden">
      <form
        onSubmit={handleSubmit(formSubmitin)}
        className="flex flex-wrap max-w-full justify-center items-center ">
        <div className="w-full sm:w-1/2 flex flex-col">
          <label className="text-base m-2" htmlFor="author">
            نویسنده
          </label>
          <input
            className="border rounded-full px-8 py-4 m-2"
            id="author"
            type="text"
            placeholder="رضا شورچه"
            {...register("author", { required: true })}
          />
        </div>

        <div className="w-full sm:w-1/2 flex flex-col">
          <label className="text-base m-2" htmlFor="title">
            عنوان
          </label>
          <input
            className="border rounded-full px-8 py-4 m-2"
            id="title"
            type="text"
            placeholder="عنوان مقاله"
            {...register("title", { required: true })}
          />
        </div>

        <div className="w-full sm:w-1/2 flex flex-col">
          <label className="text-base m-2" htmlFor="description">
            توضیحات مختصر
          </label>
          <input
            className="border rounded-full px-8 py-4 m-2"
            id="description"
            type="text"
            placeholder="200کلمه میتونی بنویسی"
            {...register("description", { required: true })}
          />
        </div>

        <div className="w-full sm:w-1/2 flex flex-col">
          <label className="text-base m-2" htmlFor="category">
            خدمات
          </label>
          <select
            className="border rounded-full px-8 py-4 m-2"
            id="category"
            {...register("category")}
            defaultValue="زندگی سبز">
            <option className="py-4 px-8 " value="زندگی سبز">
              زندگی سبز
            </option>
            <option className="py-4 px-8 " value="مراقبت از گیاه">
              مراقبت از گیاه
            </option>
            <option className="py-4 px-8 " value="طراحی و دکور">
              طراحی و دکور
            </option>
          </select>
        </div>

        <div className="w-full sm:w-1/2 flex flex-col">
          <label className="text-base m-2" htmlFor="description">
            تصویر کاور پست
          </label>
          <Uploader setValue={setCover} />
        </div>

        <div className="w-full flex flex-col m-4">
          <TinyMCE value={articleBody} setValue={setArticleBody} />
        </div>

        <div className="flex flex-col">
          <input
            type="submit"
            value={"ارسال"}
            className="bg-orange text-white py-4 mt-5 px-10 rounded-full text-sm md:text-base md:px-7"
          />
        </div>
      </form>
    </div>
  );
}
