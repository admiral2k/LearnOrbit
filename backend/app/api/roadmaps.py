from fastapi import APIRouter, status
from uuid import uuid4

from app.schemas.roadmaps import RoadmapCreate, RoadmapRead

router = APIRouter(prefix="/roadmaps")


@router.post(
    "/",
    response_model=RoadmapRead,
    status_code=status.HTTP_201_CREATED,
)
def create_roadmap(data: RoadmapCreate):
    roadmap_id = str(uuid4())

    return RoadmapRead(
        id=roadmap_id,
        topic=data.topic,
        level=data.level,
    )
