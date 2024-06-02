import { useState } from "react";
import supabase from "../../supabase";

export default function Uploader({ setValue }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  function handleImageChange(event) {
    const file = event.target.files[0];
    console.log(file);
    // Basic file validation
    if (!file || !file.type.match(/image\/.*/)) {
      setUploadError("Please select an image file (JPEG, PNG, etc.)");
      return;
    }
    setSelectedImage(file);
    setImageName(file.name);
  }

  async function handleUpload() {
    if (!selectedImage) {
      setUploadError("لطفا یک عکس انتخاب کنید!");
      return;
    }

    setUploading(true);
    setUploadError(null);

    try {
      const { data, error } = await supabase.storage
        .from("images")
        .upload(`public/${imageName}`, selectedImage);
      if (error) {
        throw error;
      }
      console.log("Uploaded data:", data);
      setValue(data.fullPath);

      console.log("عکس با موفقیت آپلود شد");
    } catch (error) {
      console.error(error);
      setUploadError("خطا از سرور یا عکسی با همین نام از قبل وجود دارد");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <input type="file" onChange={handleImageChange} />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-orange text-white py-4 px-8 rounded-full text-sm md:text-base md:px-7">
        {uploading ? "در حال آپلود..." : "آپلود کن"}
      </button>
      {uploadError && <p style={{ color: "red" }}>{uploadError}</p>}
    </div>
  );
}
