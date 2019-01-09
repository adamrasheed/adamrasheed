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
  }
  getWeatherData = () => {
    console.log('getting weather')

    axios
      .get(endpoint)
      .then(resp => {
        this.prettifyWeather(resp)
      })
      .catch(error => console.log(error))
  }

  prettifyWeather = ({ data: { main, weather } }) => {
    const temp = main.temp
    const currentWeather = weather[0].description
    const farenheitTemp = `${kelvintoFarenheit(temp)}˚`
    this.setState({
      currentTemperature: farenheitTemp,
      currentWeather: currentWeather,
    })
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
            Currently {this.state.currentTemperature} with{' '}
            {this.state.currentWeather} in San Diego.
          </P>
        )}
      </>
    )
  }
}

export default Weather
