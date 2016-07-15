# jquery-event-binder

0,5KB jQuery plugin to **store**/**restore**/**clone** events of element.

# Documentation:

The plugin extends **jQuery** by **2 methods** and 1 list _(which is creating after store method called)_:

 * **storeEvents()**
`.storeEvents()` - no parameters required.

**Description:** Creates a list of all events of an element. After calling this method an element has `eventList` property. 


# When to use ?

When you need to store events of element and listen to them later, or make another element to listem on them.
