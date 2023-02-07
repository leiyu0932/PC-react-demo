// 手机号、电话脱敏 隐藏4-9位
export const desensitizationPhone = (phone = '') => {
  phone = String(phone);
  return `${phone.substr(0, 3)}*****${phone.substr(8)}`;
};
// 其他号码脱敏 隐藏中间7位
export const desensitization = (string = '', start, end) => {
  string = String(string);
  return `${string.substr(0, start)}*******${string.substr(end)}`;
};
