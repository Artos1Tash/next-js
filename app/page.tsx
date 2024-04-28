import Image from "next/image";

async function getData() {
  const res = await fetch('https://api.github.com/users/Artos1tash')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

export default async function Home() {
  const data = await getData()
  
  return (
    <main>
      {/* <h1>User data: {data}</h1> */}
      
    </main>
  );
}
