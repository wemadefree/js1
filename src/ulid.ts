import { ulid as ulidfn } from 'ulid'

export function ulid(seedTime?: number): string {
  return ulidfn(seedTime);
}

export function ulidlc(seedTime?: number): string {
  return ulidfn(seedTime).toLowerCase()
}
