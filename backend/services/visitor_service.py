from db import SessionLocal
from models import Visitor


def get_all_visitors():

    db = SessionLocal()

    visitors = db.query(
        Visitor
    ).all()

    result = []

    for visitor in visitors:

        result.append({

            "id": visitor.id,
            "name": visitor.name,
            "email": visitor.email,
            "phone": visitor.phone

        })

    db.close()

    return result


def add_visitor(data):

    db = SessionLocal()

    visitor = Visitor(

        name=data["name"],
        email=data["email"],
        phone=data["phone"]

    )

    db.add(visitor)

    db.commit()

    db.close()

    return {

        "message":
        "Visitor Added Successfully"

    }


def get_visitor(visitor_id):

    db = SessionLocal()

    visitor = db.query(
        Visitor
    ).filter(
        Visitor.id == visitor_id
    ).first()

    db.close()

    if not visitor:

        return {}

    return {

        "id": visitor.id,
        "name": visitor.name,
        "email": visitor.email,
        "phone": visitor.phone

    }


def delete_visitor(visitor_id):

    db = SessionLocal()

    visitor = db.query(
        Visitor
    ).filter(
        Visitor.id == visitor_id
    ).first()

    if visitor:

        db.delete(visitor)

        db.commit()

    db.close()

    return {

        "message":
        "Visitor Deleted Successfully"

    }