from uuid import uuid4

from app.domain.roadmaps import Roadmap, RoadmapLevel


class RoadmapService:
    @staticmethod
    def create_roadmap(topic: str, level: RoadmapLevel) -> Roadmap:
        roadmap_id = str(uuid4())
        return Roadmap(
            id=roadmap_id,
            topic=topic,
            level=level,
        )
