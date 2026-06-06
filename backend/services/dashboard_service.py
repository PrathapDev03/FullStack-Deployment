from sqlalchemy import func

from db import SessionLocal
from models import Employee
from models import Visitor


def get_dashboard_metrics():

    db = SessionLocal()

    total_employees = db.query(
        Employee
    ).count()

    total_visitors = db.query(
        Visitor
    ).count()

    total_departments = db.query(
        Employee.department
    ).distinct().count()

    avg_salary = db.query(
        func.avg(
            Employee.salary
        )
    ).scalar()

    db.close()

    return {

        "employees":
        total_employees,

        "visitors":
        total_visitors,

        "departments":
        total_departments,

        "avg_salary":
        round(
            avg_salary or 0
        )

    }