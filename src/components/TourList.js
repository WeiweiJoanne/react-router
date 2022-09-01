
import './Tour.css';
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
const TourList = () => {
  const api = 'https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c'
  const [data, setData] = useState([])
  let [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    async function getAPI() {
      setIsLoading(true)
      const toGetData = await fetch(api)
      const response = await toGetData.json()
      setData(response.data.XML_Head.Infos.Info)
      setIsLoading(false)
    }
    getAPI()
  }, [])

  const toRender = () => {
    if (isLoading) {
      return <h3>資料處理中，請稍候</h3>
    } else {
      const res = data.map((item, i) => <li key={i}> <Link to={item.Id}>{item.Name}</Link> </li>);
      return <ul>{res}</ul>
    }
  }

  return (
    <>
      <h1>TourList</h1>
      {toRender()}
    </>
  )
}

export default TourList
