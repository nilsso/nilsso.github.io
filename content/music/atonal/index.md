+++
title = "Atonal muic theory"

[extra]
math = true
+++

Analyzing post-tonal or atonal music is a far-cry from classical musical analysis of functional
harmony. If you've studied classical theory, the familiar jargon (tonic chords, dominant chords,
tonicization, modulation, etc.) is done away with. In its stead we are left with numbers, sets, and
transformations; entities that are deeply rooted in mathematics. So before discussing anything about
music, it's more than appropriate to familiarize ourselves with this math that will be in the
background of all post-tonal analysis.

<!-- more -->

In particular we will try to understand modular arithmetic, a subject in abstract algebra, but only
the sorts of statements as in the following:

- “$a$ is congruent/equivalent to $b$ modulo $n$”,
- “$[a]_n$ is the congruence class of $a$ modulo $n$.”

If we understand these statements, then we can understand pitch classes.

{% box() %}
Whenever I set text with a gray border to the left, like this, I'll either be summarizing some
mathematical notation and what it means, or going deeper into some of the math previously
introduced.
{% end %}

---

# Abstract Algebra and Modular arithmetic

## Quotient-remainder theorem

Chances are you know about Euclidean division.
For example, $1\div 2$ is 1 divided by 2 (or 2 dividing 1) and represents symbolically the number of
times 2 goes into 1 plus some remainder.
What might not be as familiar are the two parts of Euclidean division taken separately:
the *quotient* and the *remainder*.

{% thm(type="t", name="Quotient-Remainder") %}
Let $a$ and $b$ both be integers.

- The quotient of $a\div b$ is $q$, the number of multiples of $b$ that go into $a$
- The remainder of $a\div b$ is $r=a-qb$

We can then express $a$ as the sum $a = qb + r$.
{% end %}

{% box() %}
As an aside on notation, mathematicians are often lazy. The "let" statement above could be
alternatively expressed "fix $a,b\in\Z$", where the symbol $\in$ means that $a$ and $b$ are
variables with values taken from $\Z$, where $\Z=\\{\ldots,-2,-1,0,1,2,\ldots\\}$ is the set
containing all integers.

The $\\{\ldots\\}$ notation is called set-builder notation, and is a way to group things, in this
case integers. A set can be finite or infinite, for example: $\\{0,1,2\\}$ is a finite set, while
$\\{1,2,3,\ldots\\}$ is an infinite set containing all of the positive integers, commonly denoted
$\Z^+$ or $\N$. We can also define sets using rules, as for example again the positive integers can
also be expressed as $\\{d\in\Z:d>0\\}$, meaning the set of any integer $d$ as long as $d$ is
greater than zero.
{% end %}

Here's a few example of quotient-remainder theorem when $b=12$ for a few different values of $a$:

- If $a=12$, then $12=(1)12+(0)$.
- If $a=1$, then $1=(0)12+(1)$.
- If $a=-5$, then $-5=(0)12+(-5)=(-1)12+(7)$.

## Modular congruence and congruence classes

With the last of the examples above you might notice that there were written two different ways to
express -5 as a sum of a multiple of 12 and a remainder. But these aren't the only ways, in-fact
there is an infinite number of ways to express -5 using quotient remainder theorem since for any
arbitrary quotient $q$ there is a unique remainder $r$ such that $a=qb+r$:

{% katex() %}
\begin{alignedat}{3}
    -5 &= & (-2)12 &+ & ( 19)& \\
    -5 &= & (-1)12 &+ &   (7)& \\
    -5 &= &  (0)12 &+ &  (-5)& \\
    -5 &= &  (1)12 &+ & (-17)& \\
    -5 &= &  (2)12 &+ & (-29)&
\end{alignedat}
{% end %}

What we're getting at is that these remainders are all equal to -5 when we add some multiple of 12,
and we call these remainders *congruent/equivalent* to one-another *modulo 12*.

{% thm(type="d" name="Congruence/equivalence") %}
Fix $a$, $b$ and $n$ all be integers where $a$ and $b$ are congruent modulo $n$.
We express this congruence: $a\equiv b\bmod n.$
{% end %}

{% box() %}
The $\equiv$ symbol means equivalence/congruence and is not the same as equality. For example, -5
and 7 are not equal to one-another, but they are equivalent/congruent to one-another modulo 12:

<script type="math/tex;mode=display">
-5 \ne 7 \text{, but } -5 \equiv 7\bmod 12.
</script>

Also note that whenever we "fix" variables, they are completely new meanings to the variables, and
no other variables are assumed to exist. In the definition of congruence, the variables $a$ and
$b$ are unrelated to the $a$ and $b$ used in the definition of the quotient-remainder theorem.
{% end %}

Here are a couple examples of modular equivalence over the divisor $2$:

