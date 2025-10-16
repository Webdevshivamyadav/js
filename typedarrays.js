// Here we learn about the typed arrays
// typed are array like array object thats help to manipulate buffer data basicully they are provide a mechenism to read and write buffer data like image, file, video manipulation .

// we can make typed array using the buffer 

let buffer = new ArrayBuffer(8);

let view =  new Int32Array(buffer);

view[0] = 100;

console.log(view[0]);