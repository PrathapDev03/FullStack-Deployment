from db import SessionLocal
from models import User

import bcrypt
import jwt
import datetime

from config import (
    SECRET_KEY,
    JWT_ALGORITHM
)


def register_user(data):

    db = SessionLocal()

    existing_user = db.query(
        User
    ).filter(
        User.email == data["email"]
    ).first()

    if existing_user:

        db.close()

        return {
            "success": False,
            "message": "Email already exists"
        }

    hashed_password = bcrypt.hashpw(
        data["password"].encode("utf-8"),
        bcrypt.gensalt()
    )

    user = User(

        name=data["name"],
        email=data["email"],
        password=hashed_password.decode()

    )

    db.add(user)

    db.commit()

    db.close()

    return {

        "success": True,
        "message": "Registration Successful"

    }


def login_user(data):

    db = SessionLocal()

    user = db.query(
        User
    ).filter(
        User.email == data["email"]
    ).first()

    db.close()

    if not user:

        return {

            "success": False,
            "message": "User Not Found"

        }

    password_valid = bcrypt.checkpw(

        data["password"].encode(
            "utf-8"
        ),

        user.password.encode(
            "utf-8"
        )

    )

    if not password_valid:

        return {

            "success": False,
            "message": "Invalid Password"

        }

    token = jwt.encode(

        {

            "user_id": user.id,
            "email": user.email,

            "exp":
            datetime.datetime.utcnow()
            + datetime.timedelta(hours=24)

        },

        SECRET_KEY,

        algorithm=JWT_ALGORITHM

    )

    return {

        "success": True,

        "token": token,

        "user": {

            "id": user.id,
            "name": user.name,
            "email": user.email

        }

    }