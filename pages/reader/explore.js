import CategoryList from '../../components/CategoryList'
import SourceList from '../../components/SourceList';
import { useGetCategoriesQuery, useGetSourcesQuery } from '../../lib/categoryApi';
import Head from 'next/head';

function Explore() {
  const { data, error } = useGetCategoriesQuery();

  return (
    <div className="explore">
      <Head><title>Explore</title></Head>
      <CategoryList categories={data}/>
      <SourceList />
    </div>
  );
}

Explore.layout = "L1"

export default Explore;
