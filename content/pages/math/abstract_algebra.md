+++
title = "Abstract algebra"
description = "Some abstract algbera notes."

[taxonomies]
tags = ["math", "notes"]

[extra]
math = true
+++

# Rings

## Ring axioms

A ring is a nonempty set $R$ equipped with two operations (usually written as
addition and multiplication) that satisfy the following axioms. For all
$a,b,c\in R$:
<ol start="1">
<li> (Closure under addition) $a+b\in R$ </li>
<li>
$a+(b+c)=(a+b)+c$
<div class="float-right">(Associative addition)</div></li>
<li>$a+b=b+a$
<div class="float-right">(Commutative addition)</div></li>
<li>There is an element $0_R\in R$ such that $a+0_R=a=0_R+a$
<div class="float-right">(Additive identity/zero element)</div></li>
<li>The equation $a+x=0_R$ has a solution in $R$
<div class="float-right">(Additive inverse)</div></li>
<li>$ab\in R$
<div class="float-right">(Closure under multiplication)</div></li>
<li>$a(bc)=(ab)c$
<div class="float-right">(Associative multiplication)</div></li>
<li>$a(b+c)=ab+bc$ and $(a+b)c=ac+bc$
<div class="float-right">(Distributive multiplication)</div></li>
</ol>

### Commutative ring
A commutative ring is a ring $R$ that satisfies:
<ol start="9">
<li>$ab=ba$ for all $a,b\in R$.
<div class="float-right">(Commutative multiplication)</div></li>
</ol>

### Ring with unity/identity
A ring with unity/identity is a ring $R$ that contains an element $1_R$
satisfying:
<ol start="10">
<li>$a 1_R=a=1_R a$ for all $a\in R$.
<div class="float-right">(Multiplicative identity/identity element)</div></li>
</ol>

### Integral domain
An integral domain is a commutative ring $R$ with identity $1_R\neq 0_R$
that satisfies:
<ol start="11">
<li>Whenever $a,b\in R$ and $ab=0_R$, then $a=0_R$ or $b=0_R$.</li>
</ol>

### Fields
A field is a commutative ring $R$ with identity $1_R\neq0_R$ that satisfies:
<ol start="12">
<li>For each $a\neq 0_R$ in $R$, the equation $ax=1_R$ has a solution in
$R$.</li>
</ol>

### Cartesian product of rings
<!--Theorem 3.1-->
Let $R$ and $S$ be rings. Define addition and multiplication on the Cartesian
product $R\times S$ by:

$(r,s)+(r',s')=(r+r',s+s')$ and $(r,s)(r',s')=(rr',ss')$
<!--$$(r,s)+(r',s')=(r+r',s+s')\text{ and }(r,s)(r',s')=(rr',ss')$$-->

Then $R\times S$ is a ring. If $R$ and $S$ are both commutative, then so is
$R\times S$. If both $R$ and $S$ have an identity (additive and
multiplicative?), then so does $R\times S$.

### Subrings
<!--Theorem 3.2-->
Suppose that $R$ is a ring and that $S$ is a subset of $R$ such that
<ol type="i">
<li>$S$ is closed under addition: if $a,b\in S$, then $a+b\in S$,</li>
<li>$S$ is closed under multiplication: if $a,b\in S$, then $ab\in S$,</li>
<li>$0_R\in S$,</li>
<li>if $a\in S$, then the solution of the equation $a+x=0_R$ is in $S$.</li>
</ol>
Then $S$ is a subring of $R$.

## Units and zero divisors

An element $a$ in a ring $R$ with identity is called a unit if there exists
$u\in R$ such that $au=1_R=ua$. In this case the element $u$ is called the
(multiplicative) inverse of $a$ and is denoted $a^{-1}$.

An element $a$ in a ring $R$ is a zero divisor provided that:
1. $a\neq 0_R$.
2. There exists a nonzero element $c$ in $R$ such that $ac=0_R$ or $ca=0_R$

## Ring properties

<!--Theorem 3.4-->
### Cancelation in addition
If $a+b=a+c$ in a ring $R$, then $b=c$.

<!--Theorem 3.5-->
### Zero product, distributivity
For any elements $a$ and $b$ of a ring $R$:
1. $a\cdot 0_R=0_R=0_R\cdot a$. In particular, $0_R\cdot 0_R=0_R$.
2. $a(-b)=-ab$ and $(-a)b=-ab$.
3. $-(-a)=a$.
4. $-(a+b)=(-a)+(-b)$.
5. $-(a-b)=-a+b$.
6. $(-a)(-b)=ab$.
7. If $R$ has an identity, then $(-1_R)a=-a$.

<!--Theorem 3.6-->
### Subrings
Let $S$ be a nonempty subset of a ring $R$ such that

