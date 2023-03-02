import { PlaywrightTestConfig } from '@playwright/test';
import * as dotenv from 'dotenv'

dotenv.config();

const config: PlaywrightTestConfig = {
  use: {
    headless: true
  },
  timeout: 50000
};
export default config;
