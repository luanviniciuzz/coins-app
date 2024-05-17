const FormatCoin = (value: number) => {
  let part = value.toString().split(".");
    part[0] = part[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (part.length > 1) {
        part[1] = part[1].substring(0, 2);
    } else {
        part.push("00");
    }
    return '$' + part.join(".");
};

export default FormatCoin;