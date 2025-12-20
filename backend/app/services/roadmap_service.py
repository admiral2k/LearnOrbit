from uuid import uuid4

from app.domain.errors import RoadmapNotFound
from app.domain.roadmaps import Roadmap, RoadmapLevel


class RoadmapService:
    # TODO: change to the DB
    _roadmaps: dict[str, Roadmap] = {}

    @staticmethod
    def create_roadmap(topic: str, level: RoadmapLevel) -> Roadmap:
        roadmap_id = str(uuid4())
        roadmap = Roadmap(
            id=roadmap_id,
            topic=topic,
            level=level,
        )
        RoadmapService._save_roadmap(roadmap)
        return roadmap

    @staticmethod
    def get_roadmap(roadmap_id: str) -> Roadmap:
        roadmap = RoadmapService._roadmaps.get(roadmap_id)
        if roadmap is None:
            raise RoadmapNotFound(roadmap_id)
        return roadmap

    # TODO: Change to the DB
    @staticmethod
    def _save_roadmap(roadmap: Roadmap) -> None:
        RoadmapService._roadmaps[roadmap.id] = roadmap
