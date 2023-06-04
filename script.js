function Valideer(id) {
  var answer;
  switch (id) {
    case '0':
      answer = '26-06-2023';
      break;
    case '1':
      answer = 'puki';
      break;
    case '2':
      answer = 'corona';
      break;
    case '3':
      answer = 'gouden carolus';
      break;
    case '4':
      answer = 'karel de grote';
      break;
  }
  if (document.getElementById(`question_${id}`).value.toLowerCase() === answer) {
    document.getElementById(`answer_${id}_question`).style.visibility = 'visible';
    var next = (parseInt(id) + 1).toString();
    document.getElementById(`question_${next}`).style.visibility = 'visible';
    document.getElementById(`question_${next}_question`).style.visibility = 'visible';
    document.getElementById(`button_${next}_question`).style.visibility = 'visible';
  } else alert("Niet valsspelen, gewoon afwachten tot 'k het antwoord geef");
}