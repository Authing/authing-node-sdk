import { AuthenticationClient, Models } from "../src";


describe("AuthenticationClient", () => {

  const code = ''
  const redirectUri='https://authing.com'

const authClient = new AuthenticationClient({
  /** 应用 ID */
  appId: '',

  /** 应用 Secret */
  appSecret: '',

  /** 应用对应的用户池域名，例如 pool.authing.cn */
  host: 'https://core.authing.cn',

  /** 认证完成后的重定向目标 URL */
  redirectUri: 'https://authing.com',

  scope: 'offline_access openid profile'
})

  describe("buildAuthUrl", () => {
    describe("Success", () => {
      it("without params", async () => {
        const result = authClient.buildAuthUrl();
        console.log(result)

        const state = await authClient.getLoginStateByAuthCode(code, redirectUri)
        console.log(state)

        const refreshLoginState = await authClient.refreshLoginState(state.refreshToken || "")
        console.log(refreshLoginState, "refreshLoginState")

        const getUserInfo = await authClient.getUserInfo(state.accessToken)
        console.log(getUserInfo, "getUserInfo")

        const parseAccessToken = await authClient.parseAccessToken(state.accessToken)
        console.log(parseAccessToken, "parseAccessToken")

        const parseIDToken = await authClient.parseIDToken(state.idToken)
        console.log(parseIDToken, "parseIDToken")

      });
    });
  });

});
