import useSWR from "@/hooks/useSwr"
import { Button } from "@/components/ui/button"

/**
 * This test assumes you have prior experience with NextJs and SWR, if you do not, please read the documentation first.
 */

/**
 * 1. TODO: Fix the `IndexPage` component so that it fetches a list of Pokemon from the PokeAPI.
 * The PokeAPI endpoint to fetch the list of Pokemon is:
 * - https://pokeapi.co/api/v2/pokemon?limit=100&offset=0
 */

const IndexPage = () => {
  const { data, error, isLoading } = useSWR(
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0",
    fetch
  )

  if (isLoading) return <div>loading...</div>

  if (error) return <div>failed to load</div>

  // 2. TODO: Fix typings
  const pokemons = data.results

  return (
    <div className="container space-y-5 p-10">
      <h1 className="mb-2">Pokemons</h1>

      {/* 4. Allow pagination */}
      <div className="space-x-2">
        <Button size="sm" className="h-fit w-[100px] p-1">
          Previous
        </Button>

        <Button size="sm" className="h-fit w-[100px] p-1">
          Next
        </Button>
      </div>

      {/* 3. TODO:  Make this 3 columns, unlimited rows */}
      <div>
        {pokemons.map((pokemon) => (
          <div>{pokemon.name}</div>
        ))}
      </div>
    </div>
  )
}

export default IndexPage
