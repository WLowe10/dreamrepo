import Fastify from "fastify";
import { foobar } from "@dreamrepo/shared";
import { env } from "./env";

const fastify = Fastify();

fastify.get("/", () => {
	foobar();

	return { hello: "world" };
});

fastify.listen({ port: env.PORT });
