from fastapi import FastAPI
from app.api.roadmaps import router as roadmaps_router

app = FastAPI()
app.include_router(roadmaps_router, prefix="/api/v0.0.1")


@app.get("/health")
def health():
    return {"status": "ok"}
