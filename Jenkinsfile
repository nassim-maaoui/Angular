pipeline {
  agent any
tools{
  nodejs "Nodejs_auto"
}
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
