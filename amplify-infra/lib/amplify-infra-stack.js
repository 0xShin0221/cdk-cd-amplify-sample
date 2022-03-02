"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmplifyInfraStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const aws_amplify_alpha_1 = require("@aws-cdk/aws-amplify-alpha");
//
class AmplifyInfraStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Part 1 [Optional] - Creation of the source control repository
        const amplifyReactSampleRepo = new aws_cdk_lib_1.aws_codecommit.Repository(this, "AmplifyReactTestRepo", {
            repositoryName: "amplify-react-test-repo",
            description: "CodeCommit repository that will be used as the source repository for the sample react app and the cdk app",
        });
        const amplifyApp = new aws_amplify_alpha_1.App(this, "sample-react-app ", {
            sourceCodeProvider: new aws_amplify_alpha_1.GitHubSourceCodeProvider({
                owner: "[Repository-Owner]",
                repository: "[Repository-Name]",
                oauthToken: aws_cdk_lib_1.aws_secretsmanager.Secret.fromSecretNameV2(this, "SecretFromName", "MySecret").secretValue,
            }),
        });
        const masterBranch = amplifyApp.addBranch("master");
    }
}
exports.AmplifyInfraStack = AmplifyInfraStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1wbGlmeS1pbmZyYS1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFtcGxpZnktaW5mcmEtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBS3FCO0FBRXJCLGtFQUEyRTtBQUUzRSxFQUFFO0FBQ0YsTUFBYSxpQkFBa0IsU0FBUSxtQkFBSztJQUMxQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQWtCO1FBQzFELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLGdFQUFnRTtRQUNoRSxNQUFNLHNCQUFzQixHQUFHLElBQUksNEJBQWMsQ0FBQyxVQUFVLENBQzFELElBQUksRUFDSixzQkFBc0IsRUFDdEI7WUFDRSxjQUFjLEVBQUUseUJBQXlCO1lBQ3pDLFdBQVcsRUFDVCwyR0FBMkc7U0FDOUcsQ0FDRixDQUFDO1FBQ0YsTUFBTSxVQUFVLEdBQUcsSUFBSSx1QkFBRyxDQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRTtZQUNwRCxrQkFBa0IsRUFBRSxJQUFJLDRDQUF3QixDQUFDO2dCQUMvQyxLQUFLLEVBQUUsb0JBQW9CO2dCQUMzQixVQUFVLEVBQUUsbUJBQW1CO2dCQUMvQixVQUFVLEVBQUUsZ0NBQWtCLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUNwRCxJQUFJLEVBQ0osZ0JBQWdCLEVBQ2hCLFVBQVUsQ0FDWCxDQUFDLFdBQVc7YUFDZCxDQUFDO1NBQ0gsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQ0Y7QUEzQkQsOENBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgU3RhY2ssXG4gIFN0YWNrUHJvcHMsXG4gIGF3c19jb2RlY29tbWl0LFxuICBhd3Nfc2VjcmV0c21hbmFnZXIsXG59IGZyb20gXCJhd3MtY2RrLWxpYlwiO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCB7IEFwcCwgR2l0SHViU291cmNlQ29kZVByb3ZpZGVyIH0gZnJvbSBcIkBhd3MtY2RrL2F3cy1hbXBsaWZ5LWFscGhhXCI7XG5cbi8vXG5leHBvcnQgY2xhc3MgQW1wbGlmeUluZnJhU3RhY2sgZXh0ZW5kcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgLy8gUGFydCAxIFtPcHRpb25hbF0gLSBDcmVhdGlvbiBvZiB0aGUgc291cmNlIGNvbnRyb2wgcmVwb3NpdG9yeVxuICAgIGNvbnN0IGFtcGxpZnlSZWFjdFNhbXBsZVJlcG8gPSBuZXcgYXdzX2NvZGVjb21taXQuUmVwb3NpdG9yeShcbiAgICAgIHRoaXMsXG4gICAgICBcIkFtcGxpZnlSZWFjdFRlc3RSZXBvXCIsXG4gICAgICB7XG4gICAgICAgIHJlcG9zaXRvcnlOYW1lOiBcImFtcGxpZnktcmVhY3QtdGVzdC1yZXBvXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQ29kZUNvbW1pdCByZXBvc2l0b3J5IHRoYXQgd2lsbCBiZSB1c2VkIGFzIHRoZSBzb3VyY2UgcmVwb3NpdG9yeSBmb3IgdGhlIHNhbXBsZSByZWFjdCBhcHAgYW5kIHRoZSBjZGsgYXBwXCIsXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBhbXBsaWZ5QXBwID0gbmV3IEFwcCh0aGlzLCBcInNhbXBsZS1yZWFjdC1hcHAgXCIsIHtcbiAgICAgIHNvdXJjZUNvZGVQcm92aWRlcjogbmV3IEdpdEh1YlNvdXJjZUNvZGVQcm92aWRlcih7XG4gICAgICAgIG93bmVyOiBcIltSZXBvc2l0b3J5LU93bmVyXVwiLFxuICAgICAgICByZXBvc2l0b3J5OiBcIltSZXBvc2l0b3J5LU5hbWVdXCIsXG4gICAgICAgIG9hdXRoVG9rZW46IGF3c19zZWNyZXRzbWFuYWdlci5TZWNyZXQuZnJvbVNlY3JldE5hbWVWMihcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFwiU2VjcmV0RnJvbU5hbWVcIixcbiAgICAgICAgICBcIk15U2VjcmV0XCJcbiAgICAgICAgKS5zZWNyZXRWYWx1ZSxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IG1hc3RlckJyYW5jaCA9IGFtcGxpZnlBcHAuYWRkQnJhbmNoKFwibWFzdGVyXCIpO1xuICB9XG59XG4iXX0=