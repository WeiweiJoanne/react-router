import './Tour.css';
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"



const TourDisc = () => {
  const api = 'https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c'
  const { Id } = useParams();
  const [data, setData] = useState([])

  useEffect(() => {
    async function getAPI() {
      const toGetData = await fetch(api)
      const response = await toGetData.json()
      const info = await response.data.XML_Head.Infos.Info
      const getData = info.filter(i => i.Id === Id)
      setData(...getData)
    }
    getAPI()
  }, [])

  return (
    <div className="item">
      <div id='goBack'> <Link to="/tour">Back</Link></div>
      <img src={data.Picture1} alt="" />
      <h2>{data.Name}</h2>
      <p>{data.Toldescribe}</p>
    </div>
  )
}

export default TourDisc
