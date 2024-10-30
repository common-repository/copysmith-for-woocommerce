import CopysmithApi from '@copysmith/api';
import config from '../config';
import { getJwtValue } from '../services/jwt.service';

const client = new CopysmithApi(getJwtValue, {
  env: config.env,
  external: true,
  errorInterceptor: null,
  customHeaders: {},
  onAfterRequest: null,
});

export default client;
