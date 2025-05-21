import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
  } from 'reactstrap';
  import { useState } from 'react';
import TeamList from '../teamList/TeamList';
import Pools from '../pools/Pools';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectPoolsByTournamentId,
  selectTeamsByTournamentId
} from '../../features/tournaments/tournamentsSlice';


  const DetailTabs = (props) => { 
    const {id, totalTeams, total_pools, eliminationType, brackets} = props;
    const pools = useSelector(selectPoolsByTournamentId(id));
    const teams = useSelector(selectTeamsByTournamentId(id));
    const [activeTab, setActiveTab] = useState("1"); 
    const navigate = useNavigate();

      // Function to toggle the active tab
      const toggleTab = (tab) => {
        if (activeTab !== tab) {
          setActiveTab(tab);
        }
      };

    return (
        <>
         <Nav tabs className="border-0">
          <NavItem>
            <NavLink
              className={`${activeTab === "1" ? "active" : ""} `}
              onClick={() => toggleTab("1")}
            >
              Teams
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "2" ? "active" : ""}
              onClick={() => toggleTab("2")}
            >
              Pools
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "3" ? "active" : ""}
              onClick={() => toggleTab("3")}
            >
              Playoffs
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab} className="mt-5">
            <TabPane tabId="1">
                <Row>
                    <TeamList teams={teams} totalTeams={totalTeams}/>
                
                </Row>
          </TabPane>
          <TabPane tabId="2">
                <Row>
                    <Pools poolsTotal={total_pools} pools={pools} teams={teams}/>   
                </Row>
          </TabPane>
          <TabPane tabId="3">
                <Row>
                  {eliminationType === "Single Elimination" ? (
                    <div>
                      <p>This tournament uses Single Elimination.</p>
                      <button
                        className="btn btn-primary"
                        onClick={() => navigate(`/tournaments/${id}/single-elimination`)}
                      >
                        View Bracket
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p>This tournament uses Double Elimination.</p>
                      <button
                        className="btn btn-primary"
                        onClick={() => navigate(`/tournaments/${id}/double-elimination`)}
                      >
                        View Bracket
                      </button>
                    </div>
                  )}
                </Row>
          </TabPane>
        </TabContent>

        
        </>
    )
       
  }

  export default DetailTabs;