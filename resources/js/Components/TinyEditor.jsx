import {Editor} from '@tinymce/tinymce-react';
import { useRef } from 'react';

export const TinyEditor = ({value,onChange}) => {
    const editorRef = useRef(null);

    return (
        <label>
            <span>Description</span>
            <Editor
                // apiKey='your-api-key'
                onInit={(_evt, editor) => editorRef.current = editor}
                initialValue={value}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
        </label>
    )
}
