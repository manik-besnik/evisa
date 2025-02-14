import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

export const TinyEditor = ({ value, onChange }) => {
    const editorRef = useRef(null);

    return (
        <label>
            <span>Description</span>
            <Editor

                apiKey="4bbh9nrpcrnp2kigjvlhacukgfixsguxfqe6qvsm0ljv88kb"
                onInit={(evt, editor) => (editorRef.current = editor)}
                value={value} // Ensure it uses the correct value
                init={{
                    branding: false,
                    height: 300,
                    menubar: false,
                    plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                    ],
                    toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                    content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; background-color:#EFE9DB }  *:focus { outline: none !important;}",
                }}
                onEditorChange={(content, editor) => {
                    if (editorRef.current) {
                        const updatedContent = editor.getContent();
                        onChange(updatedContent);
                    }
                }}
            />
        </label>
    );
};
