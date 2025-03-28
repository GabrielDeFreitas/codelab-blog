import { NavbarProps } from "./types";

export function Navbar({ redirect, logo, alt }: NavbarProps) {
  return (
    <nav>
      <a href={redirect} className="text-dark-60">
        <img src={logo} alt={alt} />
      </a>
    </nav>
  )
}
