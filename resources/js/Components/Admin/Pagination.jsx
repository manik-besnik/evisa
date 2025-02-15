import { Link } from "@inertiajs/react";
import React from "react";
import ArrowLong from "@/Components/SvgIcons/ArrowLong";

const pagiClasses =
    "bg-side-and-button hover:bg-card-and-hover rounded-md px-2.5 h-[30px] flex items-center text-xs text-text-primary";

const Pagination = ({ links }) => {
    if (links.length <= 3) return null;

    return (
        <div className="flex items-center gap-3">
            {links.map((link, index) => {
                if (link.label.includes("&laquo;")) {
                    return (
                        <Link
                            key={index}
                            href={link?.url || "#"}
                            className={`${pagiClasses} ${!link?.url ? "opacity-60" : ""}`}
                        >
                            <ArrowLong className="rotate-180" />
                        </Link>
                    );
                }

                if (link.label.includes("Next")) {
                    return (
                        <Link
                            key={index}
                            href={link?.url || "#"}
                            className={`${pagiClasses} ${!link?.url ? "opacity-60" : ""}`}
                        >
                            <ArrowLong />
                        </Link>
                    );
                }

                return (
                    <Link
                        key={index}
                        href={link?.url || "#"}
                        className={`${pagiClasses} ${link?.active ? "bg-card-and-hover" : ""}`}
                        dangerouslySetInnerHTML={{ __html: link.label }} // Handle pagination labels like `1`, `2`, `...`
                    />
                );
            })}
        </div>
    );
};

export default Pagination;
