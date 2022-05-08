export default function PostAdminLogin(
  name: string,
  password: string,
  callback: Function
) {
  class AdminInfo {
    name: string;
    password: string;

    constructor(name: string, password: string) {
      this.name = name;
      this.password = password;
    }
  }

  const newAdmin = new AdminInfo(name, password);

  //console.log("Admin Login", name);

  // function CheckError(response) {
  //   console.log("response", response);
  //   if (response.status >= 200 && response.status <= 299) {
  //     return response;
  //   } else {
  //     console.log("response.text", response.text);
  //     response.text().then((text) => {
  //       throw Error(text);
  //     });
  //   }
  // }

  const url = "https://api.celebrity-journey.com";

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newAdmin),
  };

  const contactUrl = url + "/api/admin";

  fetch(contactUrl, requestOptions)
    .then((response) => {
      response.text().then((text) => {
        //console.log("response.status", response.status);
        //console.log("response.text", text);
        callback(text);
      });
    })
    .catch((error) => {
      //console.log("Login error", error);
      callback(error);
    });
}
