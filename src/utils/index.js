/**
 * @name 数据脱敏（默认脱敏11位手机号）
 * @param text 需要脱敏的数据
 * @param start 起始位置
 * @param length 长度
 * @returns
 */
export const desensitization = (
  text,
  start = 3,
  length = 4
) => {
  if (!text) {
    return '';
  }
  const end = start + length;
  if (length > 0) {
    const placeholder = Array(length).fill('*').join('');
    return `${text.substr(0, start)}${placeholder}${text.substr(end)}`;
  }
  return text;
};
