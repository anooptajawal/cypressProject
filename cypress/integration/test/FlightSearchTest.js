/// <reference types="Cypress"/>
import FlightListingPO from "../pageObjects/FlightListingPO";

describe("Flight Search", function () {
  it("Flight Search with Direct Stop and Saudia Airlines", function () {
    const flightListingPO = new FlightListingPO();
    cy.visit(
      "https://next-staging-ae.almosafer.com/en/flights/DXB-JED/2022-05-22/2022-05-25/Economy/1Adult"
    );
    flightListingPO.checkDirectFlights();
    flightListingPO.showAllFilters();
    flightListingPO.checkSaudiaFlightsFilter();
    flightListingPO.selectFirstFlight();
  });
});
