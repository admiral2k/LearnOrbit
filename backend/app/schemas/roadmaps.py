from uuid import UUID
from pydantic import BaseModel

from app.domain.roadmaps import RoadmapLevel


class RoadmapCreate(BaseModel):
    topic: str
    level: RoadmapLevel


class RoadmapRead(BaseModel):
    id: UUID
    topic: str
    level: RoadmapLevel
