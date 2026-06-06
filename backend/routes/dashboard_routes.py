from flask import Blueprint

from services.dashboard_service import (
    get_dashboard_metrics
)

from jwt_middleware import (
    token_required
)

dashboard_bp = Blueprint(
    "dashboard_bp",
    __name__
)


@dashboard_bp.route(
    "/dashboard",
    methods=["GET"]
)
@token_required
def dashboard():

    return get_dashboard_metrics()