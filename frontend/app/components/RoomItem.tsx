import React from 'react'
import Image from 'next/image'
import { dummyImageUrl } from '../constants/data'

type RoomItemProps = {
  roomID: string
  image: string | undefined
  title: string
  description: string
  is_booked: boolean
  desks: number
  handleDeleteRoom: (roomID: string) => void
  handleBooking: (roomID: string, is_booked: boolean) => void
}

const RoomItem: React.FC<RoomItemProps> = ({
  roomID,
  image,
  title,
  description,
  is_booked,
  desks,
  handleDeleteRoom,
  handleBooking
}) => {
  const buttonLabel = is_booked ? 'Unbook' : 'Book'

  return (
    <div className="flex items-center justify-between rounded p-3 hover:bg-slate-100">
      <div className="flex items-center space-x-4">
        <Image
          src={image || dummyImageUrl}
          alt={title}
          width={150}
          height={100}
          className={`rounded ${is_booked ? 'grayscale' : ''}`}
          priority
        />
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p>{description}</p>
          <p>
            <span
              className={`${
                is_booked ? 'bg-orange-400' : 'bg-blue-500'
              } py-1 px-3 rounded-full text-sm text-white`}
            >
              {is_booked ? 'booked' : 'available'}
            </span>
          </p>
          {desks ? <p>Desks: {desks}</p> : null}
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-1 w-40">
          <button className="px-4 py-2 rounded bg-blue-500 hover:bg-sky-700 text-white w-full">
            Edit
          </button>
          <button
            className="px-4 py-2 rounded bg-red-500 hover:bg-red-700 text-white w-full"
            onClick={() => handleDeleteRoom(roomID)}
          >
            Delete
          </button>
        </div>
        <div className="flex justify-end w-40">
          <button
            className="px-4 py-2 rounded bg-blue-500 hover:bg-sky-700 text-white w-full"
            onClick={() => handleBooking(roomID, !is_booked)}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  )
}

export default RoomItem
