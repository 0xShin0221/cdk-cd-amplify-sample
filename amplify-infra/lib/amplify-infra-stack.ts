import {
  Stack,
  StackProps,
  aws_codecommit,
  aws_secretsmanager,
} from "aws-cdk-lib";
import { Construct } from "constructs";
import { App, GitHubSourceCodeProvider } from "@aws-cdk/aws-amplify-alpha";

//
export class AmplifyInfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Part 1 [Optional] - Creation of the source control repository
    const amplifyReactSampleRepo = new aws_codecommit.Repository(
      this,
      "AmplifyReactTestRepo",
      {
        repositoryName: "amplify-react-test-repo",
        description:
          "CodeCommit repository that will be used as the source repository for the sample react app and the cdk app",
      }
    );
    const amplifyApp = new App(this, "sample-react-app ", {
      sourceCodeProvider: new GitHubSourceCodeProvider({
        owner: "sintaro",
        repository: "cdk-cd-amplify-sample",
        oauthToken: aws_secretsmanager.Secret.fromSecretNameV2(
          this,
          "SecretFromName",
          "MySecret"
        ).secretValue,
      }),
    });
    const masterBranch = amplifyApp.addBranch("master");
  }
}
