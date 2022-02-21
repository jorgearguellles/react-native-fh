import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResList, User } from '../interfaces/reqRes';

export const useUsers = () => {

  const [users, setUsers] = useState<User[]>([]);
  const pageRef = useRef(1);

  useEffect( ()=>{
    // Calling API
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const resp = await reqResApi.get<ReqResList>('/users', {
      params: {
        page: pageRef.current // pageRef.current refer to value 
      }
    })
    if (resp.data.data.length > 0){
      setUsers( resp.data.data );
    } else {
      pageRef.current --;
      alert('No find more registers')
    }
  };

  const nextPage = () => {
    pageRef.current ++;
    loadUsers()
  };

  const backPage = () => {
    if( pageRef.current > 1){
      pageRef.current --;
      loadUsers()
    }
  };

  return { users, nextPage, backPage, }
}
