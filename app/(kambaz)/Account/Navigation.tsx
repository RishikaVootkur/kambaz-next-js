"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

export default function AccountNavigation() {
  const pathname = usePathname();

  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      <Link
        href="/Account/Signin"
        id="wd-account-signin-link"
        className={`list-group-item border-0 ${
          pathname === "/Account/Signin" ? "active-link" : "text-danger"
        }`}
      >
        Signin
      </Link>
      <Link
        href="/Account/Signup"
        id="wd-account-signup-link"
        className={`list-group-item border-0 ${
          pathname === "/Account/Signup" ? "active-link" : "text-danger"
        }`}
      >
        Signup
      </Link>
      <Link
        href="/Account/Profile"
        id="wd-account-profile-link"
        className={`list-group-item border-0 ${
          pathname === "/Account/Profile" ? "active-link" : "text-danger"
        }`}
      >
        Profile
      </Link>
    </div>
  );
}