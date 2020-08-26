+++
title = "Linear algebra"
description = "Some linear algebra notes."

[taxonomies]
tags = ["math", "notes"]

[extra]
math = true
+++

# Linear systems

A *linear equation* is simply an equation involving variables/indeterminates with highest power one
(or zero). For example, the equation $x=4$ is linear while $x^2=4$ is not linear but quadratic.

<!-- more -->

Linear equations take the form:

{% katex() %}
a_1 x_1+a_2 x_2+\cdots+a_n x_n = d
{% end %}

Linear equations have a set of solutions with values for the variables which
solve the equation consistently. For $x=4$, the only solution for the
variable x is 4 such that $4=4$. This is consistent with the definition of the
equation.

A *linear system* is when we consider several equations to be related. A linear
system has the form (where rows/equations are labeled $p_1,\ldots,p_j$)

{% katex() %}
\begin{gathered}
p_1: a_{1,1}x_1+a_{1,2}x_2+\cdots+a_{1,n}x_n = d_1 \\
\vdots \\
p_i: a_{i,1}x_1+a_{i,2}x_2+\cdots+a_{i,n}x_n = d_i \\
\vdots \\
p_j: a_{j,1}x_1+a_{j,2}x_2+\cdots+a_{j,n}x_n = d_j
\end{gathered}
{% end %}
