export default {
  async fetch(request, env) {
    const manifest = await env.ASSETS.get("manifest.json", "json");
    const path = new URL(request.url).pathname;
    const assetKey = manifest[path];
    const asset = await env.ASSETS.get(assetKey);
    return asset
      ? new Response(asset, { headers: { "Content-Type": "text/html" } })
      : new Response("Not found", { status: 404 });
  }
};
