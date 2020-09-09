+++
title = "Atomic Density Research"
description = "Notes for research project into atomic density of algebraic congruence monoids."

[taxonomies]
tags = ["math", "notes", "research"]

[extra]
math = true
+++

# Preliminary Algebra Notes

For a non-empty set $S$ and associative binary operation $\ast$, the association $M=(S,\ast)$
is called a **monoid** if $S$ is closed under the operation $\ast$, and there exists an
identity element $e\in S$ such that for all $a\in S$, $a\ast e=e=e\ast a$.

A monoid is called **commutative/abelian** if its operation is commutative.

A **submonoid** is a subset of the elements of a monoid that in themselves form a monoid under the
same operation.

<!-- more -->

{% math(preable=true) %}
$$
\gdef\lengthset{\mathscr{L}}
\gdef\atomset{\mathscr{A}}
\gdef\unitsof#1{#1^{\times}}
\gdef\nonunitsof#1{#1\setminus\unitsof{#1}}
\gdef\fcm{\mathscr F}
$$
{% end %}

<script type="text/javascript">
const acm_elements = (a, b, l) => {
    if (a == 1) {
        return [...Array(l).keys()].map(q => a+q*b);
    } else {
        return [1].concat([...Array(l-1).keys()].map(q => a+(q+1)*b));
    }
};
const acm_string = (a, b, l) => {
    var valid = false;
    var s;
    if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(l)) {
        s = String.raw`\exists x\in\{a,b,l\}\Rightarrow\not\in\N`;
    } else if (0 >= a) {
        s = String.raw`0\not< a`;
    } else if (a > b) {
        s = String.raw`a\not\leq b`;
    } else if (a**2 % b != a % b) {
        s = String.raw`a^2\not\equiv a\bmod b`;
    } else {
        valid = true;
        s = String.raw`
            M_{${a},${b}}
        = \{n\in\N:n\equiv ${a}\bmod ${b}\}${a != 1 ? String.raw`\cup\{1\}` : ""}
        = \{${acm_elements(a, b, l).join()},\ldots\}`;
    };
    return [valid, s];
}
</script>

A monoid $(M,\ast)$ is **cancellative** if for all $a,b,c\in M$ we have:
- $a\ast b=a\cdot c$ always implies $b=c$, and
- $b\ast a=c\cdot a$ always implies $b=c$.

For a **commutative cancellative** monoid $M$,
if for some $x,y\in M$ we have $x\mid y$ ($x$ divides $y$),
then there must exist a $z\in M$ such that $xz=y$.

This describes divisibility within the set of the monoid $M$.
It may be important to denote divisibility within some specific set or monoid $S$,
and so we write $x\mid_S y$.
For example, if $x\mid y$ and $x,y\in\N$ then we could also write $x\mid_\N y$.

A **unit** of a monoid $M$, similar to a unit of a ring,
is an element $x\in M$ for which there exists an $x'\in M$ such that $x\ast x'=e$.

**Going forward, we'll assume $M$ to be a commutative cancellative monoid, and let $\unitsof M$ be
the set of units of $M$.**

A non-unit $x\in M$ (that is $x\in\nonunitsof M$)
is **irreducible**/an **atom** if whenever $x=yz$ then either $y\in\unitsof M$
or $z\in\unitsof M$ (one is a unit, but not both).
We write the $\atomset(M)$ for the set of atoms of $M$.

A non-unit $x\in M$ is **prime** if whenever $x\mid yz$ for some $y,z\in M$,
either $x\mid y$ or $x\mid z$ (divides one, but not the other).
An element being prime implies it is an atom.

A monoid $M$ is called **atomic** if every non-unit $x$ can be written as a product of atoms of $M$.

The **unique factorization monoid** $(\N,\times)$ is atomic in that every integer greater than 1 can
be written as a product of powers of atoms (or more specifically here primes) that is unique
up to the order of the atoms, as in the Fundamental Theorem of Arithmetic.

