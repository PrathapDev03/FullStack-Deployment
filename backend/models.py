from sqlalchemy.orm import declarative_base
from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Float

Base = declarative_base()


class Employee(Base):

    __tablename__ = "employees"

    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    email = Column(String(100))
    department = Column(String(100))
    designation = Column(String(100))
    salary = Column(Float)


class Visitor(Base):

    __tablename__ = "visitors"

    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    email = Column(String(100))
    phone = Column(String(20))


class User(Base):

    __tablename__ = "users"

    id = Column(Integer, primary_key=True)

    name = Column(
        String(100),
        nullable=False
    )

    email = Column(
        String(100),
        unique=True,
        nullable=False
    )

    password = Column(
        String(255),
        nullable=False
    )


class Department(Base):

    __tablename__ = "departments"

    id = Column(Integer, primary_key=True)

    department_name = Column(String(100))

    manager = Column(String(100))

    location = Column(String(100))


class Payroll(Base):

    __tablename__ = "payroll"

    id = Column(Integer, primary_key=True)

    employee_name = Column(String(100))

    department = Column(String(100))

    salary = Column(Float)

    bonus = Column(Float)

    deductions = Column(Float)


class Notification(Base):

    __tablename__ = "notifications"

    id = Column(Integer, primary_key=True)

    message = Column(String(255))

    status = Column(String(50))