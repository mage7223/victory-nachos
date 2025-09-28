// Mock canvas and jsdom modules for browser compatibility
declare module 'canvas' {
  export class Canvas {
    width: number;
    height: number;
    getContext(contextId: string): any;
  }
  
  export interface NodeCanvasRenderingContext2D {
    // Add any context methods you need
  }
  
  export function createCanvas(width: number, height: number): Canvas;
  
  const nodeCanvas: {
    createCanvas: typeof createCanvas;
  };
  export default nodeCanvas;
}

declare module 'jsdom' {
  export class JSDOM {
    constructor(html?: string, options?: any);
    window: DOMWindow;
  }
  
  export interface DOMWindow extends Window {
    // Add any additional properties needed
  }
}