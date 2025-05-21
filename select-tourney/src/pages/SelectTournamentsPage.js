import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import Slider from "../components/slider/Slider";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Row
} from 'reactstrap';
import TournamentCard from '../components/card/TournamentCard';
import {selectFeaturedTournaments, selectCurrentTournaments, selectPastTournaments, selectUpcomingTournaments} from '../features/tournaments/tournamentsSlice';

const SelectTournamentsPage = () => {
    const featuredTournaments = useSelector(selectFeaturedTournaments);
    const upcomingTournaments = useSelector(selectUpcomingTournaments);
    const currentTournaments = useSelector(selectCurrentTournaments);
    const pastTournaments = useSelector(selectPastTournaments);

    const [open, setOpen] = useState('1');

    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };

    return (
        <div className="ts-alignment ts-select-tournaments">
             <h1 className="mb-5 text-center">Austin Select Tournaments</h1>
             
            <Slider featuredTournaments={featuredTournaments}/>

            <div className="mt-5 mb-5">
                <Accordion open={open} toggle={toggle}>
                  <AccordionItem>
                    <AccordionHeader targetId="1">Upcoming</AccordionHeader>
                    <AccordionBody accordionId="1">
                      <Row>
                      {upcomingTournaments.length > 0 ? (
                              upcomingTournaments.map((item, idx) => (
                                  item && (
                                      <TournamentCard 
                                          item={item} 
                                          tournamentDate="Upcoming" 
                                          key={`upcoming-tournament${idx}`} 
                                      />
                                  )
                              ))
                          ) : (
                              <p style={{ textAlign: 'center', width: '100%' }}>No upcoming tournaments</p>
                          )}
                      </Row>
                    </AccordionBody>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionHeader targetId="2">Current</AccordionHeader>
                    <AccordionBody accordionId="2">
                      <Row>
                          {currentTournaments.length > 0 ? (
                              currentTournaments.map((item, idx) => (
                                  item && (
                                      <TournamentCard 
                                          item={item} 
                                          tournamentDate="current" 
                                          key={`current-tournament${idx}`} 
                                      />
                                  )
                              ))
                          ) : (
                              <p style={{ textAlign: 'center', width: '100%' }}>No current tournaments</p>
                          )}
                      </Row>
                    </AccordionBody>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionHeader targetId="3">Past</AccordionHeader>
                    <AccordionBody accordionId="3">
                      <Row>
                      {pastTournaments.length > 0 ? (
                              pastTournaments.map((item, idx) => (
                                  item && (
                                      <TournamentCard 
                                          item={item} 
                                          tournamentDate="past" 
                                          key={`past-tournament${idx}`} 
                                      />
                                  )
                              ))
                          ) : (
                              <p style={{ textAlign: 'center', width: '100%' }}>No past tournaments</p>
                          )}
                      </Row>
                    </AccordionBody>
                  </AccordionItem>
                </Accordion>
            </div>
        </div>
        
    )
}

export default SelectTournamentsPage;