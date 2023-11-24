pipeline {
  agent any
  stages {
    stage('Install dependance') {
      steps {
        sh 'npm install'
      }
    }
     stage('install') {
      steps {
        sh 'npm install -g @angular/cli'
      }
    }
     stage('Build') {
      steps {
        sh 'ng build'
      }
    }


  }
}
