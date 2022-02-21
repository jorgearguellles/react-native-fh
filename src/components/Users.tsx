import { useUsers } from '../hooks/useUsers';
import { User } from '../interfaces/reqRes';

export const Users = () => {

  const { users, nextPage, backPage } = useUsers();

  const renderItem = ( { id, avatar, first_name, last_name, email }:User ) => { 
    return (
      <tr key={id.toString()}>
        <td>
          <img 
            src={avatar}
            alt={first_name}
            style={{
              width: 40,
              borderRadius: 100,
            }}
          />
        </td>
        <td>{first_name} {last_name}</td>
        <td>{email}</td>
      </tr>
    )
  };

  return (
    <>
      <h2>Users</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map( renderItem )
          }
        </tbody>
      </table>

      <button
        className='btn btn-primary'
        onClick={ backPage }
      >
        Back
      </button>
      &nbsp;
      <button
        className='btn btn-primary'
        onClick={ nextPage }
      >
        Next
      </button>
    </>
  )
}