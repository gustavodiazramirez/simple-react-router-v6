import React from 'react'
import { useParams, Link } from 'react-router-dom';
import {useFetch} from '../hooks/useFetch';
export const BlogDetails = () => {
  
  const {id} = useParams(); // {id: "1"}
    const {data, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Hubo un error</div>;
    if (!data) return null;
    return (
        <>
            <h5>BlogDetails</h5>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{data.id} - {data.title}</h5>
                    <p className="card-text">{data.body}</p>

                    <Link to="/blog">Volver</Link>
                </div>
            </div>
        </>
  )
}
export default BlogDetails;