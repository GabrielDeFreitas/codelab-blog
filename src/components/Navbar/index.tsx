import { NavbarProps } from "./types";
import Logo from "../../assets/CodeLab.svg"

export function Navbar({ redirect, alt }: NavbarProps) {
  return (
    <nav>
      <a href={redirect} className="text-dark-60">
        <img src={Logo} alt={alt} />
      </a>
    </nav>
  )
}
