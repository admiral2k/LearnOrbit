export type RoadMapElementStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface RoadmapElement {
    id: string;
    title: string;
    text: string;
    status: RoadMapElementStatus;
}