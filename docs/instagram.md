# Instagram feed

The expedition notes page uses Meta's Instagram API with Instagram Login. No Elfsight widget or browser-side access token is used. Six recent posts are requested in one server-side call and cached for one hour. Videos use their thumbnail; carousel cards use their cover. Cards open the original post on Instagram. If configuration is missing or Meta is unavailable, a profile link remains visible.

## Connect @murgabhunting

1. Use an Instagram Business or Creator account for @murgabhunting.
2. In Meta for Developers, configure an app with Instagram API with Instagram Login. Authorize @murgabhunting with `instagram_business_basic` permission. Follow Meta's app-role/testing and access-review requirements for your app.
3. Generate/exchange for a long-lived Instagram user access token using Meta's setup flow. This is an Instagram Login token, not a Facebook Page token or an app secret.
4. Set `INSTAGRAM_ACCESS_TOKEN` in `.env.local` for development and in Vercel's server environment variables for deployment. Never use a `NEXT_PUBLIC_` prefix or commit the token. For Docker, supply it at runtime with your env file and recreate the container; a host `.env.local` is not automatically passed into a container.
5. Restart locally or redeploy on Vercel. Visit `/en/blog` or `/ru/blog`.

The integration checks that the token's account username is `murgabhunting`. API failures log a generic server warning without tokens. The endpoint is pinned to Graph API v25.0.

Long-lived tokens expire. Refresh or replace the token before the expiry shown by Meta (typically 60 days), update the deployment environment, and redeploy. This implementation does not add a background token-refresh service.

Official references:
- https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/
- https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/business-login/
