#!/usr/bin/env node

const [encodedId] = process.argv.slice(2)

console.info(decode(encodedId))

function decode(id) {
    const buf = Buffer.from(id, "base64url")

    return [
        buf.slice(0, 4).swap32(),
        buf.slice(4, 6).swap16(),
        buf.slice(6, 8).swap16(),
        buf.slice(8, 10),
        buf.slice(10, 16)
    ].map((segment) => segment.toString("hex")).join("-")
}
