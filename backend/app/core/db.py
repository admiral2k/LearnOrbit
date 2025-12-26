import os
from sqlalchemy import create_engine

database_url = os.getenv("DATABASE_URL")
if not database_url:
    raise RuntimeError("DATABASE_URL is not set in env")

engine = create_engine(database_url)
