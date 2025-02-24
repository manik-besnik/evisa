import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
const InputFile = ({
  defaultClasses = "w-[70px] h-[70px] ",
  classes = "",
  placeholder = "",
  onChange,
  fileType = "",
  error = ""
}) => {
  const [fileName, setFileName] = useState(placeholder);
  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif", "image/svg", "image/webp", "image/jpg", "application/pdf"];
      if (!validTypes.includes(file.type)) {
        setFileName(placeholder);
        return;
      }
      onChange(fileType, file);
      setFileName("Attached");
    } else {
      setFileName(placeholder);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: `${defaultClasses} ${classes} bg-[#E0EBF8] border-l-4 border-l-primary p-2 ${fileName !== placeholder ? "bg-[#aec0d5]" : "bg-[#E0EBF8]"}`, children: /* @__PURE__ */ jsxs(
    "label",
    {
      className: "flex items-center justify-center w-full h-full cursor-pointer",
      htmlFor: `file-upload-${fileType}`,
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            onChange: (e) => handleUploadFile(e),
            id: `file-upload-${fileType}`,
            type: "file",
            accept: ".pdf,.png,.jpg,.jpeg,.webp",
            className: "hidden"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs break-words", children: fileName ? fileName : placeholder }),
        error && /* @__PURE__ */ jsx("p", { className: "text-xs text-warning", children: error })
      ]
    }
  ) });
};
export {
  InputFile as I
};
