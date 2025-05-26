import logo from "../assets/LogoDev.png"
import { Link } from "../components/Link"
import { Button } from "../components/Button"
export const Header = () => {

  return (
    <header className="flex justify-between items-center text-[17px] border-b-2 border-b-[#d2d2d0] p-5">
      <div className="flex justify-center items-center gap-9">
        <img src={logo} alt="Logo" className="w-24 h-auto rounded-4xl" />
        <Link text={"inicio"} />
        <Link text={"Sobre mí"} />
      </div>

      <div className="flex justify-center items-center gap-6">
        <Link text={"Clases"} />
        <Button textButton={"contacto"} />
      </div>
    </header>
  )
}
