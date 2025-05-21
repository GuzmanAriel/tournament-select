import {
    CardBody,
    CardTitle,
    CardText,
  } from 'reactstrap';
  import { Link } from 'react-router-dom';

const UpcomingTournamentCardBody = ({ item}) => {
    const { id, name, date_utc, start_time, tournament_type, playoff_elimination_type, location, total_teams} = item;
   return (
    <>
        <CardBody>
            <img className="w-100 card-image" src="https://picsum.photos/400/200"/>
            <div className="border-b-1 border-white justify-content-between mb-4 card-bottom">
                <CardTitle className="fw-bold mb-3 card-title">{name}</CardTitle>
                <div className="d-flex align-items-end justify-content-between mt-3 mb-1">
                    <div className="d-flex align-items-end">
                        <span className="calendar-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z"/></svg>
                        </span>
                        <span className="font-weight-light card-date-time">{date_utc} | {start_time}</span>
                    </div>
                    <div className="d-flex align-items-end">
                        <span className="location-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                        </span>
                        <span className="location-text">{location}</span>
                    </div>
                </div>
                    <div className="d-flex align-items-end justify-content-between mb-3">
                    <div className="d-flex align-items-end">
                        <span className="team-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z"/>
                            </svg>
                        </span>
                        <span>{tournament_type}</span>
                    </div>
                    <div className="d-flex align-items-end">
                        <span className="elimination-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                            </svg>
                        </span>
                        <span>
                         {playoff_elimination_type}
                        </span>
                        
                    </div>
                </div>
                    <CardText className="d-flex justify-content-between align-items-center">
                        <div className="card-current-data mt-2">Total Teams: {total_teams ? total_teams : " TBD"}</div>
                        <Link to={`${id}`} className="card-view-details">
                            <span>View Details </span>
                            <svg width="11" height="14" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.24 8.03L4.76 4.5L1.24 0.970001" stroke="#FAD703" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </Link>
                </CardText>
            </div>
            
            
        </CardBody>
    </>
   ) 
}

export default UpcomingTournamentCardBody;