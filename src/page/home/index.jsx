import Card from "../../components/Card"
import { Presentation } from "../../components/Presentation"
import "./home.css"
import  { useState, useEffect } from 'react';
import axios from "axios";

const Home = () => {
const [data, setData] = useState([]);



useEffect(() => {
  axios.get("projet.json")
    .then((res)=> setData(res.data))
    .catch((error)=> console.log(error))
}, []);



  return (
    <>
    <Presentation />
  <div className ="gallery">
{data && data.map(projet => (
  <Card item={projet} />
))}

  </div>
    </>
  )

}
export default Home