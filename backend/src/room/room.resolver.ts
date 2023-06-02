import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { RoomType } from './room.type'
import { RoomService } from './room.service'

@Resolver((of: any) => RoomType)
export class RoomResolver {
  constructor(private roomService: RoomService) {}

  @Query(() => [RoomType])
  async room() {
    const room = await this.roomService.getRooms()
    return room
  }

  @Mutation(() => RoomType)
  async createRoom(
    @Args('title') title: string,
    @Args('description') description: string,
    @Args('desks') desks: number,
    @Args('is_booked') is_booked: boolean
  ) {
    return await this.roomService.createRoom(
      title,
      description,
      desks,
      is_booked
    )
  }

  @Mutation(() => RoomType)
  async updateRoom(
    @Args('id') id: string,
    @Args('is_booked') is_booked: boolean
  ) {
    return await this.roomService.updateRoom(id, is_booked)
  }

  @Mutation(() => Boolean)
  async deleteRoom(@Args('id') id: string) {
    return await this.roomService.deleteRoom(id)
  }
}
