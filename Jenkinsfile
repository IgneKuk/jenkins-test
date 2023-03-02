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
          npm install
          npx playwright test jenkins-homepage.spec.ts
        '''
      }
    }
  }
}