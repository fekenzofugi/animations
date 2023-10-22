# Css animations
In css there are two different ways to animate things:

1-Transition - simple animations
2-Animation - complex animations

# transition
The transition property by default ains all the properties of the
element (you can specify also), if we want to trigger only a certain property, you need to specify:

```
transition: property duration
```

you can write all the transition features in one stament or divide in multiple ones:

```
transition: property duration timing-function delay;
or
transition-duration: property duration;
transition-timing-function: property timing-function;
transition-delay: property delay
```
but in transition we can only do linear animations, like translate linear the things, to animate in other directions we need to use the animation property.

```
  .parent {
    background-color: blue;
    height: 400px;
    width: 400px
  }
  .child {
    background-color: red;
    height: 50%;
    width: 50%;

    // by default transition is applied to all properties,
    // if we want to animate one single property, we need 
    // to specify the name.
    transition: transform 1s linear;
  }

  .parent:hover .child {
    transform: translateX(100%);
  }
```
This transition animation is declared in the child div because when the user unhovers the parent component it will continue the animation.

# animation
Just like the transition, we can specify the duration, the timing-function, the property and the delay. But most importanly, we need to specify the name of the animation (usually is what the animation does).

```
animation: name-of-animation duration timing-function
```

We define the animation action in the @keyframes specifing the name of the animation that we define. In keyframes we define all the steps of the animation that goes from 0% to 100%

```
@keyframes name-of-animation {
    100%{

    }
}
```

```
animation-fill-mode: forwards
```
it will make the properties equal to 100% not 0%.