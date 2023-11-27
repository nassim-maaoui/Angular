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
        sh '''npm install @angular/cli
'''
        sh 'npm run build'
        sh '''node_modules/.bin/ng test
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
        echo 'nn'
        sh 'npm test'
      }
    }

  }
}