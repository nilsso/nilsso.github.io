+++
title = "Differential Equations"
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

Differential equations are useful for modelling problems.

<!-- more -->

# Elementary differential equations

## Separable

A differential equation $dy/ty=f(t,y)$ which can cleanly be written as the product of a
function $p(t)$ of only the dependent variable with a function $q(y)$ of only the independent
variable,
$$
\frac{dy}{dt} = f(t,y) = p(t)q(y),
$$
is called *separable*.
Suppose that $q(y)$ is non-zero for $y$ value(s) of interest.
Then the solution of this differential equation satisfies
$$
\int q^{-1}(y)dy = \int p(t)dt.
$$

### Example

Suppose $dy/dt=5t^4 y$ and $y(0)=18$. Letting $p(t)=5t^4$ and $q(y)=y$,
$$
\int y^{-1}dy = \int 5t^4 dt
\Rightarrow
\ln y = t^5 + C
\Rightarrow
e^{\ln y} = y = e^{t^5 + C} = Ce^{t^5}.
$$
Using the initial conditions,
$$
y(0) = 18 = Ce^{0^5} = Ce^0 = C
\Rightarrow C = 18,
$$
and so the solution is $y(t) = 18e^{t^5}$.

### Example


