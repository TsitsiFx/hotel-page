

async function fetchData(url) {
      // Fetches data
      const data = await fetch(url);

      // Awaits promise for a response
      const response = await data.json();
      console.log(response);

      // Stores client's input for display
      let clientName = document.querySelector('input').value;

      // Display's client's suite
      clientSuite = document.querySelector('option').innerText;

      // Display's client's booking number
      clientBookingNumber = '96544-6423'

      // Stores table head details (heading)
      let head= '';
      head += `<th>Name</th>
        <th>Suite</th>
        <th>Booking Number</th>`  

      // Loops data from api and displays it..Already existing client details
      let tab = '';
      response.forEach(user => {
          tab += 
            `<tr>
                  <td>${user.name}</td>
                  <td>${user.address.street}</td>
                  <td>${user.address.zipcode}</td>   
            </tr>
            `  
      });

      // Interpolates input data and data from fetched api
      tab += 
            `<td>${clientName}</td>
            <td>${clientSuite}</td>
            <td>${clientBookingNumber}</td>
            `
      // Inserts data into html(both fetched and input)
     document.getElementById('tbody')
     .innerHTML = tab  

      // Inserts heading details into html
     document.getElementById('head')
      .innerHTML = head
}

// Grabs button and puts it in a variable
const button = document.getElementById('btn');
console.log(button)

// An onclick action that triggers the fetchData function
button.addEventListener('click', () => {
      fetchData('https://jsonplaceholder.typicode.com/users')
});