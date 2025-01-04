import { NavigationMenu, NavigationMenuList } from '@radix-ui/react-navigation-menu'
import { BriefcaseBusinessIcon, CameraIcon, User } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../../_components/ui/dropdown-menu'
import Link from 'next/link'

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
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium">Perfil</DropdownMenuTrigger>
            <DropdownMenuContent className="mt-4 bg-gray-100">
              <DropdownMenuItem>
                <Link href="/pages/home/user-data">Meus Dados</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/pages/home/saved-jobs">Vagas Salvas</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/">Sair</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar
