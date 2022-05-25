import { Request, Response, NextFunction } from 'express';
import { WorkflowDto } from 'src/controllers/types';

import {
  validateAgainstRegex,
  errorChecker,
  magicTrimmer,
  alphabetsRegex,
  numberRegex,
  validateArray
} from '../modules/validator';

import { response } from '../utils/index';

export const validator = (req: Request, res: Response, next: NextFunction) => {
  const { name, version, scope, apparatus, definitions, procedures } = req.body;

  const trimmedData = magicTrimmer({
    name,
    scope
  });

  const data = {
    ...trimmedData,
    version,
    apparatus,
    definitions,
    procedures
  } as WorkflowDto;

  const validationSchema = {
    ...(name && {
      name: validateAgainstRegex(data.name, 'name', alphabetsRegex)
    }),

    ...(version && {
      version: validateAgainstRegex(
        data.version.toString(),
        'version',
        numberRegex
      )
    }),

    ...(scope && {
      scope: validateAgainstRegex(data.scope, 'scope', alphabetsRegex)
    }),

    ...(apparatus && {
      apparatus: validateArray(data.apparatus, 'apparatus')
    }),

    ...(definitions && {
      definitions: validateArray(data.definitions, 'definitions')
    }),

    ...(procedures && {
      procedures: validateArray(data.procedures, 'procedures')
    })
  };

  const errors = errorChecker(validationSchema);

  if (errors) return response.sendErrorResponse(res, 422, errors);

  next();
};
