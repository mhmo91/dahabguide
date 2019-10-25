
# Mission

    Our mission is  to empower the local economy by providing localized rental and hotel booking solution alternative to airbnb and booking.
![quote image](https://www.azquotes.com/picture-quotes/quote-we-can-fight-the-global-economy-with-a-strong-local-economy-wendell-berry-81-58-02.jpg)

# Technical instructions

## Analyze bundles size with webpack

    ng build --prod --states-json
    npm run analyze

## new feature flow

 1. create module and setup the angular architecutre
    ```ng g module [entity, feature, pla pla] [featureName] --routing```

 2. setup the store for the new feature
    ```ng g @ngrx/schematics:[entity, feature, pla pla] [featureName] --group```
    ```ng g @ngrx/schematics:effect [featureName] --group```

 3. add store to the module using feature module import
