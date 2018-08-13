import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DrService } from './doctor';

function addKeywordHTML(keywordInfo){
  if (keywordInfo.meta.count === 0) {
    $('#keywordSearchError').show();
    $('#keywordSearchError').append(`<p>Sorry, no doctors met your search criteria. Please <a href="index.html">try your search again</a>.</p>`);
  } else {
    for (var i = 0; i < keywordInfo.data.length; i++) {
      $('#keywordSearchResponse').append(`<div class="card" style="width: 300px; height: 360px;">
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

function addDoctorHTML(doctorInfo){
  if (doctorInfo.meta.count === 0) {
    $('#doctorSearchResponse').append(`<p>Sorry, no doctors met your search criteria. Please <a href="index.html">try your search again</a>.</p>`);
  } else {
    for (var i = 0; i < doctorInfo.data.length; i++) {
      $('#doctorSearchResponse').append(`<div class="card" style="width: 300px; height: 360px;">
        <div class="card-body">
          <h5 class="card-title">${doctorInfo.data[i].profile.first_name}  ${doctorInfo.data[i].profile.last_name}</h5>
          <p class="card-text">Accepts new patients: ${doctorInfo.data[i].practices[0].accepts_new_patients}<br>
            Address: ${doctorInfo.data[i].practices[0].visit_address.street}<br>${doctorInfo.data[i].practices[0].visit_address.city} ${doctorInfo.data[i].practices[0].visit_address.state} ${doctorInfo.data[i].practices[0].visit_address.zip}<br>
          Phone: ${doctorInfo.data[i].practices[0].phones[0].number}<br>
          <a href="${doctorInfo.data[i].practices[0].website}">Website</a> <br>
          <img src="${doctorInfo.data[i].profile.image_url}"></p>
        </div>
      </div>`);
      $('#doctorSearchResponse').show();
      $(".newsearch").show();
    }
  }
}


$(document).ready(function(){
  $('#keywordSearchError').hide();
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

  $("form#searchByName").submit(function(event) {
    event.preventDefault();

    let inputName = $("#doctorName").val();
    let drService = new DrService;
    let promise = drService.getDrByName(inputName, addDoctorHTML);

    promise.then(function(response) {
      let doctorInfo = JSON.parse(response);
      addDoctorHTML(doctorInfo);
    });

    $(".queryForms").hide();

  });

});
