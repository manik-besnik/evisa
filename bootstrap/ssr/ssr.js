import { jsx } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import { route } from "ziggy-js";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const appName = "Laravel";
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/Admin/Admin.jsx": () => import("./assets/Admin-dxTF50cI.js"), "./Pages/Admin/Agency/Index.jsx": () => import("./assets/Index-DBvCcicZ.js"), "./Pages/Admin/Agency/Show.jsx": () => import("./assets/Show-DAsLCor-.js"), "./Pages/Admin/Auth/Login.jsx": () => import("./assets/Login-BSoayR01.js"), "./Pages/Admin/Auth/TaskDetail.jsx": () => import("./assets/TaskDetail-l0sNRNKZ.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-CvaRb8QU.js"), "./Pages/Admin/JobPost/CreateJobPost.jsx": () => import("./assets/CreateJobPost-D800CNpw.js"), "./Pages/Admin/JobPost/EditJobPost.jsx": () => import("./assets/EditJobPost-AvEqDCkC.js"), "./Pages/Admin/JobPost/Index.jsx": () => import("./assets/Index-DMGZvPEz.js"), "./Pages/Admin/JobPost/JobApplicationShow.jsx": () => import("./assets/JobApplicationShow-C-R4Is0o.js"), "./Pages/Admin/JobPost/JobApplications.jsx": () => import("./assets/JobApplications-CYEFOYFR.js"), "./Pages/Admin/Platform.jsx": () => import("./assets/Platform-ChfkJ4a3.js"), "./Pages/Admin/Role.jsx": () => import("./assets/Role-B90OG3is.js"), "./Pages/Admin/Setting.jsx": () => import("./assets/Setting-cN0wmaf7.js"), "./Pages/Admin/User/Create.jsx": () => import("./assets/Create-KUxXRCfa.js"), "./Pages/Admin/User/Index.jsx": () => import("./assets/Index-CvWKBJ06.js"), "./Pages/Admin/VisaApply/ApplyForm.jsx": () => import("./assets/ApplyForm-B9UsQ71n.js"), "./Pages/Admin/VisaApply/Edit.jsx": () => import("./assets/Edit-D8P0Bdf7.js"), "./Pages/Admin/VisaApply/Index.jsx": () => import("./assets/Index-BFBwxmrD.js"), "./Pages/Admin/VisaApply/Show.jsx": () => import("./assets/Show-BRVrEomW.js"), "./Pages/Agency/AccountNotApproved.jsx": () => import("./assets/AccountNotApproved-mjTClLZT.js"), "./Pages/Agency/AgencyInfo.jsx": () => import("./assets/AgencyInfo-ft6AkWnC.js"), "./Pages/Agency/ApplyForm.jsx": () => import("./assets/ApplyForm-D5pBv5jr.js"), "./Pages/Agency/Dashboard.jsx": () => import("./assets/Dashboard-D-ZLYbzm.js"), "./Pages/Agency/Login.jsx": () => import("./assets/Login-BKPKP_x2.js"), "./Pages/Agency/Register.jsx": () => import("./assets/Register-BZ2KusXr.js"), "./Pages/Agency/User/Create.jsx": () => import("./assets/Create-BJw_TxgG.js"), "./Pages/Agency/User/Index.jsx": () => import("./assets/Index-DvLhGQKb.js"), "./Pages/Agency/VisaApplyList.jsx": () => import("./assets/VisaApplyList-Dox-LKR8.js"), "./Pages/Agency/VisaEdit.jsx": () => import("./assets/VisaEdit-DnVF0Rwc.js"), "./Pages/Auth/ConfirmPassword.jsx": () => import("./assets/ConfirmPassword-BIhoYRXR.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-CeqbU6B6.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-BxJD9B_L.js"), "./Pages/Auth/Register.jsx": () => import("./assets/Register-59DdXacu.js"), "./Pages/Auth/RegisterInfo.jsx": () => import("./assets/RegisterInfo-DohVc5DF.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CSFBqTnz.js"), "./Pages/Auth/VerifyEmail.jsx": () => import("./assets/VerifyEmail-rlWvlM-S.js"), "./Pages/Dashboard.jsx": () => import("./assets/Dashboard-Rh44U67N.js"), "./Pages/Error.jsx": () => import("./assets/Error-DiLOAg0N.js"), "./Pages/Errors/NotFound.jsx": () => import("./assets/NotFound-DeMD09Vw.js"), "./Pages/Errors/PermissionDenied.jsx": () => import("./assets/PermissionDenied-D9E19WpQ.js"), "./Pages/Extension.jsx": () => import("./assets/Extension-DrvdcN4r.js"), "./Pages/Home.jsx": () => import("./assets/Home-DomApcsb.js"), "./Pages/Home/Index.jsx": () => import("./assets/Index-DJpCkDZX.js"), "./Pages/JobApply.jsx": () => import("./assets/JobApply-BldjYeUp.js"), "./Pages/JobApplyList.jsx": () => import("./assets/JobApplyList-CG8Ejbl0.js"), "./Pages/JobDetails.jsx": () => import("./assets/JobDetails-CJeK82lT.js"), "./Pages/JobPost.jsx": () => import("./assets/JobPost-CeZRAt9E.js"), "./Pages/Login.jsx": () => import("./assets/Login-HIwkenPL.js"), "./Pages/Other.jsx": () => import("./assets/Other-BLztMtzP.js"), "./Pages/Profile/Edit.jsx": () => import("./assets/Edit-DYQcZnvb.js"), "./Pages/Profile/Partials/DeleteUserForm.jsx": () => import("./assets/DeleteUserForm-CFFof-_Q.js"), "./Pages/Profile/Partials/UpdatePasswordForm.jsx": () => import("./assets/UpdatePasswordForm-CNHJcYIY.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": () => import("./assets/UpdateProfileInformationForm-Cp9vKcCn.js"), "./Pages/Refer.jsx": () => import("./assets/Refer-f1z5iIg7.js"), "./Pages/Report.jsx": () => import("./assets/Report-d5Ew5oBT.js"), "./Pages/VisaApply.jsx": () => import("./assets/VisaApply-CphfNPXL.js"), "./Pages/VisaDetails.jsx": () => import("./assets/VisaDetails-CaakNC9_.js"), "./Pages/Welcome.jsx": () => import("./assets/Welcome-ByNhCfvu.js") })),
    setup: ({ App, props }) => {
      global.route = (name, params, absolute) => route(name, params, absolute, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.location)
      });
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
