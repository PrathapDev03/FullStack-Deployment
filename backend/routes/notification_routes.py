from flask import Blueprint
from flask import request

from services.notification_service import (
    get_notifications,
    add_notification
)

from jwt_middleware import (
    token_required
)

notification_bp = Blueprint(
    "notification_bp",
    __name__
)


@notification_bp.route(
    "/notifications",
    methods=["GET"]
)
@token_required
def notifications():

    return get_notifications()


@notification_bp.route(
    "/notifications",
    methods=["POST"]
)
@token_required
def create_notification():

    data = request.get_json()

    return add_notification(data)