import NavLink from "./NavLink";
import Link from "next/link";
export default function MainHeader() {
 
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
           <NavLink href='/News'>News</NavLink>
          </li>
            <li>
            <NavLink href='/Archive'>Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}