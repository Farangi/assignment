import { Test } from '@nestjs/testing'
import { RoomResolver } from './room.resolver'
import { RoomService } from './room.service'
import { v4 as uuid } from 'uuid'

describe('RoomResolver', () => {
  let roomResolver: RoomResolver
  let roomService: RoomService

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        RoomResolver,
        {
          provide: RoomService,
          useValue: {
            // Mock the methods of RoomService as per your test scenario
            getRooms: jest.fn(),
            createRoom: jest.fn(),
            updateRoom: jest.fn(),
            deleteRoom: jest.fn()
          }
        }
      ]
    }).compile()

    roomResolver = moduleRef.get<RoomResolver>(RoomResolver)
    roomService = moduleRef.get<RoomService>(RoomService)
  })

  describe('room', () => {
    it('should return rooms', async () => {
      // Mock the behavior of the roomService.getRooms method
      const mockRooms = [
        {
          id: uuid(),
          title: 'Room 1',
          description: 'Room 1 description',
          desks: 5,
          is_booked: false
        },
        {
          id: uuid(),
          title: 'Room 2',
          description: 'Room 2 description',
          desks: 5,
          is_booked: false
        }
      ]
      jest.spyOn(roomService, 'getRooms').mockResolvedValue(mockRooms)

      // Call the resolver method
      const result = await roomResolver.room()

      // Assert the result
      expect(result).toEqual(mockRooms)
      expect(roomService.getRooms).toHaveBeenCalled()
    })
  })

  describe('createRoom', () => {
    it('should create a room', async () => {
      // Mock the behavior of the roomService.createRoom method
      const mockRoom = {
        id: uuid(),
        title: 'New Room',
        description: 'Room description',
        desks: 5,
        is_booked: false
      }
      jest.spyOn(roomService, 'createRoom').mockResolvedValue(mockRoom)

      // Call the resolver method
      const result = await roomResolver.createRoom(
        'New Room',
        'Room description',
        5,
        false
      )

      // Assert the result
      expect(result).toEqual(mockRoom)
      expect(roomService.createRoom).toHaveBeenCalledWith(
        'New Room',
        'Room description',
        5,
        false
      )
    })
  })

  describe('updateRoom', () => {
    it('should update a room', async () => {
      // Mock the behavior of the roomService.updateRoom method
      const roomId = uuid()
      const mockRoom = {
        id: roomId,
        title: 'Updated Room',
        description: 'Updated Room description',
        desks: 3,
        is_booked: false
      }
      jest.spyOn(roomService, 'updateRoom').mockResolvedValue(mockRoom)

      // Call the resolver method
      const result = await roomResolver.updateRoom(roomId, true)

      // Assert the result
      expect(result).toEqual(mockRoom)
      expect(roomService.updateRoom).toHaveBeenCalledWith(roomId, true)
    })
  })

  describe('deleteRoom', () => {
    it('should delete a room', async () => {
      // Mock the behavior of the roomService.deleteRoom method
      jest.spyOn(roomService, 'deleteRoom').mockResolvedValue(true)

      // Call the resolver method
      const result = await roomResolver.deleteRoom(uuid())

      // Assert the result
      expect(result).toBe(true)
      expect(roomService.deleteRoom).toHaveBeenCalled()
    })
  })
})
