#!/usr/bin/env node

const [encodedId] = process.argv.slice(2)

console.info(decode(encodedId))

function decode(id) {
    const buf = Buffer.from(id, "base64url")

    return [
        buf.slice(0, 4).readUIntLE(0, 4).toString(16).padStart(8, "0"), // LE
        buf.slice(4, 6).readUIntLE(0, 2).toString(16).padStart(4, "0"), // LE
        buf.slice(6, 8).readUIntLE(0, 2).toString(16).padStart(4, "0"), // LE
        buf.slice(8, 10).readUIntBE(0, 2).toString(16).padStart(4, "0"), // BE
        buf.slice(10, 16).readUIntBE(0, 6).toString(16).padStart(12, "0"), // BE
    ].join("-")
}
