from flask import Blueprint
from flask import request

from services.payroll_service import (
    get_all_payroll,
    add_payroll
)

from jwt_middleware import (
    token_required
)

payroll_bp = Blueprint(
    "payroll_bp",
    __name__
)


@payroll_bp.route(
    "/payroll",
    methods=["GET"]
)
@token_required
def payroll():

    return get_all_payroll()


@payroll_bp.route(
    "/payroll",
    methods=["POST"]
)
@token_required
def create_payroll():

    data = request.get_json()

    return add_payroll(data)