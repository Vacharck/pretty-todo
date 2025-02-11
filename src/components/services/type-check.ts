export function isString(data: FormDataEntryValue | null): data is string {   return data !== null && typeof data === 'string'; }

