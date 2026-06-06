from flask import Blueprint
from flask import request

from dao import (
    get_all_employees,
    get_employee,
    add_employee,
    update_employee,
    delete_employee
)

from jwt_middleware import (
    token_required
)

employee_bp = Blueprint(
    "employee_bp",
    __name__
)


@employee_bp.route(
    "/employees",
    methods=["GET"]
)
@token_required
def employees():

    return get_all_employees()


@employee_bp.route(
    "/employees/<int:id>",
    methods=["GET"]
)
@token_required
def employee(id):

    return get_employee(id)


@employee_bp.route(
    "/employees",
    methods=["POST"]
)
@token_required
def create_employee():

    data = request.get_json()

    return add_employee(data)


@employee_bp.route(
    "/employees/<int:id>",
    methods=["PUT"]
)
@token_required
def edit_employee(id):

    data = request.get_json()

    return update_employee(
        id,
        data
    )


@employee_bp.route(
    "/employees/<int:id>",
    methods=["DELETE"]
)
@token_required
def remove_employee(id):

    return delete_employee(id)