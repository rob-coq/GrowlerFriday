pipeline {
    agent any
    stages {
        stage('SonarQube analysis') {
            steps {
                script {
                    def scannerHome = tool 'sonarscanner';
                    withSonarQubeEnv('SonarQube') { // If you have configured more than one global server connection, you can specify its nam
                        sh "echo ${scannerHome}"
                        sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=automation-lab -Dsonar.sources=. -Dsonar.host.url=http://sonarqube:9000 -Dsonar.login=9f2dee8d08f76774eb39f4b2e19689543bf2f8b2"
                    }
                }
            }
        }
        stage("Quality gate") {
            steps {
                waitForQualityGate abortPipeline: true
            }
        }
    }
}
