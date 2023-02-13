import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const weatherAPI = createApi({
  reducerPath: 'weatherAPI',
  baseQuery: fetchBaseQuery(
    {
      baseUrl: `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}`
    }
  ),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query<string, string>({
      query: (zipCode) => `&q=${zipCode}&aqi=no`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCurrentWeatherQuery } = weatherAPI;

export default weatherAPI;
