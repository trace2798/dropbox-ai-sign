import * as DropboxSign from "@dropbox/sign";

// }).catch(error => {
//   console.log("Exception when calling Dropbox Sign API:");
//   console.log(error.body);
// });

const accountInfo = async () => {
  try {
    const accountApi = new DropboxSign.AccountApi();

    // Configure HTTP basic authorization: api_key
    accountApi.username = process.env.API_KEY ?? "";

    // or, configure Bearer (JWT) authorization: oauth2
    // accountApi.accessToken = "YOUR_ACCESS_TOKEN";

    const result = accountApi.accountGet(
      undefined,
      "MY_EMAIL_ADDRESS"
    );

    return console.log(result);
  } catch (error: any) {
    return error;
  }
};

export default accountInfo;
