import { DeepAR } from 'deepar';
import deeparWasm from 'deepar/wasm/deepar.wasm';

const canvas = document.getElementById('deepar-canvas');
const deepAR = new DeepAR({
  licenseKey: 'a2d110e03687a8a147a05fdca20d04954e6e8b0e0c7e699893327f2e26ec52651ae06c4a9dbd00ea',
  canvas: canvas,
  deeparWasmPath: deeparWasm,
  callbacks: {
    onInitialize: () => {
      deepAR.startVideo(true);
    },
  },
});