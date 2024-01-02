import Link from "next/link";
import React from "react";

interface Props {
    href: string;
    name: string;
    className?: string;
    children?: React.ReactNode;
}

const NavItem = ({
    href,
    name,
    className,
}: Props) => {
    return (
        <Link href={href} className={`nav_item ${className}`}>
            {name}
        </Link>
    );
};

export default NavItem;
