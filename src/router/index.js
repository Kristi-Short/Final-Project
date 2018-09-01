import Vue from 'vue'
import Router from 'vue-router'
import OpenWeather from '@/samples/maps/OpenWeatherMapLayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Weather-Layer',
      component: Weather-Layer
    }
  ]
})
