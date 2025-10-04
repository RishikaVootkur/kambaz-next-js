import Link from "next/link";
import { FormControl } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen" style={{ maxWidth: "400px" }}>
      <h1>Signup</h1>
      <FormControl
        id="wd-username"
        defaultValue="john doe"
        placeholder="username"
        className="mb-2" />
      <FormControl
        id="wd-password"
        defaultValue="1234"
        placeholder="password"
        type="password"
        className="mb-2" />
      <FormControl
        id="wd-verify-password"
        defaultValue="1234"
        placeholder="verify password"
        type="password"
        className="mb-2" />
      <Link
        id="wd-signup-btn"
        href="/Account/Profile"
        className="btn btn-primary w-100 mb-2">
        Signup
      </Link>
      <Link id="wd-signin-link" href="/Account/Signin">Signin</Link>
    </div>
  );
}