from flask import Blueprint
from flask import request

from services.visitor_service import (
    get_all_visitors,
    add_visitor
)

from jwt_middleware import (
    token_required
)

visitor_bp = Blueprint(
    "visitor_bp",
    __name__
)

@visitor_bp.route(
    "/visitors",
    methods=["GET"]
)
@token_required
def visitors():

    return get_all_visitors()


@visitor_bp.route(
    "/visitors",
    methods=["POST"]
)
@token_required
def create_visitor():

    data = request.get_json()

    return add_visitor(data)