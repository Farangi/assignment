import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Room } from './room.entity'
import { Repository } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room) private RoomRepository: Repository<Room>
  ) {}

  async getRooms(): Promise<Room[]> {
    return await this.RoomRepository.find()
  }

  async createRoom(
    title: any,
    description: any,
    desks: any,
    is_booked: any
  ): Promise<Room> {
    const room = this.RoomRepository.create({
      id: uuid(),
      title,
      description,
      is_booked,
      desks
    })

    await this.RoomRepository.save(room)
    return room
  }

  async updateRoom(id: any, is_booked: any): Promise<Room> {
    const room = await this.RoomRepository.findOne({ where: { id: id } })

    console.log('Room found', room)

    if (!room) {
      throw new Error('Room not found.')
    }

    if (room.is_booked && !is_booked) {
      // Unbooking the room, no need to update desks count
      room.is_booked = false
      await this.RoomRepository.save(room)
      return room
    }

    const result = await this.RoomRepository.createQueryBuilder()
      .update(Room)
      .set({ is_booked })
      .where('id = :id AND desks <= 0', { id })
      .returning('*')
      .execute()

    if (result.affected === 0) {
      throw new Error('A room with desks cannot be booked.')
    }

    const updatedRoom = result.raw[0] as Room
    return updatedRoom
  }

  async deleteRoom(id: any): Promise<boolean> {
    const result = await this.RoomRepository.createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .execute()

    if (result.affected !== 1) {
      throw new Error('Room not found or update failed')
    }

    const updatedRoom = result.raw // Access the updated room from the result
    return true
  }
}
