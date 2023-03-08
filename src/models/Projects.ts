import type { Program } from '@models/Program';

export type Projects = {
    title: String;
    programsCount: number;
    programs: Program[];
};
