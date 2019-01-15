import React from 'react'
import axios from 'axios'
import { P } from '../../utils/Typography'
import { kelvintoFarenheit } from '../../utils/helpers'

const zip = `92109`
const APIKey = `1e61d6bb275e9c08609c58e51ec0f728`
const endpoint = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=${APIKey}`

class Weather extends React.Component {
  state = {
    currentTemperature: null,
    currentWeather: null,
    action: null,
    location: null,
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
    const temp = main.temp
    const currentWeather = weather[0].description
    const farenheitTemp = `${kelvintoFarenheit(temp)}˚`
    this.addAction(weather[0].main)

    this.setState({
      currentTemperature: farenheitTemp,
      currentWeather: currentWeather,
      location: name,
      action: this.addAction(weather[0].main),
    })
  }

  addAction = currentWeather => {
    if (currentWeather == `Rain`) {
      console.log(`curled up under blankets and wishing the sun was out`)
      return `curled up under blankets and wishing the sun was out`
    }
    console.log(`enjoying the sun`)
    return `enjoying the sun`
  }

  componentDidMount() {
    this.getWeatherData()
    setInterval(() => {
      this.getWeatherData()
    }, 60000)
  }
  render() {
    return (
      <>
        {this.state.currentTemperature && (
          <P className="Weather">
            Currently {this.state.action} because its{' '}
            {this.state.currentTemperature} with {this.state.currentWeather} in{' '}
            {this.state.location}.
          </P>
        )}
      </>
    )
  }
}

export default Weather
