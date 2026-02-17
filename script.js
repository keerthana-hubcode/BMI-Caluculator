function calculateBMI() {
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;

  if (height === '' || weight === '') {
    alert('Please enter both height and weight!');
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  document.getElementById('bmi-result').innerText = `Your BMI is ${bmi}`;

  let category = '';
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi >= 18.5 && bmi <= 24.9) category = 'Normal weight';
  else if (bmi >= 25 && bmi <= 29.9) category = 'Overweight';
  else category = 'Obese';

  document.getElementById('bmi-category').innerText = `Category: ${category}`;
}
