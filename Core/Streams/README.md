# Streams
A stream is an open buffer that is disposed to continuously read and deliver information.
## Stream VS buffers
Although streams uses buffers, their main difference is that streams is used to transmit huge amount of information in chunks, little memory segments.
Buffers instead have a fixed amount of memory available and only transmit what's inside them, they're not able to deliver information continuously.

Since they don't have to wait for the data to be completely copied into the ram, streams are faster than buffers.




https://github.com/lmammino/streams-workshop/tree/master/01-buffer-vs-stream#013-memory--time-comparison