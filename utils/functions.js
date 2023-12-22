export const itemAlreadyExists = (item, array) => {
    return array?.length>0
      ? array.find((obj) => obj?.number === item?.number)
      : "";
  };