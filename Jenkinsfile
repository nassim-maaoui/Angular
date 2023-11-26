pipeline {
  agent any
  stages {
    stage('Install dependance') {
      steps {
        echo 'hello'
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
        sh 'npm install karma-chrome-launcher'
        sh '''
npm install -g karma
'''
      }
    }

    stage('Test') {
      post {
        always {
          junit '**/test-results.xml'
        }

      }
      steps {
        sh 'npm test -- --no-watch --no-progress --browsers=ChromeHeadlessCI'
        echo 'alo'
      }
    }

  }
}