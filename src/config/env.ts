export const BASE_URL =
  process.env.BASE_URL ?? "https://practice.expandtesting.com";

export const NOTES_API_URL = new URL("/notes/api", BASE_URL).toString();