1. $S$ is closed under subtraction (if $a,b\in S$, then $a-b\in S$);
2. $S$ is closed under multiplication (if $a,b\in S$, then $ab\in S$).

Then $S$ is a subring of $R$.

<!--Theorem 3.7-->
### Cancelation in multiplication
Cancellation is valid in any integral domain $R$: If $a\neq 0_R$ and $ab=ac$ in
$R$, then $b=c$.

<!--Theorem 3.8-->
### Fields as integral domains
Every field $F$ is an integral domain.

<!--Theorem 3.9-->
### Finite integral domains as fields
Every finite integral domain $R$ is a field.

---

# Isomorphisms & Homomorphisms

To summarize terms:

*Injective* | All domain values mapped
*Non-injective* | Not all domain values mapped
*Surjective* | All co-domain values represented
*Non-surjective* | Not all co-domain values represented
*Bijective* | Both injective and surjective

## Isomorphisms

Suppose $R$ and $S$ are rings and $\phi$ is a function that maps $R$ to $S$
($\phi:R\rightarrow S$ ). $\phi$ is an isomorphism if for all $a,b\in R$:

1. $\phi$ is injective,
1. $\phi$ is surjective,
1. $\phi(a+b)=\phi(a)+\phi(b)$ and $\phi(a\cdot b)=\phi(a)\cdot\phi(b)$ for all
   $a,b\in R$.

Another way of stating bijection would be:

<ol>
<li>
Distinct elements of $R$ must get distinct new labels
<p><center>
If $r\neq r'$ in $R$, then $\phi(r)\neq\phi(r')$ in $S$
</center></p>
</li>
<li>
Every element of $S$ must be the label of some element in $R$
<p><center>
For each $s\in S$, there is an $r\in R$ such that $\phi(r)=s$
</center></p>
</li>
</ol>

Intuitively for a function to be bijective an inverse isomorphic function must
also exist.

## Homomorphisms

However many functions exists which satisfy the third condition but are not
bijective. These can be called homomorphisms. Thus every isomorphism is really a
homomorphism with bijection.

<!--Theorem 3.10-->
## Properties of homomorphisms

Letting $\phi:R\rightarrow S$ be a homomorphism of rings, then

<ol>
<li>$\phi(0_R)=0_S$,</li>
<li>$\phi(-a)=-\phi(a)$ for every $a\in R$,</li>
<li>$\phi(a-b)=\phi(a)-\phi(b)$ for all $a,b\in R$.</li>
</ol>

If $R$ is a ring with identity and $\phi$ is surjective, then

<ol start="4">
<li>$S$ is a ring with identity $1_S=\phi(1_R)$,</li>
<li>Whenever $u$ is a unit in $R$, then $\phi(u)$ is a unit in $S$ and
$\phi(u)^{-1}=\phi(u^{-1})$.</li>
</ol>

---

<!-- ....................................................................... -->
# Polynomial rings

Fix $F[x]$ a field for this section.

{% include tooltip.html text="Definition ?" content="
$a(x),b(x)\in F[x]$ are **associates** if $a(x)=cb(x)$
for some non-zero $c\in F[X]$, such that:

$$
a(x)=cb(x) \Leftrightarrow c^{-1}a(x)=b(x)
$$
" %}

{% include tooltip.html text="Definition ?" content="
$a(x)\in F[x]$ is **irreducible** if $\deg(a(x))>0$ (positive) and if whenever
$a(x)=b(x)c(x)$ then $b(x)$ or $c(x)$ is a unit.
" %}


{% include tooltip.html text="Theorem 4.12" content="
The following are equivalent:

1. $a(x)\in F[x]$ is irreducible,
1. Whenever $a(x)\mid b(x)c(x)$ either $a(x)\mid b(x)$ or $a\mid c(x)$,
1. We cannot write $a(x)=b(x)c(x)$ where $b(x)$ and $c(x)$ both have positive
   degree.
" %}

### Uniqueness of factorization

{% include tooltip.html text="Theorem 4.14" content="
Every non-constant $a(x)\in F[x]$ can be written in the form:

$$
a(x)=p_1(x)p_2(x)\cdots p_n(x)
$$

Where $\forall i\in\N$, $p_i(x)$ is an irreducible polynomial.
Moreover, this expression is unique up-to reordering and unit multiples.
" %}

# Groups

$\circ$ | $I$   | $r_1$ | $r_2$ | $r_3$ | $R_1$ | $R_2$
------- | ----- | ----- | ----- | ----- | ----- | -----
    $I$ | $I$   | $r_1$ | $r_2$ | $r_3$ | $R_1$ | $R_2$
  $r_1$ | $r_1$ |
  $r_2$ | $r_2$ |
  $r_3$ | $r_3$ |
  $R_1$ | $R_1$ |
  $R_2$ | $R_2$ |