Since $M_{a,b}$ is a submonoid of $(\N,\times)$, it is also atomic.

**Going forward, all monoids will be assumed to be atomic.**

A monoid $M$ is **factorial** if every non-unit $x\in M$ has a unique factorization into
atoms of $M$. $M$ is factorial if and only if all of its atoms are prime.

For a non-unit $x\in\nonunitsof M$, we define
{% math() %}
$$
\lengthset(x)
= \{n:\text{there are }\alpha_1,\ldots,\alpha_n\in\atomset(M)\text{ with }x=\alpha_1\cdots\alpha_n\},
$$
{% end %}
which we call the **length set** of $x$. These sets collected together is
{% math() %}
$$
\lengthset(M)
= \{\lengthset(x):x\in\nonunitsof M\},
$$
{% end %}
The length set of $M$.

The ratio $\rho(x)=\sup\lengthset(x)/\inf\lengthset(x)$ is called the **elasticity** of $x$,
and the elasticity of the monoid is defined by
{% math() %}
$$
\rho(M)
= \sup\{\rho(x):x\in\nonunitsof M\}.
$$
{% end %}

If $\rho(M)=1$ then $M$ is called **half-factorial**. For example, $M_{1,4}$ is half-factorial in
that any reducible $x$ has factorization(s) of length 2 ($\rho(x)=2/2=1$)
and any atom $u$ has $\rho(u)=1$, thus $\rho(M)=1$.

A monoid $M$ is said to be **fully elastic** if for every rational $q$ with $1\le q<\rho(M)$ there
exists an $x\in\nonunitsof M$ such that $\rho(x)=q$;
if there exists an $x\in\nonunitsof M$ such that $\rho(M)=\rho(x)$ then the elasticity of $M$ is
said to be **accepted**.

Given $x\in\nonunitsof M$ we write its length set in increasing order
{% math() %}
$$
\lengthset(x)
= \{n_1,n_2,\ldots,n_k\},
$$
{% end %}
where $n_i<n_{i+1}$ for $i\le i\le k-1$. The **delta set** of $x$ is defined by
{% math() %}
$$
\Delta(x)
= \{ n_1 - n_{i-1}: 2\le i\le k \},
$$
{% end %}
and the delta set of $M$ by
{% math() %}
$$
\Delta(M)
= \bigcup_{x\in\nonunitsof M}\Delta(x).
$$
{% end %}

Let $M$ and $N$ be commutative, cancellative, atomic monoids, and $\sigma:M\to N$ a monoid
homomorphism. The map $\sigma$ is a **transfer homomorphism** if:

- $\sigma(u)\in\unitsof N$ for any $u\in\unitsof M$.
- $\sigma(x)\notin\unitsof N$ for any $x\notin\unitsof M$.
- For any $a\in N$ there exists a unit $u\in\unitsof N$ and an $x\in M$ such that $\sigma(x)=ua$.
- Whenever $x\in M$ and $a,b\in N$ such that $\sigma(x)=ab$, there exists $y,z\in M$ and units
  $u,v\in\unitsof N$ such that $x=yz$, $\sigma(y)=ua$, and $\sigma(z)=vb$.

For a set $P$, the **free commutative monoid** $\fcm(P)$ **TODO: DEFINE**

Let $M$ be a monoid. A **divisor theory** for $M$ is a free commutative monoid $\fcm(P)$ and a
monoid homomorphism $\sigma:M\to\fcm(P)$ satisfying the following properties:

- $\sigma(u)=1$ for any $u\in\unitsof M$.
- $\sigma(x)\ne 1$ for any $x\notin\unitsof M$.
- For any non-units $x,y\in M$, $\sigma(x)\mid\sigma(y)$ implies $x\mid y$.
- For every $p\in P$, there is a finite subset $X\subseteq M$ such that $p=\gcd(\sigma(X))$.

