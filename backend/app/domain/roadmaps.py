from dataclasses import dataclass
from enum import Enum
from uuid import UUID


class RoadmapLevel(str, Enum):
    BEGINNER = "beginner"
    JUNIOR = "junior"
    MIDDLE = "middle"
    SENIOR = "senior"


@dataclass(frozen=True)
class Roadmap:
    id: UUID
    topic: str
    level: RoadmapLevel
