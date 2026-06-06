from sqlalchemy import Column, Integer, String, Float
from models import Base


class Employee(Base):

    __tablename__ = "employees"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    name = Column(
        String(100),
        nullable=False
    )

    email = Column(
        String(100),
        nullable=False,
        unique=True
    )

    department = Column(
        String(100),
        nullable=False
    )

    designation = Column(
        String(100),
        nullable=False
    )

    salary = Column(
        Float,
        nullable=False
    )