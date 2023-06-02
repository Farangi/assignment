CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

INSERT INTO room (id, title, description, image, is_booked, desks)
VALUES 
  (uuid_generate_v4(), 'Room 1', 'Description for Room 1', 'https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=100&q=50', true, 0),
  (uuid_generate_v4(), 'Room 2', 'Description for Room 2', 'https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=100&q=50', false, 0),
  (uuid_generate_v4(), 'Room 3', 'Description for Room 3', 'https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=100&q=50', true, 2),
  (uuid_generate_v4(), 'Room 4', 'Description for Room 4', 'https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=100&q=50', false, 5),
  (uuid_generate_v4(), 'Room 5', 'Description for Room 5', 'https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=100&q=50', true, 0);
