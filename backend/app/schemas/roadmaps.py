from pydantic import BaseModel
from typing import Literal


class RoadmapCreate(BaseModel):
    topic: str
    level: Literal["beginner", "junior", "middle"]

class RoadmapRead(BaseModel):
    id: str
    topic: str
    level: Literal["beginner", "junior", "middle"]