describe("renders the home page", () => {
    it("renders correctly", () => {
      cy.visit("/")
      cy.get(".App").should("exist")
    });
    it("does something", () => {
      cy.visit("/")
      cy.findAllByText("5 Day Forecast").should("exist");
      cy.findAllByText("5 Day Forecast").click();
      cy.url().should("include", "/fiveDayForecast")
    })
    it('api calls correctly', () => {
      cy.request('https://api.openweathermap.org/data/2.5/weather?lat=10&lon=14&units=imperial&appid=47b7cf20f1c288e543207418319d1fb7')
      .then((response) => {
        expect(response.body).to.have.property('weather')
        expect(response.body).to.have.property('name')
      })  
    })
    it('forecast api calls correctly', () => {
      cy.request('https://api.openweathermap.org/data/2.5/forecast?lat=10&lon=14&units=imperial&appid=47b7cf20f1c288e543207418319d1fb7')
      .then((response) => {
        expect(response.body).to.have.property('city')
        expect(response.body).to.have.property('list')
      })  
    })
  });
  