- $0 \equiv 0 \bmod 2$ since $2$ divides $1$ zero times with a remainder of $0$,
- $1 \equiv 1 \bmod 2$ since $2$ divides $1$ zero times with a remainder of $1$,
- $2 \equiv 0 \bmod 2$ since $2$ divides $2$ once with a remainder of $0$,
- $3 \equiv 1 \bmod 2$ since $2$ divides $2$ once with a remainder of $1$.

And here are a couple examples of modular equivalence over the divisor $12$:

- $11 \equiv 11 \bmod 12$ since $12$ divides $11$ zero times with a remainder of $11$,
- $12 \equiv 0 \bmod 12$ since $12$ divides $12$ once with a remainder of $0$,
- $13 \equiv 1 \bmod 12$ since $12$ divides $12$ once with a remainder of $1$.

In the example with $-5=(0)12+(-5)=(-1)12+(7)$ we saw that there is an infinite amount of
remainders congruent to $7 \bmod 12$. Instead of listing them out (which might take a while, since
there's an infinite number of them), we call this set of congruent integers the *congruence class*
of 5 modulo 12, and denote it:

{% katex() %}
[5]_{12} = \{\ldots,19,7,-5,-17,-29,\ldots\}.
{% end %}

{% thm(type="d" name="Congruence class") %}
Fix an integer $a$, and another integer $n$ the divisor.
We call $[a]_n$ the congruence class of $a$ modulo $n$, and denote it:

<script type="math/tex;mode=display">
[a]_n
= \{\ldots,-1\cdot n+a,0\cdot n+a,1\cdot n+a,\ldots\}
= \{b:b\equiv a\bmod n\}.
</script>
{% end %}

What is important to see though is that there is a finite number of congruence classes with respect
to equivalence. For example, when 12 is our divisor, there's exactly 12 distinct congruence classes:

{% katex() %}
[0]_{12},[1]_{12},\ldots,[10]_{12},[11]_{12}.
{% end %}

And while there are an infinite number of ways to denote congruence classes:

{% katex() %}
\begin{gathered}
\ldots = [-12]_{12} = [0]_{12} = [12]_{12} = [24]_{12} = \ldots \\
\ldots = [-11]_{12} = [1]_{12} = [13]_{12} = [25]_{12} = \ldots \\
\ldots = [-10]_{12} = [2]_{12} = [14]_{12} = [26]_{12} = \ldots
\end{gathered}
{% end %}

We stick with the *canonical* representations of them: $[a]_n$ where $0\le a < n$.

{% box() %}
As a bonus, $\Z_n$ is the set of congruence classes of integers modulo $n$, which is a finite
set, with respect to equivalence, of $n$ elements where every element is itself an infinite set:

<script type="math/tex;mode=display">
\Z_n = \{[0]_n,[1]_n,[2]_n,\ldots,[n-1]_n\} = \{[a]_n:0\le a\lt n\}.
</script>

Math is neat 🤯
{% end %}

With all this out of the way, now we can now see how atonal music theory and math relate.

---

# Atonal-Theory

## Pitch classes

If you are familiar with music, then you know that there are 12 distinct pitches, each with various
octaves. For example, middle C lies at the center of a piano and is also the note called C4, and C3
and C5 lie one octave below and above C4 respectively. However several notes may be indistinct to
one-another, that is they are *enharmonic*. For example the notes D-sharp 2 and E-flat 2 are
enharmonic.

If you are familiar with music theory, then you also know that a C-major chord is called a C-major
chord regardless of what octave of C it is built upon. Nevertheless octaves of the same pitch are
still distinct; C4 and C5 are different notes on the keyboard or on a music staff, just as 0 is not
equal to 12.

On the other hand, different octaves of C are *equivalent* to one-another in that they are all C.

{% thm(type="d" name="Pitch class") %}
A pitch class is a collection of pitches related by an integer multiple of an octave and/or
enharmonic equivalence.
{% end %}

With this definition we can draw a relation between music and modular arithmetic by associating each
pitch class with a congruence class over the integers modulus 12. But since, as far as music is
concerned, we will always be working over the integers modulus 12. Thus we can simplify notation
going forward by writing $0$ instead of $[0]\_{12}$, $1$ instead of $[1]_{12}$, etc. (values of
$\Z\_{12}$), **with the express understanding that these values, as well as the value resulting from
any operation on these values, is equivalent to some canonical representation**. We may also
*mangle* notation by using the equality operator $=$ in place of the equivalence operator $\equiv$.

<table>
<colgroup>
<col span='2'><col class='left-border'>
</colgroup>
<thead>
<tr>
<th>Pitch class</th>
<th>Congruence class/value </th>
<th>Pitch class</th>
<th>Congruence class/value </th>
</tr>
</thead>
<tbody>
<tr>
<td>$\text C$</td>
<td>$[0]_{12} \Rightarrow 0$</td>
<td>$\text F\sharp/\text G\flat$</td>
<td>$[6]_{12} \Rightarrow 6$</td>
</tr>
<tr>
<td>$\text C\sharp/\text D\flat$</td>
<td>$[1]_{12} \Rightarrow 1$</td>
<td>$\text G$</td>
<td>$[7]_{12} \Rightarrow 7$</td>
</tr>
<tr>
<td>$\text D$</td>
<td>$[2]_{12} \Rightarrow 2$</td>
<td>$\text G\sharp/\text A\flat$</td>
<td>$[8]_{12} \Rightarrow 8$</td>
</tr>
<tr>
<td>$\text D\sharp/\text E\flat$</td>
<td>$[3]_{12} \Rightarrow 3$</td>
<td>$\text A$</td>
<td>$[9]_{12} \Rightarrow 9$</td>
</tr>
<tr>
<td>$\text E$</td>
<td>$[4]_{12} \Rightarrow 4$</td>
<td>$\text A\sharp/\text B\flat$</td>
<td>$[10]_{12} \Rightarrow 10$</td>
</tr>
<tr>
<td>$\text F$</td>
<td>$[5]_{12} \Rightarrow 5$</td>
<td>$\text B$</td>
<td>$[11]_{12} \Rightarrow 11$</td>
</tr>
</tbody>
</table>

Here are a few examples of values, either on their own or resulting from an operation,
and their corresponding pitch classes:

Value                                  | Pitch class
-------------------------------------- | -------------------------
$1=1$                                  | $\text C\sharp$
$12=0$ (since $12\equiv 0\bmod 12$)    | $\text C$
$13=1$ (since $13\equiv 1\bmod 12$)    | $\text C\sharp$
$1+1=2$                                | $\text D$
$1+10=11$                              | $\text B$
$1+11=0$ (since $12\equiv 0 \bmod 12$) | $\text C$
$3-8=7$ (since $-5\equiv 7 \bmod 12$)  | $\text G$

<div class="box">
In math parlance we can formalize this transformation of the pitch classes into integers
by defining a map.

{% thm(type="d" name="Map") %}
A map $f:A\mapsto B$ is a function $f$ such that for every $a\in A$ there is a unique $f(a)\in B$,
and the sets $B$ and $A$ are called the image and preimage (or range and domain) respectively.
The names map and function are largely used interchangeably.
{% end %}

Fix $P$ the set of musical pitch classes.
Let $g:P\mapsto\Z$ be the map from the pitch classes to congruence classes over the
integers modulus 12, which we define:

{% katex() %}
\begin{gathered}
g(\text{C}) = [0]_{12} \\
g(\text{C}\sharp/\text{D}\flat) = [1]_{12} \\
\vdots \\
g(\text{A}\sharp/\text{B}\flat) = [10]_{12} \\
g(\text{B}) = [11]_{12}
\end{gathered}
{% end %}

It is worth pointing out that this map is *bijective*.

{% thm(type="d" name="Injective, surjective, bijective") %}
A map $f:A\mapsto B$ is called injective, or "one-to-one", if whenever $f(a)=f(b)$ also $a=b$.
In other words, every element in the preimage is mapped to a unique value in the image.

A map $f:A\mapsto B$ is called surjective, or "onto", if for every $b\in B$ there is an element
$a\in A$ such that $f(a)=b$.
In other words, every element in the image is mapped to by $f$, from at least one element in the
preimage.

A map is called bijective if it is both injective and surjective
(a bijective map is also called a bijection).
A function $f$ admits an inverse function $f^{-1}$ if and only if it is bijective.
{% end %}

Since $g$ is a bijection, we can map freely between the pitch classes and the congruence classes.
In fact this map is an *isomorphism* between the two sets, but I'll leave it at that and skip
the necessary definitions and explanations for some other time.
</div>

Pitch classes will allow us to study music in a mathematical way, where we will quantify distances
between notes (intervals), and look at relations between set of notes in terms of operations, i.e.
transposition and inversion.

---

<div class='vf helper' data='random-3-2'></div>

## Intervals

Intervals are nothing new to anyone learned in music theory. However, instead of identifying them by
names like major third, perfect fourth, or minor sixth, we identify them by the value of the
semitone distance between pitches.

Interval name | Value
-- | --
Unison | 0
Minor second/augmented unison | 1
Major second | 2
Minor third | 3
Major third | 4
Perfect fourth | 5
Augmented fourth/diminished fifth | 6
Perfect fifth | 7
Minor sixth | 8
Major sixth | 9
Minor seventh | 10
Major seventh | 11
Octave | 12

## Normal and prime forms

