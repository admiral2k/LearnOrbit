from fastapi import FastAPI
from app.api.roadmaps import router as roadmaps_router
from app.api.health import router as health_router


app = FastAPI()
app.include_router(roadmaps_router, prefix="/api/v1")
app.include_router(health_router, prefix="/api/v1")

