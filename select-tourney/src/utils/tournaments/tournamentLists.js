import { TOURNAMENTS } from '../../app/shared/TOURNAMENTS';

// Select all tournaments
export const selectAllTournaments = () => {
    return TOURNAMENTS;
};

// Select upcoming tournaments (future tournaments)
export const selectUpcomingTournaments = () => {
    return TOURNAMENTS.filter(tournament => new Date(tournament.date) > new Date());
};

// Select past tournaments
export const selectPastTournaments = () => {
    return TOURNAMENTS.filter(tournament => new Date(tournament.date) < new Date());
};

// Select current tournaments (if applicable)
export const selectCurrentTournaments = () => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    return TOURNAMENTS.filter(tournament => tournament.date === today);
};

// Select featured tournaments
export const selectFeaturedTournaments = () => {
    return TOURNAMENTS.filter(tournament => tournament.is_featured === true);
};
