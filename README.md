# setup-npmrc

This repo contains a Github Action for configuring npm access to a private repository. You can use it like so:

```yaml
    - uses: simplybusiness/setup-npmrc@v1.1
      with:
        registry: "https://your.registry/"
        scope: "yourscope"
        token: "${{ secrets.TOKEN }}"
```
