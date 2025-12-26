from fastapi import FastAPI, Request, status
from fastapi.responses import JSONResponse

from app.domain.errors import RoadmapNotFound


def register_exception_handlers(app: FastAPI):
    @app.exception_handler(RoadmapNotFound)
    async def roadmap_not_found_handler(request: Request, exc: RoadmapNotFound):
        return JSONResponse(
            status_code=status.HTTP_404_NOT_FOUND,
            content={"detail": str(exc)},
        )
