import React from 'react'
import RoomItem from './RoomItem'
import { Room } from '../constants/data'

type RoomListProps = {
  rooms: Room[]
  handleDeleteRoom: (roomID: string) => void
  handleBooking: (roomID: string, is_booked: boolean) => void
}

const RoomList: React.FC<RoomListProps> = ({
  rooms,
  handleDeleteRoom,
  handleBooking
}) => {
  return (
    <div className="space-y-2 py-2">
      {rooms.map(room => (
        <RoomItem
          key={room.id}
          roomID={room.id}
          image={room.image}
          title={room.title}
          description={room.description}
          is_booked={room.is_booked}
          desks={room.desks}
          handleDeleteRoom={handleDeleteRoom}
          handleBooking={handleBooking}
        />
      ))}
    </div>
  )
}

export default RoomList
