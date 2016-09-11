
function get_percent(num1, num2) {
  if(num1 == "" || num2 == "") {
    return ""
  }
  var result = (num1/num2)*100;
  var result_rounded = result.toFixed(1) + "%";
  return result_rounded;
}

function check_nums(num1, num2, num3, num4, num5, num6, num7, num8) {
  if(isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5) || isNaN(num6) || isNaN(num7) || isNaN(num8)) {
    return false;
  }
  return true;
}


function mean() {
  var a1grade1 = document.getElementById("a1num1").value;
  var a1grade2 = document.getElementById("a1num2").value;

  var a2grade1 = document.getElementById("a2num1").value;
  var a2grade2 = document.getElementById("a2num2").value;

  var a3grade1 = document.getElementById("a3num1").value;
  var a3grade2 = document.getElementById("a3num2").value;

  var a4grade1 = document.getElementById("a4num1").value;
  var a4grade2 = document.getElementById("a4num2").value;

  var are_nums = check_nums(a1grade1, a1grade2, a2grade1, a2grade2, a3grade1, a3grade2, a4grade1, a4grade2);
  if(!(are_nums)) {
    alert("Oops! One or more of your inputs is not a number. Please only provide numeric values.");
    return;
  }

  document.gradeCalc.a1percent.value = get_percent(a1grade1, a1grade2);
  document.gradeCalc.a2percent.value = get_percent(a2grade1, a2grade2);
  document.gradeCalc.a3percent.value = get_percent(a3grade1, a3grade2);
  document.gradeCalc.a4percent.value = get_percent(a4grade1, a4grade2);

  var sum = 0;
  var total = 0;

  if((a1grade1 != "") && (a1grade2 != "")) {
    sum = sum + (a1grade1/a1grade2);
    total = total + 1;
  }

  if((a2grade1 != "") && (a2grade2 != "")) {
    sum = sum + (a2grade1/a2grade2);
    total = total + 1;
  }

  if((a3grade1 != "") && (a3grade2 != "")) {
    sum = sum + (a3grade1/a3grade2);
    total = total + 1;
  }

  if((a4grade1 != "") && (a4grade2 != "")) {
    sum = sum + (a4grade1/a4grade2);
    total = total + 1;
  }

  var mean = sum/total;
  var mean_per = mean*100;
  var mean_rounded = mean_per.toFixed(1);

  if(isNaN(mean)) {
    document.gradeCalc.totalpercent.value = "";
  }
  else {
    document.gradeCalc.totalpercent.value = mean.toFixed(3) + " " + "=" + " " + mean_rounded + "%";
  }
}

function average() {
  var a1grade1 = document.getElementById("a1num1").value;
  var a1grade2 = document.getElementById("a1num2").value;

  var a2grade1 = document.getElementById("a2num1").value;
  var a2grade2 = document.getElementById("a2num2").value;

  var a3grade1 = document.getElementById("a3num1").value;
  var a3grade2 = document.getElementById("a3num2").value;

  var a4grade1 = document.getElementById("a4num1").value;
  var a4grade2 = document.getElementById("a4num2").value;

  var are_nums = check_nums(a1grade1, a1grade2, a2grade1, a2grade2, a3grade1, a3grade2, a4grade1, a4grade2);
  if(!(are_nums)) {
    alert("Oops! One or more of your inputs is not a number. Please only provide numeric values.");
    return;
  }

  document.gradeCalc.a1percent.value = get_percent(a1grade1, a1grade2);
  document.gradeCalc.a2percent.value = get_percent(a2grade1, a2grade2);
  document.gradeCalc.a3percent.value = get_percent(a3grade1, a3grade2);
  document.gradeCalc.a4percent.value = get_percent(a4grade1, a4grade2);

  var sum_top = 0;
  var sum_bottom = 0;

  if((a1grade1 != "") && (a1grade2 != "")) {
    sum_top = parseFloat(sum_top) + parseFloat(a1grade1);
    sum_bottom = parseFloat(sum_bottom) + parseFloat(a1grade2);
  }

  if((a2grade1 != "") && (a2grade2 != "")) {
    sum_top = parseFloat(sum_top) + parseFloat(a2grade1);
    sum_bottom = parseFloat(sum_bottom) + parseFloat(a2grade2);
  }

  if((a3grade1 != "") && (a3grade2 != "")) {
    sum_top = parseFloat(sum_top) + parseFloat(a3grade1);
    sum_bottom = parseFloat(sum_bottom) + parseFloat(a3grade2);
  }

  if((a4grade1 != "") && (a4grade2 != "")) {
    sum_top = parseFloat(sum_top) + parseFloat(a4grade1);
    sum_bottom = parseFloat(sum_bottom) + parseFloat(a4grade2);
  }

  var average = sum_top/sum_bottom;
  var average_per = average*100;
  var average_rounded = average_per.toFixed(1);

  if(isNaN(average)) {
    document.gradeCalc.totalpercent.value = "";
  }
  else {
    document.gradeCalc.totalpercent.value = average.toFixed(3) + " " + "=" + " " + average_rounded + "%";
  }
}
function reset() {
  document.gradeCalc.a1num1.value = "";
  document.gradeCalc.a1num2.value = "";

  document.gradeCalc.a2num1.value = "";
  document.gradeCalc.a2num2.value = "";

  document.gradeCalc.a3num1.value = "";
  document.gradeCalc.a3num2.value = "";

  document.gradeCalc.a4num1.value = "";
  document.gradeCalc.a4num2.value = "";

  document.gradeCalc.a1percent.value = "";
  document.gradeCalc.a2percent.value = "";
  document.gradeCalc.a3percent.value = "";
  document.gradeCalc.a4percent.value = "";
}
