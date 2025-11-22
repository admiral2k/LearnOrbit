export type RoadMapElementStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface RoadmapElement {
    id: string;
    title: string;
    text: string;
    status: RoadMapElementStatus;
}

export const StatusColorMap = {
    'OPEN': '#00cfff',
    'IN_PROGRESS': '#a066ff',
    'DONE': '#25d67e',
} 