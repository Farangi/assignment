CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS room (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL DEFAULT 'Default Title',
  description VARCHAR(255) DEFAULT 'Default description',
  desks INTEGER DEFAULT 0,
  is_booked BOOLEAN NOT NULL DEFAULT false,
  image VARCHAR(255) DEFAULT 'none'
);