# gastbyjswptutorial-front

CMS repository can be found [here](https://github.com/hckia/gastbyjswptutorial-wordpress)

### Resources

- You can find repository resources utilized ![here](https://github.com/tomphill)
- Also added personal notes ![here](https://github.com/hckia/gatsbyjswptutorial-front/blob/main/notes.md)

### instructions

**Step 1: install gatsby-cli**

```
sudo npm install -g gatsby-cli
```
all other dependencies are in package.json

**Step 2: install gatsby project**

We can then use the boilerplate that can be found [here](https://github.com/tomphill/gatsby-wordpress-starter)

this can be utilized in the following command to create gatsby project

```
gatsby new gatsby-wp https://github.com/tomphill/gatsby-wordpress-starter
```

**Step 3: Open gatsby-config.js**

change the baseUrl to the CMS domain (ie gatsbyjswptutorial.local)

**Step 4: Run build**

```
gatsby develop
```


### Considerations

gatsby would not run on bleeding edge. Rolled back to node 14
