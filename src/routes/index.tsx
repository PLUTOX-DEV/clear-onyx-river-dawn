import { createFileRoute } from "@tanstack/react-router";
import { FablePage } from "@/components/fable-page";

export const Route = createFileRoute("/")({ component: FablePage });
