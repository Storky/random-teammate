import {iMate, iOccasion, iTeam} from './models';

export const mockOccasion: iOccasion = {
    id: '1',
    title: 'Occasion title',
    date: new Date(),
    teamId: 'team-1',
    starringMateId: 'mate-1',
};

export const mockMates: Array<iMate> = [
    {
        id: 'mate-1',
        starringOccasionIds: [],
        excludedOccasionIds: [],
        memoizedSummaryShieldDays: null,
    },
    {
        id: 'mate-2',
        starringOccasionIds: [],
        excludedOccasionIds: [],
        memoizedSummaryShieldDays: null,
    },
    {
        id: 'mate-3',
        starringOccasionIds: [],
        excludedOccasionIds: [],
        memoizedSummaryShieldDays: null,
    }
];

export const mocksTeam: iTeam = {
    id: 'team-1',
    occasions: [mockOccasion],
    mates: mockMates,
};


