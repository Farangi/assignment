import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false, default: 'Default Title' })
  title: string

  @Column({ default: 'Default description' })
  description: string

  @Column({ default: 0 })
  desks: number

  @Column({ name: 'is_booked', nullable: false, default: false })
  is_booked: boolean

  @Column({ nullable: true, default: 'none' })
  image?: string
}
