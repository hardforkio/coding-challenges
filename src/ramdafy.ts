import R from "ramda"

interface PersonType {
  avatar?: string
  id: number
  name: string
}

// problem 1: if id is undefined, we should get a default image, not undefined image
const generateUrl = (id: number): string =>
  `https://img.socialnetwork.com/avatar/${id}.png`

export const getUpdatePerson = (person: PersonType) => {
  const url = generateUrl(person.id)
  return R.assoc("avatar", url, person) // same as Object.assign()
}

/*
// a function that solves problem 1
const getUrlFromPerson = R.compose(
  generateUrl,
  R.propOr("default", "id"),
)
const getUpdatePerson2 = (person: PersonType) => {
  // person -> R.propOrId(person) -> generateUrl() -> url result
  const url = getUrlFromPerson(person)
  return R.assoc("avatar", url, person) // same as Object.assign()
  // still we are referencing person twice inside this function, will use R.converge to fix
}

// getUpdatePerson as a Point Free Function, person is never named
export const getUpdatePerson3 = R.converge(R.assoc("avatar"), [
  getUrlFromPerson,
  R.identity,
])
*/
