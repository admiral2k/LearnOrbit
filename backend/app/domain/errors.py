from uuid import UUID


class DomainError(Exception):
    """Base class for domain/business errors."""


class RoadmapNotFound(DomainError):
    def __init__(self, roadmap_id: UUID):
        self.roadmap_id = roadmap_id
        super().__init__(f"Roadmap not found: {roadmap_id}")
