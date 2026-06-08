from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from urllib.parse import quote_plus

DB_USER = "root"
DB_PASSWORD = quote_plus("Prathap1@")
DB_HOST = "employee-db.cbuoa8kc81xo.ap-southeast-1.rds.amazonaws.com"
DB_PORT = "3306"
DB_NAME = "employee_management"

DATABASE_URL = (
    f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}"
    f"@{DB_HOST}:{DB_PORT}/{DB_NAME}"
)

engine = create_engine(
    DATABASE_URL,
    echo=True
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)