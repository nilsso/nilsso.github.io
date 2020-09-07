+++
title = "Atomic Density Research"
description = "Notes for research project into atomic density of algebraic congruence monoids."

[taxonomies]
tags = ["math", "notes", "research"]

[extra]
math = true
+++

{% math(preable=true) %}
$$
\gdef\lengthset{\mathscr{L}}
\gdef\unitsof#1{#1^{\times}}
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

# Preliminary Algebra Notes

For a non-empty set $S$ and associative binary operation $\ast$, the association $M=(S,\ast)$
is called a *monoid* if $S$ is closed under the operation $\ast$, and there exists an
identity element $e\in S$ such that for all $a\in S$, $a\ast e=e=e\ast a$.

A monoid is called *commutative/abelian* if its operation is commutative.

A *submonoid* is a subset of the elements of a monoid that in themselves form a monoid under the
same operation.

A monoid $(M,\ast)$ is *cancellative* if for all $a,b,c\in M$ we have:
- $a\ast b=a\cdot c$ always implies $b=c$, and
- $b\ast a=c\cdot a$ always implies $b=c$.

For a *commutative cancellative* monoid $M$,
if for some $x,y\in M$ we have $x|y$ ($x$ divides $y$),
then there must exist a $z\in M$ such that $xz=y$.

A *unit* of a monoid $M$, similar to a unit of a ring, is an element $x\in M$ for which there
exists an $x'\in M$ such that $x\ast x'=e$.

**Going forward, we'll assume $M$ to be a commutative cancellative monoid, and let $\unitsof M$ be
the set of units of $M$.**

A non-unit $x\in M$ (that is $x\in M\setminus\unitsof M$)
is *irreducible*/an *atom* if whenever $x=yz$ then either $y\in\unitsof M$
or $z\in\unitsof M$ (one is a unit, but not both).

A non-unit $x\in M$ is *prime* if whenever $x|yz$ for some $y,z\in M$, either $x|y$ or $x|z$
(divides one, but not the other). An element being prime implies it is irreducible.

A monoid $M$ is *atomic* if every non-unit $x$ can be written as a product of irreducibles of $M$.

The *unique factorization monoid* $(\N,\times)$ is atomic in that every integer greater than 1 can
be written as a product of powers of irreducibles (or more specifically here primes) that is unique
up to the order of the irreducibles, as in the Fundamental Theorem of Arithmetic.

Since $M_{a,b}$ is a submonoid of $(\N,\times)$, it is also atomic.

**Going forward, all monoids will be assumed to be atomic.**

A monoid $M$ is *factorial* if every non-unit $x\in M$ has a unique factorization into
irreducibles of $M$.

## Arithmetic congruence monoids

Given $a,b\in\N$ with $0<a\le b$ and $a^2\equiv a\bmod b$,
define the *arithmetic congruence monoid* of $a$ and $b$:
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
