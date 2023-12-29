import Image from 'next/image';
import duckLoading from '../public/duck-loading.gif';

export default function Loading() {
    return (
        <div className='h-screen flex items-center justify-center'>
            <Image src={duckLoading} alt='loading gif' />
        </div>
    );
}