"use client"

import { useState } from "react"

import { Pokemon, PokemonResponse } from "@/types/pokemon"
import useSWR from "@/hooks/useSwr"
import { Button } from "@/components/ui/button"

/**
 * This test assumes you have prior experience with NextJs, SWR and TailwindCSS. If you do not, please read the documentation first.
 */

const IndexPage = () => {
  const [limit, setLimit] = useState(1000)
  const [offset, setOffset] = useState(0)

  const {
    data,
    error,
    isLoading
  }: { data: PokemonResponse | undefined; error: Error; isLoading: boolean } =
    useSWR("https://pokeapi.co/api/v2/pokemon", {
      method: "GET",
      params: {
        limit,
        offset
      }
    })

  if (isLoading) return <div>loading...</div>

  if (error) return <div>failed to load</div>

  let pokemons: Pokemon[] = []
  if (data) {
    pokemons = data.results
  }

  return (
    <div className="container space-y-5 p-10">
      <h1 className="mb-2">Pokemons</h1>

      <div className="space-x-2">
        <Button size="sm" className="h-fit w-[100px] p-1">
          Previous
        </Button>

        <Button size="sm" className="h-fit w-[100px] p-1">
          Next
        </Button>
      </div>

      {/* 3. Make this 3 columns, unlimited rows of pokemon strings */}
      <div></div>
    </div>
  )
}

export default IndexPage
