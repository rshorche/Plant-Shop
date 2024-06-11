import { Editor } from "@tinymce/tinymce-react";
import supabase from "../../supabase";

const TinyMCE = ({ value, setValue }) => {
  return (
    <Editor
      apiKey="6njk5kpfzkvwhf714h2y5o9zq1pfgfempgo3077tlvcitafi"
      value={value} // updated from initialValue to value
      init={{
        height: 500,
        directionality: "rtl", // فعال کردن راست‌چین
        language: "fa_IR", // تنظیم زبان به فارسی
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
          "image",
        ],
        toolbar:
          "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help | image",
        content_style:
          "body { font-family:Arial,Helvetica,sans-serif; direction: rtl; text-align: right; }", // تنظیمات CSS برای راست‌چین کردن
        image_title: true,
        automatic_uploads: true,
        file_picker_types: "image",
        file_picker_callback: async (callback, value, meta) => {
          if (meta.filetype === "image") {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.onchange = async function () {
              const file = this.files[0];

              // آپلود تصویر به Supabase
              const { data, error } = await supabase.storage
                .from("images")
                .upload(`public/${file.name}`, file);

              if (error) {
                console.error("Error uploading image:", error);
                return;
              }

              // دریافت URL تصویر آپلود شده
              const imageUrl = supabase.storage
                .from("images")
                .getPublicUrl(`public/${file.name}`).data.publicUrl;

              callback(imageUrl, { title: file.name });
            };
            input.click();
          }
        },
      }}
      onEditorChange={(content) => {
        setValue(content);
      }}
    />
  );
};

export default TinyMCE;
