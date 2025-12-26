from uuid import uuid4, UUID

from app.domain.errors import RoadmapNotFound
from app.domain.roadmaps import Roadmap, RoadmapLevel
from app.repositories.roadmap_repository import RoadmapRepository


class RoadmapService:
    _roadmaps: dict[UUID, Roadmap] = {}
    _repo = RoadmapRepository()

    @staticmethod
    def create_roadmap(topic: str, level: RoadmapLevel) -> Roadmap:
        roadmap_id = uuid4()
        roadmap = Roadmap(
            id=roadmap_id,
            topic=topic,
            level=level,
        )
        RoadmapService._repo.create_roadmap(roadmap)
        return roadmap

    @staticmethod
    def get_roadmap(roadmap_id: UUID) -> Roadmap:
        roadmap = RoadmapService._repo.get_roadmap_by_id(roadmap_id)
        if roadmap is None:
            raise RoadmapNotFound(roadmap_id)
        return roadmap
