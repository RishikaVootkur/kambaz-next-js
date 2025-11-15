"use client";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname();
  return (
    <Nav variant="pills">
      <NavItem key="labs">
        <NavLink
          href="/Labs"
          as={Link}
          className={`nav-link ${pathname.endsWith("Labs") ? "active" : ""}`}  // ✅ Added {
        >
          Labs
        </NavLink>
      </NavItem>
      <NavItem key="lab1">
        <NavLink
          href="/Labs/Lab1"
          as={Link}
          className={`nav-link ${pathname.endsWith("Lab1") ? "active" : ""}`}  // ✅ Added {
        >
          Lab 1
        </NavLink>
      </NavItem>
      <NavItem key="lab2">
        <NavLink
          href="/Labs/Lab2"
          as={Link}
          className={`nav-link ${pathname.endsWith("Lab2") ? "active" : ""}`}  // ✅ Added {
        >
          Lab 2
        </NavLink>
      </NavItem>
      <NavItem key="lab3">
        <NavLink
          href="/Labs/Lab3"
          as={Link}
          className={`nav-link ${pathname.endsWith("Lab3") ? "active" : ""}`}  // ✅ Added {
        >
          Lab 3
        </NavLink>
      </NavItem>
      <NavItem key="lab4">
        <NavLink
          href="/Labs/Lab4"
          as={Link}
          className={`nav-link ${pathname.endsWith("Lab4") ? "active" : ""}`}  // ✅ Added {
        >
          Lab 4
        </NavLink>
      </NavItem>
      <NavItem key="lab5">
        <NavLink
          href="/Labs/Lab5"
          as={Link}
          className={`nav-link ${pathname.endsWith("Lab5") ? "active" : ""}`}  // ✅ Added {
        >
          Lab 5
        </NavLink>
      </NavItem>
      <NavItem key="kambaz">
        <NavLink href="/" as={Link}>
          Kambaz
        </NavLink>
      </NavItem>
      <NavItem key="github">
        <NavLink href="https://github.com/jannunzi">My GitHub</NavLink>
      </NavItem>
    </Nav>
  );
}