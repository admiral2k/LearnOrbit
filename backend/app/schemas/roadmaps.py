from app.domain.roadmaps import RoadmapLevel
from pydantic import BaseModel


class RoadmapCreate(BaseModel):
    topic: str
    level: RoadmapLevel


class RoadmapRead(BaseModel):
    id: str
    topic: str
    level: RoadmapLevel
