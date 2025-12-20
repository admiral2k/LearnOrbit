from dataclasses import asdict
from fastapi import APIRouter, HTTPException, status

from app.domain.errors import RoadmapNotFound
from app.schemas.roadmaps import RoadmapCreate, RoadmapRead
from app.services.roadmap_service import RoadmapService

router = APIRouter(prefix="/roadmaps", tags=["roadmaps"])


@router.post(
    "/",
    response_model=RoadmapRead,
    status_code=status.HTTP_201_CREATED,
)
def create_roadmap(data: RoadmapCreate):
    roadmap = RoadmapService.create_roadmap(data.topic, data.level)
    return RoadmapRead(**asdict(roadmap))


@router.get("/{roadmap_id}", response_model=RoadmapRead)
def get_roadmap(roadmap_id: str) -> RoadmapRead:
    try:
        roadmap = RoadmapService.get_roadmap(roadmap_id)
        return RoadmapRead(**asdict(roadmap))

    except RoadmapNotFound as exc:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(exc),
        ) from exc
