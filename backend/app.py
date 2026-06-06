from flask import Flask
from flask_cors import CORS

from db import engine
from models import Base

from routes.employee_routes import employee_bp
from routes.visitor_routes import visitor_bp
from routes.dashboard_routes import dashboard_bp
from routes.auth_routes import auth_bp

from routes.department_routes import department_bp
from routes.payroll_routes import payroll_bp
from routes.notification_routes import notification_bp

app = Flask(__name__)

CORS(app)

Base.metadata.create_all(bind=engine)

app.register_blueprint(
    employee_bp,
    url_prefix="/api"
)

app.register_blueprint(
    visitor_bp,
    url_prefix="/api"
)

app.register_blueprint(
    dashboard_bp,
    url_prefix="/api"
)

app.register_blueprint(
    auth_bp,
    url_prefix="/api"
)

app.register_blueprint(
    department_bp,
    url_prefix="/api"
)

app.register_blueprint(
    payroll_bp,
    url_prefix="/api"
)

app.register_blueprint(
    notification_bp,
    url_prefix="/api"
)


@app.route("/")
def home():

    return {
        "message":
        "Employee Management Backend Running"
    }


if __name__ == "__main__":

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )