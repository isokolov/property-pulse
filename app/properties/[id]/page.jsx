// 'use client';

// import {
//   useParams,
//   usePathname,
//   useRouter,
//   useSearchParams,
// } from 'next/navigation';

const PropertyPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { id } = useParams();
  const name = searchParams.get('name');
  const pathname = usePathname();
  return (
    <div>
      Property
      {/* <p>Property {id}</p>
      <p>Name {name}</p>
      <p>Pathname {pathname}</p>
      <button onClick={() => router.push('/')} className='bg-blue-500 p-2'>
        Go back
      </button> */}
    </div>
  );
};

export default PropertyPage;
