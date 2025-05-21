import React from "react";
import { Table, Row, Col } from "reactstrap";

const PoolMatches = ({ matches }) => {
  return (
    <div className="matches">
      <h4 className="mb-4">Pool Matches</h4>
      <Row>
        {matches.map((match, idx) => (
          <Col sm="12" md="6" key={idx}>
            <div className="match mb-4 p-3 border rounded">
              <h5 className="mb-3">
                {match.team1} vs {match.team2}
              </h5>
              <Table bordered size="sm">
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>Set 1</th>
                    <th>Set 2</th>
                    <th>Set 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{match.team1}</td>
                    <td>{match.sets?.[0]?.[0] ?? "-"}</td>
                    <td>{match.sets?.[1]?.[0] ?? "-"}</td>
                    <td>{match.sets?.[2]?.[0] ?? "-"}</td>
                  </tr>
                  <tr>
                    <td>{match.team2}</td>
                    <td>{match.sets?.[0]?.[1] ?? "-"}</td>
                    <td>{match.sets?.[1]?.[1] ?? "-"}</td>
                    <td>{match.sets?.[2]?.[1] ?? "-"}</td>
                  </tr>
                </tbody>
              </Table>
              <p className="text-muted mb-0">
                Winner: <strong>{match.winner ?? "TBD"}</strong>
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PoolMatches;
