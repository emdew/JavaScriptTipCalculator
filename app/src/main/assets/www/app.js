// decrease tip
function minusTip() {
  var value = parseInt(document.getElementById('tip').value); // get current value of 'tip'
  if (value == 0){ // if it's already 0, exit
    return;
  }
  value = value - 5; // minus 5 from tip percentage
  document.getElementById('tip').value = value; // replace with new value
  calculateTotals(); // start to calculate for real time update
}

// increase tip
function plusTip() {
  var value = parseInt(document.getElementById('tip').value);
  value = value + 5;
  document.getElementById('tip').value = value;
  calculateTotals();
}

// decrease number of people
function minusPeople() {
  var value = parseInt(document.getElementById('people').value);
  if (value == 1){
      return;
  }
  value--;
  document.getElementById('people').value = value;
  calculateTotals();
}

// increase number of people
function plusPeople() {
  var value = parseInt(document.getElementById('people').value);
  value++;
  document.getElementById('people').value = value;
  calculateTotals();
}

// calculate tip per person, total per person, and grand total
function calculateTotals(){
    var bill = parseFloat(document.getElementById('bill').value); // get current value of bill input
    var tipAmount = parseInt(document.getElementById('tip').value) / 100; // get tip number and divide by 100 to get percent value (20 --> .2)
    var numOfPeople = parseInt(document.getElementById('people').value); // get current # of people value

    // bill times tip percent value divided by # of people (set to round to 2 decimal places)
    // and display tip total per person in html <p>
    var tipTotalPerPerson = ((bill * tipAmount) / numOfPeople).toFixed(2);
    document.getElementById('tipTotalPerPerson').innerHTML = '$' + tipTotalPerPerson;

    // bill times tip percent value = tip --> plus bill = total --> divided by # of people = total per person
    // display to html <p>
    var tip = bill * tipAmount;
    var totalPlusTip = bill + tip;
    var totalPerPerson = (totalPlusTip / numOfPeople).toFixed(2);
    document.getElementById('totalPerPerson').innerHTML = '$' + totalPerPerson;

    // display total plus tip from above for Full Amount in html <p>
    document.getElementById('total').innerHTML = '$' + totalPlusTip.toFixed(2);
}