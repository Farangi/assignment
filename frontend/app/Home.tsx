import React, { useEffect, useState } from 'react'
import RoomList from './components/RoomList'
import SearchBar from './components/SearchBar'
import { useMutation, useQuery } from '@apollo/client'
import { DELETE_ROOM, GET_ROOMS, UPDATE_ROOM } from '../lib/queries'
import Swal from 'sweetalert2'
import Loader from './components/Loader'
import { Room } from './constants/data'
import useDebounce from './hooks/useDebounce'

const Home = () => {
  const [rooms, setRooms] = useState<Room[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500)
  const { data, refetch, loading, error } = useQuery(GET_ROOMS)
  const [updateRoom] = useMutation(UPDATE_ROOM)
  const [deleteRoom] = useMutation(DELETE_ROOM)

  useEffect(() => {
    if (data?.room?.length) {
      if (debouncedSearchTerm) {
        setRooms(
          data.room.filter((room: Room) =>
            room.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
          )
        )
      } else {
        setRooms(data.room)
      }
    }
  }, [data, debouncedSearchTerm])

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong while fetching rooms'
      })
    }
  }, [error])

  const handleSearch = ({
    target: { value }
  }: {
    target: { value: string }
  }) => {
    setSearchTerm(value)
  }

  const handleDeleteRoom = (roomID: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          await deleteRoom({ variables: { id: roomID } })
          Swal.fire({
            title: 'Deleted!',
            text: 'Room has been deleted',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true
          })
          refetch()
        } catch (error) {
          console.log({ error })
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong while deleting this room!'
          })
        }
      }
    })
  }

  const handleBooking = async (roomID: string, is_booked: boolean) => {
    try {
      await updateRoom({ variables: { id: roomID, is_booked } })
      refetch()
    } catch (error) {
      console.log({ error })
      Swal.fire({
        icon: 'error',
        title: 'Oops ...',
        text: (error as Error).message
      })
    }
  }

  return (
    <div className="container mx-auto p-8 bg-white rounded">
      <h1 className="text-3xl font-bold mb-4 text-center">Room Planner</h1>
      <h2 className="text-xl font-semibold mb-4">Rooms</h2>
      <SearchBar value={searchTerm} handleChange={handleSearch} />
      <div className={`${loading ? 'flex justify-center py-5' : 'hidden'}`}>
        <Loader />
      </div>
      <div className={`${loading ? 'hidden' : ''}`}>
        {rooms.length > 0 ? (
          <RoomList
            rooms={rooms}
            handleDeleteRoom={handleDeleteRoom}
            handleBooking={handleBooking}
          />
        ) : (
          <p className="text-center">No Rooms to display</p>
        )}
      </div>
    </div>
  )
}

export default Home
