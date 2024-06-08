import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import MyUploadAdapter from "../../components/UploadAdapter/UploadAdapter";
import supabase from "../../supabase";

const MyCustomUploadAdapterPlugin = (editor) => {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return new MyUploadAdapter(loader, supabase);
  };
};

const Ckeditor = ({ value, setValue }) => {
  const editorConfiguration = {
    extraPlugins: [MyCustomUploadAdapterPlugin],
  };

  return (
    <CKEditor
      editor={ClassicEditor}
      config={editorConfiguration}
      data={value}
      onChange={(event, editor) => {
        const data = editor.getData();
        setValue(data);
      }}
    />
  );
};

export default Ckeditor;
