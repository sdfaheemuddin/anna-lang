import Snippet from "./Snippet";

/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "General",
    description: (
      <>
        <code className="language-cpp">hi anna</code> is the entrypoint for the
        program and all programs must end with{" "}
        <code className="language-cpp">bye anna</code>. Anything outside of it
        will be ignored.
      </>
    ),
    code: `This will be ignored

hi anna
  // Write code here
bye anna

This too
    `,
  },
  {
    name: "Variables",
    description: (
      <>
        Variables can be declared using{" "}
        <code className="language-cpp">anna idi</code>.
      </>
    ),
    code: `hi anna
    anna idi a = 10;
    anna idi b = "two";
    anna idi c = 15;
    a = a + 1;
    b = 21;
    c *= 2;
bye anna
    `,
  },
  {
    name: "Types",
    description: (
      <>
        Numbers and strings are like other languages. Null values can be denoted
        using <code className="language-cpp">kali</code>.{" "}
        <code className="language-cpp">nijam</code> and{" "}
        <code className="language-cpp">tappu</code> are the boolean values.
      </>
    ),
    code: `hi anna
    anna idi a = 10;
    anna idi b = 10 + (15*20);
    anna idi c = "two";
    anna idi d = 'ok';
    anna idi e = kali;
    anna idi f = nijam;
    anna idi g = tappu;
bye anna
    `,
  },
  {
    name: "Built-ins",
    description: (
      <>
        Use <code className="language-cpp">anna cheppu</code> to print anything to
        console.
      </>
    ),
    code: `hi anna
    anna cheppu "Hello World";
    anna idi a = 10;
    {
       anna idi b = 20;
       anna cheppu a + b;
    }
    anna cheppu 5, 'ok', kali , nijam , tappu;
bye anna
    `,
  },
  {
    name: "Conditionals",
    description: (
      <>
        Anna lang supports if-else-if ladder construct. <code className="language-cpp">okavela anna</code> block will execute if condition is <code className="language-cpp">nijam</code>, otherwise one of the subsequently added <code className="language-cpp">lekapothe anna</code> blocks will execute if their respective condition is <code className="language-cpp">nijam</code>, and the <code className="language-cpp">kakapothe anna</code> block will eventually execute if all of the above conditions are <code className="language-cpp">tappu</code>.
      </>
    ),
    code: `hi anna
    anna idi a = 10;
    okavela anna (a < 20) {
      anna cheppu "a is less than 20";
    } lekapothe anna ( a < 25 ) {
      anna cheppu "a is less than 25";
    } kakapothe anna {
      anna cheppu "a is greater than or equal to 25";
    }
bye anna
    `
  },
  {
    name: "Loops",
    description: (
      <>
        Statements inside <code className="language-cpp">anna eppudu varaku</code> blocks are executed as long as a specified condition evaluates to <code className="language-cpp">nijam</code>. If the condition becomes <code className="language-cpp">tappu</code>, statement within the loop stops executing and control passes to the statement following the loop. 
        Use <code className="language-cpp">chalu anna</code> to break the loop and <code className="language-cpp">veredi chudu anna</code> to continue within loop.
      </>
    ),
    code: `hi anna
    anna idi a = 0;
    anna eppudu varaku (a < 10) {
      a += 1;
      okavela anna (a == 5) {
        anna cheppu "lopala nunchi cheptunna ", a;
        veredi chudu anna;
      }
      okavela anna (a == 6) {
        chalu anna;
      }
      anna cheppu a;
    }
    anna cheppu "done";
bye anna
    `
  }

];

export default function Documentation() {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Documentation
          </h2>
          <p className="mt-4 text-gray-300">
            Anna lang is a dynamically typed toy programming language, inspired by Telugu, written in Typescript.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <div className="font-medium text-gray-300">{feature.name}</div>
                <div className="mt-2 text-sm text-gray-200">
                  {feature.description}
                </div>
                <Snippet code={feature.code} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}