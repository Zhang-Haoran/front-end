const processData = (url, method, parameterList, body) => {
  let param = "";
  if (parameterList !== null && parameterList !== undefined) {
    param += "/search?";
    parameterList.forEach((element) => {
      param += element.name + "=" + element.value + "&";
    });
    param = param.substring(0, param.lastIndexOf("&"));
  }

  const processing = (processing_url) => {
    return fetch(processing_url, {
      method: method,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      mode: "cors",
      cache: "default",
      body: JSON.stringify(body),
    });
  };
  if (processing !== null)
    return processing(url + param)
      .then((response) => response.json())
      .then((data) => console.log(data));
};

export default processData;
