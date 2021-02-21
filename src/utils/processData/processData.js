const processData = (url, method, parameterList, body) => {
  let param = "";
  if (parameterList !== null && parameterList !== undefined) {
    param += "/search?";
    console.log(parameterList);
    parameterList.forEach((element) => {
      param += element.name + "=" + element.value + "&";
      console.log(param);
    });
    console.log(param);
    param = param.substring(0, param.lastIndexOf("&"));
    console.log(param);
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
      .then((data) => data);
};

export default processData;
