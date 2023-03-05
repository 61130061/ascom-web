import logo from '../assets/ascom_logo.png';

export default function Navbar() {
  const menu = [ "Research", "Team", "About Us", "Contact us", "Github"];

  return (
    <div className="absolute top-0 left-0 w-full z-30">
      <div className="container px-3 py-5 mx-auto flex items-center justify-between">
        <div className="flex gap-5 items-center">
          <img className="h-10" src={logo} />
        </div>
        <div className="flex items-center gap-2">
          {menu.map((d) =>
            <button className="hover:bg-white rounded hover:bg-opacity-30 px-2.5 py-1">{d}</button>
          )}
        </div>
      </div>
    </div>
  )
}