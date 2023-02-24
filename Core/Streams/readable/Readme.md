# Readable Streams

This type of streams are used to read information continuously in chunks.

## Common readable Streams
- file reading
- get input from command line (process.stdin)
- HTTP responses
- HTTP requests
- AWS S3 GetObject

## Flowing VS paused
Readable streams supports two different consumption modes: flowing, paused.
### Flowing
In the flowing mode the information is continuously delivered every time the information is loaded in the chunk.
### Paused
In the paused mode you the chunk is not read automatically, It's up to you to determine whether a chunk will be read or not. In this situation, the streams sends a signal indicating a chunk is ready to be read.