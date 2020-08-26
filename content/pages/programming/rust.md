+++
title = "Rust"
description = "Various notes on Rust."

[taxonomies]
tags = ["programming", "rust"]
+++

These days, Rust is hands down my favorite programming language. I think [traits][] are a vast
improvement over C++'s flavor of OOP and polymorphism; I love [Cargo][cargo], the included build
system and package manager; and overall I just find it a much more enjoyable language to use, more
so than even Python. It was pretty difficult to get used to, but the lessons I've learned along the
way have been invaluable.

[traits]: https://doc.rust-lang.org/book/ch10-02-traits.html
[cargo]: https://doc.rust-lang.org/book/ch01-03-hello-cargo.html

<!-- more -->

# The ecosystem

The build ecosystem for Rust is extremely user friendly, really only requiring you to specify any
dependencies in a project manifest file `Cargo.toml`. Projects can be initialized with
`cargo new <name>` to make a new binary application project structure, or `cargo new --lib <name>`
for a library (you can of course change this, or have a bin and a library together, or even have
subprojects within the outer project structure).

## Crates

Rust projects are called crates and provide a very simple way to include other libraries in a way
similar to JavaScript projects using `npm`, or Python with `pip`. `cargo` being the main command
for initializing, building and running Rust projects is also the tool to use to add crate
dependencies, with `cargo add <dependency>` (this though requring the `cargo add` extension to be
added). Manually dependencies are added by editing the project manifest file.

Finding libraries to use is also as simple as searching on
[lib.rs](https://lib.rs/), or
[crates.io](https://crates.io/).

# The language

## Pattern Matching

```rust
fn plus_one(x: Option<i32>) -> Option<i32> {
  match x {
    None => None,
    Some(i) => Some(i+1),
  }
}

println!("{:?}", plus_one(Some(5))); // Some(6)
println!("{:?}", plus_one(None)); // None
```

Basically borrowed into.

## Foreign Languages

Dealing with foreign languages is inevitable for some applications, but in particular with games
using Rust wrappers for C rendering libraries. The `std::ffi` module provides many utilities for
handling data across languages.

### Strings and C strings

Strings in Rust are not zero terminated, so calling C functions expecting zero terminated C strings
is at first a problem. Thankfully `ffi` provides the following:

- `OsString`: Owned, mutable platform-native strings.
- `OsStr`: Borrowed reference to `OsString` object.
- `CString`: Owned, C-compatible, nul-terminated string with no nul bytes in the middle.
- `CStr`: Borrowed reference to `CString` object.

