import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from urllib.parse import quote_plus

# Read values from ECS Environment Variables
DB_USER = os.getenv("DB_USER", "admin")
DB_PASSWORD = quote_plus(os.getenv("DB_PASSWORD", "Admin121"))
DB_HOST = os.getenv("DB_HOST", "employee-db.cbuoa8kc81xo.ap-southeast-1.rds.amazonaws.com")
DB_PORT = os.getenv("DB_PORT", "3306")
DB_NAME = os.getenv("DB_NAME", "employee_management")

DATABASE_URL = (
    f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}"
    f"@{DB_HOST}:{DB_PORT}/{DB_NAME}"
)

print(f"Connecting to database: {DB_HOST}")

engine = create_engine(
    DATABASE_URL,
    echo=True,
    pool_pre_ping=True
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()