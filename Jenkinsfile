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
      }
    }

    stage('Test') {
      post {
        always {
          junit '**/test-results.xml'
        }

      }
      steps {
        sh 'npm test'
        echo 'nn'
        sh 'wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm'
      }
    }

  }
}