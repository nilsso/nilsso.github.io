+++
title = "Numerical Matrix Analysis"
description = "Class Notes."

[taxonomies]
tags = ["math", "notes"]

[extra]
math = true
+++

{% math(preable=true) %}
$$
$$
{% end %}

## Conjugates

Let $z=a+bi$ be a scalar with $a,b\in\Z$.
Its *complex conjugate* $z^\ast$ is obtained by negating $b$
(if $b=0$ then $z$ is real and $z=z^\ast$):
$$
z^\ast = a-bi.
$$

Now let $A$ be a scalar $m\times n$ matrix:
{% math() %}
$$
A
= {[a_{ij}]}_{m\times n}
= \begin{pmatrix}
    a_{11} & a_{12} & \cdots & a_{1n} \\
    a_{21} & a_{22} & \cdots & a_{2n} \\
    \vdots & \vdots & \ddots & \vdots \\
    a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
$$
{% end %}
Its *hermitian conjugate* (or *adjoint*) $A^\ast$ is the $n\times m$ matrix with ${ij}^\text{th}$
entry is the complex conjugate of the ${ji}^\text{th}$ entry of $A$
(i.e. of the form $a^\ast_{ij}=(a_{ji})^\ast={a_{ji}}^\ast$):
{% math() %}
$$
A^\ast
= {[a^\ast_{ij}]}_{n\times m}
= \begin{pmatrix}
    a^\ast_{11} & a^\ast_{12} & \cdots & a^\ast_{1m} \\
    a^\ast_{21} & a^\ast_{22} & \cdots & a^\ast_{2m} \\
    \vdots & \vdots & \ddots & \vdots \\
    a^\ast_{n1} & a^\ast_{n2} & \cdots & a^\ast_{nm}
\end{pmatrix}
= \begin{pmatrix}
    {a_{11}}^\ast & {a_{21}}^\ast & \cdots & {a_{m1}}^\ast \\
    {a_{12}}^\ast & {a_{22}}^\ast & \cdots & {a_{m2}}^\ast \\
    \vdots & \vdots & \ddots & \vdots \\
    {a_{1n}}^\ast & {a_{2n}}^\ast & \cdots & {a_{mn}}^\ast
\end{pmatrix}
$$
{% end %}
In the case that $A$ is an all-real matrix, then the adjoint of $A$ is simply the
transpose of $A$ (i.e. $A^\ast=A^T$).
Furthermore, if $A=A^\ast$ then $A$ is *hermitian*, and by definition must be a square matrix.
(If $A$ all-real hermitian, $A=A^T$, and $A$ is said to be symmetric.)

## Inner products

An inner product is a binary operation over a vector space which associates to a pair o

