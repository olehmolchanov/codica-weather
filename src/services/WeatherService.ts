import { AxiosResponse } from 'axios';
import api from '../axios';

type Weather = {
   name: string;
   main: {
      temp: number;
      temp_min: number;
   };
};

export function getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
   return api.get<Weather>(`/weather?q=${city}`);
}