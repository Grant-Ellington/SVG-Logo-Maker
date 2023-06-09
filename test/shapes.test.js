const { Square, Triangle, Circle } = require("../lib/shapes");

describe("Circle", () => {
  it("should render svg for a green circle element", () => {
    let expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`;

    let newInstance = new Circle('SVG', 'white', 'green').render()

    expect(newInstance).toMatch(expectedSvg)



  });

});

describe("Triangle", () => {
  it("should render svg for a green polygon element", () => {
    let expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="green" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="white">text</text></svg>`;

    let newInstance = new Triangle('text', 'white', 'green').render()

    expect(newInstance).toMatch(expectedSvg)
  });


  });

describe("Square", () => {
  it("should render svg for a green polygon element", () => {
    let expectedSvg =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="green"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">text</text></svg>`;

    let newInstance = new Square('text', 'white', 'green').render();
    
    expect(newInstance).toMatch(expectedSvg)

  });
  
});
