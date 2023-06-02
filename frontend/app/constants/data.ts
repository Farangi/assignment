export type Room = {
  id: string
  image: string | undefined
  title: string
  description: string
  is_booked: boolean
  desks: number
}

export const dummyImageUrl =
  'https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=100&q=50'
