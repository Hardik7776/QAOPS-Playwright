// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
 timeout: 30000,
expect:{
timeout: 5000
},
  reporter : 'html',
    
      use:{
         // actionstimeout: 10000,
 //navigationtimeout: 30*1000,
       browsername: 'chromuim',
       headless: false, 
       screenshot : 'on',
       trace:'retain-on-failure',
    },
  
  });

   module.exports=config;