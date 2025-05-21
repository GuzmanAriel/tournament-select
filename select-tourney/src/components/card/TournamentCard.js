import {useState, useEffect} from 'react';
import {
    Col,
    Card,
  } from 'reactstrap';
  import { Link } from 'react-router-dom';
  import {useSpring, animated} from 'react-spring';
  import CurrentTournamentCardBody from './CurrentTournamentCardBody';
  import UpcomingTournamentCardBody from './UpcomingTournamentCardBody';
  import PastTournamentCardBody from './PastTournamentCardBody';

const TournamentCard = ({ item, tournamentDate }) => {
    const {id} = item;
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (
        <Col sm="12" md="6">
            <animated.div style={animatedStyle}>
                <Link to={`/tournament/${id}`} className="card-link">
                    <Card className="bg-transparent mb-5">
                    {tournamentDate === 'current' && <CurrentTournamentCardBody item={item} />}
                    {tournamentDate === 'Upcoming' && <UpcomingTournamentCardBody item={item} />}
                    {tournamentDate === 'past' && <PastTournamentCardBody item={item} />}
                    </Card>
                </Link>
            </animated.div>
        </Col>

    )
        
    
}

export default TournamentCard;