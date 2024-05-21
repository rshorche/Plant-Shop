import { useState } from "react";
import supabase from "../../supabase";

export default function Uploader() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  function handleImageChange(event) {
    const file = event.target.files[0];
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
    setUploadError(null); // Clear any previous errors

    try {
      const { error } = await supabase.storage
        .from("images")
        .upload(`logo/${imageName}`, selectedImage);

      if (error) {
        throw error;
      }
      console.log("عکس با موفقیت آپلود شد");
    } catch (error) {
      setUploadError("عکسی با همین نام از قبل وجود دارد");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {selectedImage && (
        <img src={URL.createObjectURL(selectedImage)} alt="Preview" />
      )}
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-orange text-white py-4 px-10 rounded-full text-sm md:text-base md:px-7">
        {uploading ? "در حال آپلود..." : "آپلود کن"}
      </button>
      {uploadError && <p style={{ color: "red" }}>{uploadError}</p>}
    </div>
  );
}
