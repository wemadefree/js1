/*
MongoDB states the following about ObjectId:
- a 4-byte timestamp value, representing the ObjectId’s creation, measured in seconds since the Unix epoch
- a 5-byte random value
- a 3-byte incrementing counter, initialized to a random value

The 5-byte random value may trick you to believe that its hard to guess the next id from the previous one but its not:

- a 4-byte value representing the seconds since the Unix epoch (which will not run out of seconds until the year 2106)
- a 3-byte machine identifier (usually derived from the MAC address),
- a 2-byte process id, and
- a 3-byte counter, starting with a random value.

This implementation will return a random ObjectId instead.
- a 4-byte timestamp value
- a 2-byte process id
- a 6-byte random value
*/

const pid = (global as any).crypto.getRandomValues(new Uint8Array(2));
export function objectIdHex(ts?: number) {
  if (!ts || typeof ts !== 'number') {
    ts = ~~(Date.now() / 1000);
  }
  const buffer = (global as any).crypto.getRandomValues(new Uint8Array(12));
  buffer[3] = ts & 0xff;
  buffer[2] = (ts >> 8) & 0xff;
  buffer[1] = (ts >> 16) & 0xff;
  buffer[0] = (ts >> 24) & 0xff;
  buffer[4] = pid[0];
  buffer[5] = pid[1];
  return buf2hex(buffer);
}

function buf2hex(buffer: Uint8Array) {
  return Array.prototype.map.call(buffer, x => ('00' + x.toString(16)).slice(-2)).join('');
}
