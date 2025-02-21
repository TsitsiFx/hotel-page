

async function fetchData(url) {
      // Fetches data
      const data = await fetch(url);

      // Awaits promise for a response
      const response = await data.json();
      console.log(response);
      console.table(response);

      let clientName = document.querySelector('input').value;

      clientSuite = document.querySelector('option').innerText;

      clientBookingNumber = '96544-6423'

      let head= '';
      head += `<th>Name</th>
        <th>Suite</th>
        <th>Booking Number</th>`  

      let tab = '';
      response.forEach(user => {
          tab += `<tr>
            <td>${user.name}</td>
             <td>${user.address.street}</td>
              <td>${user.address.zipcode}</td>   
          </tr>`  
      });
      tab += 
      `<td>${clientName}</td>
      <td>${clientSuite}</td>
      <td>${clientBookingNumber}</td>
      `
     document.getElementById('tbody')
     .innerHTML = tab  
      clientName = ''

     document.getElementById('head')
      .innerHTML = head

     

}

const button = document.getElementById('btn');
console.log(button)
button.addEventListener('click', () => {
      fetchData('https://jsonplaceholder.typicode.com/users')
});