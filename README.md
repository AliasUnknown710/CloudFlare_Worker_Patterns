# ⚙️ Cloudflare Worker Patterns

Reusable Worker scripts for secure, dynamic edge deployments. Built for routing, asset delivery, and CORS troubleshooting.

---

## 🔧 Patterns Included

| Script | Description |
|--------|-------------|
| `cors_proxy.js` | Adds CORS headers and forwards requests to backend. |
| `kv_router.js` | Routes requests based on KV keys. |
| `manifest_loader.js` | Loads assets dynamically using a manifest file. |

---

## 🚀 Usage

- Deploy with `wrangler publish` or via Cloudflare dashboard.
- Bind KV namespace in `wrangler.toml` for `kv_router.js` and `manifest_loader.js`.
- Use `cors_proxy.js` to fix CORS issues between frontend and backend.

---

## 🧠 Notes

- All Workers are sanitized and production-ready.
- Designed for Cloudflare Pages + Worker + backend stack.
- Extend with logging, auth headers, or rate limiting as needed.
