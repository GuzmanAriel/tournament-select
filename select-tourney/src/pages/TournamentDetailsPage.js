import {useSelector} from 'react-redux';
import { Container, Row, Col} from 'reactstrap';
import { useParams } from 'react-router-dom';
import {
    selectTournamentById,
    selectTeamsByTournamentId,
    selectPoolsByTournamentId,
    selectBracketsByTournamentId
  } from '../features/tournaments/tournamentsSlice';
import FirstPlaceIcon from '../assets/images/first-place.svg';
import SecondPlaceIcon from '../assets/images/second-place.svg';
import ThirdPlaceIcon from '../assets/images/third-place.svg';
import DetailTabs from '../components/tournamentDetails/DetailTabs';



const TounramentDetailsPage = () => {
    const { tournamentId } = useParams();
    const tournament = useSelector(selectTournamentById(tournamentId));
    const teams = useSelector(selectTeamsByTournamentId(tournamentId));
    const pools = useSelector(selectPoolsByTournamentId(tournamentId));
    const brackets = useSelector(selectBracketsByTournamentId(tournamentId));


    return (
    <Container className="mt-5 mb-5 ts-alignment">
      <div className="mt-5 tournament-details position-relative" style={{
        background: "url('https://picsum.photos/1000/400')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="full-overlay"></div>

        <div className="tournament-details__heading position-relative">
          <h1>{tournament?.name}</h1>
          <h2>{tournament?.date_utc} || {tournament?.start_time}</h2>
          {tournament?.prizes && (
            <div className="tournament-details__prizes">
              <div><img src={FirstPlaceIcon} alt="first place icon" /> {tournament.first_place_prize}</div>
              <div><img src={SecondPlaceIcon} alt="second place icon" /> {tournament.second_place_prize}</div>
              <div><img src={ThirdPlaceIcon} alt="third place icon" /> {tournament.third_place_prize}</div>
            </div>
          )}
        </div>
      </div>

      <div className="tournament-details__details">
        <Row>
          <Col sm="12" md="6" className="h4">
            <p><b>Tournament Type:</b> {tournament?.tournament_type}</p>
          </Col>
          <Col sm="12" md="6" className="h4">
            <p><b>Playoff Elimination:</b> {tournament?.playoff_elimination_type}</p>
          </Col>
          <Col sm="12" md="6" className="h4">
            <p><b>Location:</b> {tournament?.location}</p>
          </Col>
          <Col sm="12" md="6" className="h4">
            <p><b>Total Teams:</b> {tournament?.total_teams}</p>
          </Col>
          <Col sm="12" className="mt-5">
            <p className="h4 mb-2">Additional Notes:</p>
            <p>{tournament?.additional_notes}</p>
          </Col>
          <Col sm="12" className="mt-5">
            <DetailTabs
              id={tournament?.id}
              teams={teams}
              totalTeams={tournament?.total_teams}
              total_pools={tournament?.pool_number}
              pools={pools}
              eliminationType={tournament?.playoff_elimination_type}
              brackets={brackets}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default TounramentDetailsPage;