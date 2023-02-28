pipeline {
  stage("Playwright tests") {
    agent {
      docker { 
            image 'mcr.microsoft.com/playwright:v1.17.2-focal'
      }
    }
    steps {
      sh '''
            npm i - D @playwright/test
            npx playwright install
            npx playwright test jenkins-homepgae.spec.ts
      '''
    }
  }
}