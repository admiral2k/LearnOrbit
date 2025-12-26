from uuid import uuid4, UUID

from app.domain.errors import RoadmapNotFound
from app.domain.roadmaps import Roadmap, RoadmapLevel


class RoadmapService:
    # TODO: change to the DB
    _roadmaps: dict[UUID, Roadmap] = {}

    @staticmethod
    def create_roadmap(topic: str, level: RoadmapLevel) -> Roadmap:
        roadmap_id = uuid4()
        roadmap = Roadmap(
            id=roadmap_id,
            topic=topic,
            level=level,
        )
        RoadmapService._save_roadmap(roadmap)
        return roadmap

    @staticmethod
        roadmap = RoadmapService._roadmaps.get(roadmap_id)
    def get_roadmap(roadmap_id: UUID) -> Roadmap:
        if roadmap is None:
            raise RoadmapNotFound(roadmap_id)
        return roadmap

    # TODO: Change to the DB
    @staticmethod
    def _save_roadmap(roadmap: Roadmap) -> None:
        RoadmapService._roadmaps[roadmap.id] = roadmap
