import React from 'react'
import axios from 'axios'
import { kelvinToFahrenheit } from 'src/utils/helpers'
import { P } from '../../utils/Typography'

const zip = `92618`
const APIKey = `1e61d6bb275e9c08609c58e51ec0f728`
const endpoint = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=${APIKey}`

class Weather extends React.Component {
  state = {
    currentTemperature: null,
    currentWeather: null,
    action: null,
    location: null,
  }

  componentDidMount() {
    this.getWeatherData()
    setInterval(() => {
      this.getWeatherData()
    }, 60000)
  }

  getWeatherData = () => {
    console.log('getting weather')

    axios
      .get(endpoint)
      .then(resp => {
        this.prettifyWeather(resp)
        console.log(resp.data)
      })
      .catch(error => console.log(error))
  }

  prettifyWeather = ({ data: { main, weather, name } }) => {
    const { temp } = main
    const currentWeather = weather[0].description
    const fahrenheitTemp = `${kelvinToFahrenheit(temp)}˚`
    const action = this.addAction(weather[0].main)

    this.setState({
      currentTemperature: fahrenheitTemp,
      currentWeather,
      location: name,
      action,
    })
  }

  addAction = currentWeather => {
    // eslint-disable-next-line
    if (currentWeather == `Rain`) {
      return `curled up under blankets and wishing the sun was out`
    }
    return `enjoying the sun`
  }


  render() {
    const {
      currentTemperature, action, currentWeather, location,
    } = this.state
    const message = `Currently ${action} because its ${currentTemperature} with ${currentWeather} in ${location}.`
    return (
      <>
        {currentTemperature && (
          <P className="Weather">{message}</P>
        )}
      </>
    )
  }
}

export default Weather
