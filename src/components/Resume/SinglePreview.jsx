
import { useParams } from 'react-router-dom';

const SinglePreview = () => {
    const {id} = useParams()
    return (
        <div className='container mx-auto px-10 py-10'>
            <h1>Id - {id}</h1>
        </div>
    );
};

export default SinglePreview;