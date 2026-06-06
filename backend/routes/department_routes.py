from flask import Blueprint
from flask import request

from services.department_service import (
    get_all_departments,
    add_department
)

from jwt_middleware import (
    token_required
)

department_bp = Blueprint(
    "department_bp",
    __name__
)


@department_bp.route(
    "/departments",
    methods=["GET"]
)
@token_required
def departments():

    return get_all_departments()


@department_bp.route(
    "/departments",
    methods=["POST"]
)
@token_required
def create_department():

    data = request.get_json()

    return add_department(data)