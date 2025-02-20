

async function fetchData(url) {
      // Fetches data
      const data = await fetch(url);

      // Awaits promise for a response
      const response = await data.json();

      // logging your response
      response.map((user) => {
            console.log(user.name)
            console.log(user.name)
            console.log(user.email)
            console.log(user.username)
            console.log(user.company.name)
            console.log(user.address.geo.lat)
            console.log(user.company.catchPhrase)
            console.log(user.address.city)
            console.log(user.address.street)
            console.log(user.address.suite)
            console.log(`My name is ${user.address.city}. Contact me on ${user.email} or with my username ${user.username}. My company ${user.company.name} `)
      })  
}




// fetchData('https://jsonplaceholder.typicode.com/users')

// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))

const button = document.getElementById('btn');
console.log(button)
button.addEventListener('click', () => {
      fetchData('https://jsonplaceholder.typicode.com/users')
})