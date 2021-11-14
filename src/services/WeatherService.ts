import axios, { Axios, AxiosResponse } from 'axios';
import { Weather } from '../store/types';

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return axios.get(`api.openweathermap.org/data/2.5/weather?q=${city}&appid={API key}`);
  }
}
