window.onload = function(){
  checkweight();
}
function checkweight(){
  document.getElementById("lbsInput").addEventListener('input',(e)=>{
      let lbs = e.target.value;
      // console.log(pounds);
      document.getElementById('gop').innerHTML = lbs/0.0010000; // pound to gram formula

      document.getElementById('pounds').innerHTML = lbs * 2.2046;

      document.getElementById('oop').innerHTML = lbs*35.274;

  });

}

let weightConvert=(e)=>{
  e.preventDefault();
  const perc = document.getElementById('perc').value;
  const amt = document.getElementById('amt').value;
  const newSalary = document.getElementById('new').value;
  const oldSalary = document.getElementById('old').value;


  var output = (perc * amt)/100;
  document.getElementById('result').value = output;
  console.log(output);


  //percentage increase = [(new number - old number) ÷ old number] x 100%
  var output2 = [(newSalary - oldSalary)/oldSalary] * 100;

  document.getElementById('result2').value = `${output2}%`;
  console.log(output2);
  //document.getElementById('result').innerHTML = `${output}`;
  
}
