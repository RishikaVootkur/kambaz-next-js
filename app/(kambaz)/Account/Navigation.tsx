"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import "./styles.css";

export default function AccountNavigation() {
  const pathname = usePathname();

  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  const linkToHref: Record<string, string> = {
    Signin: "/Account/Signin",
    Signup: "/Account/Signup",
    Profile: "/Account/Profile",
  };

  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => {
        const href = linkToHref[link];
        const isActive = pathname.toLowerCase().endsWith(link.toLowerCase());
        return (
          <Link
            key={link}
            href={href}
            id={`wd-account-${link.toLowerCase()}-link`}
            className={`list-group-item border-0 ${
              isActive ? "active-link" : "text-danger"
            }`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}