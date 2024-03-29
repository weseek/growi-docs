# Environment Variables

## Setting File

* `packages/app/.env*`
* `packages/slackbot-proxy/.env*`

See [dotenv-flow](https://github.com/kerimdzhanov/dotenv-flow).

## Environment Variables Only Available in Development

|Environment Variable|Description|
|---|---|
| **Option** ||
|`PLUGIN_NAMES_TOBE_LOADED`|Specify plugins to load for development. See [Plugins](/en/dev/plugin/architecture.html).|
|`DEV_HTTPS`|Start HTTPS express server using self-signed certificate in `resource/certs/localhost`.|
|`PUBLISH_OPEN_API`| Publish GROWI OpenAPI resources with [ReDoc](https://github.com/Redocly/redoc). Visit `/api-docs`.|
