import * as DropboxSign from "@dropbox/sign";

// }).catch(error => {
//   console.log("Exception when calling Dropbox Sign API:");
//   console.log(error.body);
// });

const accountInfo = async () => {
  try {
    const accountApi = new DropboxSign.AccountApi();

    // Configure HTTP basic authorization: api_key
    accountApi.username =
      "448c4cc76921cc4201b3551faebf787e1acdb86759dde77ec16b5507e7beb61a";

    // or, configure Bearer (JWT) authorization: oauth2
    // accountApi.accessToken = "YOUR_ACCESS_TOKEN";

    const result = accountApi.accountGet(
      undefined,
      "shreyaschaliha27@protonmail.com"
    );

    return console.log("Connected to MindsDB");
  } catch (error: any) {
    return error;
  }
};

export default accountInfo;
