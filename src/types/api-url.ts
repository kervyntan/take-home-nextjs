/**
 * This file defines the `ApiUrl` type, which is used to ensure type safety for API URLs in the application.
 * By using a specific type for URLs, we can prevent errors due to incorrect URL strings and provide a single
 * source of truth for all API endpoints. To extend the `ApiUrl` type, simply add new URL strings to the union type.
 *
 * @/lib/api
 * @/hooks/useSwr
 */
export type ApiUrl = "/" | "https://pokeapi.co/api/v2/pokemon"
