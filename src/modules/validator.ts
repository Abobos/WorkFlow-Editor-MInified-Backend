import { Definition, Procedure } from 'src/controllers/types';
import { ObjectProps } from './types';

export const alphabetsRegex: RegExp = /^[A-Za-z\s]+$/;

export const numberRegex: RegExp = /^[0-9]$/;

export const magicTrimmer = (payload: ObjectProps): ObjectProps => {
  const data = {};

  Object.keys(payload).forEach((key) => {
    const value: any = payload[key];

    Object.assign(data, {
      [key]: typeof value !== 'string' ? value : value.trim()
    });
  });

  return data;
};

export const validateArray = <T>(values: T[], key: string) => {
  let errorMessage;

  if (!values?.length) errorMessage = `${key} cannot be empty`;

  if (key === 'procedures') {
    const procedures = values as unknown as Procedure[];

    if (!(procedures[0] && procedures[0].step))
      errorMessage = `${key} is cannot be empty,it must include at least a step`;
  }

  if (key === 'definitions') {
    const definitions = values as unknown as Definition[];

    if (!(definitions[0] && definitions[0].name && definitions[0].description))
      errorMessage = `${key} is cannot be empty, it must include a name and definition`;
  }

  return errorMessage;
};

export const validateAgainstRegex = (
  value: string,
  regexType: string,
  regex?: RegExp
): any => {
  let errorMessage: string = '';

  if (regex) {
    if (!regex.test(value)) errorMessage = `${regexType} is not valid`;
  }

  return errorMessage;
};

export const errorChecker = (payload: ObjectProps): string[] | null => {
  const result: any = {};

  Object.keys(payload).forEach((key) => {
    if (payload[key]) {
      result[key] = payload[key];
    }
  });

  return Object.keys(result).length ? result : null;
};
