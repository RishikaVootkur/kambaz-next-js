import Link from "next/link";
export default function Signup() {
    return (
        <div id="wd-signup-screen">
            <h3>Sign up</h3>
            <input defaultValue="john doe" placeholder="username" className="wd-username"/><br/>
            <input defaultValue="1234" placeholder="password" type="password" className="wd-password"/><br/>
            <input defaultValue="1234" placeholder="verify password" type="password" className="wd-verify-password" /><br/>
            <Link href="Profile">Sign up</Link><br/>
            <Link href="Signin">Sign in</Link>
        </div>
    );
}