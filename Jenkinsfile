pipeline {
  agent any
  stages {
    stage('Install dependencies') {
      steps {
        echo 'Hello Nassim'
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm install @angular/cli'
        sh 'npm run build'
        // Note: Setting the CHROME_BIN environment variable here may not be necessary
        // as it's generally set in the karma.conf.js file.
        // environment {
        //   CHROME_BIN = 'google-chrome'
        // }
        sh 'npm run test' // Use npm script to run tests
      }
    }

    stage('Run in Docker') {
      steps {
        echo 'Hello oui'
        sh 'docker build -t my-angular-app .'
        sh 'docker run -p 4200:4200 my-angular-app'
      }
    }
  }
  tools {
    nodejs 'Nodejs_auto'
    dockerTool 'docker'
  }
}
