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
        sh '''docker build -t nom-de-votre-image:tag .
docker run -p 8000:80 nom-de-votre-image:tag'''
        echo 'bnj'
      }
    }

  }
  tools {
    nodejs 'Nodejs_auto'
  }
}