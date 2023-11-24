pipeline {
  agent any

  tools { 
    
        git 'localGit'
        jdk 'localJava'
        nodejs 'localNode'
}
  stages {
    stage('Install dependence') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh ''' npm install -g @angular/cli  ng build'''      }
    }

  }
}