A monoid $M$ which has a divisor theory is said to be a **Krull monoid**. The generators $P$ are said
to be the **prime divisors** of $M$, and the quotient monoid $\fcm(P)/\sigma(M)$ is known as the
**class group** of $M$.

## Regular arithmetic congruence monoids

Given $a,b\in\N$ with $0<a\le b$ and $a^2\equiv a\bmod b$,
define the **arithmetic congruence monoid** of $a$ and $b$:
{% math() %}
$$
M_{a,b}
:= \{n\in\N: n\equiv a\bmod b\}\cup\{1\}
= \{1,a,a+b,a+2b,\ldots\}.
$$
{% end %}

<div id="acm-checker" class="card">
    <div class="card-header">
        $M_{a,b}$ ACM Tester (where $l$ is the number of elements to generate)
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">
            <div class="form-row">
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">$a$</span>
                        </div>
                        <input id="acm-checker-a" class="form-control" type="text">
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">$b$</span>
                        </div>
                        <input id="acm-checker-b" class="form-control" type="text">
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">$l$</span>
                        </div>
                        <input id="acm-checker-l" class="form-control" type="text" placeholder="4">
                    </div>
                </div>
                <div class="col">
                    <button id="acm-checker-btn" class="btn btn-primary btn-block">Go</button>
                </div>
            </div>
        </li>
        <li id="acm-checker-res" class="list-group-item text-center"></li>
    </ul>
</div>
<script>
const danger = "list-group-item-danger";
const res = $("#acm-checker-res");
const ele = res[0];
$("#acm-checker-btn").click(() => {
    const a = parseFloat($("#acm-checker-a").val());
    const b = parseFloat($("#acm-checker-b").val());
    const l = parseFloat($("#acm-checker-l").val() || 4);
    const [valid, s] = acm_string(a, b, l);
    if (!valid) {
        res.addClass(danger);
    } else {
        res.removeClass(danger);
    }
    katex.render(s, ele);
});
</script>

<!-- Lemma 3.1 -->
Let $x,y,z\in\N$ such that $x=yz$. If $x,y\in M_{1,b}$ then $z\in M_{1,b}$.

Said another way, if for $x,y\in M_{1,b}$ we have that $x\mid_\N y$,
then $x\mid_{M_{1,b}}y$.
From this we say that $M_{1,b}$ is **saturated** in $\N$.

In contrast, $M_{b,b}$ is not since, for example,
$2\mid_\N 6$ but $2\nmid_{M_{2,2}} 6$ since $6\notin M_{2,2}$.

Let $P=\\{ p\in\N: p\text{ is prime and }\gcd(p,b)=1 \\}$,
and $\fcm(P)$ the free commutative monoid generated by $P$.

(For example, let $b=3$.
Although $2$ it is prime, since $4\in M_{1,3}$ and $\gcd(2,4)=2\ne 1$, therefore $2\notin P$.
I suppose it might be useful in the future to denote $P_b$.)

<!-- Theorem 3.2 -->
Let $P=\\{ p\in\N: p\text{ is prime and }\gcd(p,b)=1 \\}$.
The free commutative monoid $\fcm(P)\le(\N,\times)$ and
the homomorphism $\iota:M_{1,b}\hookrightarrow\fcm(P)$ form a divisor theory for $M_{1,b}$.
Thus $M_{1,b}$ is Krull.
(The hooked arrow $\hookrightarrow$ is to denote that $\iota$ is an [inclusion map][],
symbolizing that $M_{1,b}$ is a subset of $\fcm(P)$.)

[inclusion map]: https://en.m.wikipedia.org/wiki/Inclusion_map

The ACM class $M_{1,b}$ being Krull is an instance of a general theorem that all saturated
submonoids of factorial monoids are Krull, and all other ACMs besides $\N$ are not Krull.
For ACMs that are multiples (as in $M_{b,b}$, $M_{b,2b}$, etc.), this is due to the correspondence
with numerical monoids and translates of $(\N^n,+)$, both of which are not Krull.

