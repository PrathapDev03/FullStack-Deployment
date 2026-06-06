from db import SessionLocal
from models import Employee


def get_all_employees():

    db = SessionLocal()

    employees = db.query(
        Employee
    ).all()

    result = []

    for emp in employees:

        result.append({

            "id": emp.id,
            "name": emp.name,
            "email": emp.email,
            "department": emp.department,
            "designation": emp.designation,
            "salary": emp.salary

        })

    db.close()

    return result


def get_employee(employee_id):

    db = SessionLocal()

    employee = db.query(
        Employee
    ).filter(
        Employee.id == employee_id
    ).first()

    db.close()

    if not employee:

        return {}

    return {

        "id": employee.id,
        "name": employee.name,
        "email": employee.email,
        "department": employee.department,
        "designation": employee.designation,
        "salary": employee.salary

    }


def add_employee(data):

    db = SessionLocal()

    employee = Employee(

        name=data["name"],
        email=data["email"],
        department=data["department"],
        designation=data["designation"],
        salary=data["salary"]

    )

    db.add(employee)

    db.commit()

    db.close()

    return {

        "message":
        "Employee Added Successfully"

    }


def update_employee(
    employee_id,
    data
):

    db = SessionLocal()

    employee = db.query(
        Employee
    ).filter(
        Employee.id == employee_id
    ).first()

    if employee:

        employee.name = data["name"]

        employee.email = data["email"]

        employee.department = data["department"]

        employee.designation = data["designation"]

        employee.salary = data["salary"]

        db.commit()

    db.close()

    return {

        "message":
        "Employee Updated Successfully"

    }


def delete_employee(
    employee_id
):

    db = SessionLocal()

    employee = db.query(
        Employee
    ).filter(
        Employee.id == employee_id
    ).first()

    if employee:

        db.delete(employee)

        db.commit()

    db.close()

    return {

        "message":
        "Employee Deleted Successfully"

    }