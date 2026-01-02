'use client';

import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';

const Page = () => {
  const trpc = useTRPC();

  const {
    data,
    isLoading,
    error,
  } = useQuery(trpc.getUsers.queryOptions());

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return <div>{JSON.stringify(data)}</div>;
};

export default Page;
