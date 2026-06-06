from functools import wraps
from flask import request

import jwt

from config import (
    SECRET_KEY,
    JWT_ALGORITHM
)


def token_required(f):

    @wraps(f)

    def decorated(*args, **kwargs):

        token = None

        auth_header = request.headers.get(
            "Authorization"
        )

        if auth_header:

            try:

                token = auth_header.split(
                    " "
                )[1]

            except:

                return {

                    "success": False,
                    "message":
                    "Invalid Token Format"

                }, 401

        if not token:

            return {

                "success": False,
                "message":
                "Token Missing"

            }, 401

        try:

            jwt.decode(

                token,

                SECRET_KEY,

                algorithms=[
                    JWT_ALGORITHM
                ]

            )

        except jwt.ExpiredSignatureError:

            return {

                "success": False,
                "message":
                "Token Expired"

            }, 401

        except jwt.InvalidTokenError:

            return {

                "success": False,
                "message":
                "Invalid Token"

            }, 401

        return f(
            *args,
            **kwargs
        )

    return decorated