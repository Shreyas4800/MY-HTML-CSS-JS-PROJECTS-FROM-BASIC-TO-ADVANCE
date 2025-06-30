var arr = [
  {
    name: "Aarav",
    age: 25,
    city: "Mumbai",
    relationship: "Single",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    name: "Meera",
    age: 28,
    city: "Delhi",
    relationship: "Married",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Rohan",
    age: 22,
    city: "Pune",
    relationship: "In a relationship",
    image: "https://randomuser.me/api/portraits/men/43.jpg"
  },
  {
    name: "Sneha",
    age: 30,
    city: "Bangalore",
    relationship: "Single",
    image: "https://randomuser.me/api/portraits/women/23.jpg"
  },
  {
    name: "Vikram",
    age: 27,
    city: "Hyderabad",
    relationship: "Complicated",
    image: "https://randomuser.me/api/portraits/men/33.jpg"
  }
];

var sum = "";

arr.forEach(function(hee){
    sum += `    <div id="card"> 
        <img src="${hee.image}" alt="">
        <h1>${hee.name}</h1>
        <h3>${hee.age}</h3>
        <h3>${hee.city}</h3>
        <h4>Married:${hee.relationship}</h4>

    </div>`
})

var body = document.body

body.innerHTML = sum