help:
	@echo "stop         - Stop and remove containers."
	@echo "restart      - Stop and start containers."
	@echo "schema       - Execute SQL schema file inside the PostgreSQL container."
	@echo "load         - Load data from CSV files into the database."
	@echo "db           - Create schema and load data into the database."
	@echo "start        - Restart containers, create schema, and load data."

stop:
	docker-compose down

restart:
	docker-compose down
	docker-compose up -d

schema:
	-docker exec postgres bash -c "PGPASSWORD=pg_test psql -U postgres -h 127.0.0.1 -d room_planner -f ./backend/sql/table.sql"

load:
	-docker exec postgres bash -c "PGPASSWORD=pg_test psql -U postgres -h 127.0.0.1 -d room_planner -f ./backend/sql/data.sql"

db:
	make schema
	make load

start:
	make restart
	# make db