
export const BasicTypes = () => {

  const name: string | number = 'Jorge'; // Optional types to variable
  const age: number = 35;
  const isActive: boolean = true;
  const powers = [".",".",".",".",];
  const powersTwo: string[] = [".",".",".",".",];

  return (
    <>
      <h3>BasicTypes</h3>
      { name }, 
      { age }, 
      { JSON.stringify(isActive) }, 
      { isActive ? 'is Active' : 'No active' }
      { powers.join(' ') }
      { powersTwo }
    </>
  )
};
