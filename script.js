
const users = [];


function User(name, age, gender, email, goals, preferences) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.email = contact;
  this.goals = goals;
  this.preferences = preferences;
}


function registerUser() {
  
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const email = document.getElementById('email').value;
  const goals = document.getElementById('goals').value;
  const preferences = document.getElementById('preferences').value;

  
  const user = new User(name, age, gender, email, goals, preferences);

  
  users.push(user);

  
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('gender').value = '';
  document.getElementById('email').value = '';
  document.getElementById('goals').value = '';
  document.getElementById('preferences').value = '';

  
  alert('Registration successful!');
}

