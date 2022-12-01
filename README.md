# Issue with reactivity on store binding of *this* in custom element.

This is a template created to demonstrate an issue I encountered. This template is from [Svelte-add](https://github.com/svelte-add/svelte-add) but I slightly modified it and published my own template [here](https://github.com/RamAddict/svelte-webcomponent-template) which I use to generate custom elements.

# Build
Clone this repository, then inside it run:

    npm i
    npm run dev

You will see that the change color button, on click, changes the color of the other button by adding a class to it that turns it red.

This works as intended. The issue arises when trying to do the same in the context of a custom element. See below
# Generate custom element
To generate the custom element, run:

    npm build
Then move the contents of the dist folder into the folder where you would like to use your web component. Then import the script and declare the component in the html file.

I've provided an html file in the client folder so this process can be done by running

    npm run build-and-copy

Once that is done, open the index.html (I use Vscode Live server) and you should see the 2 buttons.

Now, as you can see, clicking the change color button doesn't change the color, however If you open the console, you still see the console log indicating that the listener function is being invoked.
