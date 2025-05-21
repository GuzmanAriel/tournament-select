export const validateCreateTournamentForm = (values) => {
    const errors = {};
    const today = new Date();
    console.log('%csrc/utils/tournaments/validateCreateTournamentForm.js:4 values', 'color: #007acc;', values);
    // Name Validation
    if (!values.name) {
        errors.name = "Tournament name is required.";
    } else if (values.name.length < 3) {
        errors.name = "Tournament name must be at least 3 characters.";
    } else if (values.name.length > 30) {
        errors.name = "Tournament name must be less than 30 characters.";
    }

    // Date Validation
    if (!values.date) {
        errors.date = "Date is required.";
    } else if (new Date(values.date) <= today) {
        errors.date = "Date must be in the future.";
    }

    // Location Validation
    if (!values.location) {
        errors.location = "Location is required.";
    }

    // Tournament Type Validation
    if (!values.tournamentType) {
        errors.tournamentType = "Tournament type is required.";
    }

    // Playoff Type Validation
    if (!values.playoffType) {
        errors.playoffType = "Playoff type is required.";
    }

    if (!values.totalTeams) {
        errors.totalTeams = "Total Teams is required.";
    } else if (isNaN(values.totalTeams)) {
        errors.totalTeams = "Total Teams must be a number.";
    }

    if (!values.poolNumber) {
        errors.poolNumber = "Pool number is required.";
    } else if (isNaN(values.poolNumber)) {
        errors.poolNumber = "Pool number must be a number.";
    }

    // Playoff Bracket Number Validation
    if (!values.playoffBracketNumber) {
        errors.playoffBracketNumber = "Playoff bracket number is required.";
    } else if (isNaN(values.playoffBracketNumber)) {
        errors.playoffBracketNumber = "Playoff bracket must be a number.";
    }

    // Time Validation (Ensure a time is selected)
    if (!values.time) {
        errors.time = "Start time is required.";
    }

    // Prizes Validation (Only required if prizes === true)
    if (values.prizes) {
        if (!values.firstPlacePrize) {
            errors.firstPlacePrize = "First place prize is required if prizes are enabled.";
        }
    }

    return errors;
};
