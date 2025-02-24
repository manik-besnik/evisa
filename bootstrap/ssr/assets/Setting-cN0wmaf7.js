import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Head, router } from "@inertiajs/react";
import { A as Authenticated } from "./AdminLayout-BnjWKmf2.js";
import { C as Check } from "./Check-6uFmuQtl.js";
import { C as Close } from "./Close-DxNaVPET.js";
import "./Logo-BrIzKzpY.js";
const Setting = ({ setting }) => {
  const settingData = setting ? JSON.parse(setting.setting_data) : null;
  const signUpCoin = settingData.sign_up_free_coin ? settingData.sign_up_free_coin : 20;
  const bannerLink = settingData.sidebar_banner_link ? settingData.sidebar_banner_link : null;
  const [signUpFreeCoin, setSignUpFreeCoin] = useState(signUpCoin);
  const [sidebarBannerLink, setSidebarBannerLink] = useState(bannerLink);
  const [sidebarBannerFile, setSidebarBannerFile] = useState(settingData == null ? void 0 : settingData.sidebar_banner);
  const [logo, setLogo] = useState(settingData == null ? void 0 : settingData.logo);
  const [customTaskIcon, setCustomCTaskIcon] = useState(settingData == null ? void 0 : settingData.custom_task_icon);
  const [extensionLink, setExtensionLink] = useState(settingData == null ? void 0 : settingData.extension_link);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState(null);
  const updateSetting = (formData) => {
    router.put(route("admin.setting.update"), { settings: formData }, {
      onSuccess: () => {
        alert("Setting Updated");
      }
    });
  };
  const handleUpdateExtensionLink = () => {
    const formData = {
      ...settingData,
      extension_link: extensionLink
    };
    updateSetting(formData);
  };
  const handleUpdateCoin = () => {
    const formData = {
      ...settingData,
      sign_up_free_coin: signUpFreeCoin
    };
    updateSetting(formData);
  };
  const handleUpdateSidebarBannerLink = () => {
    const formData = {
      ...settingData,
      sidebar_banner_link: sidebarBannerLink
    };
    updateSetting(formData);
  };
  const handleUpdateSetting = (key, value) => {
    const formData = {
      ...settingData,
      [key]: value
    };
    updateSetting(formData);
  };
  const handleSidebarBannerChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif", "image/svg", "image/webp", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        setMessage("Please select a valid image.");
        setSidebarBannerFile(null);
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
      };
      setSidebarBannerFile(file);
      reader.readAsDataURL(file);
    }
  };
  const handleSidebarBannerUpload = async () => {
    if (!sidebarBannerFile) {
      setMessage("Image Not Selected");
      return;
    }
    const formData = new FormData();
    formData.append("file", sidebarBannerFile);
    formData.append("old_file", settingData == null ? void 0 : settingData.sidebar_banner);
    const response = await axios.post(route("admin.setting.upload-file"), formData);
    if (response.status === 200) {
      if (response.data.success) {
        handleUpdateSetting("sidebar_banner", response.data.uploaded_file);
      }
    }
  };
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif", "image/svg", "image/webp", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        setMessage("Please select a valid image.");
        setLogo(null);
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
      };
      setLogo(file);
      reader.readAsDataURL(file);
    }
  };
  const handleCustomTaskIconChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif", "image/svg", "image/webp", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        setMessage("Please select a valid image.");
        setCustomCTaskIcon(null);
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
      };
      setCustomCTaskIcon(file);
      reader.readAsDataURL(file);
    }
  };
  const handleCustomTaskIconUpload = async () => {
    if (!customTaskIcon) {
      setMessage("Image Not Selected");
      return;
    }
    const formData = new FormData();
    formData.append("file", customTaskIcon);
    formData.append("old_file", settingData == null ? void 0 : settingData.custom_task_icon);
    const response = await axios.post(route("admin.setting.upload-file"), formData);
    if (response.status === 200) {
      if (response.data.success) {
        handleUpdateSetting("custom_task_icon", response.data.uploaded_file);
      }
    }
  };
  const handleLogoUpload = async () => {
    if (!logo) {
      setMessage("Image Not Selected");
      return;
    }
    const formData = new FormData();
    formData.append("file", logo);
    formData.append("old_file", settingData == null ? void 0 : settingData.logo);
    const response = await axios.post(route("admin.setting.upload-file"), formData);
    if (response.status === 200) {
      if (response.data.success) {
        handleUpdateSetting("logo", response.data.uploaded_file);
      }
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Setting" }),
    /* @__PURE__ */ jsxs(
      Authenticated,
      {
        header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Setting | Maketop" }),
        children: [
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
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col py-3 gap-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center py-3 gap-3 w-[800px]", children: [
              /* @__PURE__ */ jsx("p", { className: "w-[400px] text-sm font-medium text-text-primary", children: "Extension Link:" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  value: extensionLink,
                  className: "block h-8 w-[200px] bg-side-and-button rounded-md text-sm placeholder:text-sm placeholder:text-t-disabled border-none outline-none focus:ring-0",
                  placeholder: "Extension Link",
                  onChange: (e) => setExtensionLink(e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: "text-sm rounded-md px-2 py-1.5 bg-card-and-hover",
                  onClick: handleUpdateExtensionLink,
                  children: "Update"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center py-3 gap-3 w-[800px]", children: [
              /* @__PURE__ */ jsx("p", { className: "w-[400px] text-sm font-medium text-text-primary", children: "Sign Up Free Coin: " }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "number",
                  value: signUpFreeCoin,
                  max: "100000",
                  min: "0",
                  className: "block h-8 w-[200px] bg-side-and-button rounded-md text-sm placeholder:text-sm placeholder:text-t-disabled border-none outline-none focus:ring-0",
                  placeholder: "Coin",
                  onChange: (e) => setSignUpFreeCoin(e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: "text-sm rounded-md px-2 py-1.5 bg-card-and-hover",
                  onClick: handleUpdateCoin,
                  children: "Update"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center py-3 gap-3 w-[800px]", children: [
              /* @__PURE__ */ jsx("p", { className: "w-[400px] text-sm font-medium text-text-primary", children: "Sidebar Banner Link: " }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  value: sidebarBannerLink,
                  className: "block h-8 w-[200px] bg-side-and-button rounded-md text-sm placeholder:text-sm placeholder:text-t-disabled border-none outline-none focus:ring-0",
                  placeholder: "Sidebar Banner Link",
                  onChange: (e) => setSidebarBannerLink(e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: "text-sm rounded-md px-2 py-1.5 bg-card-and-hover",
                  onClick: handleUpdateSidebarBannerLink,
                  children: "Update"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 w-[800px]", children: [
              /* @__PURE__ */ jsxs("p", { className: "w-[400px] text-sm font-medium text-text-primary", children: [
                "Sidebar Banner: ",
                settingData == null ? void 0 : settingData.sidebar_banner
              ] }),
              /* @__PURE__ */ jsxs(
                "label",
                {
                  className: `bg-side-and-button px-2 sm:px-3 py-1.5 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  hover:bg-card-and-hover text-text-primary`,
                  children: [
                    "Change",
                    /* @__PURE__ */ jsx("input", { type: "file", className: "hidden", onChange: (e) => handleSidebarBannerChange(e) })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleSidebarBannerUpload,
                  className: `px-2 py-1.5 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  bg-card-and-hover text-text-primary`,
                  children: "Upload Banner"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 w-[800px]", children: [
              /* @__PURE__ */ jsxs("p", { className: "w-[400px] text-sm font-medium text-text-primary", children: [
                "Logo: ",
                settingData == null ? void 0 : settingData.logo
              ] }),
              /* @__PURE__ */ jsxs(
                "label",
                {
                  className: `bg-side-and-button px-2 sm:px-3 py-1.5 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  hover:bg-card-and-hover text-text-primary`,
                  children: [
                    "Change",
                    /* @__PURE__ */ jsx("input", { type: "file", className: "hidden", onChange: (e) => handleLogoChange(e) })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleLogoUpload,
                  className: `px-2 py-1.5 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  bg-card-and-hover text-text-primary`,
                  children: "Upload Logo"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 w-[800px]", children: [
              /* @__PURE__ */ jsxs("p", { className: "w-[400px] text-sm font-medium text-text-primary", children: [
                "Custom Task Icon: ",
                settingData == null ? void 0 : settingData.custom_task_icon
              ] }),
              /* @__PURE__ */ jsxs(
                "label",
                {
                  className: `bg-side-and-button px-2 sm:px-3 py-1.5 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  hover:bg-card-and-hover text-text-primary`,
                  children: [
                    "Change",
                    /* @__PURE__ */ jsx("input", { type: "file", className: "hidden", onChange: (e) => handleCustomTaskIconChange(e) })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleCustomTaskIconUpload,
                  className: `px-2 py-1.5 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  bg-card-and-hover text-text-primary`,
                  children: "Update Icon"
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
};
export {
  Setting as default
};
