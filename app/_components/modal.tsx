import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog'
// import { Button } from './ui/button'

interface ModalItemProps {
  data: {
    image: string
    title: string
    description: string
    company: string
    email: string
    contract: string
    name: string
    distance: string
    daysAgo: string
  }
}

const Modal = () => {
  return (
    <div>
      <AlertDialog className="h-585 w-971">
        <AlertDialogTrigger>Candidatar-se</AlertDialogTrigger>
        <AlertDialogContent className="h-585 w-971">
          <AlertDialogHeader className="h-585 w-971">
            <AlertDialogTitle>Cargo</AlertDialogTitle>
            <AlertDialogDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Fechar</AlertDialogCancel>
            <AlertDialogAction>Candidatar-se</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default Modal
