const tf = require('@tensorflow/tfjs-node');
 
console.log("TensorFlow.js version information: ");
console.log(tf.version);
 
console.log(`TensorFlow.js backend: ${tf.getBackend()}`);