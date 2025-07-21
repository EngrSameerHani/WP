export const DEFAULT_PLACE = {
  name: 'Islamabad',
  place_id: 'islamabad',
  adm_area1: 'Islamabad Capital Territory',
  adm_area2: 'Islamabad',
  country: 'Pakistan',
  lat: '33.6844N',
  lon: '73.0479E',
  timezone: 'Asia/Karachi',
  type: 'settlement',
};

export const MEASUREMENT_SYSTEMS = {
  AUTO: 'auto',
  METRIC: 'metric',
  UK: 'uk',
  US: 'us',
  CA: 'ca',
};
export const UNITS = {
  metric: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'm/s',
    visibility: 'km',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  us: {
    temperature: '°F',
    precipitation: 'in/h',
    wind_speed: 'mph',
    visibility: 'mi',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  uk: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'mph',
    visibility: 'mi',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  ca: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'km/h',
    visibility: 'km',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
};
