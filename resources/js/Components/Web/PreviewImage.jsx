import {useEffect, useState} from "react";

const PreviewImage = (image = null) => {

    const [previewUrl, setPreviewUrl] = useState('');

    useEffect(() => {
        if (image instanceof File) {
            const url = URL.createObjectURL(image);
            console.log(url)
            setPreviewUrl(url);

            return () => URL.revokeObjectURL(url);
        } else {
            setPreviewUrl('');
        }
    }, [image]);

    return (
        <div className="h-52 flex items-center justify-center bg-gray-500">
            {previewUrl ? (
                <img src={previewUrl} alt="Preview" className="h-full w-auto object-contain"/>
            ) : (
                <span className="text-gray-500">No Image Uploaded</span>
            )}
        </div>
    )
}

export default PreviewImage
