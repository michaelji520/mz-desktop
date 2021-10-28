import { v4 } from 'uuid';

export function isMobile() {
  return /iPhone|Android|iPad/.test(navigator.userAgent);
}

export function uuidv4() {
  return v4();
}