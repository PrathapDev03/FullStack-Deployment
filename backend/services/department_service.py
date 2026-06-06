from db import SessionLocal
from models import Department


def get_all_departments():

    db = SessionLocal()

    departments = db.query(
        Department
    ).all()

    result = []

    for dept in departments:

        result.append({

            "id": dept.id,
            "department_name": dept.department_name,
            "manager": dept.manager,
            "location": dept.location

        })

    db.close()

    return result


def add_department(data):

    db = SessionLocal()

    department = Department(

        department_name=data["department_name"],
        manager=data["manager"],
        location=data["location"]

    )

    db.add(department)

    db.commit()

    db.close()

    return {

        "success": True,
        "message":
        "Department Added Successfully"

    }