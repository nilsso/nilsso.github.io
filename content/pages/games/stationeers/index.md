+++
title = "Stationeers"

[taxonomies]
tags = ["games", "notes", "tutorial"]

[extra]
math = true
+++

Stationeers (on [steam](https://store.steampowered.com/app/544550/Stationeers/)) is a pretty complex
space engineering game; much more so than a lot of what else is out there. Constructing a single
structure involves several steps. For example, constructing an autolathe involves welding on iron
sheets, fixing cables, welding on plastic sheets, and then using a wrench. Here I've compiled some
of my own resources, notes and tutorials.

<!-- more -->

# Resources

- [Stationeering](stationeering.com/) is a database of the entities in Stationeers, but most
  impressive is its MIPS simulator.
- [Stationeers MIPS Sublime Syntax](mips.sublime-syntax), a bare
  basic Sublime syntax file to support highlighting MIPS code on Zola sites (like this one).

# Tutorials

## Tracking the sun with solar panels

The first major hurdle of the game is establishing a hands-off power source, and solar is the only
immediately available solution. However, a solar panel on its own requires manual orientation its
yaw and pitch. Automatic tracking of the sun can indeed be daunting for newcomers, so here's a
little tutorial on how I've gone ahead and done it. First a little background on how some of the
devices actually work, then the program itself.
Eventually I'll include a no-IC and only logic unit version of the same IC program,
especially for those just starting out with Stationeers.

### Understanding light sensors

Light sensors can be configured to one of three modes,
but modes `1` *horizontal* and `2` *vertical* are what we use.

![Light sensors](sensors.jpg)

- **Horizontal:**
  Reports the angle between the reference vector pointing away from the data port (orthogonal to the sensor surface normal)
  and the projection between the vector pointing towards the sun onto the sensor surface.
  Angles are measured positively clockwise with respect to the surface normal.
  Surface orientation of the solar sensor matters in horizontal mode, since the reference vector changes depending on orientation.

- **Vertical:**
  Reports the angle between the vector pointing towards the sun
  and projection between the vector pointing towards the sun onto the sensor surface.
  Surface orientation of the solar sensor does not matter in vertical mode.
  (In other words, when the sun is directly above the sensor the vertical angle is zero,
  and when the sun is at the horizon the angle is 90.)

The `Mode` parameter of a sensor can be changed using a logic writer or an IC,
and `SolarAngle` will reflect the mode change.
An IC code using a single sensor might look like this:

```mips
alias sensor d0

alias angle r0
# ...
s sensor Mode 1 # set sensor mode to 1 (horizontal)
yield # wait for it to update
l angle sensor SolarAngle # load sensor solar angle and store in angle
# ...
s sensor Mode 2 # set sensor mode to 2 (vertical)
yield # wait for it to update
l angle sensor SolarAngle # load sensor solar angle and store in angle
```

### Understanding solar panels

Solar panels have a `Horizontal` parameter and a `Vertical` parameter that unfortunately
don't line-up directly with the horizontal and vertical solar angles.
In particular the vertical parameter is given as a percentage, where
0% is 15 degrees above the horizon and 50% is straight up.

#### Fixing the vertical

Since the vertical angle goes from 90 to 0 to 90 (dusk to dawn), we could transform 90 degrees to 0% and 0 degrees to 50%
by subtracting the angle from 90 and dividing by 1.80 (i.e. dividing by 180 and multiplying by 100 to get a percentage).
However, since the lowest the solar panels can go is 15 degrees above the horizon,
we should subtract the angle from 75 and divide by 1.50.

```mips
alias sensor d0

alias angle r0
# ...
s sensor Mode 2 # set sensor mode to 2 (vertical)
yield # wait for it to update
l angle sensor SolarAngle # load sensor solar angle and store in angle
# ...
l angle sensor SolarAngle
sub angle 75 angle # subtract angle from 75 and store in angle
div angle angle 1.5 # divide angle by 1.5 and store in angle
```

#### Fixing the horizontal

Horizontal angle doesn't require as much. At the very least we need to negate it since the horizontal angle increases
counter-clockwise (if the sensor is on the ground facing up), but depending on the orientation of the light sensor and
the orientation of the solar panels we might need to shift it by a multiple of 90.
I just use a dial or memory unit for this.

```mips
alias sensor d0
alias h0Dial d1

alias angle r0
alias h0 r1
# ...
s sensor Mode 1 # set sensor mode to 1 (horizontal)
yield # wait for it to update
l h0 h0Dial Setting # load the setting from h0Dial and store in h0
mul h0 h0 -90 # multiple h0 by -90 and store in h0
l angle sensor SolarAngle # load sensor solar angle into angle
sub angle h0 angle # subtract angle from h0 and store in angle
```

### Finishing the project

So once we have the transformed horizontal and vertical angles, we need to write them to the corresponding
parameters of the solar panels. For this we use a [logic batch writer](https://stationeers-wiki.com/Kit_(Logic_I/O)#Batch_Writer)
for each of the parameters, as well as [logic memory](https://stationeers-wiki.com/Kit_(Logic_Memory)) to store the value
we calculated in the MIPS program. We need all this as an IC can't write to all solar panels at the same time like a batch writer can,
and IC's can't tell a batch writer the value directly but have to store it onto something like a memory unit.

In the end the IC program I've written is this:

```mips
alias sensor d0
alias hMem d1
alias vMem d2
alias h0Dial d3 # -90*[0,3]

alias angle r0
alias h0 r1

start:
jal horizontal
jal vertical
j start

horizontal:
s sensor Mode 1
yield
l h0 h0Dial Setting
mul h0 h0 -90
l angle sensor SolarAngle
sub angle h0 angle
s hMem Setting angle
j ra

vertical:
s sensor Mode 2
yield
l angle sensor SolarAngle
sub angle 75 angle
div angle angle 1.5
s vMem Setting angle
j ra
```

And the various devices are configured as such:

Name | Type | Settings
--- | :-- | :--
`hMem` | Memory |
`vMem` | Memory |
`hWriter` | Batch Writer | `In: hMem, OutType: Solar Panel, OutVar: Horizontal`
`vWriter` | Batch Writer | `In: vMem, OutType: Solar Panel, OutVar: Vertical`
`ic` | IC Housing | `00: sensor, 01: hMem, 02: vMem, 03: Dial`
