from db import SessionLocal
from models import Payroll


def get_all_payroll():

    db = SessionLocal()

    payrolls = db.query(
        Payroll
    ).all()

    result = []

    for payroll in payrolls:

        result.append({

            "id": payroll.id,
            "employee_name": payroll.employee_name,
            "department": payroll.department,
            "salary": payroll.salary,
            "bonus": payroll.bonus,
            "deductions": payroll.deductions

        })

    db.close()

    return result


def add_payroll(data):

    db = SessionLocal()

    payroll = Payroll(

        employee_name=data["employee_name"],
        department=data["department"],
        salary=data["salary"],
        bonus=data["bonus"],
        deductions=data["deductions"]

    )

    db.add(payroll)

    db.commit()

    db.close()

    return {

        "success": True,
        "message":
        "Payroll Added Successfully"

    }