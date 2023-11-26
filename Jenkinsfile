pipeline {
  agent any
  stages {
    stage('Install dependance') {
      steps {
        script {
          // Utilisation de Node.js installé avec l'outil Nodejs_auto
          tools {
            nodejs 'Nodejs_auto'
          }
          // Installation des dépendances
          sh 'npm install'
        }
      }
    }

    stage('Build') {
      steps {
        script {
          // Build de l'application
          sh 'npm run build'
        }
      }
    }

    stage('Test') {
      steps {
        script {
          // Exécution des tests et génération des rapports JUnit
          sh 'npm test -- --no-watch --no-progress --browsers=ChromeHeadlessCI'
        }
      }
      post {
        always {
          // Publication des rapports JUnit
          junit '**/test-results.xml'
        }
      }
    }

  }
}
