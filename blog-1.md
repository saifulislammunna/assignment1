Topic Name: Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing

Blog-1 :
In TypeScript, the any type is considered a type safety hole because it essentially disables the type checker for that variable, allowing you to treat it as any possible JavaScript value.
Conversely, unknown is the safer choice for unpredictable data because it acts as a "responsible" alternative: it allows you to assign any type to it, but it forbids using that variable until you prove its type through type narrowing.
