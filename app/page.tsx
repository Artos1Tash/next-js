import Image from "next/image";
const axios = require('axios').default;


async function getData() {
  const res = await fetch('https://api.github.com/users/Artos1tash')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  // console.log(res.json())
  return res.json()
}

export default async function Home() {
  const data = await getData()
  
  return (
    <main>
        <h1>
          {/* Using builtin JSON class to turn data json into a string representation */}
          User data: {JSON.stringify(data, null, 2)} 
        </h1>
        <br></br><br></br>
        <ul> {/* Second option is here: create a list element, itterate over json and add a list key with the json value*/}
          {Object.keys(data).map((key, index) => (
            <li key={index}>{`${key}: ${data[key]}`}</li>
          ))}
        </ul>
    </main>
  );
}


// axios.get('https://api.github.com/users/Artos1tash')
// .then(function (response) {
//   const login = response.login;
//   return login;
// })
// .catch(function (error) {
//   return error;
// })
// .finally(function () {
//   return "Done";
// });