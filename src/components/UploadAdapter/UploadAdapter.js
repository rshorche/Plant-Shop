export default class UploadAdapter {
  constructor(loader, supabase) {
    this.loader = loader;
    this.supabase = supabase;
  }

  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          this._uploadFile(file)
            .then((url) => resolve({ default: url }))
            .catch((error) => reject(error));
        })
    );
  }

  async _uploadFile(file) {
    const { data, error } = await this.supabase.storage
      .from("images")
      .upload(`public/${file.name}`, file);

    if (error) {
      throw new Error("Failed to upload file: " + error.message);
    }

    const { data: publicUrlData, error: urlError } = this.supabase.storage
      .from("images")
      .getPublicUrl(`public/${file.name}`);

    if (urlError) {
      throw new Error("Failed to get public URL: " + urlError.message);
    }

    const publicUrl = publicUrlData.publicUrl;
    console.log("Public URL:", publicUrl); // اضافه کردن لاگ

    return publicUrl;
  }

  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }
}
