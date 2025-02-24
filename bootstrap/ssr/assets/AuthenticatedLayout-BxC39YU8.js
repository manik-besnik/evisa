import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, createContext, useContext, Fragment as Fragment$1, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import { C as Close } from "./Close-DxNaVPET.js";
import { A as ArrowRight } from "./ArrowRight-DhMzUtK5.js";
import { GrVisa } from "react-icons/gr";
import { PiNetworkXBold } from "react-icons/pi";
import { FaPeopleRoof, FaPeopleGroup } from "react-icons/fa6";
import { i as isPermitted } from "./index-DbarwM_f.js";
import { p as permissionEnums } from "./index-B74Y7uk7.js";
import { Transition, Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { A as Avatar } from "./Avatar-BwyzJcVZ.js";
import { IoMdNotificationsOutline } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
function ArrowUp(props) {
  return /* @__PURE__ */ jsx("svg", { className: props.class, width: "8", height: "8", viewBox: "0 0 8 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M4.754 0.912648C4.79267 0.950316 4.958 1.09255 5.094 1.22504C5.94933 2.00179 7.34933 4.02809 7.77667 5.08865C7.84533 5.24972 7.99067 5.65692 8 5.87449C8 6.08297 7.952 6.2817 7.85467 6.47134C7.71867 6.70774 7.50467 6.89739 7.252 7.0013C7.07667 7.06819 6.552 7.1721 6.54267 7.1721C5.96867 7.27602 5.036 7.33317 4.00533 7.33317C3.02333 7.33317 2.12867 7.27602 1.546 7.19094C1.53667 7.1812 0.884667 7.07728 0.661333 6.96363C0.253333 6.75515 0 6.34795 0 5.91216V5.87449C0.01 5.59068 0.263333 4.99383 0.272667 4.99383C0.700667 3.99042 2.032 2.01088 2.91667 1.21529C2.91667 1.21529 3.144 0.991232 3.286 0.893814C3.49 0.741841 3.74267 0.666504 3.99533 0.666504C4.27733 0.666504 4.54 0.751583 4.754 0.912648Z", fill: "#314252" }) });
}
function SideNavLinks() {
  const [products, setProducts] = useState([
    {
      name: "Visa",
      icon: /* @__PURE__ */ jsx(GrVisa, {}),
      isOpen: route().current("admin.visa-applies.*"),
      isPermitted: isPermitted(permissionEnums.VIEW_VISA),
      links: [
        {
          name: "Visa Apply List",
          route: route("admin.visa-applies.index"),
          isPermitted: isPermitted(permissionEnums.VIEW_VISA)
        },
        {
          name: "Add New Application",
          route: route("admin.visa-applies.create"),
          isPermitted: isPermitted(permissionEnums.CREATE_VISA)
        }
      ]
    },
    {
      name: "Jobs",
      icon: /* @__PURE__ */ jsx(PiNetworkXBold, {}),
      isOpen: false,
      isPermitted: isPermitted(permissionEnums.VIEW_JOB_POST),
      links: [
        {
          name: "Job List",
          route: route("admin.job-posts.index"),
          isPermitted: isPermitted(permissionEnums.VIEW_JOB_POST)
        },
        {
          name: "Add Job",
          route: route("admin.job-posts.create"),
          isPermitted: isPermitted(permissionEnums.CREATE_JOB_POST)
        },
        {
          name: "Applications",
          route: route("admin.job-posts.applications"),
          isPermitted: isPermitted(permissionEnums.VIEW_JOB_POST)
        }
      ]
    },
    {
      name: "Agency",
      icon: /* @__PURE__ */ jsx(FaPeopleRoof, {}),
      isOpen: false,
      isPermitted: isPermitted(permissionEnums.VIEW_AGENCY),
      links: [
        {
          name: "Agency List",
          route: route("admin.agencies.index"),
          isPermitted: isPermitted(permissionEnums.VIEW_AGENCY)
        }
      ]
    },
    {
      name: "User",
      icon: /* @__PURE__ */ jsx(FaPeopleGroup, {}),
      isOpen: false,
      isPermitted: isPermitted(permissionEnums.VIEW_USER),
      links: [
        {
          name: "User List",
          route: route("admin.users.index"),
          isPermitted: isPermitted(permissionEnums.VIEW_USER)
        },
        {
          name: "Add User",
          route: route("admin.users.create"),
          isPermitted: isPermitted(permissionEnums.CREATE_USER)
        }
      ]
    }
  ]);
  const handleToggle = (index) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product, idx) => {
        if (idx !== index) {
          return {
            ...product,
            isOpen: false
          };
        } else {
          return {
            ...product,
            isOpen: !product.isOpen
          };
        }
      });
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: products.map(
    (product, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `${product.isOpen && "bg-card-and-hover border-main-outline"} rounded-[10px] mb-1.5 hover:bg-card-and-hover border hover:border-main-outline`,
        children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              onClick: () => handleToggle(i),
              className: "flex justify-between items-center gap-2 cursor-pointer p-[10px]",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-[10px]", children: [
                  product.icon,
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `${product.isOpen || product.accountType === route().params.account_type && "font-semibold"} font-medium text-sm text-text-primary`,
                      children: product.name
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  ArrowUp,
                  {
                    class: `${product.isOpen ? "rotate-0" : "rotate-180"} transition-all duration-500`
                  }
                )
              ]
            }
          ),
          product.isPermitted && /* @__PURE__ */ jsx(
            "div",
            {
              className: `overflow-hidden`,
              style: {
                maxHeight: product.isOpen ? "500px" : "0",
                transition: "max-height 0.5s ease-in-out"
              },
              children: /* @__PURE__ */ jsxs("div", { className: "px-2.5 pb-2.5", children: [
                /* @__PURE__ */ jsx("hr", { className: "border-t border-t-main-outline pb-2.5" }),
                product.links.filter((item) => item.isPermitted).map(
                  (link, i2) => /* @__PURE__ */ jsx(
                    Link,
                    {
                      href: link.route,
                      className: `flex items-center justify-between mb-[10px] last:mb-0 text-medium text-sm text-font-medium text-text-primary`,
                      children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-[10px]", children: [
                        /* @__PURE__ */ jsx(ArrowRight, {}),
                        link.name
                      ] })
                    },
                    i2
                  )
                )
              ] })
            }
          )
        ]
      },
      i
    )
  ) });
}
function AgencySideNavLinks() {
  const [products, setProducts] = useState([
    {
      name: "Visa",
      icon: /* @__PURE__ */ jsx(GrVisa, {}),
      isOpen: route().current("agency.visa-applies.*"),
      links: [
        {
          name: "Visa Apply List",
          route: route("agency.visa-applies.index")
        },
        {
          name: "Add New Application",
          route: route("agency.visa-applies.store")
        }
      ]
    },
    {
      name: "User",
      icon: /* @__PURE__ */ jsx(FaPeopleGroup, {}),
      isOpen: false,
      links: [
        {
          name: "User List",
          route: route("agency.users.index")
        },
        {
          name: "Add User",
          route: route("agency.users.create")
        }
      ]
    }
  ]);
  const handleToggle = (index) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product, idx) => {
        if (idx !== index) {
          return {
            ...product,
            isOpen: false
          };
        } else {
          return {
            ...product,
            isOpen: !product.isOpen
          };
        }
      });
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: products.map((product, i) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: `${product.isOpen && "bg-card-and-hover border-main-outline"} rounded-[10px] mb-1.5 hover:bg-card-and-hover border hover:border-main-outline`,
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            onClick: () => handleToggle(i),
            className: "flex justify-between items-center gap-2 cursor-pointer p-[10px]",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-[10px]", children: [
                product.icon,
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `${product.isOpen || product.accountType === route().params.account_type && "font-semibold"} font-medium text-sm text-text-primary`,
                    children: product.name
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(ArrowUp, { class: `${product.isOpen ? "rotate-0" : "rotate-180"} transition-all duration-500` })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `overflow-hidden`,
            style: { maxHeight: product.isOpen ? "500px" : "0", transition: "max-height 0.5s ease-in-out" },
            children: /* @__PURE__ */ jsxs("div", { className: "px-2.5 pb-2.5", children: [
              /* @__PURE__ */ jsx("hr", { className: "border-t border-t-main-outline pb-2.5" }),
              product.links.map((link, i2) => /* @__PURE__ */ jsx(
                Link,
                {
                  href: link.route,
                  className: `flex items-center justify-between mb-[10px] last:mb-0 text-medium text-sm text-font-medium text-text-primary`,
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-[10px]", children: [
                    /* @__PURE__ */ jsx(ArrowRight, {}),
                    link.name
                  ] })
                },
                i2
              ))
            ] })
          }
        )
      ]
    },
    i
  )) });
}
function SideNav({ toggleSideNav, useToggleSideNav }) {
  const user = usePage().props.auth.user;
  return /* @__PURE__ */ jsx("div", { className: "flex justify-between flex-col w-full p-4 lg:p-5 min-h-full gap-10", children: /* @__PURE__ */ jsxs("div", { className: "h-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-[10px] mb-5 lg:mb-3", children: [
      /* @__PURE__ */ jsx(Link, { href: route("home"), children: /* @__PURE__ */ jsx("p", { className: "font-semibold text-[40px] text-text-primary", children: "E-Visa" }) }),
      toggleSideNav,
      /* @__PURE__ */ jsx("span", { onClick: () => useToggleSideNav(false), className: "lg:hidden", children: /* @__PURE__ */ jsx(Close, {}) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-5 lg:hidden", children: [
      isPermitted(permissionEnums.VIEW_ADMIN) && /* @__PURE__ */ jsx(
        Link,
        {
          href: route("admin.admins.index"),
          className: `${route().current("admin.admins.index") && "bg-card-and-hover"} flex items-center gap-[10px] rounded px-2.5 py-2 text-sm text-text-primary font-medium hover:bg-card-and-hover`,
          children: "Admins"
        }
      ),
      isPermitted(permissionEnums.VIEW_ROLE) && /* @__PURE__ */ jsx(
        Link,
        {
          href: route("admin.roles.index"),
          className: `${route().current("admin.roles.index") && "bg-card-and-hover"} flex items-center gap-[10px] rounded px-2.5 py-2 text-sm text-text-primary font-medium hover:bg-card-and-hover`,
          children: "Roles"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      user.role === 1 && /* @__PURE__ */ jsx(SideNavLinks, {}),
      user.role === 2 && /* @__PURE__ */ jsx(AgencySideNavLinks, {})
    ] })
  ] }) });
}
const DropDownContext = createContext();
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsx("div", { className: "relative", children }) });
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }),
    open && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40", onClick: () => setOpen(false) })
  ] });
};
const Content = ({ align = "right", width = "48", contentClasses = "py-1 bg-white", children }) => {
  const { open, setOpen } = useContext(DropDownContext);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "ltr:origin-top-left rtl:origin-top-right start-0";
  } else if (align === "right") {
    alignmentClasses = "ltr:origin-top-right rtl:origin-top-left end-0 top-[135%]";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Transition,
    {
      as: Fragment$1,
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 scale-95",
      enterTo: "opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute z-50 mt-2 rounded-2xl shadow-lg ${alignmentClasses} ${widthClasses}`,
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsx("div", { className: `rounded-2xl py-4 ring-black ring-opacity-5 ` + contentClasses, children })
        }
      )
    }
  ) });
};
const DropdownLink = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "block w-full px-5 py-[5px] text-start text-sm text-text-primary hover:bg-side-and-button focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out " + className,
      children
    }
  );
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
function Bar() {
  return /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.3333 13.3333H2.66667C2.29867 13.3333 2 13.0353 2 12.6667C2 12.298 2.29867 12 2.66667 12H13.3333C13.7013 12 14 12.298 14 12.6667C14 13.0353 13.7013 13.3333 13.3333 13.3333Z", fill: "#556575" }),
    /* @__PURE__ */ jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.3333 4.00008H2.66667C2.29867 4.00008 2 3.70208 2 3.33341C2 2.96475 2.29867 2.66675 2.66667 2.66675H13.3333C13.7013 2.66675 14 2.96475 14 3.33341C14 3.70208 13.7013 4.00008 13.3333 4.00008Z", fill: "#556575" }),
    /* @__PURE__ */ jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.3333 8.66659H2.66667C2.29867 8.66659 2 8.36859 2 7.99992C2 7.63125 2.29867 7.33325 2.66667 7.33325H13.3333C13.7013 7.33325 14 7.63125 14 7.99992C14 8.36859 13.7013 8.66659 13.3333 8.66659Z", fill: "#556575" })
  ] });
}
const Notification = () => {
  const { notifications } = usePage().props;
  return /* @__PURE__ */ jsx("div", { className: "text-right", children: notifications && /* @__PURE__ */ jsxs(Menu, { children: [
    /* @__PURE__ */ jsxs(MenuButton, { className: "flex gap-x-1 relative", children: [
      /* @__PURE__ */ jsx("span", { className: "text-2xl mb-0", children: /* @__PURE__ */ jsx(IoMdNotificationsOutline, { className: "w-6 h-6" }) }),
      /* @__PURE__ */ jsx("span", { className: "absolute -top-1/3 bg-side-and-button w-4 h-4 rounded-full  -right-1 text-xs", children: notifications.length })
    ] }),
    /* @__PURE__ */ jsxs(
      MenuItems,
      {
        transition: true,
        anchor: "bottom end",
        className: "w-80 h-[70vh] overflow-y-scroll origin-top-right rounded-xl border bg-main-and-focus text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0",
        children: [
          /* @__PURE__ */ jsx(MenuItem, { children: /* @__PURE__ */ jsx(
            "button",
            {
              className: "group flex w-full items-center gap-2 rounded-lg py-1.5 text-lg px-3 data-[focus]:bg-white/10",
              children: "Notifications"
            }
          ) }),
          notifications.length > 0 && notifications.map((item, i) => /* @__PURE__ */ jsx(MenuItem, { children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("admin.notifications.show", item.id),
              className: "group text-sm hover:bg-side-and-button flex w-full items-center gap-2 py-2 px-3 ",
              children: item.title
            }
          ) }, i))
        ]
      }
    )
  ] }) });
};
function NavBar({ useToggleSideNav }) {
  const user = usePage().props.auth.user;
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-between py-1.5 px-4 lg:py-4 bg-white lg:rounded-[8px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-[10px]", children: [
      isPermitted(permissionEnums.VIEW_ADMIN) && /* @__PURE__ */ jsx(
        Link,
        {
          href: route("admin.admins.index"),
          className: `${route().current() === "admin.admins.index" && "bg-card-and-hover"} px-3 py-2 text-[14px] font-medium leading-[20px] text-text-primary hover:bg-side-and-button rounded-md`,
          children: " Admins"
        }
      ),
      isPermitted(permissionEnums.VIEW_ROLE) && /* @__PURE__ */ jsx(
        Link,
        {
          href: route("admin.roles.index"),
          className: `${route().current() === "admin.roles.index" && "bg-card-and-hover"} px-3 py-2 text-[14px] font-medium leading-[20px] text-text-primary hover:bg-side-and-button rounded-md`,
          children: " Roles"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("button", { className: "lg:hidden", onClick: () => useToggleSideNav(true), children: /* @__PURE__ */ jsx(Bar, {}) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5", children: [
      /* @__PURE__ */ jsx(Notification, {}),
      /* @__PURE__ */ jsxs(Dropdown, { children: [
        /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: "inline-flex items-center gap-2 font-medium text-xs md:text-sm text-text-primary",
            children: [
              /* @__PURE__ */ jsx("span", { children: "Profile" }),
              (user == null ? void 0 : user.avatar) ? /* @__PURE__ */ jsx(
                "img",
                {
                  className: "h-5 w-5 md:h-9 md:w-9 border border-focus-outline rounded",
                  src: user.avatar,
                  alt: user.name
                }
              ) : /* @__PURE__ */ jsx(Avatar, { width: "20", height: "20" })
            ]
          }
        ) }) }),
        /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
          /* @__PURE__ */ jsxs(Dropdown.Link, { href: route("profile.edit"), children: [
            "Profile",
            /* @__PURE__ */ jsx("p", { className: "text-xs text-t-secondary", children: user == null ? void 0 : user.email })
          ] }),
          /* @__PURE__ */ jsx(Dropdown.Link, { href: route("logout"), method: "post", as: "button", children: "Log Out" })
        ] })
      ] })
    ] })
  ] });
}
function Authenticated({ children }) {
  const [toggleSideNav, useToggleSideNav] = useState(false);
  const { flash, errors } = usePage().props;
  useEffect(() => {
    if (flash == null ? void 0 : flash.success) {
      toast.success(flash.success);
    }
    if (flash == null ? void 0 : flash.error) {
      toast.error(flash.error);
    }
    if (errors == null ? void 0 : errors.message) {
      toast.error(errors.message);
    }
  }, [flash, errors]);
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `${toggleSideNav ? "translate-x-[0]" : "-translate-x-full lg:translate-x-[0]"} nav-container bg-side-and-button max-w-[268px] min-w-[268px] absolute lg:relative lg:block border-r border-r-[#C7BDA8] transition-all duration-900 h-screen overflow-auto`,
        children: /* @__PURE__ */ jsx(
          SideNav,
          {
            toggleSideNav,
            useToggleSideNav
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "w-full bg-main-and-focus h-screen overflow-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-slate-300 scrollbar-track-transparent",
        children: [
          /* @__PURE__ */ jsx("div", { className: "lg:px-6 lg:pt-6 mb-6", children: /* @__PURE__ */ jsx(NavBar, { useToggleSideNav }) }),
          /* @__PURE__ */ jsx("div", { className: "pb-4 px-4 sm:pb-6 sm:px-6", children })
        ]
      }
    ),
    /* @__PURE__ */ jsx(ToastContainer, {})
  ] });
}
export {
  Authenticated as A
};
