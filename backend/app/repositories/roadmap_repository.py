from uuid import UUID
from dataclasses import asdict

from psycopg2 import IntegrityError
from sqlalchemy import text
from app.domain.roadmaps import Roadmap
from app.core.db import engine


class RoadmapRepository:
    def create_roadmap(self, roadmap: Roadmap) -> Roadmap:
        stmt = text(
            """
INSERT INTO roadmaps (id, topic, level)
VALUES (:id, :topic, :level)
RETURNING id, topic, level
"""
        )
        try:
            with engine.begin() as conn:
                row = conn.execute(stmt, asdict(roadmap)).mappings().one()
        except IntegrityError:
            raise

        return Roadmap(id=row["id"], topic=row["topic"], level=row["level"])

    def get_roadmap_by_id(self, roadmap_id: UUID) -> Roadmap | None:

        stmt = text(
            """
SELECT id, topic, level
FROM roadmaps
WHERE id=:id;
"""
        )
        with engine.connect() as conn:
            row = conn.execute(stmt, {"id": roadmap_id}).mappings().one_or_none()

        if row is None:
            return None

        return Roadmap(id=row["id"], topic=row["topic"], level=row["level"])
