pipeline {
	agent {
		node {
			label "linux"
    }
  }
    stages {
      stage("Tests") {
        agent { docker { image 'mcr.microsoft.com/playwright:v1.31.0-focal' } }
        steps {
          sh '''
          npm i -D @playwright/test
          npx playwright install
          npx playwright test jenkins-homepage.spec.ts
        '''
      }
    }
  }
}