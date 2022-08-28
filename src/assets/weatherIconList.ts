import {
  faCloud, faCloudBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSmog,
  faSnowflake,
  faSun,
} from '@fortawesome/free-solid-svg-icons'

export const weatherIconList: {[key: string]: any;} = {
  'Clouds': faCloud,
  'Clear': faSun,
  'Atmosphere': faSmog,
  'Snow': faSnowflake,
  'Rain': faCloudShowersHeavy,
  'Drizzle': faCloudRain,
  'Thunderstorm': faCloudBolt,
}