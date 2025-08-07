<h1 align="center">Anna Lang</h1>
<p align="center">

<a href="https://github.com/sdfaheemuddin/anna-lang/"><img alt="Build" src="https://img.shields.io/badge/github-sdfaheemuddin/anna--lang-orange"/></a>
<a href="https://bhailang.js.org/"><img alt="Build" src="https://img.shields.io/badge/website-annalang.js.org-orange"/></a>
<a href="https://www.npmjs.com/package/bhailang"><img alt="Build" src="https://img.shields.io/badge/npm-annalang-orange"/></a>

</p>
<p align="center">
  This is official repository for anna-lang.<br><br>
  <b>Anna lang is a toy programming language written in Typescript inspired by Bhai lang.</b>
</p>
<br>

<h2 align="center">Installation</h2>

```
npm i -g annalang
```

<h2 align="center">Usage</h2>

<h4 align="left">Create a new file (<code>test.anna</code>)</h4>


<h4 align="left">Edit the file with a text editor.
You can also try out your code on <a href="https://bhailang.js.org/#playground">Anna Lang PlayGround</a></h4>

```
hi anna
  // Write code here
bye anna

```

<h4 align="left">Run</h4>

```
annalang test.anna
```

<h4 align="left">Output</h4>

```
Keka Anna 
```

<h2 align="center">Documentation</h2>

<h3 align="center">General</h3>
<p align="center"><code>hi anna</code> is the entrypoint for the program and all program must end with <code>bye anna</code>. Anything outside of it will be ignored.</p>

```

This will be ignored

hi anna
// Write code here
bye anna

This too
```

<h3 align="center">Variables</h3>
<p align="center">Variables can be declared using <code>anna idi</code>.</p>

```

hi anna
    anna idi a = 10;
    anna idi b = "two";
    anna idi c = 15;
    a = a + 1;
    b = 21;
    c *= 2;
bye anna
```

<h3 align="center">Types</h3>
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>nalla</code>. <code>sahi</code> and <code>galat</code> are the boolean values.</p>

```

hi anna
    anna idi a = 10;
    anna idi b = 10 + (15*20);
    anna idi c = "two";
    anna idi d = 'ok';
    anna idi e = kali;
    anna idi f = nijam;
    anna idi g = tappu;
bye anna
```

<h3 align="center">Built-ins</h3>
<p align="center">Use <code>anna cheppu</code> to print anything to console.</p>

```

hi anna
  anna cheppu "Hello World";
  anna idi a = 10;
  {
      anna idi b = 20;
      anna cheppu a + b;
  }
  anna cheppu 5, 'ok', kali , nijam , tappu;
bye anna
```

<h3 align="center">Conditionals</h3>
<p align="center">Annalang supports if-else-if ladder construct , <code>okavela anna</code> block will execute if condition is <code>nijam</code>, otherwise one of the subsequently added <code>lekapothe anna</code> blocks will execute if their respective condition is <code>nijam</code>, and the <code>kakapothe anna</code> block will eventually execute if all of the above conditions are <code>tappu</code>

```

hi anna
  anna idi a = 10;
  okavela anna (a < 20) {
    anna cheppu "a is less than 20";
  } lekapothe anna ( a < 25 ) {
    anna cheppu "a is less than 25";
  } kakapothe anna {
    anna cheppu "a is greater than or equal to 25";
  }
bye anna
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>anna eppudu varaku</code> blocks are executed as long as a specified condition evaluates to <code>nijam</code>. If the condition becomes <code>tappu</code>, statement within the loop stops executing and control passes to the statement following the loop. Use <code>chalu anna</code> to break the loop and <code className="language-cpp">veredi chudu anna</code> to continue within loop.</p>


```

hi anna
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
```

<h2 align="center">Original Bhai-lang</h2>
<p align="center">You can explore the bhailang <a href="https://github.com/DulLabs/bhai-lang" target="_blank">here</a>.</p>