

pipeline {
	agent {
		node {
			label "linux"
    }
  }
  stage("Back-end") {
    stages {
      stage("firt test") {
          agent { 
              docker { 
                  image 'mcr.microsoft.com/playwright:v1.17.2-focal'
          }
        }
        steps {
          sh '''
          npm i -D @playwright/test
          npx playwright install
        '''
        }
      }
    }
  }
}