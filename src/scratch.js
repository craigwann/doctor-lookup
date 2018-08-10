45.520712, -122.677375

https://
api.betterdoctor.com/2016-03-01/doctors?location=45.520712, -122.677375,100&skip=2&limit=10&user_key=28eb1a4139c842cda8fb4f3a4039af4c

https://api.betterdoctor.com/2016-03-01/doctors?query=${inputKeyword}&location=45.520712, -122.677375,1002&skip=0&limit=10&user_key=

let url = `https://www.rijksmuseum.nl/api/en/collection?q=${input}&key=${process.env.API_KEY}&format=json&imgonly=true`;

export class doctorApi{
  getDrByInput(input){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.520712, -122.677375,100&skip=2&limit=10&user_key=28eb1a4139c842cda8fb4f3a4039af4c`;
      request.onload = function() {
        if (this.status === 200) {
         resolve(request.response);
       } else {
         reject(Error(request.statusText));
       }
      }
      request.open("GET", url, true);
      request.send();
    })
  }
}
