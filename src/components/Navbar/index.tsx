
interface NavbarProps {
    redirect: string,
    logo: string,
    alt: string,
}

export function Navbar({redirect, logo, alt}: NavbarProps) {
    return (
      <nav>
        <a href={redirect} className="text-dark-60">
          <img src={logo} alt={alt}/>
        </a>
      </nav>
    )
}
