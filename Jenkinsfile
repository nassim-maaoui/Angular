pipeline {
  agent any
  stages {
    stage('Install dependence') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh '''npm install -g @angular/cli
'''
        sh 'ng build'
        echo 'Final'
      }
    }

  }
}