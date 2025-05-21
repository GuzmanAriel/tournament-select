import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
  } from 'reactstrap';
  import { useState } from 'react';
  import PoolTeamList from './PoolTeamList';
  import PoolMatches from './PoolMatches';

  
const Pools = ({ pools, teams }) => {
  const [activeTab, setActiveTab] = useState("0");

  const getTeamList = (pool) => {
    if (Array.isArray(pool.teams)) {
      return pool.teams;
    }

    // fallback: build from teamIds
    return pool.teamIds?.map((id) => teams.find((t) => t.id === id)).filter(Boolean);
  };

  return (
    <div>
      <Nav tabs className="border-0 pool-tabs">
        {pools?.map((pool, idx) => (
          <NavItem key={idx}>
            <NavLink
              className={activeTab === idx.toString() ? "active" : ""}
              onClick={() => setActiveTab(idx.toString())}
            >
              Pool {pool.pool_id}
            </NavLink>
          </NavItem>
        ))}
      </Nav>

      <TabContent activeTab={activeTab} className="mt-5">
        {pools?.map((pool, idx) => (
          <TabPane tabId={idx.toString()} key={idx}>
            <Row>
              {Array.isArray(pool.teams) ? (
                <PoolTeamList teams={pool.teams} />
              ) : (
                <p className="text-muted mt-3 ms-3">Standings data not available for this pool.</p>
              )}
              <div className="mt-5">
                <PoolMatches matches={pool.matches} />
              </div>
            </Row>

          </TabPane>
        ))}
      </TabContent>
    </div>
  );
};

  
  export default Pools;
  