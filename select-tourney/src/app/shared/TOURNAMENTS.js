const today = new Date().toISOString().split('T')[0]; 

export const TOURNAMENTS = [
  {
      id: 0,
      name: "Jason's Birthday Tournament",
      date_utc: "2025-05-17T00:00:00Z",
      start_time: "9:00am",
      location: "Zilker Park",
      tournament_type: "BYO4",
      playoff_elimination_type: "Single Elimination",
      playoff_bracket_number: 2,
      prizes: true,
      first_place_prize: "$1000 and gift card",
      second_place_prize: "$500 and gift card",
      third_place_prize: "$100",
      additional_notes: "We will be in the far side of Zilker park, parking is available in the lot across the park or accross the street"
    },
    {
      id: 1,
      name: "First Tournament",
      date_utc: "2025-04-20T00:00:00Z",
      start_time: "9:00am",
      location: "Auditorium Shores",
      tournament_type: "BYO3",
      playoff_elimination_type: "Single Elimination",
      playoff_bracket_number: 1,
      prizes: true,
      first_place_prize: "$1000 and gift card",
      second_place_prize: "$500 and gift card",
      third_place_prize: "$100",
      additional_notes: "We will be in the far side of Zilker park, parking is available in the lot across the park or accross the street"
    },
    {
      id: 2,
      name: "End of Year Tournament",
      date_utc: "2024-11-18T00:00:00Z",
      start_time: "9:00am",
      location: "Zilker Park",
      tournament_type: "BYO4",
      playoff_elimination_type: "Double Elimination",
      playoff_bracket_number: 1,
      prizes: true,
      first_place_prize: "$1000 and gift card",
      second_place_prize: "$500 and gift card",
      third_place_prize: "$100",
      additional_notes: "We will be in the far side of Zilker park, parking is available in the lot across the park or accross the street"
    },
    {
      id: 3,
      name: "Todays Tournament",
      date_utc: `${today}T00:00:00Z`,
      start_time: "9:00am",
      location: "Zilker Park",
      tournament_type: "BYO4",
      tournament_status: "Pool play",
      total_teams: 12,
      top_performer: "Team Titans",
      playoff_elimination_type: "Double Elimination",
      playoff_bracket_number: 1,
      prizes: true,
      first_place_prize: "$1000 and gift card",
      second_place_prize: "$500 and gift card",
      third_place_prize: "$100",
      additional_notes: "We will be in the far side of Zilker park, parking is available in the lot across the park or accross the street"
    }
];
