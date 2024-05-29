import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Ckeditor({ value, setValue }) {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          setValue(data);
          console.log(data);
        }}
      />
    </div>
  );
}
