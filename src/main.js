import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DrService } from './doctor';

function addKeywordHTML(keywordInfo){
  if (keywordInfo.meta.count === 0) {
    $('#keywordSearchResponse').append(`<p>Sorry, no doctors met your search criteria. Please <a href="index.html">try your search again</a>.</p>`);
  } else {
    for (var i = 0; i < keywordInfo.data.length; i++) {
      $('#keywordSearchResponse').append(`<div class="card">
        <div class="card-body">
          <h5 class="card-title">${keywordInfo.data[i].profile.first_name}  ${keywordInfo.data[i].profile.last_name}</h5>
          <p class="card-text">Accepts new patients: ${keywordInfo.data[i].practices[0].accepts_new_patients}<br>
            Address: ${keywordInfo.data[i].practices[0].visit_address.street}<br>${keywordInfo.data[i].practices[0].visit_address.city} ${keywordInfo.data[i].practices[0].visit_address.state} ${keywordInfo.data[i].practices[0].visit_address.zip}<br>
          Phone: ${keywordInfo.data[i].practices[0].phones[0].number}<br>
          <a href="${keywordInfo.data[i].practices[0].website}">Website</a> <br>
          <img src="${keywordInfo.data[i].profile.image_url}"></p>
        </div>
      </div>`);
      $('#keywordSearchResponse').show();
      $(".newsearch").show();
    }
  }
}



$(document).ready(function(){

  $(".newsearch").hide();

  $("#searchByKeyword").submit(function(event) {
    event.preventDefault();

    let inputKeyword = $("#keyword").val();
    let drService = new DrService;
    let promise = drService.getDrByKeyword(inputKeyword, addKeywordHTML);

    promise.then(function(response) {
      let keywordInfo = JSON.parse(response);
      addKeywordHTML(keywordInfo);
    });


    $(".queryForms").hide();

  });
});
