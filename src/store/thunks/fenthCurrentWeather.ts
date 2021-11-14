import { AppDispath } from '..';
import { WeatherService } from '../../services/WeatherService';
import { currentWeatherSlice } from '../slices/currentWeatherSlice';

export const fetchCurrentWeather = (payload: string) => async (dispatch: AppDispath) => {
  dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
  const res = await WeatherService.getCurrentWeather(payload);
};
