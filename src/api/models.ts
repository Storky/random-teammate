export interface iOccasion {
    id: string;
    title: string;
    date: Date;
    teamId: string;
    starringMateId: string;
}

export interface iMate {
    id: string;
    starringOccasionIds: Array<string> | [];
    excludedOccasionIds: Array<string> | [];
    memoizedSummaryShieldDays: number | null;
}

export interface iTeam {
    id: string;
    occasions: [iOccasion];
    mates: Array<iMate>;
}
