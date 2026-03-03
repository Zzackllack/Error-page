export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get("content-type") ?? "";

    if (contentType.includes("text/html")) {
      return new Response(response.body, {
        status: 404,
        statusText: "Not Found",
        headers: response.headers,
      });
    }

    return response;
  },
};
