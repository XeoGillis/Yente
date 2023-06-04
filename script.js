var mistakes = ['niet valsspelen, gewoon wachten', 'liefjeeeeeeeeee flink zijn', 'doe keer flink', 'geef het op', 'waarom speel je vals?', 'stop met gokken', 'wees braaf', 'wachten', 'ben je het nog niet beu?', 'nu is het genoeg', 'je website gaat kapot gaan', 'waarom geef je niet op?', 'ik weet dat het lastig is, maar je gaat moeten wachten', 'je gaat het toch nooit raden', 'ga je echt niet opgeven?', 'oké, jij je zin ... succes met gokken', "'k ga gewoon men eerste opmerking opnieuw tonen ..."];
var index = 0;

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
  } else alert(mistakes[(index++) % mistakes.length]);
}