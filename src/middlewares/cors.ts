import cors from "cors";

export default function corsMiddleware(options: cors.CorsOptions) {
  return cors(options);
}