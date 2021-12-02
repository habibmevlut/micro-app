import { HttpHeaders, HttpParams } from '@angular/common/http';

export const isEmptyArray = (arr: any): boolean =>
  Array.isArray(arr) && arr.length <= 0;

export const isNullOrUndefined = (value: any): boolean => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'string' && value.trim() === '')
  );
};

export const createRequestOption = (req?: any): HttpParams => {
  let options: HttpParams = new HttpParams();
  if (req) {
    Object.keys(req).forEach((key) => {
      if (
        !isNullOrUndefined(req[key]) &&
        !isEmptyArray(req[key]) &&
        key !== 'sort'
      ) {
        options = options.set(key, req[key]);
      }
    });
    if (req.sort) {
      req.sort.forEach((val: any) => {
        options = options.append('sort', val);
      });
    }
  }
  return options;
};

export const httpOptions = (): HttpHeaders => {
  return new HttpHeaders({
    'Content-Type': 'application/json',
    'app-id': '611f33c594916dee4af13a68'
  });
}
