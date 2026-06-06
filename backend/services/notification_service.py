from db import SessionLocal
from models import Notification


def get_notifications():

    db = SessionLocal()

    notifications = db.query(
        Notification
    ).all()

    result = []

    for item in notifications:

        result.append({

            "id": item.id,
            "message": item.message,
            "status": item.status

        })

    db.close()

    return result


def add_notification(data):

    db = SessionLocal()

    notification = Notification(

        message=data["message"],
        status=data["status"]

    )

    db.add(notification)

    db.commit()

    db.close()

    return {

        "success": True,
        "message":
        "Notification Added Successfully"

    }