from pydantic import BaseModel

from app.domain.roadmaps import RoadmapLevel



class RoadmapCreate(BaseModel):
    topic: str
    level: RoadmapLevel


class RoadmapRead(BaseModel):
    id: str
    topic: str
    level: RoadmapLevel
