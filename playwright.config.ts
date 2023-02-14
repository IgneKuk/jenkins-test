import { PlaywrightTestConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv'

dotenv.config();

const config: PlaywrightTestConfig = {
  testDir: './test',
  use: {
    headless: true
  },
  timeout: 50000
};
export default config;
