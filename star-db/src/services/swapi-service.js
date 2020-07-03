export default class SwapiService {

    _basAdress = 'https://swapi.dev/api';
  
    async getResource(url) {
      const res = await fetch(`${this._basAdress}${url}`);
    
      if(!res.ok){
        throw new Error(`No such item ${url}`);
      }
  
      return res.json();
    }
  
    async getAllPeople() {
      
      const res = await this.getResource(`/people/`);
      
      return res.results;
    }
  
    getPerson(id) {
      
      return this.getResource(`/people/${id}/`);    
    }
  
    async getAllPlanets() {
      
      const res = await this.getResource(`/planets/`);
      
      return res.results;
    }
  
    getPlanet(id) {
      
      return this.getResource(`/planets/${id}/`);    
    }
  
    async getAllStarships() {
      
      const res = await this.getResource(`/starships/`);
      
      return res.results;
    }
  
    getStarship(id) {
      
      return this.getResource(`/starships/${id}/`);    
    }
  
  }
   