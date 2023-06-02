import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType('Room')
export class RoomType {
  @Field(type => ID)
  id: string

  @Field()
  title: string

  @Field()
  description: string

  @Field()
  is_booked: boolean

  @Field()
  desks: number
}
