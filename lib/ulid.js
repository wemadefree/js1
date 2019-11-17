import { ulid } from 'ulid'

function ulidlc(seedTime) {
    return ulid.apply(null, arguments).toLowerCase()
}

export { ulid, ulidlc }
