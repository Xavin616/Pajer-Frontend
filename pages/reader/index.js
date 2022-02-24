import Reader from '../../components/Reader';
import { useGetFeedsByIdQuery } from '../../lib/apiSlice';
import { useSelector, useDispatch } from 'react-redux';

function IReader() {
  const feed = useSelector((state) => state.feedState.feed)
  const sourceId = useSelector((state) => state.sourceState.source.id) 
  const { data, isLoading, error } = useGetFeedsByIdQuery(sourceId);
  console.log(data, error)

  return <Reader feed={feed} data={data} error={error} />;
}

IReader.layout = "L1";

export default IReader;
