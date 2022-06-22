import { ERROR_MESSAGES } from "constants/errors.constants";

export function createClass(obj: any, rest = ""): string {
  const classes = Object.keys(obj)
    .filter((key) => obj[key])
    .map((key) => key)
    .join(" ");
  return `${classes} ${rest}`;
}

export function validators(obj: any): any {
  const result = Object.keys(obj).reduce((acc: any, curr: string) => {
    const validator = {
      value: obj[curr],
      message: ERROR_MESSAGES[curr] || curr,
    };

    return { ...acc, [curr]: validator };
  }, {});

  return result;
}
