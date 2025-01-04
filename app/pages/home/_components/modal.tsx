import { Dialog, DialogContent, DialogHeader, DialogTrigger } from './ui/dialog'
import { Calendar, MapPin, UserRound, Share2, Bookmark } from 'lucide-react'

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

const Modal = ({ data }: ModalItemProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="cursor-pointer">Candidate-se</p>
      </DialogTrigger>
      <DialogContent className="h-585 max-w-[971px]">
        <DialogHeader className="flex flex-col lg:flex-row">
          <div className="flex justify-center lg:w-1/3">
            <img src={data.image} alt={data.title} />
          </div>

          <div className="flex flex-wrap justify-center lg:w-2/3">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>
        </DialogHeader>

        <div>
          <div className="flex justify-between">
            <div className="flex items-center gap-6">
              <UserRound className="w-4 text-gray-500" />
              <h2 className="text-sm font-medium text-gray-700">{data.name}</h2>
            </div>
            <div className="flex items-center gap-6">
              <MapPin className="w-4 text-gray-500" />
              <p className="text-sm text-gray-600">{data.distance}</p>
            </div>
            <div className="flex items-center gap-6">
              <Calendar className="w-4 text-gray-500" />
              <p className="text-sm text-gray-600">{data.daysAgo}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
