pipeline {
  agent any
  stages {
    stage('Install dependance') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Deploy') {
      post {
        always {
          junit '**/test-results.xml'
        }

      }
      steps {
        echo 'bnj'
        sh '''npm install -g sonar-scanner --force
'''
        sh 'npm run sonar'
      }
    }

  }
  tools {
    nodejs 'Nodejs_auto'
  }
}