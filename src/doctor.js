
export function apiCallKeyword(inputKeyword, addKeywordToPage) {
  let promise = new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${inputKeyword}&location=45.520712, -122.677375,20&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {
    let keywordInfo = JSON.parse(response);
    addKeywordToPage(keywordInfo);

  });
}
