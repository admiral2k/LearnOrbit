from app.api.exception_handler import register_exception_handlers
from app.api.health import router as health_router
from app.api.roadmaps import router as roadmaps_router
from app.core.settings import API_PREFIX
from dotenv import load_dotenv
from fastapi import FastAPI

# TODO: Delete in Production. DEV Only
load_dotenv()

app = FastAPI()

register_exception_handlers(app)

app.include_router(roadmaps_router, prefix=API_PREFIX)
app.include_router(health_router, prefix=API_PREFIX)
