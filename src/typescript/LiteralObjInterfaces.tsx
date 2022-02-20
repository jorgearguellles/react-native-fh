interface Persona {
  name: string,
  age: number,
  address: Address,
}

interface Address {
  country: string,
  casaNum: number,
}

export const LiteralObjInterfaces = () => {

  const person: Persona = {
    name: 'Jorge',
    age: 100,
    address: {
      country: 'Colombia',
      casaNum: 34,
    }
  }

  return (
    <>
      <h1>LiteralObj-Interfaces</h1>

      {<LiteralObjInterfaces />}
      <code>
        <pre>
          Version1: { JSON.stringify(person) }
          <br />
          Version2: { JSON.stringify(person, null, 3) }
        </pre>
      </code>

    </>
  )
}
