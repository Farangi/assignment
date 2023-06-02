import { gql } from 'graphql-tag';

export const GET_ROOMS = gql`
  query GetRooms {
    room {
      id
      title
      description
      is_booked
      desks
    }
  }
`;

export const UPDATE_ROOM = gql`
  mutation UpdateRoom($id: String!, $is_booked: Boolean!) {
    updateRoom(id: $id, is_booked: $is_booked) {
      id
      is_booked
    }
  }
`;

export const DELETE_ROOM = gql`
  mutation DeleteRoom($id: String!) {
    deleteRoom(id: $id)
  }
`;
