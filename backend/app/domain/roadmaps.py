from dataclasses import dataclass
from enum import Enum


class RoadmapLevel(str, Enum):
    BEGINNER = "beginner"
    JUNIOR = "junior"
    MIDDLE = "middle"
    SENIOR = "senior"


@dataclass(frozen=True)
class Roadmap:
    id: str
    topic: str
    level: RoadmapLevel
