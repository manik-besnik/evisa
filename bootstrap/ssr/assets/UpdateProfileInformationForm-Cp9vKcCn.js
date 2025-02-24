import { jsx, jsxs } from "react/jsx-runtime";
import { usePage, useForm, Link } from "@inertiajs/react";
import { L as LabelField } from "./LabelField-DHhf-wOM.js";
import { I as InputBox } from "./InputBox-BrQDXsyy.js";
import { a as ErrorField, E as Email, L as Lock } from "./Email-BTwdfxTN.js";
import { U as User } from "./User-Tg_4iFvd.js";
import { useRef, useState } from "react";
import { A as Avatar } from "./Avatar-BwyzJcVZ.js";
import { C as Close } from "./Close-DxNaVPET.js";
import { C as Check } from "./Check-6uFmuQtl.js";
import "./Coin-BkXhdH5z.js";
function Coin({ className, color = "#314252", width = "20", height = "20" }) {
  return /* @__PURE__ */ jsx("svg", { className, width, height, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 17.5C5.85757 17.5 2.5 14.1416 2.5 10C2.5 5.85757 5.85757 2.5 10 2.5C14.1424 2.5 17.5 5.85757 17.5 10C17.5 14.1416 14.1424 17.5 10 17.5ZM9.37964 13.0777C9.37964 13.4228 9.65946 13.7027 10.0046 13.7027C10.3498 13.7027 10.6296 13.4228 10.6296 13.0777V13.025C10.6296 12.6798 10.3498 12.4 10.0046 12.4C9.65946 12.4 9.37964 12.6798 9.37964 13.025V13.0777ZM9.37489 10.4922C9.37489 10.8374 9.65471 11.1172 9.99989 11.1172C10.3451 11.1172 10.6249 10.8374 10.6249 10.4922V6.90918C10.6249 6.564 10.3451 6.28418 9.99989 6.28418C9.65471 6.28418 9.37489 6.564 9.37489 6.90918L9.37489 10.4922Z", fill: color }) });
}
function UpdateProfileInformation({ mustVerifyEmail, status, className = "" }) {
  const user = usePage().props.auth.user;
  const passwordInput = useRef();
  const currentPasswordInput = useRef();
  const [avatar, setAvatar] = useState(user == null ? void 0 : user.avatar);
  const [avatarFile, setAvatarFile] = useState(user == null ? void 0 : user.avatar);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState(null);
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    email: user.email,
    username: user.username,
    current_password: "",
    password: ""
  });
  const updatePassword = (e) => {
    e.preventDefault();
    patch(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors2) => {
        if (errors2.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }
        if (errors2.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      }
    });
  };
  const submit = (e) => {
    e.preventDefault();
    patch(route("profile.update"));
    updatePassword();
  };
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif", "image/svg", "image/webp", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        setError(true);
        setMessage("Please select a valid image.");
        setAvatarFile(null);
        setAvatar(user == null ? void 0 : user.avatar);
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader == null ? void 0 : reader.result);
      };
      setAvatarFile(file);
      reader.readAsDataURL(file);
    } else {
      setAvatar(user == null ? void 0 : user.avatar);
    }
  };
  const handleProfileUpload = async () => {
    if (!avatarFile) {
      setError(true);
      setMessage("Image Not Selected");
      return;
    }
    const formDate = new FormData();
    formDate.append("file", avatarFile);
    const response = await axios.post(route("profile.avatar"), formDate);
    if (response.status === 200) {
      if (response.data.success) {
        setSuccess(true);
        setMessage(response.data.message);
      } else {
        setError(true);
        setMessage(response.data.message);
      }
    }
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "app-subtitle mb-2.5 md:mb-6", children: "Profile" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 md:gap-4 mb-5 md:mb-[30px]", children: [
        avatar ? /* @__PURE__ */ jsx(
          "img",
          {
            className: "h-[68px] w-[68px] md:h-[106px] md:w-[106px] rounded-lg md:rounded-[14px]",
            src: avatar,
            alt: "profile-image"
          }
        ) : /* @__PURE__ */ jsx(Avatar, { height: 68, width: 68 }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-3 md:mb-4", children: [
            /* @__PURE__ */ jsx("h5", { className: "text-xs md:text-sm text-text-primary font-semibold", children: data.name }),
            /* @__PURE__ */ jsx("p", { className: "text-[10px] leading-[12px] md:text-sm text-text-primary", children: data.username })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxs(
              "label",
              {
                className: `bg-side-and-button px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  hover:bg-card-and-hover text-text-primary`,
                children: [
                  "Change",
                  /* @__PURE__ */ jsx("input", { type: "file", className: "hidden", onChange: (e) => handleChange(e) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleProfileUpload,
                className: `px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  bg-card-and-hover text-text-primary`,
                children: "Upload"
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "my-2", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `${error ? "flex" : "hidden"} items-center justify-between mt-5 sm:mt-[30px] gap-2 w-[420px] px-2 sm:px-2.5 py-1.5 sm:py-2 rounded sm:rounded-md bg-warning`,
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Coin, { color: "#FFFFFF", className: `w-4 h-4 md:w-5 md:h-5` }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "text-xs leading-[14px] sm:text-sm text-white",
                  children: message
                }
              )
            ] }),
            /* @__PURE__ */ jsx("button", { onClick: () => setError(false), children: /* @__PURE__ */ jsx(Close, { className: "h-4 w-4 sm:h-5 sm:w-5", color: "#ffffff" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `${success ? "flex" : "hidden"} flex items-center justify-between mt-5 sm:mt-[30px] gap-2 w-[420px] px-2 sm:px-2.5 py-1.5 sm:py-2 rounded sm:rounded-md bg-[#00b47d]`,
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Check, { color: "#FFFFFF", className: `w-4 h-4 md:w-5 md:h-5` }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "text-xs leading-[14px] sm:text-sm text-white",
                  children: message
                }
              )
            ] }),
            /* @__PURE__ */ jsx("button", { onClick: () => setSuccess(false), children: /* @__PURE__ */ jsx(Close, { className: "h-4 w-4 sm:h-5 sm:w-5", color: "#ffffff" }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsx("h2", { className: "app-subtitle mb-2.5 md:mb-6", children: "Basic Edit" }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2.5 md:gap-6 flex-wrap mb-2.5 md:mb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-[230px]", children: [
          /* @__PURE__ */ jsx(LabelField, { htmlFor: "name", content: "Name" }),
          /* @__PURE__ */ jsx(
            InputBox,
            {
              id: "name",
              value: data.name,
              iconPrev: /* @__PURE__ */ jsx(User, { className: "h-4 sm:h-5" }),
              onChange: (e) => setData("name", e.target.value),
              required: true,
              autoComplete: "name"
            }
          ),
          /* @__PURE__ */ jsx(ErrorField, { className: "mt-[14px]", content: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-[230px]", children: [
          /* @__PURE__ */ jsx(LabelField, { htmlFor: "email", content: "Email" }),
          /* @__PURE__ */ jsx(
            InputBox,
            {
              id: "email",
              type: "email",
              iconPrev: /* @__PURE__ */ jsx(Email, { className: "h-4 sm:h-5" }),
              value: data.email,
              onChange: (e) => setData("email", e.target.value),
              required: true,
              autoComplete: "username"
            }
          ),
          /* @__PURE__ */ jsx(ErrorField, { className: "mt-[14px]", content: errors.email })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2.5 md:gap-6 flex-wrap mb-2.5 md:mb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-[230px]", children: [
          /* @__PURE__ */ jsx(LabelField, { htmlFor: "current_password", content: "Current Password" }),
          /* @__PURE__ */ jsx(
            InputBox,
            {
              id: "current_password",
              ref: currentPasswordInput,
              iconPrev: /* @__PURE__ */ jsx(Lock, { className: "h-4 sm:h-5" }),
              value: data.current_password,
              onChange: (e) => setData("current_password", e.target.value),
              type: "password",
              autoComplete: "current-password"
            }
          ),
          /* @__PURE__ */ jsx(ErrorField, { className: "mt-[14px]", content: errors.current_password })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-[230px]", children: [
          /* @__PURE__ */ jsx(LabelField, { htmlFor: "password", content: "New Password" }),
          /* @__PURE__ */ jsx(
            InputBox,
            {
              id: "password",
              ref: passwordInput,
              value: data.password,
              onChange: (e) => setData("password", e.target.value),
              type: "password",
              className: "mt-1 block w-full",
              autoComplete: "new-password",
              iconPrev: /* @__PURE__ */ jsx(Lock, { className: "h-4 sm:h-5" })
            }
          ),
          /* @__PURE__ */ jsx(ErrorField, { className: "mt-[14px]", content: errors.password })
        ] })
      ] }),
      mustVerifyEmail && user.email_verified_at === null && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm mt-2 text-gray-800", children: [
          "Your email address is unverified.",
          /* @__PURE__ */ jsx(
            Link,
            {
              href: route("verification.send"),
              method: "post",
              as: "button",
              className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
              children: "Click here to re-send the verification email."
            }
          )
        ] }),
        status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mt-2 font-medium text-sm text-green-600", children: "A new verification link has been sent to your email address." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4 mt-[14px] md:mt-6", children: /* @__PURE__ */ jsx(
        "button",
        {
          disabled: processing,
          className: `bg-side-and-button px-2 sm:px-3 py-1.5 sm:py-2 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  hover:bg-card-and-hover text-text-primary`,
          children: "Save Now"
        }
      ) })
    ] })
  ] });
}
export {
  UpdateProfileInformation as default
};
