class FlightListingPO {
    getDirectFlightsFilter() {
        return cy.get('[data-testid="direct_flights_only_stops_filter_enabled"]');
    }

    checkDirectFlights(){
        return cy.get("#stop-0").check({ force: true });
    }

    showAllFilters() {
        cy.get('a[role=button]').contains('Show all').click();
    }

    checkSaudiaFlightsFilter(){
        return cy.get("#airline-SV").check({ force: true })
    }

    selectFirstFlight(){
        cy.get('[data-testid="Group0__SelectFlightButton"]').click({ force: true })
    }
}

//To make this class available to all other files
export default FlightListingPO;