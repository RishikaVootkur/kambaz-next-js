import Link from "next/link";
import { FormControl } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" style={{ maxWidth: "400px" }}>
      <h1>Profile</h1>
      <FormControl
        id="wd-username"
        defaultValue="alice"
        placeholder="username"
        type="text"
        className="mb-2" />
      <FormControl
        id="wd-password"
        defaultValue="123"
        placeholder="password"
        type="password"
        className="mb-2" />
      <FormControl
        id="wd-first-name"
        defaultValue="Alice"
        placeholder="First Name"
        type="text"
        className="mb-2" />
      <FormControl
        id="wd-last-name"
        defaultValue="Wonderland"
        placeholder="Last Name"
        type="text"
        className="mb-2" />
      <FormControl
        id="wd-dob"
        defaultValue="2000-01-01"
        type="date"
        className="mb-2" />
      <FormControl
        id="wd-email"
        defaultValue="alice@wonderland.com"
        type="email"
        className="mb-2" />
      <FormControl
        as="select"
        id="wd-role"
        defaultValue="USER"
        className="mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </FormControl>
      <Link
        id="wd-signout-btn"
        href="/Account/Signin"
        className="btn btn-danger w-100">
        Signout
      </Link>
    </div>
  );
}