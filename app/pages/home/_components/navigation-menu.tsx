import { NavigationMenu, NavigationMenuList } from '@radix-ui/react-navigation-menu'
import { BriefcaseBusinessIcon, CameraIcon, User, Bookmark } from 'lucide-react'

const Navbar = () => {
  return (
    <NavigationMenu className="flex items-center justify-between bg-gray-100 p-4 shadow-md">
      {/* Logo */}
      <div>
        <h1 className="text-black-600 text-xl font-bold">LOGO</h1>
      </div>

      {/* Menu Items */}
      <NavigationMenuList className="flex gap-6">
        <div className="flex cursor-pointer items-center gap-2 hover:text-blue-500">
          <BriefcaseBusinessIcon className="h-6 w-6" />
          <h2 className="text-sm font-medium">Vagas</h2>
        </div>
        <div className="flex cursor-pointer items-center gap-2 hover:text-blue-500">
          <CameraIcon className="h-6 w-6" />
          <h2 className="text-sm font-medium">Cadastrar Vaga</h2>
        </div>
        <div className="flex cursor-pointer items-center gap-2 hover:text-blue-500">
          <User className="h-6 w-6" />
          <h2 className="text-sm font-medium">Perfil</h2>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar
