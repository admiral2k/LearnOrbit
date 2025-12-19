from fastapi import APIRouter, status

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
    return RoadmapRead(**roadmap.__dict__)
